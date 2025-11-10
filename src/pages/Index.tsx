import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type Page = 'home' | 'about' | 'news' | 'leadership';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  description: string;
}

interface Leader {
  id: number;
  name: string;
  role: string;
  description: string;
  image?: string;
}

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageChange = (page: Page) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 300);
  };

  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: '10.11.2025',
      title: 'Открытие нового офиса в Downtown',
      description: 'Kingsman расширяет своё присутствие в деловом центре Лос-Сантоса с открытием современного офиса на 45 этаже башни Maze Bank.'
    },
    {
      id: 2,
      date: '05.11.2025',
      title: 'Годовой отчёт: рост 250%',
      description: 'Корпорация показала выдающиеся результаты за год. Прибыль выросла на 250%, штат расширился до 500+ сотрудников.'
    },
    {
      id: 3,
      date: '01.11.2025',
      title: 'Партнёрство с международными корпорациями',
      description: 'Подписаны контракты с ведущими мировыми компаниями на поставку эксклюзивных услуг в регионе San Andreas.'
    }
  ];

  const leaders: Leader[] = [
    {
      id: 1,
      name: 'Alexei Morozov',
      role: 'Генеральный директор',
      description: 'Основатель корпорации Kingsman. Бизнесмен, под руководством которого компания стала лидером среди других корпораций в Лос-Сантосе.',
      image: 'https://cdn.poehali.dev/projects/10114fda-bf43-496a-9446-e0e7924f90ce/files/16f228e8-eacc-46f1-9ce0-9c3d45b9c6de.jpg'
    },
    {
      id: 2,
      name: 'Maksim Hartford',
      role: 'Исполнительный директор',
      description: 'Заместитель основателя и Глава отдела kingsman корпорации Kingsman с помощью которого корпорация пришла к лидеру среди других корпораций. Отвечает за производство.',
      image: 'https://cdn.poehali.dev/projects/10114fda-bf43-496a-9446-e0e7924f90ce/files/bfca1875-66b3-43f6-9adb-2a49ec5875f0.jpg'
    },
    {
      id: 3,
      name: 'Marcus Blackwood',
      role: 'Глава финансового отдела',
      description: 'Управляет финансовыми операциями и инвестиционными стратегиями корпорации. Обеспечивает стабильный рост капитала.'
    },
    {
      id: 4,
      name: 'Victoria Sterling',
      role: 'Глава отдела безопасности',
      description: 'Отвечает за безопасность всех объектов и сотрудников корпорации. Координирует службу охраны и системы защиты.'
    },
    {
      id: 5,
      name: 'James Wellington',
      role: 'Глава отдела VIP-клиентов',
      description: 'Управляет работой с премиум-клиентами корпорации. Обеспечивает индивидуальный подход к каждому VIP-партнёру.'
    },
    {
      id: 6,
      name: 'Sophia Rodriguez',
      role: 'Глава юридического отдела',
      description: 'Руководит юридическими операциями корпорации. Обеспечивает соблюдение законодательства и защиту интересов компании.'
    }
  ];

  const getBackgroundImage = () => {
    switch (currentPage) {
      case 'home':
        return 'https://cdn.poehali.dev/projects/10114fda-bf43-496a-9446-e0e7924f90ce/files/9895ad07-80c7-4da7-9ce0-bfd1e889dc6c.jpg';
      case 'about':
        return 'https://cdn.poehali.dev/projects/10114fda-bf43-496a-9446-e0e7924f90ce/files/5441847b-0f25-4e82-a415-160273135549.jpg';
      case 'news':
        return 'https://cdn.poehali.dev/projects/10114fda-bf43-496a-9446-e0e7924f90ce/files/1895bf6b-a620-4a5d-89f3-95a05c6efedb.jpg';
      case 'leadership':
        return 'https://cdn.poehali.dev/projects/10114fda-bf43-496a-9446-e0e7924f90ce/files/5441847b-0f25-4e82-a415-160273135549.jpg';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url('${getBackgroundImage()}')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-md border-b border-gold-400/20 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">K</span>
                </div>
                <h1 className="text-2xl font-bold text-white tracking-wider">KINGSMAN</h1>
              </div>
              
              <div className="flex space-x-1">
                <Button
                  variant={currentPage === 'home' ? 'default' : 'ghost'}
                  onClick={() => handlePageChange('home')}
                  className={`${
                    currentPage === 'home' 
                      ? 'bg-gold-400 text-black hover:bg-gold-500' 
                      : 'text-white hover:bg-white/10 hover:text-gold-400'
                  } transition-all duration-300`}
                >
                  <Icon name="Home" size={18} className="mr-2" />
                  Главная
                </Button>
                <Button
                  variant={currentPage === 'about' ? 'default' : 'ghost'}
                  onClick={() => handlePageChange('about')}
                  className={`${
                    currentPage === 'about' 
                      ? 'bg-gold-400 text-black hover:bg-gold-500' 
                      : 'text-white hover:bg-white/10 hover:text-gold-400'
                  } transition-all duration-300`}
                >
                  <Icon name="Building2" size={18} className="mr-2" />
                  О корпорации
                </Button>
                <Button
                  variant={currentPage === 'news' ? 'default' : 'ghost'}
                  onClick={() => handlePageChange('news')}
                  className={`${
                    currentPage === 'news' 
                      ? 'bg-gold-400 text-black hover:bg-gold-500' 
                      : 'text-white hover:bg-white/10 hover:text-gold-400'
                  } transition-all duration-300`}
                >
                  <Icon name="Newspaper" size={18} className="mr-2" />
                  Новости
                </Button>
                <Button
                  variant={currentPage === 'leadership' ? 'default' : 'ghost'}
                  onClick={() => handlePageChange('leadership')}
                  className={`${
                    currentPage === 'leadership' 
                      ? 'bg-gold-400 text-black hover:bg-gold-500' 
                      : 'text-white hover:bg-white/10 hover:text-gold-400'
                  } transition-all duration-300`}
                >
                  <Icon name="Users" size={18} className="mr-2" />
                  Руководство
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-24 pb-12 px-6">
          <div className="container mx-auto">
            <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              {currentPage === 'home' && (
                <div className="min-h-[80vh] flex items-center justify-center">
                  <div className="text-center max-w-4xl">
                    <div className="inline-block mb-6 px-6 py-2 bg-gold-400/20 backdrop-blur-md border border-gold-400/30 rounded-full">
                      <span className="text-gold-400 font-semibold tracking-wider">ЭЛИТНАЯ КОРПОРАЦИЯ</span>
                    </div>
                    <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
                      KINGSMAN
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
                    <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                      Лидер корпоративного рынка Лос-Сантоса
                    </p>
                    <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Мы создаём будущее бизнеса в San Andreas, устанавливая новые стандарты качества и профессионализма
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button 
                        size="lg"
                        onClick={() => handlePageChange('about')}
                        className="bg-gold-400 text-black hover:bg-gold-500 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
                      >
                        Узнать больше
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        onClick={() => handlePageChange('leadership')}
                        className="border-gold-400/50 text-white hover:bg-gold-400/10 hover:border-gold-400 transition-all duration-300 px-8 py-6 text-lg"
                      >
                        Наша команда
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {currentPage === 'about' && (
                <div className="max-w-4xl mx-auto">
                  <Card className="bg-black/40 backdrop-blur-md border-gold-400/30 p-12">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                        <Icon name="Building2" size={32} className="text-black" />
                      </div>
                      <h2 className="text-5xl font-bold text-white">О корпорации</h2>
                    </div>
                    
                    <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                      <p>
                        <strong className="text-gold-400">Kingsman</strong> — ведущая многопрофильная корпорация в Лос-Сантосе, 
                        специализирующаяся на предоставлении премиум-услуг для элитных клиентов города.
                      </p>
                      
                      <div className="h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent my-8"></div>
                      
                      <h3 className="text-2xl font-semibold text-gold-400 mb-4">Наша деятельность</h3>
                      
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="Check" size={24} className="text-gold-400 flex-shrink-0 mt-1" />
                          <span><strong>Эксклюзивные бизнес-решения</strong> для крупнейших компаний San Andreas</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="Check" size={24} className="text-gold-400 flex-shrink-0 mt-1" />
                          <span><strong>VIP-консалтинг</strong> и стратегическое планирование для топ-менеджмента</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="Check" size={24} className="text-gold-400 flex-shrink-0 mt-1" />
                          <span><strong>Управление премиум-активами</strong> и элитной недвижимостью</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="Check" size={24} className="text-gold-400 flex-shrink-0 mt-1" />
                          <span><strong>Финансовые услуги высшего класса</strong> для состоятельных клиентов</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="Check" size={24} className="text-gold-400 flex-shrink-0 mt-1" />
                          <span><strong>Безопасность и конфиденциальность</strong> на высшем уровне</span>
                        </li>
                      </ul>
                      
                      <div className="h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent my-8"></div>
                      
                      <p className="text-xl text-gold-400 font-semibold">
                        Мы принимаем к себе всех, обеспечивая всеми инструментами и помогаем разобраться что как работает. Наша репутация — это гарантия качества и надёжности.
                      </p>
                    </div>
                  </Card>
                </div>
              )}

              {currentPage === 'news' && (
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-center space-x-4 mb-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                      <Icon name="Newspaper" size={32} className="text-black" />
                    </div>
                    <h2 className="text-5xl font-bold text-white">Новости</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {newsItems.map((item) => (
                      <Card 
                        key={item.id}
                        className="bg-black/40 backdrop-blur-md border-gold-400/30 p-8 hover:bg-black/50 hover:border-gold-400/50 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <span className="text-gold-400 font-semibold text-sm tracking-wider">{item.date}</span>
                          <Icon name="TrendingUp" size={24} className="text-gold-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-white/80 leading-relaxed">{item.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {currentPage === 'leadership' && (
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center space-x-4 mb-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                      <Icon name="Users" size={32} className="text-black" />
                    </div>
                    <h2 className="text-5xl font-bold text-white">Руководство корпорации</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {leaders.slice(0, 2).map((leader) => (
                      <Card 
                        key={leader.id}
                        className="bg-black/40 backdrop-blur-md border-gold-400/30 p-8 hover:bg-black/50 hover:border-gold-400/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-center mb-6">
                          {leader.image ? (
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold-400">
                              <img 
                                src={leader.image} 
                                alt={leader.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                              <Icon name="User" size={64} className="text-black" />
                            </div>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-white text-center mb-2">{leader.name}</h3>
                        <div className="text-gold-400 text-center font-semibold mb-4 text-lg">{leader.role}</div>
                        <div className="h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent mb-4"></div>
                        <p className="text-white/80 leading-relaxed text-center">{leader.description}</p>
                      </Card>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6 text-center">Главы отделов</h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {leaders.slice(2).map((leader) => (
                      <Card 
                        key={leader.id}
                        className="bg-black/40 backdrop-blur-md border-gold-400/30 p-6 hover:bg-black/50 hover:border-gold-400/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-20 h-20 bg-gradient-to-br from-gold-400/80 to-gold-600/80 rounded-full flex items-center justify-center">
                            <Icon name="User" size={40} className="text-black" />
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-white text-center mb-2">{leader.name}</h4>
                        <div className="text-gold-400 text-center font-semibold mb-3 text-sm">{leader.role}</div>
                        <p className="text-white/70 leading-relaxed text-center text-sm">{leader.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="relative z-10 border-t border-gold-400/20 bg-black/40 backdrop-blur-md mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">K</span>
                </div>
                <span className="text-white font-semibold">KINGSMAN CORPORATION</span>
              </div>
              <p className="text-white/60 text-sm">© 2025 Все права защищены</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
