import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const menuItems = [
    { name: 'Каталог', href: '/catalog' },
    { name: 'Коллекции', href: '/collections' },
    { name: 'Бренды', href: '/catalog' },
    { name: 'Контакты', href: '/contacts' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold tracking-tight">
              COSMETIC STAR
            </a>
            
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:bg-secondary"
            >
              <Icon name="Search" size={20} />
            </Button>

            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Icon name="Heart" size={20} />
            </Button>

            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Icon name="User" size={20} />
            </Button>

            <Button variant="ghost" size="icon" className="hover:bg-secondary relative">
              <Icon name="ShoppingBag" size={20} />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                0
              </span>
            </Button>
          </div>
        </div>

        {searchOpen && (
          <div className="py-4 border-t animate-in slide-in-from-top-2">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="search"
                placeholder="Поиск косметики..."
                className="pl-10 h-12"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;