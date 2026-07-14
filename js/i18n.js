const translations = {
  es: {
    home: {
      pageTitle: 'Portal de Demos Mitel',
      title: 'Portal de Demos Mitel',
      subtitle: 'Selecciona una demostración para acceder al escenario correspondiente.',
      cta: '🏨 Demo Hotel Mitel'
    },
    hotel: {
      pageTitle: 'Hotel Mitel',
      logo: 'Hotel Mitel',
      location: 'España',
      heroTitle: 'Bienvenido a Hotel Mitel',
      heroText: 'Una experiencia premium para negocios y ocio.',
      heroButton: 'Reservar ahora',
      roomsTitle: 'Habitaciones',
      room1Title: 'Habitación Doble',
      room1Text: 'Amplias habitaciones con vistas panorámicas, WiFi y servicio 24 horas.',
      room1Alt: 'Habitación Doble',
      room2Title: 'Suite Ejecutiva',
      room2Text: 'Diseñada para profesionales y clientes VIP.',
      room2Alt: 'Suite Ejecutiva',
      room3Title: 'Suite Presidencial',
      room3Text: 'Máximo confort y exclusividad para estancias únicas.',
      room3Alt: 'Suite Presidencial',
      servicesTitle: 'Servicios',
      service1Title: '📶 WiFi Premium',
      service1Text: 'Conectividad de alta velocidad.',
      service2Title: '🏊 Piscina',
      service2Text: 'Piscina climatizada todo el año.',
      service3Title: '🍽 Restaurante',
      service3Text: 'Gastronomía local e internacional.',
      service4Title: '🚖 Transfer',
      service4Text: 'Traslado al aeropuerto 24 horas.',
      ctaTitle: '¿Necesitas ayuda para reservar?',
      ctaText: 'Nuestro asistente virtual está disponible 24x7 para resolver cualquier consulta.',
      ctaButton: 'Contactar',
      footer: '© 2026 Hotel Mitel · España'
    }
  },
  en: {
    home: {
      pageTitle: 'Mitel Demo Portal',
      title: 'Mitel Demo Portal',
      subtitle: 'Select a demo to access the corresponding scenario.',
      cta: '🏨 Mitel Hotel Demo'
    },
    hotel: {
      pageTitle: 'Mitel Hotel',
      logo: 'Mitel Hotel',
      location: 'United Kingdom',
      heroTitle: 'Welcome to Mitel Hotel',
      heroText: 'A premium experience for business and leisure.',
      heroButton: 'Book now',
      roomsTitle: 'Rooms',
      room1Title: 'Double Room',
      room1Text: 'Spacious rooms with panoramic views, WiFi, and 24-hour service.',
      room1Alt: 'Double Room',
      room2Title: 'Executive Suite',
      room2Text: 'Designed for professionals and VIP guests.',
      room2Alt: 'Executive Suite',
      room3Title: 'Presidential Suite',
      room3Text: 'Maximum comfort and exclusivity for unique stays.',
      room3Alt: 'Presidential Suite',
      servicesTitle: 'Services',
      service1Title: '📶 Premium WiFi',
      service1Text: 'High-speed connectivity.',
      service2Title: '🏊 Pool',
      service2Text: 'Heated pool all year round.',
      service3Title: '🍽 Restaurant',
      service3Text: 'Local and international cuisine.',
      service4Title: '🚖 Transfer',
      service4Text: 'Airport transfer 24 hours.',
      ctaTitle: 'Need help booking?',
      ctaText: 'Our virtual assistant is available 24x7 to answer any questions.',
      ctaButton: 'Contact us',
      footer: '© 2026 Mitel Hotel · United Kingdom'
    }
  },
  pt: {
    home: {
      pageTitle: 'Portal de Demonstrações Mitel',
      title: 'Portal de Demonstrações Mitel',
      subtitle: 'Selecione uma demonstração para aceder ao cenário correspondente.',
      cta: '🏨 Demo de Hotel Mitel'
    },
    hotel: {
      pageTitle: 'Hotel Mitel',
      logo: 'Hotel Mitel',
      location: 'Portugal',
      heroTitle: 'Bem-vindo ao Hotel Mitel',
      heroText: 'Uma experiência premium para negócios e lazer.',
      heroButton: 'Reservar agora',
      roomsTitle: 'Quartos',
      room1Title: 'Quarto Duplo',
      room1Text: 'Quartos espaçosos com vistas panorâmicas, WiFi e serviço 24 horas.',
      room1Alt: 'Quarto Duplo',
      room2Title: 'Suíte Executiva',
      room2Text: 'Desenhada para profissionais e convidados VIP.',
      room2Alt: 'Suíte Executiva',
      room3Title: 'Suíte Presidencial',
      room3Text: 'Conforto máximo e exclusividade para estadias únicas.',
      room3Alt: 'Suíte Presidencial',
      servicesTitle: 'Serviços',
      service1Title: '📶 WiFi Premium',
      service1Text: 'Conectividade de alta velocidade.',
      service2Title: '🏊 Piscina',
      service2Text: 'Piscina aquecida durante todo o ano.',
      service3Title: '🍽 Restaurante',
      service3Text: 'Cozinha local e internacional.',
      service4Title: '🚖 Transfer',
      service4Text: 'Transfer do aeroporto 24 horas.',
      ctaTitle: 'Precisa de ajuda para reservar?',
      ctaText: 'O nosso assistente virtual está disponível 24x7 para responder a qualquer pergunta.',
      ctaButton: 'Contactar',
      footer: '© 2026 Hotel Mitel · Portugal'
    }
  }
};

function getPreferredLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');
  if (queryLang && translations[queryLang]) {
    return queryLang;
  }

  const storedLang = window.localStorage.getItem('site-lang');
  if (storedLang && translations[storedLang]) {
    return storedLang;
  }

  return navigator.language.startsWith('en') ? 'en' : 'es';
}

function updateUrlLanguage(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}

function applyLanguage(lang) {
  const pageKey = document.body.dataset.page || 'home';
  const locale = translations[lang][pageKey];

  if (!locale) {
    return;
  }

  document.documentElement.lang = lang;
  document.title = locale.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const value = locale[key];

    if (value) {
      if (element.hasAttribute('placeholder')) {
        element.placeholder = value;
      } else if (element.hasAttribute('aria-label')) {
        element.setAttribute('aria-label', value);
      } else if (element.hasAttribute('alt')) {
        element.alt = value;
      } else {
        element.textContent = value;
      }
    }
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.getAttribute('data-lang') === lang);
  });

  window.localStorage.setItem('site-lang', lang);
  updateUrlLanguage(lang);
}

function initI18n() {
  const lang = getPreferredLanguage();
  applyLanguage(lang);

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      applyLanguage(button.getAttribute('data-lang'));
    });
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
