import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const [priceRange, setPriceRange] = useState([0, 20000]);

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/${
      ['5847658c-3da4-40b3-a13c-0a6560a74720', 'e642d313-6bce-4fc4-b643-a469cee9fea7', '4859ae2b-416a-4af5-8c1b-edde77f2aa58'][i % 3]
    }.jpg`,
    title: `Косметический продукт ${i + 1}`,
    brand: ['La Roche-Posay', 'Urban Decay', 'Dior', 'MAC', 'Estée Lauder'][i % 5],
    price: Math.floor(Math.random() * 10000) + 1000,
    oldPrice: i % 3 === 0 ? Math.floor(Math.random() * 15000) + 5000 : undefined,
    rating: Math.floor(Math.random() * 2) + 4,
    isNew: i % 4 === 0,
    isSale: i % 3 === 0
  }));

  const categories = [
    'Уход за лицом',
    'Макияж',
    'Парфюмерия',
    'Уход за телом',
    'Уход за волосами'
  ];

  const brands = [
    'La Roche-Posay',
    'Urban Decay',
    'Dior',
    'MAC',
    'Estée Lauder',
    'The Ordinary',
    'Maybelline',
    'Tom Ford'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <a href="/" className="hover:text-foreground">Главная</a>
              <Icon name="ChevronRight" size={16} />
              <span className="text-foreground">Каталог</span>
            </div>
            <h1 className="text-4xl font-bold">Каталог товаров</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-card rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Категории</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-3 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Бренды</h3>
                  <div className="space-y-3 max-h-48 overflow-y-auto">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center gap-3 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Цена</h3>
                  <div className="space-y-4">
                    <Slider
                      min={0}
                      max={20000}
                      step={100}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="w-full"
                    />
                    <div className="flex items-center gap-2 text-sm">
                      <span>{priceRange[0].toLocaleString('ru-RU')} ₽</span>
                      <span className="text-muted-foreground">—</span>
                      <span>{priceRange[1].toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Рейтинг</h3>
                  <div className="space-y-3">
                    {[5, 4, 3].map((rating) => (
                      <label key={rating} className="flex items-center gap-3 cursor-pointer">
                        <Checkbox />
                        <div className="flex items-center gap-1">
                          {[...Array(rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={14} className="fill-accent text-accent" />
                          ))}
                          <span className="text-sm ml-1">и выше</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Сбросить фильтры
                </Button>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Найдено <span className="font-semibold text-foreground">{products.length}</span> товаров
                </p>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                    <SelectItem value="new">Новинки</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Icon name="ChevronLeft" size={20} />
                  </Button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <Button
                      key={page}
                      variant={page === 1 ? 'default' : 'outline'}
                      className={page === 1 ? 'bg-primary text-primary-foreground' : ''}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button variant="outline" size="icon">
                    <Icon name="ChevronRight" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
