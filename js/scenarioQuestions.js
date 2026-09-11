const scenarioQuestions = {
  hotel: [
    {
      es: {
        question: '¿Puedo reservar una habitación para una estancia de negocios?',
        answer: 'Sí. El asistente puede sugerir habitaciones según el tipo de estancia, las fechas y el presupuesto.'
      },
      en: {
        question: 'Can I book a room for a business stay?',
        answer: 'Yes. The assistant can suggest rooms based on stay type, dates, and budget.'
      },
      pt: {
        question: 'Posso reservar um quarto para uma estadia de negócios?',
        answer: 'Sim. O assistente pode sugerir quartos conforme o tipo de estadia, as datas e o orçamento.'
      },
      ca: {
        question: 'Puc reservar una habitació per a una estada de negocis?',
        answer: 'Sí. L’assistent pot suggerir habitacions segons el tipus d’estada, les dates i el pressupost.'
      },
      gl: {
        question: 'Podo reservar unha habitación para unha estadía de negocios?',
        answer: 'Si. O asistente pode sugerir habitacións segundo o tipo de estadía, as datas e o orzamento.'
      },
      eu: {
        question: 'Erreserba egin ahal al dut negozio-bisitarako gela bat?',
        answer: 'Bai. Asistenteari esker, egokitutako gelak eskain ditzake bisita mota, datak eta aurrekontua kontuan hartuta.'
      }
    },
    {
      es: {
        question: '¿El asistente puede ayudar con servicios del hotel y spa?',
        answer: 'Sí. También puede orientar sobre spa, transfer y servicios adicionales del hotel.'
      },
      en: {
        question: 'Can the assistant help with hotel and spa services?',
        answer: 'Yes. It can also guide you through spa, transfer, and other additional services.'
      },
      pt: {
        question: 'O assistente pode ajudar com serviços do hotel e spa?',
        answer: 'Sim. Também pode orientar sobre spa, transfer e outros serviços adicionais.'
      },
      ca: {
        question: 'L’assistent pot ajudar amb serveis de l’hotel i el spa?',
        answer: 'Sí. També pot orientar sobre spa, transfer i altres serveis addicionals de l’hotel.'
      },
      gl: {
        question: 'O asistente pode axudar con servizos do hotel e spa?',
        answer: 'Si. Tamén pode orientar sobre spa, transfer e servizos adicionais do hotel.'
      },
      eu: {
        question: 'Asistentek hotelaren eta spa-aren zerbitzuetan lagundu al diezaike?',
        answer: 'Bai. Spa, transfer eta hotelaren beste zerbitzu osagarri batzuk ere orientatu ahal ditu.'
      }
    },
    {
      es: {
        question: '¿Puede recomendarme una habitación según mi presupuesto?',
        answer: 'Sí. Puede filtrar por rango de precio y tipo de habitación disponible.'
      },
      en: {
        question: 'Can it recommend a room based on my budget?',
        answer: 'Yes. It can filter by price range and available room type.'
      },
      pt: {
        question: 'Pode recomendar-me um quarto conforme o meu orçamento?',
        answer: 'Sim. Pode filtrar por faixa de preço e tipo de quarto disponível.'
      },
      ca: {
        question: 'Pot recomanar-me una habitació segons el meu pressupost?',
        answer: 'Sí. Pot filtrar per rang de preu i tipus d’habitació disponible.'
      },
      gl: {
        question: 'Pode recomendarme unha habitación segundo o meu orzamento?',
        answer: 'Si. Pode filtrar por rango de prezo e tipo de habitación dispoñible.'
      },
      eu: {
        question: 'Gela bat gomendatu al diezazuke nire aurrekontuaren arabera?',
        answer: 'Bai. Prezio-tartea eta erabilgarri dagoen gela mota iragazi ditzake.'
      }
    }
  ],
  municipality: [
    {
      es: {
        question: '¿Cómo puedo solicitar una cita presencial?',
        answer: 'Puedes pedir una cita desde la sección de atención ciudadana o trámites municipales.'
      },
      en: {
        question: 'How can I request an in-person appointment?',
        answer: 'You can request one from the citizen services or municipal procedures section.'
      },
      pt: {
        question: 'Como posso solicitar uma marcação presencial?',
        answer: 'Pode pedir uma marcação na secção de atendimento ao cidadão ou de procedimentos municipais.'
      },
      ca: {
        question: 'Com puc sol·licitar una cita presencial?',
        answer: 'Podeu demanar una cita des de la secció d’atenció ciutadana o tràmits municipals.'
      },
      gl: {
        question: 'Como podo solicitar unha cita presencial?',
        answer: 'Podes pedir unha cita desde a sección de atención cidadá ou trámites municipais.'
      },
      eu: {
        question: 'Nola eskatu ahal dut aurrez aurreko harrera?',
        answer: 'Harrerako zerbitzuen edo udal-prozeduren atalean eska dezakezu hitzordua.'
      }
    },
    {
      es: {
        question: '¿Dónde encuentro información sobre impuestos y tasas municipales?',
        answer: 'La información está disponible en la sección de impuestos y trámites del ayuntamiento.'
      },
      en: {
        question: 'Where can I find information about municipal taxes and fees?',
        answer: 'The information is available in the municipal taxes and procedures section.'
      },
      pt: {
        question: 'Onde posso encontrar informações sobre impostos e taxas municipais?',
        answer: 'A informação está disponível na secção de impostos e procedimentos municipais.'
      },
      ca: {
        question: 'On trobo informació sobre impostos i taxes municipals?',
        answer: 'La informació està disponible a la secció d’impostos i tràmits de l’ajuntament.'
      },
      gl: {
        question: 'Onde podo atopar información sobre impostos e taxas municipais?',
        answer: 'A información está dispoñible na sección de impostos e trámites do concello.'
      },
      eu: {
        question: 'Non aurki ditzaket zergak eta udalen tasak?',
        answer: 'Informazioa udaletxeko zergei eta prozedurei buruzko atalean dago eskuragarri.'
      }
    },
    {
      es: {
        question: '¿Puede orientarme sobre el acceso a la zona centro?',
        answer: 'Sí. El asistente puede indicar horarios, restricciones y requisitos de acceso.'
      },
      en: {
        question: 'Can it guide me on access to the city center?',
        answer: 'Yes. The assistant can provide schedules, restrictions, and access requirements.'
      },
      pt: {
        question: 'Pode orientar-me sobre o acesso à zona central?',
        answer: 'Sim. O assistente pode indicar horários, restrições e requisitos de acesso.'
      },
      ca: {
        question: 'Pot orientar-me sobre l’accés a la zona centre?',
        answer: 'Sí. L’assistent pot indicar horaris, restriccions i requisits d’accés.'
      },
      gl: {
        question: 'Pode orientarme sobre o acceso á zona centro?',
        answer: 'Si. O asistente pode indicar horarios, restricións e requisitos de acceso.'
      },
      eu: {
        question: 'Ergela-zentroaren sarbidea orientatu al diezazuke?',
        answer: 'Bai. Asistentak ordutegiak, murrizketak eta sartzeko baldintzak adieraz ditzake.'
      }
    }
  ]
};
