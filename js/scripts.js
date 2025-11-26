// Language translations
const translations = {
    en: {
    // about
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-education-job": "Education & Job",
    "nav-certificates": "Certificates",
    "nav-contact": "Contact Info",
    "about-title": "About",
    "about-intro": "Hi, my name is Dmitry Chernyshev and I'm a software developer.",
    "about-experience": "I have years of experience working in different fields, including building client- and server-side applications, implementations of different network protocols and algorithms, development of specialized neural networks.",
    "about-tools": "Some of the tools I worked with include: <strong>C/C++</strong>, <strong>Python</strong> and <strong>PHP</strong> programming languages, <strong>MySQL</strong> and <strong>PostgreSQL</strong> databases, various <strong>Linux</strong> tools and scripting languages.",
    "about-gamedev": "For a long time I wanted to pursue game development, and some time ago I made a decision to change direction of my career. I've been learning about <strong>Unity</strong> engine, <strong>C#</strong>, <strong>DOTween</strong>, <strong>Zenject</strong>, <strong>DOTS (ECS)</strong>, <strong>Netcode (NGO, NfE)</strong>, <strong>Shaders (HLSL)</strong>, various aspects of game development and recently finished large demonstration project for my portfolio.",
    "about-resume": "Resume on hh.ru: <a href='https://hh.ru/applicant/resumes/view?resume=3c563eccff0cc173e70039ed1f6e4359467957'>link</a>",
    // projects
    "new-projects-section": "New Portfolio Projects (Game development)",
    "colony-project": "The colony - medieval town simulator",
    "inventory-system-project": "Inventory system",
    "mobile-rpg-project": "Mobile RPG mechanics",
    "basic-rpg-project": "Basic RPG combat",
    "not-terraria-project": "Not a terraria (Platformer mechanics)",
    "shortest-path-project": "Shortest path finder",
    "old-ai-projects-section": "Old Portfolio Projects (AI and ML)",
    "old-web-projects-section": "Old Portfolio Projects (Web Development)",
    // job section
    "job-section-place": "<strong>Place</strong>",
    "job-section-position": "<strong>Position</strong>",
    "job-section-date": "<strong>Date</strong>",
    "job-section-description": "<strong>Description</strong>",
    "education-job-mtuci-place": "Moscow Technical University of Communications and Informatics",
    "education-job-mtuci-position": "Student (Information systems and technology)",
    "education-job-mtuci-description": "Computer Science and System Administration related higher education",
    "education-job-netup-place": "NetUP Inc.",
    "education-job-netup-position": "Software Developer",
    "education-job-netup-description": "Development of phone/VOIP/internet billing core with client and administrative tools (UTM5 / UTM6 packages)",
    "education-job-freelance-place": "freelance",
    "education-job-freelance-position": "Software Developer",
    "education-job-freelance-description": "Server-side related tasks, network modules and DB logic for minor projects",
    "education-job-fcc-place": "freecodecamp",
    "education-job-fcc-position": "Student",
    "education-job-fcc-description": "Online courses(1200 hours) with focus on frontend(HTML, CSS, JS, React) and backend(node.js, express, mongodb) technologies",
    "education-job-bnesim-place": "BNESIM",
    "education-job-bnesim-position": "Full-Stack Web Developer",
    "education-job-bnesim-description": "Development of client- and server-side tools which handle payment, billing, invoice and simcard management",
    "education-job-deeplearning-place": "deeplearning.ai",
    "education-job-deeplearning-position": "Student",
    "education-job-deeplearning-description": "Courses on deep learning, AI and related topics; primarily on <a href='https://www.coursera.org/account/accomplishments/specialization/certificate/3URDFYUAVBQF'>coursera</a> and deeplearning.ai",
    "education-job-dxbcircle-place": "dxbcircle.com",
    "education-job-dxbcircle-position": "Software Developer",
    "education-job-dxbcircle-description": "Development of real estate portfolio management software. Involved in development of specialized neural network for real estate price and rent estimation.",
    "education-job-nda-place": "Gamedev (NDA)",
    "education-job-nda-position": "Unity C# Developer",
    "education-job-nda-description": "Development of multiplatform RPG",
    // contacts
    "contact-country": "<strong>Country:</strong> Russia",
    "contact-city": "<strong>City:</strong> Moscow",
    "contact-email": "<strong>Email:</strong> l***d@gmail.com",
    "contact-telegram": "<strong>Telegram:</strong> leakvoid",
    "contact-phone": "<strong>Phone Number:</strong> +7(903)-58*-**-**",
    "contact-links": "Contact me on:"
  },
    ru: {
    // about
    "nav-about": "Обо мне",
    "nav-projects": "Проекты",
    "nav-education-job": "Образование и работа",
    "nav-certificates": "Сертификаты",
    "nav-contact": "Контактная информация",
    "about-title": "Обо мне",
    "about-intro": "Привет, меня зовут Дмитрий Чернышев, и я программист.",
    "about-experience": "У меня есть многолетний опыт работы в различных областях, включая создание клиентских и серверных приложений, реализацию различных сетевых протоколов и алгоритмов, разработку специализированных нейронных сетей.",
    "about-tools": "Некоторые инструменты, с которыми я работал, включают: языки программирования <strong>C/C++</strong>, <strong>Python</strong> и <strong>PHP</strong>, базы данных <strong>MySQL</strong> и <strong>PostgreSQL</strong>, различные инструменты и скриптовые языки <strong>Linux</strong>.",
    "about-gamedev": "Долгое время я хотел заниматься разработкой игр, и недавно я решил сменить направление своей карьеры. Я изучал движок <strong>Unity</strong>, <strong>C#</strong>, <strong>DOTween</strong>, <strong>Zenject</strong>, <strong>DOTS (ECS)</strong>, <strong>Netcode (NGO, NfE)</strong>, <strong>Шейдеры (HLSL)</strong>, различные аспекты разработки игр и завершил несколько демонстрационных проектов для своего портфолио.",
    "about-resume": "Резюме на hh.ru: <a href='https://hh.ru/applicant/resumes/view?resume=3c563eccff0cc173e70039ed1f6e4359467957'>ссылка</a>",
    // projects
    "new-projects-section": "Новые проекты (Gamedev)",
    "colony-project": "Колония - симулятор города",
    "inventory-system-project": "Система инвентаря",
    "mobile-rpg-project": "Пример мобильной RPG",
    "basic-rpg-project": "RPG боевая система",
    "not-terraria-project": "Not terraria - простой платформер",
    "shortest-path-project": "Поиск кратчайшего пути",
    "old-ai-projects-section": "Старые проекты (AI and ML)",
    "old-web-projects-section": "Старые проекты (Web Development)",    
    // job section
    "job-section-place": "<strong>Место</strong>",
    "job-section-position": "<strong>Позиция</strong>",
    "job-section-date": "<strong>Период</strong>",
    "job-section-description": "<strong>Описание</strong>",
    "education-job-mtuci-place": "Московский технический университет связи и информатики",
    "education-job-mtuci-position": "Студент (Информационные системы и технологии)",
    "education-job-mtuci-description": "Высшее образование в области компьютерных наук и системного администрирования",
    "education-job-netup-place": "NetUP Inc.",
    "education-job-netup-position": "Программист",
    "education-job-netup-description": "Разработка ядра биллинга для телефонии/VOIP/интернета с клиентскими и административными инструментами (пакеты UTM5 / UTM6)",
    "education-job-freelance-place": "Фриланс",
    "education-job-freelance-position": "Программист",
    "education-job-freelance-description": "Задачи, связанные с серверной частью, сетевые модули и логика баз данных для небольших проектов",
    "education-job-fcc-place": "freeCodeCamp",
    "education-job-fcc-position": "Студент",
    "education-job-fcc-description": "Онлайн-курсы (1200 часов) с акцентом на фронтенд (HTML, CSS, JS, React) и бэкенд (node.js, express, mongodb) технологии",
    "education-job-bnesim-place": "BNESIM",
    "education-job-bnesim-position": "Fullstack Web-разработчик",
    "education-job-bnesim-description": "Разработка клиентских и серверных инструментов для управления платежами, биллингом, счетами и SIM-картами",
    "education-job-deeplearning-place": "deeplearning.ai",
    "education-job-deeplearning-position": "Студент",
    "education-job-deeplearning-description": "Курсы по глубокому обучению, искусственному интеллекту и связанным темам; в основном на <a href='https://www.coursera.org/account/accomplishments/specialization/certificate/3URDFYUAVBQF'>Coursera</a> и deeplearning.ai",
    "education-job-dxbcircle-place": "dxbcircle.com",
    "education-job-dxbcircle-position": "Программист",
    "education-job-dxbcircle-description": "Разработка программного обеспечения для управления портфелем недвижимости. Участвовал в разработке специализированной нейронной сети для оценки цен и аренды недвижимости.",
    "education-job-nda-place": "Разработка игр (NDA)",
    "education-job-nda-position": "Разработчик Unity C#",
    "education-job-nda-description": "Разработка мультиплатформенной RPG",
    // contacts
    "contact-country": "<strong>Страна:</strong> Россия",
    "contact-city": "<strong>Город:</strong> Москва",
    "contact-email": "<strong>Электронная почта:</strong> l***d@gmail.com",
    "contact-skype": "<strong>Телеграм:</strong> leakvoid",
    "contact-phone": "<strong>Номер телефона:</strong> +7(903)-58*-**-**",
    "contact-links": "Ссылки:"  
  }
};

let currentLang = 'ru';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ru' : 'en';
  const button = document.getElementById('lang-toggle');
  button.textContent = currentLang === 'en' ? 'Русский' : 'English';

  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('lang-toggle');
  if (link) {
    link.textContent = currentLang === 'en' ? 'Русский' : 'English';
    document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.getAttribute('data-lang-key');
      if (translations[currentLang][key]) {
        element.innerHTML = translations[currentLang][key];
      }
    });
    link.addEventListener('click', toggleLanguage);
  } else {
    console.error('Language toggle link not found');
  }
});
