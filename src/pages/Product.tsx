import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    title: 'Увлажняющий крем для лица с гиалуроновой кислотой',
    brand: 'La Roche-Posay',
    price: 2890,
    oldPrice: 3490,
    rating: 5,
    reviewsCount: 234,
    inStock: true,
    images: [
      'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg',
      'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/e642d313-6bce-4fc4-b643-a469cee9fea7.jpg',
      'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/4859ae2b-416a-4af5-8c1b-edde77f2aa58.jpg'
    ]
  };

  const relatedProducts = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg',
      title: 'Сыворотка с витамином C',
      brand: 'The Ordinary',
      price: 1590,
      rating: 5
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/e642d313-6bce-4fc4-b643-a469cee9fea7.jpg',
      title: 'Ночной крем для восстановления',
      brand: 'Estée Lauder',
      price: 5490,
      rating: 5
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/4859ae2b-416a-4af5-8c1b-edde77f2aa58.jpg',
      title: 'Тоник для лица увлажняющий',
      brand: 'La Roche-Posay',
      price: 1290,
      rating: 4
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/projects/0672a6e1-facf-48c9-989e-622190e23e83/files/5847658c-3da4-40b3-a13c-0a6560a74720.jpg',
      title: 'Маска для лица увлажняющая',
      brand: 'MAC',
      price: 2190,
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <a href="/" className="hover:text-foreground">Главная</a>
            <Icon name="ChevronRight" size={16} />
            <a href="/catalog" className="hover:text-foreground">Каталог</a>
            <Icon name="ChevronRight" size={16} />
            <a href="/catalog" className="hover:text-foreground">Уход за лицом</a>
            <Icon name="ChevronRight" size={16} />
            <span className="text-foreground">{product.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {product.oldPrice && (
                  <Badge variant="destructive" className="absolute top-4 left-4">
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-secondary rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  {product.brand}
                </p>
                <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={18}
                        className={i < product.rating ? 'fill-accent text-accent' : 'text-muted'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.reviewsCount} отзывов
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</span>
                  {product.oldPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {product.oldPrice.toLocaleString('ru-RU')} ₽
                    </span>
                  )}
                </div>

                {product.inStock ? (
                  <Badge className="bg-green-500 text-white hover:bg-green-500">
                    <Icon name="CheckCircle" size={16} className="mr-1" />
                    В наличии
                  </Badge>
                ) : (
                  <Badge variant="destructive">Нет в наличии</Badge>
                )}
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Описание</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Интенсивно увлажняющий крем с гиалуроновой кислотой обеспечивает глубокое увлажнение кожи, 
                  восстанавливает защитный барьер и придаёт сияние. Подходит для всех типов кожи, 
                  включая чувствительную. Клинически протестировано дерматологами.
                </p>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-semibold">Количество:</span>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    В корзину
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Heart" size={20} />
                  </Button>
                </div>
              </div>

              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="Truck" size={20} className="text-muted-foreground" />
                  <span>Бесплатная доставка от 3000 ₽</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="RefreshCw" size={20} className="text-muted-foreground" />
                  <span>Возврат в течение 14 дней</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="ShieldCheck" size={20} className="text-muted-foreground" />
                  <span>Гарантия подлинности</span>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="details" className="mb-16">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger value="details" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Детали
              </TabsTrigger>
              <TabsTrigger value="ingredients" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Состав
              </TabsTrigger>
              <TabsTrigger value="usage" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Применение
              </TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Отзывы ({product.reviewsCount})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="py-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Характеристики</h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">Бренд</dt>
                      <dd className="font-medium">{product.brand}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">Объем</dt>
                      <dd className="font-medium">50 мл</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">Тип кожи</dt>
                      <dd className="font-medium">Все типы</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">Страна</dt>
                      <dd className="font-medium">Франция</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Преимущества</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <span>Глубокое увлажнение на 24 часа</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <span>Восстановление защитного барьера кожи</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <span>Подходит для чувствительной кожи</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <span>Дерматологически протестировано</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ingredients" className="py-8">
              <p className="text-muted-foreground leading-relaxed">
                Aqua, Glycerin, Dimethicone, Niacinamide, Sodium Hyaluronate, Panthenol, 
                Tocopherol, Cetearyl Alcohol, Glyceryl Stearate, PEG-100 Stearate, 
                Carbomer, Triethanolamine, Disodium EDTA, Phenoxyethanol, Methylparaben
              </p>
            </TabsContent>

            <TabsContent value="usage" className="py-8">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Наносите крем утром и вечером на предварительно очищенную кожу лица и шеи 
                  лёгкими массажными движениями до полного впитывания.
                </p>
                <p className="text-muted-foreground">
                  Для достижения максимального эффекта рекомендуется использовать в комплексе 
                  с другими средствами линии.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="py-8">
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold">Мария К.</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">15.01.2025</span>
                  </div>
                  <p className="text-muted-foreground">
                    Отличный крем! Кожа стала более увлажнённой и свежей. Текстура лёгкая, 
                    впитывается быстро. Буду брать ещё!
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold">Анна С.</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">12.01.2025</span>
                  </div>
                  <p className="text-muted-foreground">
                    Пользуюсь уже месяц, результат заметен. Кожа выглядит более здоровой. 
                    Подходит для моей чувствительной кожи.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <section>
            <h2 className="text-3xl font-bold mb-8">С этим товаром покупают</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
