import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      subtitle: 'Ежедневно с 9:00 до 21:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@cosmeticstar.ru',
      subtitle: 'Ответим в течение 24 часов'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Москва, ул. Тверская, д. 10',
      subtitle: 'Пн-Пт: 10:00-20:00, Сб-Вс: 11:00-19:00'
    },
    {
      icon: 'Clock',
      title: 'График работы',
      value: 'Без выходных',
      subtitle: 'Круглосуточная поддержка онлайн'
    }
  ];

  const socialLinks = [
    { icon: 'Instagram', name: 'Instagram', url: '#' },
    { icon: 'Facebook', name: 'Facebook', url: '#' },
    { icon: 'Youtube', name: 'YouTube', url: '#' },
    { icon: 'Send', name: 'Telegram', url: '#' }
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
              <span className="text-foreground">Контакты</span>
            </div>
            <h1 className="text-4xl font-bold">Свяжитесь с нами</h1>
            <p className="text-lg text-muted-foreground mt-3">
              Мы всегда рады помочь вам с выбором косметики
            </p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={info.icon as any} size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="font-medium mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
              <p className="text-muted-foreground mb-8">
                Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваш вопрос..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Наши магазины</h2>
                <div className="aspect-video bg-secondary rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d8b8c8f8e8d8c8f8e8d8c8f8e8d8c8f8e8d8c8f&amp;source=constructor"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Карта"
                    className="w-full h-full"
                  />
                </div>
                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-4 border">
                    <h3 className="font-semibold mb-2">Флагманский магазин</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      г. Москва, ул. Тверская, д. 10
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Пн-Пт: 10:00-20:00, Сб-Вс: 11:00-19:00
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-4 border">
                    <h3 className="font-semibold mb-2">Магазин в ТЦ</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      г. Москва, ТЦ "Европейский", 2 этаж
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ежедневно: 10:00-22:00
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Мы в соцсетях</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      title={social.name}
                    >
                      <Icon name={social.icon as any} size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                <Icon name="Gift" size={32} className="text-accent mb-3" />
                <h3 className="font-semibold mb-2">Специальное предложение</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Подпишитесь на нашу рассылку и получите скидку 10% на первый заказ
                </p>
                <Button variant="default" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Получить скидку
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">Часто задаваемые вопросы</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Как сделать заказ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Добавьте товары в корзину, оформите заказ и выберите удобный способ оплаты и доставки.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Сроки доставки</h3>
                  <p className="text-sm text-muted-foreground">
                    По Москве 1-2 дня, по России 3-7 дней. Бесплатная доставка от 3000 ₽.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Возврат товара</h3>
                  <p className="text-sm text-muted-foreground">
                    Вы можете вернуть товар в течение 14 дней с момента получения заказа.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Оригинальность</h3>
                  <p className="text-sm text-muted-foreground">
                    Мы гарантируем 100% оригинальность всех товаров. Работаем с официальными дистрибьюторами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
