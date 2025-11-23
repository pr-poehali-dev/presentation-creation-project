import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const heroSlides = [
    {
      title: 'Новая коллекция премиум косметики',
      description: 'Откройте для себя эксклюзивные средства для ухода',
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg'
    }
  ];

  const categories = [
    { title: 'Уход за лицом', image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg', count: 1250 },
    { title: 'Макияж', image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/e642d313-6bce-4fc4-b643-a469cee9fea7.jpg', count: 890 },
    { title: 'Парфюмерия', image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/4859ae2b-416a-4af5-8c1b-edde77f2aa58.jpg', count: 450 },
    { title: 'Уход за телом', image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg', count: 720 }
  ];

  const featuredProducts = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg',
      title: 'Увлажняющий крем для лица с гиалуроновой кислотой',
      brand: 'La Roche-Posay',
      price: 2890,
      oldPrice: 3490,
      rating: 5,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/e642d313-6bce-4fc4-b643-a469cee9fea7.jpg',
      title: 'Палетка теней для век Nude Collection',
      brand: 'Urban Decay',
      price: 4290,
      rating: 5,
      isNew: true
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/4859ae2b-416a-4af5-8c1b-edde77f2aa58.jpg',
      title: 'Парфюмерная вода Floral Dreams',
      brand: 'Dior',
      price: 8900,
      rating: 5
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg',
      title: 'Сыворотка с витамином C для сияния кожи',
      brand: 'The Ordinary',
      price: 1590,
      oldPrice: 1990,
      rating: 4,
      isSale: true
    },
    {
      id: 5,
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/e642d313-6bce-4fc4-b643-a469cee9fea7.jpg',
      title: 'Тушь для ресниц с эффектом объема',
      brand: 'Maybelline',
      price: 890,
      rating: 5
    },
    {
      id: 6,
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/4859ae2b-416a-4af5-8c1b-edde77f2aa58.jpg',
      title: 'Нишевый аромат Oud & Rose',
      brand: 'Tom Ford',
      price: 15900,
      rating: 5,
      isNew: true
    },
    {
      id: 7,
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg',
      title: 'Ночной крем для восстановления кожи',
      brand: 'Estée Lauder',
      price: 5490,
      rating: 5
    },
    {
      id: 8,
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/e642d313-6bce-4fc4-b643-a469cee9fea7.jpg',
      title: 'Помада матовая стойкая',
      brand: 'MAC',
      price: 2190,
      rating: 4
    }
  ];

  const benefits = [
    {
      icon: 'Truck',
      title: 'Бесплатная доставка',
      description: 'При заказе от 3000 ₽'
    },
    {
      icon: 'ShieldCheck',
      title: 'Гарантия качества',
      description: 'Только оригинальная продукция'
    },
    {
      icon: 'Gift',
      title: 'Подарки к заказу',
      description: 'Пробники и сюрпризы'
    },
    {
      icon: 'Sparkles',
      title: 'Бонусная программа',
      description: 'Кешбэк до 10%'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative h-[600px] bg-secondary overflow-hidden">
          <img
            src={heroSlides[0].image}
            alt={heroSlides[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <div className="absolute inset-0 container mx-auto px-4 flex items-center">
            <div className="max-w-xl text-white space-y-6">
              <Badge className="bg-accent text-accent-foreground hover:bg-accent">
                Новинка
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {heroSlides[0].title}
              </h1>
              <p className="text-xl text-white/90">
                {heroSlides[0].description}
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center space-y-3">
                <div className="w-14 h-14 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name={benefit.icon as any} size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Популярные категории</h2>
            <Button variant="ghost" className="hidden md:flex">
              Все категории
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Хиты продаж</h2>
                <p className="text-muted-foreground">
                  Самые популярные товары этого месяца
                </p>
              </div>
              <Button variant="outline" className="hidden md:flex">
                Смотреть все
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg"
                alt="Бренды"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-accent text-accent-foreground hover:bg-accent">
                Премиум бренды
              </Badge>
              <h2 className="text-4xl font-bold">
                Эксклюзивные бренды косметики
              </h2>
              <p className="text-lg text-muted-foreground">
                Мы работаем только с проверенными брендами и официальными дистрибьюторами. 
                Гарантируем подлинность каждого продукта.
              </p>
              <ul className="space-y-3">
                {[
                  'Сертифицированная продукция',
                  'Прямые поставки от производителей',
                  'Контроль качества на каждом этапе',
                  'Профессиональные консультации'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={20} className="text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Все бренды
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-accent text-accent-foreground py-16">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Подпишитесь на новости и акции
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Получайте эксклюзивные предложения и будьте в курсе новинок первыми
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 h-12 px-4 rounded bg-white text-foreground"
              />
              <Button size="lg" variant="secondary">
                Подписаться
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
