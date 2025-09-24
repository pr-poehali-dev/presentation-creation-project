import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'cases', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: 'Code',
      title: 'Разработка',
      description: 'Создание PWA-приложений для интернет- и мобильного банкинга. Корпоративные порталы и интеграция с Битрикс24.'
    },
    {
      icon: 'Search',
      title: 'Аудит',
      description: 'Комплексные UX/UI и технические аудиты. Оптимизация форм заявок и onboarding-сценариев для финтеха.'
    },
    {
      icon: 'Clock',
      title: 'Поддержка 24/7',
      description: 'Круглосуточная техподдержка по SLA. Система мониторинга и ежемесячная отчетность.'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Отказоустойчивая инфраструктура для критичных финансовых сервисов. Защита от внешних угроз.'
    }
  ];

  const cases = [
    {
      title: 'Микрофинансовая организация',
      description: 'Разработка PWA-платформы для онлайн-кредитования с интеграцией Smart Engines',
      result: '+60% конверсия заявок'
    },
    {
      title: 'Онлайн-банк',
      description: 'UX-оптимизация мобильного приложения и внедрение A/B-тестирования',
      result: '+40% пользовательской активности'
    },
    {
      title: 'Страховая компания',
      description: 'Комплексный аудит и миграция на Yandex Cloud с 24/7 мониторингом',
      result: '-50% время обработки заявок'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#161b22]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#8b45ff]">AWG</div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'hero', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'services', label: 'Услуги' },
                { id: 'cases', label: 'Кейсы' },
                { id: 'contacts', label: 'Контакты' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm transition-colors hover:text-[#8b45ff] ${
                    activeSection === id ? 'text-[#8b45ff]' : 'text-gray-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="Phone" size={16} className="text-gray-400" />
              <span className="text-sm text-gray-300">+7 (495) 123-45-67</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/286c10f4-0886-427f-ba1d-51049fcc72e0.jpg" 
            alt="IT Infrastructure" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <p className="text-[#8b45ff] text-sm font-medium mb-4 animate-fade-in">FinTech Solutions</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Технологический партнер
              <span className="text-[#8b45ff]"> для FinTech</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              awg.ru создает цифровые продукты для банков, страховых компаний и финтех-стартапов. 
              Объединяем экспертизу в разработке, UX-дизайне, безопасности и аналитике.
            </p>
            <div className="flex items-center space-x-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-[#8b45ff] hover:bg-[#7c3aed] text-white px-8 py-3"
                onClick={() => scrollToSection('contacts')}
              >
                Наши компетенции
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3"
                onClick={() => scrollToSection('about')}
              >
                Подробнее
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#161b22]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#8b45ff]">О компании</h2>
              <p className="text-lg text-gray-300 mb-6">
                awg.ru разрабатывает цифровые продукты и сервисы для бизнеса, включая банки, 
                страховые компании, микрофинансовые организации и финтех-стартапы.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Мы объединяем экспертизу в веб-разработке, UX-дизайне, безопасности и аналитике 
                для создания комплексных решений, которые помогают финансовым компаниям быть 
                технологичными, клиентоориентированными и конкурентоспособными.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#8b45ff] mb-2">100+</div>
                  <div className="text-sm text-gray-400">FinTech проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#8b45ff] mb-2">10+</div>
                  <div className="text-sm text-gray-400">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#8b45ff] mb-2">365/24/7</div>
                  <div className="text-sm text-gray-400">SLA поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#8b45ff] to-[#7c3aed] rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Преимущества для FinTech</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-400 mr-3" />
                    <span>Безопасность и надёжность</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-400 mr-3" />
                    <span>Мобильность и гибкость</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-400 mr-3" />
                    <span>Ориентация на результат</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-400 mr-3" />
                    <span>Скорость внедрения</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#8b45ff]">Ключевые компетенции для FinTech</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплексные решения для финансовых организаций: безопасность, инновации и результат
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-[#161b22] border-gray-800 hover:border-[#8b45ff] transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-[#8b45ff] rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-[#161b22]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#8b45ff]">Преимущества для FinTech</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Почему финансовые компании выбирают awg.ru как технологического партнера
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="bg-[#0d1117] border-gray-800 hover:border-[#8b45ff] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">{caseItem.description}</p>
                  <div className="bg-[#8b45ff] rounded-lg p-4">
                    <div className="text-white font-bold text-lg">{caseItem.result}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#8b45ff]">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Готовы обсудить ваш проект и найти оптимальные IT-решения
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Партнёрство с AWG</h3>
              <p className="text-gray-300 mb-8">
                Обсудим возможности технологического партнёрства для вашей финансовой организации. 
                Усилим безопасность, внедрим инновации и повысим эффективность.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="text-[#8b45ff] mr-4" />
                  <span className="text-gray-300">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="text-[#8b45ff] mr-4" />
                  <span className="text-gray-300">fintech@awg.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="text-[#8b45ff] mr-4" />
                  <span className="text-gray-300">Москва, Бизнес-центр «Москва-Сити»</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="text-[#8b45ff] mr-4" />
                  <span className="text-gray-300">Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-[#161b22] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Обсудить партнёрство</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full p-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#8b45ff] focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#8b45ff] focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full p-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#8b45ff] focus:outline-none"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Опишите вашу FinTech компанию" 
                    rows={4}
                    className="w-full p-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#8b45ff] focus:outline-none resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#8b45ff] hover:bg-[#7c3aed] text-white py-3">
                  Обсудить партнёрство
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1117] border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-[#8b45ff] mb-4 md:mb-0">AWG</div>
            <div className="text-gray-400 text-sm">
              © 2024 AWG. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}