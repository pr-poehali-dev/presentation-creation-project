import Icon from '@/components/ui/icon';

const Footer = () => {
  const footerLinks = {
    'Покупателям': [
      'Как сделать заказ',
      'Оплата и доставка',
      'Возврат товара',
      'Бонусная программа',
      'Вопросы и ответы'
    ],
    'О компании': [
      'О нас',
      'Контакты',
      'Вакансии',
      'Новости',
      'Партнерам'
    ],
    'Помощь': [
      'Связаться с нами',
      'Отследить заказ',
      'Условия использования',
      'Политика конфиденциальности'
    ]
  };

  return (
    <footer className="bg-secondary mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">COSMETIC STAR</h3>
            <p className="text-muted-foreground mb-4">
              Профессиональная косметика и средства для ухода
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Cosmetic Star. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <Icon name="CreditCard" size={24} className="text-muted-foreground" />
            <Icon name="Truck" size={24} className="text-muted-foreground" />
            <Icon name="ShieldCheck" size={24} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
