import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Brands = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('Все');

  const brands = [
    {
      name: 'La Roche-Posay',
      logo: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg',
      description: 'Французский бренд дерматокосметики, рекомендованный дерматологами по всему миру',
      country: 'Франция',
      founded: '1975',
      productsCount: 124,
      category: 'Дерматокосметика',
      bestseller: true
    },
    {
      name: 'Urban Decay',
      logo: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/e642d313-6bce-4fc4-b643-a469cee9fea7.jpg',
      description: 'Культовый бренд декоративной косметики с яркими, стойкими оттенками',
      country: 'США',
      founded: '1996',
      productsCount: 89,
      category: 'Макияж',
      bestseller: false
    },
    {
      name: 'Dior',
      logo: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/4859ae2b-416a-4af5-8c1b-edde77f2aa58.jpg',
      description: 'Легендарный люксовый бренд с историей элегантности и инноваций',
      country: 'Франция',
      founded: '1946',
      productsCount: 156,
      category: 'Люкс',
      bestseller: true
    },
    {
      name: 'The Ordinary',
      logo: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg',
      description: 'Минималистичный уход с активными ингредиентами по доступным ценам',
      country: 'Канада',
      founded: '2016',
      productsCount: 67,
      category: 'Уход за кожей',
      bestseller: true
    },
    {
      name: 'Estée Lauder',
      logo: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/e642d313-6bce-4fc4-b643-a469cee9fea7.jpg',
      description: 'Престижный американский бренд с антивозрастными технологиями',
      country: 'США',
      founded: '1946',
      productsCount: 203,
      category: 'Люкс',
      bestseller: true
    },
    {
      name: 'MAC Cosmetics',
      logo: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/4859ae2b-416a-4af5-8c1b-edde77f2aa58.jpg',
      description: 'Профессиональная косметика для визажистов и любителей яркого макияжа',
      country: 'Канада',
      founded: '1984',
      productsCount: 178,
      category: 'Макияж',
      bestseller: false
    },
    {
      name: 'Tom Ford Beauty',
      logo: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg',
      description: 'Роскошная нишевая парфюмерия и косметика высочайшего качества',
      country: 'США',
      founded: '2006',
      productsCount: 92,
      category: 'Парфюмерия',
      bestseller: false
    },
    {
      name: 'Maybelline',
      logo: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/e642d313-6bce-4fc4-b643-a469cee9fea7.jpg',
      description: 'Доступная декоративная косметика с инновационными формулами',
      country: 'США',
      founded: '1915',
      productsCount: 245,
      category: 'Масс-маркет',
      bestseller: true
    },
    {
      name: 'Lancôme',
      logo: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/4859ae2b-416a-4af5-8c1b-edde77f2aa58.jpg',
      description: 'Французская роскошь и научные инновации в уходе за кожей',
      country: 'Франция',
      founded: '1935',
      productsCount: 187,
      category: 'Люкс',
      bestseller: true
    },
    {
      name: 'NARS',
      logo: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg',
      description: 'Смелая косметика от легендарного визажиста Франсуа Нарса',
      country: 'США',
      founded: '1994',
      productsCount: 134,
      category: 'Макияж',
      bestseller: false
    },
    {
      name: 'Clinique',
      logo: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/e642d313-6bce-4fc4-b643-a469cee9fea7.jpg',
      description: 'Дерматологически протестированная косметика без отдушек',
      country: 'США',
      founded: '1968',
      productsCount: 198,
      category: 'Дерматокосметика',
      bestseller: true
    },
    {
      name: 'YSL Beauty',
      logo: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/4859ae2b-416a-4af5-8c1b-edde77f2aa58.jpg',
      description: 'Икона стиля и элегантности в мире косметики и парфюмерии',
      country: 'Франция',
      founded: '1961',
      productsCount: 142,
      category: 'Люкс',
      bestseller: true
    }
  ];

  const alphabet = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЭЮЯ'.split('');
  const categories = ['Все категории', 'Люкс', 'Макияж', 'Уход за кожей', 'Парфюмерия', 'Дерматокосметика', 'Масс-маркет'];

  const filteredBrands = brands.filter((brand) => {
    const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const stats = [
    { value: '50+', label: 'Брендов в каталоге' },
    { value: '100%', label: 'Оригинальная продукция' },
    { value: '2000+', label: 'Товаров в наличии' },
    { value: '24/7', label: 'Поддержка клиентов' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative h-[400px] bg-secondary overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/70e6ea4a-3cff-4883-b781-47c6e2c553a2.jpg"
            alt="Бренды"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          
          <div className="absolute inset-0 container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white space-y-4">
              <div className="flex items-center gap-2 text-sm mb-2">
                <a href="/" className="hover:text-accent">Главная</a>
                <Icon name="ChevronRight" size={16} />
                <span>Бренды</span>
              </div>
              <h1 className="text-5xl font-bold">Наши бренды</h1>
              <p className="text-xl text-white/90">
                Только оригинальная косметика от ведущих мировых производителей
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="search"
                placeholder="Поиск бренда..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <Button
                variant={selectedLetter === 'Все' ? 'default' : 'outline'}
                onClick={() => setSelectedLetter('Все')}
                size="sm"
              >
                Все
              </Button>
              {alphabet.map((letter) => (
                <Button
                  key={letter}
                  variant={selectedLetter === letter ? 'default' : 'outline'}
                  onClick={() => setSelectedLetter(letter)}
                  size="sm"
                  className="w-10 h-10 p-0"
                >
                  {letter}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-muted-foreground">
              Найдено <span className="font-semibold text-foreground">{filteredBrands.length}</span> брендов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredBrands.map((brand) => (
              <a
                key={brand.name}
                href="/catalog"
                className="group bg-card rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-video bg-secondary overflow-hidden">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {brand.bestseller && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                      Хит продаж
                    </Badge>
                  )}
                </div>
                
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {brand.name}
                    </h3>
                    <Icon 
                      name="ArrowRight" 
                      size={20} 
                      className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" 
                    />
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {brand.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t">
                    <div className="flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      <span>{brand.country}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      <span>С {brand.founded}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <Badge variant="secondary">{brand.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {brand.productsCount} товаров
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-accent text-accent-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Гарантия подлинности</h2>
                <p className="text-lg">
                  Мы работаем напрямую с официальными дистрибьюторами и производителями. 
                  Каждый товар имеет сертификат подлинности.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="mt-0.5" />
                    <span>Прямые контракты с производителями</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="mt-0.5" />
                    <span>Сертификаты качества на всю продукцию</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="mt-0.5" />
                    <span>Контроль сроков годности</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="mt-0.5" />
                    <span>Возврат в течение 14 дней</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 space-y-4">
                <Icon name="ShieldCheck" size={48} />
                <h3 className="text-2xl font-bold">100% оригинал</h3>
                <p>
                  Если вы сомневаетесь в подлинности товара, мы вернём деньги 
                  и компенсируем расходы на экспертизу.
                </p>
                <Button variant="secondary" size="lg">
                  Узнать больше
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">Не нашли нужный бренд?</h2>
            <p className="text-lg text-muted-foreground">
              Мы постоянно расширяем ассортимент и добавляем новые бренды. 
              Оставьте заявку, и мы сообщим, когда нужный бренд появится в продаже.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Оставить заявку
              <Icon name="Bell" size={20} className="ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Brands;
