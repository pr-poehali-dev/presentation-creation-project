import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: 'Весенняя коллекция 2025',
      description: 'Свежие оттенки и легкие текстуры для весеннего макияжа',
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/e642d313-6bce-4fc4-b643-a469cee9fea7.jpg',
      productsCount: 45,
      tag: 'NEW'
    },
    {
      id: 2,
      title: 'Антивозрастной уход',
      description: 'Эффективные средства для борьбы с признаками старения',
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg',
      productsCount: 32,
      tag: 'POPULAR'
    },
    {
      id: 3,
      title: 'Нишевая парфюмерия',
      description: 'Эксклюзивные ароматы от люксовых брендов',
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/4859ae2b-416a-4af5-8c1b-edde77f2aa58.jpg',
      productsCount: 28,
      tag: 'PREMIUM'
    },
    {
      id: 4,
      title: 'Корейская косметика',
      description: 'Инновационные средства K-beauty для идеальной кожи',
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg',
      productsCount: 67,
      tag: 'TRENDING'
    },
    {
      id: 5,
      title: 'Натуральная косметика',
      description: 'Органические продукты с сертификацией ECOCERT',
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/e642d313-6bce-4fc4-b643-a469cee9fea7.jpg',
      productsCount: 52,
      tag: 'ECO'
    },
    {
      id: 6,
      title: 'Профессиональный макияж',
      description: 'Косметика визажистов для безупречного образа',
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/4859ae2b-416a-4af5-8c1b-edde77f2aa58.jpg',
      productsCount: 89,
      tag: 'PRO'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative h-[400px] bg-secondary overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg"
            alt="Коллекции"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          
          <div className="absolute inset-0 container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white space-y-4">
              <div className="flex items-center gap-2 text-sm mb-2">
                <a href="/" className="hover:text-accent">Главная</a>
                <Icon name="ChevronRight" size={16} />
                <span>Коллекции</span>
              </div>
              <h1 className="text-5xl font-bold">Наши коллекции</h1>
              <p className="text-xl text-white/90">
                Тщательно подобранные наборы косметики для любых потребностей
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className={`group relative overflow-hidden rounded-lg bg-card hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`relative ${index === 0 ? 'h-[500px]' : 'h-[400px]'} overflow-hidden`}>
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-accent text-accent-foreground hover:bg-accent">
                      {collection.tag}
                    </Badge>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className={`${index === 0 ? 'text-4xl' : 'text-3xl'} font-bold mb-3`}>
                      {collection.title}
                    </h2>
                    <p className="text-lg text-white/90 mb-4 max-w-xl">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/80">
                        {collection.productsCount} товаров
                      </span>
                      <Button 
                        className="bg-white text-foreground hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Смотреть коллекцию
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">Персональные подборки</h2>
              <p className="text-lg text-muted-foreground">
                Не нашли подходящую коллекцию? Наши эксперты помогут создать персональный набор 
                косметики специально для вас
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Получить консультацию
                <Icon name="MessageCircle" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
