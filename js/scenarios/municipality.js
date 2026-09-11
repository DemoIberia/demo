const municipalityQuestions = [
  {
    "es": {
      "question": "Es la primera vez que utilizo este servicio de atención y no sé muy bien qué gestiones puedo consultar. ¿Sobre qué servicios, trámites y ayudas podéis informarme?"
    },
    "en": {
      "question": "This is my first time using this public service assistant and I am not sure what I can ask about. Which services, procedures and benefits can you provide information on?"
    },
    "pt": {
      "question": "É a primeira vez que utilizo este serviço de atendimento e não sei muito bem que assuntos posso consultar. Sobre que serviços, procedimentos e apoios me podem informar?"
    },
    "ca": {
      "question": "És la primera vegada que utilitzo aquest servei d’atenció i no sé gaire bé quines gestions hi puc consultar. Sobre quins serveis, tràmits i ajuts em podeu informar?"
    },
    "gl": {
      "question": "É a primeira vez que utilizo este servizo de atención e non sei moi ben que xestións podo consultar. Sobre que servizos, trámites e axudas me podedes informar?"
    },
    "eu": {
      "question": "Lehen aldia da arreta-zerbitzu hau erabiltzen dudala, eta ez dakit oso ondo zer izapide kontsulta ditzakedan. Zein zerbitzu, izapide eta laguntzari buruzko informazioa eman diezadakezue?"
    }
  },
  {
    "es": {
      "question": "Necesito resolver una duda administrativa y no sé si tengo que ir presencialmente. ¿Qué canales de atención tengo disponibles para contactar con la administración?"
    },
    "en": {
      "question": "I need to resolve an administrative query and I do not know whether I need to go to an office in person. What contact channels are available to reach the public administration?"
    },
    "pt": {
      "question": "Preciso de esclarecer uma dúvida administrativa e não sei se tenho de me deslocar presencialmente. Que canais de atendimento estão disponíveis para contactar a administração?"
    },
    "ca": {
      "question": "Necessito resoldre un dubte administratiu i no sé si he d’anar-hi presencialment. Quins canals d’atenció tinc disponibles per contactar amb l’administració?"
    },
    "gl": {
      "question": "Necesito resolver unha dúbida administrativa e non sei se teño que ir presencialmente. Que canles de atención teño dispoñibles para contactar coa administración?"
    },
    "eu": {
      "question": "Administrazio-kontsulta bat argitu behar dut, eta ez dakit aurrez aurre joan behar dudan. Zer arreta-kanal ditut administrazioarekin harremanetan jartzeko?"
    }
  },
  {
    "es": {
      "question": "Prefiero hacer una gestión en persona y quiero evitar desplazarme más de lo necesario. ¿Cómo puedo localizar la oficina de atención más cercana?"
    },
    "en": {
      "question": "I would rather deal with my request in person and I want to avoid travelling farther than necessary. How can I find the nearest public service office?"
    },
    "pt": {
      "question": "Prefiro tratar do assunto presencialmente e quero evitar deslocações desnecessárias. Como posso localizar o balcão de atendimento mais próximo?"
    },
    "ca": {
      "question": "Prefereixo fer una gestió presencialment i vull evitar desplaçar-me més del necessari. Com puc localitzar l’oficina d’atenció més propera?"
    },
    "gl": {
      "question": "Prefiro facer unha xestión en persoa e quero evitar desprazarme máis do necesario. Como podo localizar a oficina de atención máis próxima?"
    },
    "eu": {
      "question": "Izapidea aurrez aurre egin nahiago dut, eta behar baino gehiago ez dut mugitu nahi. Nola aurki dezaket hurbilen dagoen arreta-bulegoa?"
    }
  },
  {
    "es": {
      "question": "Quiero realizar una gestión sin desplazarme a una oficina. ¿Cómo puedo saber si el trámite se puede hacer por internet y qué necesito para iniciarlo?"
    },
    "en": {
      "question": "I would like to complete a procedure without going to an office. How can I find out whether it can be done online and what I need to get started?"
    },
    "pt": {
      "question": "Quero realizar um procedimento sem me deslocar a um balcão. Como posso saber se pode ser feito online e do que preciso para o iniciar?"
    },
    "ca": {
      "question": "Vull fer una gestió sense desplaçar-me a una oficina. Com puc saber si el tràmit es pot fer per internet i què necessito per iniciar-lo?"
    },
    "gl": {
      "question": "Quero facer unha xestión sen desprazarme a unha oficina. Como podo saber se o trámite se pode facer por internet e que necesito para inicialo?"
    },
    "eu": {
      "question": "Izapide bat bulego batera joan gabe egin nahi dut. Nola jakin dezaket internet bidez egin daitekeen eta zer behar dudan hasteko?"
    }
  },
  {
    "es": {
      "question": "Tengo que presentar un trámite online pero no dispongo de certificado digital. ¿Qué opciones de identificación electrónica puedo utilizar?"
    },
    "en": {
      "question": "I need to submit an online procedure but I do not have a digital certificate. What electronic identification options can I use?"
    },
    "pt": {
      "question": "Tenho de apresentar um procedimento online, mas não disponho de certificado digital. Que opções de identificação eletrónica posso utilizar?"
    },
    "ca": {
      "question": "He de presentar un tràmit en línia però no disposo de certificat digital. Quines opcions d’identificació electrònica puc utilitzar?"
    },
    "gl": {
      "question": "Teño que presentar un trámite en liña pero non dispoño de certificado dixital. Que opcións de identificación electrónica podo utilizar?"
    },
    "eu": {
      "question": "Online izapide bat aurkeztu behar dut, baina ez daukat ziurtagiri digitalik. Zer identifikazio elektronikoko aukera erabil ditzaket?"
    }
  },
  {
    "es": {
      "question": "Necesito enviar una solicitud y adjuntar documentación a la administración. ¿Existe un registro electrónico para presentarlo todo por internet?"
    },
    "en": {
      "question": "I need to submit an application and attach supporting documents to the administration. Is there an electronic registry where I can send everything online?"
    },
    "pt": {
      "question": "Preciso de enviar um pedido e anexar documentação à administração. Existe um registo eletrónico onde possa apresentar tudo pela internet?"
    },
    "ca": {
      "question": "Necessito enviar una sol·licitud i adjuntar documentació a l’administració. Hi ha un registre electrònic per presentar-ho tot per internet?"
    },
    "gl": {
      "question": "Necesito enviar unha solicitude e achegar documentación á administración. Existe un rexistro electrónico para presentalo todo por internet?"
    },
    "eu": {
      "question": "Eskaera bat bidali eta administrazioari dokumentazioa erantsi behar diot. Ba al dago dena internet bidez aurkezteko erregistro elektronikorik?"
    }
  },
  {
    "es": {
      "question": "Presenté una solicitud hace unos días y quiero saber si está avanzando. ¿Cómo puedo consultar el estado de un trámite que ya he iniciado?"
    },
    "en": {
      "question": "I submitted an application a few days ago and I would like to know whether it is progressing. How can I check the status of a procedure I have already started?"
    },
    "pt": {
      "question": "Apresentei um pedido há alguns dias e gostaria de saber se está a avançar. Como posso consultar o estado de um procedimento que já iniciei?"
    },
    "ca": {
      "question": "Vaig presentar una sol·licitud fa uns dies i vull saber si està avançant. Com puc consultar l’estat d’un tràmit que ja he iniciat?"
    },
    "gl": {
      "question": "Presentei unha solicitude hai uns días e quero saber se está avanzando. Como podo consultar o estado dun trámite que xa iniciei?"
    },
    "eu": {
      "question": "Duela egun batzuk eskaera bat aurkeztu nuen eta nola doan jakin nahi dut. Nola kontsulta dezaket dagoeneko hasita dudan izapide baten egoera?"
    }
  },
  {
    "es": {
      "question": "He hecho un trámite online y no quiero perder ninguna comunicación importante. ¿Cómo funcionan las notificaciones electrónicas y dónde puedo consultarlas?"
    },
    "en": {
      "question": "I have completed an online procedure and I do not want to miss any important communication. How do electronic notifications work and where can I check them?"
    },
    "pt": {
      "question": "Fiz um procedimento online e não quero perder nenhuma comunicação importante. Como funcionam as notificações eletrónicas e onde as posso consultar?"
    },
    "ca": {
      "question": "He fet un tràmit en línia i no vull perdre cap comunicació important. Com funcionen les notificacions electròniques i on les puc consultar?"
    },
    "gl": {
      "question": "Fixen un trámite en liña e non quero perder ningunha comunicación importante. Como funcionan as notificacións electrónicas e onde podo consultalas?"
    },
    "eu": {
      "question": "Online izapide bat egin dut eta ez dut komunikazio garrantzitsurik galdu nahi. Nola funtzionatzen dute jakinarazpen elektronikoek eta non kontsulta ditzaket?"
    }
  },
  {
    "es": {
      "question": "Vivo de alquiler y quiero saber si existe alguna ayuda para reducir el coste mensual de la vivienda. ¿Qué ayudas o prestaciones puedo consultar?"
    },
    "en": {
      "question": "I rent my home and I would like to know whether there is any support to reduce my monthly housing costs. What grants or benefits can I look into?"
    },
    "pt": {
      "question": "Vivo numa casa arrendada e gostaria de saber se existe algum apoio para reduzir o custo mensal da habitação. Que apoios ou prestações posso consultar?"
    },
    "ca": {
      "question": "Visc de lloguer i vull saber si hi ha algun ajut per reduir el cost mensual de l’habitatge. Quins ajuts o prestacions puc consultar?"
    },
    "gl": {
      "question": "Vivo de alugueiro e quero saber se existe algunha axuda para reducir o custo mensual da vivenda. Que axudas ou prestacións podo consultar?"
    },
    "eu": {
      "question": "Alokairuan bizi naiz eta etxebizitzaren hileko kostua murrizteko laguntzarik dagoen jakin nahi dut. Zer laguntza edo prestazio kontsulta ditzaket?"
    }
  },
  {
    "es": {
      "question": "Estoy teniendo dificultades para pagar el alquiler y me preocupa perder mi vivienda. ¿Qué recursos, ayudas o servicios de mediación tengo disponibles?"
    },
    "en": {
      "question": "I am struggling to pay my rent and I am worried about losing my home. What resources, financial support or mediation services are available?"
    },
    "pt": {
      "question": "Estou com dificuldades para pagar a renda e receio perder a minha casa. Que recursos, apoios ou serviços de mediação estão disponíveis?"
    },
    "ca": {
      "question": "Tinc dificultats per pagar el lloguer i em preocupa perdre l’habitatge. Quins recursos, ajuts o serveis de mediació tinc disponibles?"
    },
    "gl": {
      "question": "Estou tendo dificultades para pagar o alugueiro e preocúpame perder a miña vivenda. Que recursos, axudas ou servizos de mediación teño dispoñibles?"
    },
    "eu": {
      "question": "Alokairua ordaintzeko zailtasunak ditut eta etxebizitza galtzeko beldur naiz. Zer baliabide, laguntza edo bitartekaritza-zerbitzu ditut eskuragarri?"
    }
  },
  {
    "es": {
      "question": "Soy joven y quiero independizarme, pero me cuesta acceder a una vivienda. ¿Qué opciones de vivienda asequible o protegida puedo solicitar?"
    },
    "en": {
      "question": "I am young and I would like to move into my own home, but finding affordable housing is difficult. What affordable or protected housing options can I apply for?"
    },
    "pt": {
      "question": "Sou jovem e quero tornar-me independente, mas tenho dificuldade em aceder a uma habitação. Que opções de habitação acessível ou protegida posso solicitar?"
    },
    "ca": {
      "question": "Soc jove i vull independitzar-me, però em costa accedir a un habitatge. Quines opcions d’habitatge assequible o protegit puc sol·licitar?"
    },
    "gl": {
      "question": "Son novo e quero independizarme, pero cústame acceder a unha vivenda. Que opcións de vivenda accesible ou protexida podo solicitar?"
    },
    "eu": {
      "question": "Gaztea naiz eta emantzipatu nahi dut, baina etxebizitza eskuratzea zaila egiten zait. Etxebizitza eskuragarri edo babestuko zer aukera eska ditzaket?"
    }
  },
  {
    "es": {
      "question": "Voy a comprar una vivienda en un edificio antiguo y quiero asegurarme de que todo está en regla. ¿Cómo puedo consultar la cédula de habitabilidad, la inspección del edificio y posibles ayudas a la rehabilitación?"
    },
    "en": {
      "question": "I am planning to buy a home in an older building and I want to make sure everything is in order. How can I check habitability documentation, building inspections and possible renovation grants?"
    },
    "pt": {
      "question": "Vou comprar uma habitação num edifício antigo e quero garantir que está tudo em conformidade. Como posso consultar a documentação de habitabilidade, a inspeção do edifício e possíveis apoios à reabilitação?"
    },
    "ca": {
      "question": "Vull comprar un habitatge en un edifici antic i vull assegurar-me que tot està en regla. Com puc consultar la cèdula d’habitabilitat, la inspecció de l’edifici i possibles ajuts a la rehabilitació?"
    },
    "gl": {
      "question": "Vou comprar unha vivenda nun edificio antigo e quero asegurarme de que todo está en regra. Como podo consultar a cédula de habitabilidade, a inspección do edificio e posibles axudas á rehabilitación?"
    },
    "eu": {
      "question": "Eraikin zahar bateko etxebizitza bat erosi nahi dut eta dena behar bezala dagoela ziurtatu nahi dut. Nola kontsulta ditzaket bizigarritasun-agiria, eraikinaren ikuskapena eta birgaitzeko balizko laguntzak?"
    }
  },
  {
    "es": {
      "question": "Nos hemos mudado recientemente y necesito escolarizar a mi hijo. ¿Cómo funciona la preinscripción y qué pasos tengo que seguir?"
    },
    "en": {
      "question": "We have recently moved and I need to enrol my child in school. How does the pre-enrolment process work and what steps do I need to follow?"
    },
    "pt": {
      "question": "Mudámo-nos recentemente e preciso de matricular o meu filho na escola. Como funciona a pré-inscrição e que passos tenho de seguir?"
    },
    "ca": {
      "question": "Ens hem mudat fa poc i necessito escolaritzar el meu fill. Com funciona la preinscripció i quins passos he de seguir?"
    },
    "gl": {
      "question": "Mudámonos recentemente e necesito escolarizar o meu fillo. Como funciona a preinscrición e que pasos teño que seguir?"
    },
    "eu": {
      "question": "Duela gutxi lekuz aldatu gara eta semea edo alaba eskolatu behar dut. Nola funtzionatzen du aurrematrikulak eta zer urrats jarraitu behar ditut?"
    }
  },
  {
    "es": {
      "question": "Mi hijo está estudiando y quiero saber si podemos solicitar alguna beca o ayuda para los estudios, el comedor o el desplazamiento. ¿Qué opciones existen?"
    },
    "en": {
      "question": "My child is studying and I would like to know whether we can apply for a scholarship or support for education, school meals or travel. What options are available?"
    },
    "pt": {
      "question": "O meu filho está a estudar e gostaria de saber se podemos pedir uma bolsa ou apoio para os estudos, refeições escolares ou deslocações. Que opções existem?"
    },
    "ca": {
      "question": "El meu fill està estudiant i vull saber si podem sol·licitar alguna beca o ajut per als estudis, el menjador o el desplaçament. Quines opcions hi ha?"
    },
    "gl": {
      "question": "O meu fillo está estudando e quero saber se podemos solicitar algunha bolsa ou axuda para os estudos, o comedor ou o desprazamento. Que opcións existen?"
    },
    "eu": {
      "question": "Nire semea edo alaba ikasten ari da, eta ikasketetarako, jantokirako edo joan-etorrietarako beka edo laguntzaren bat eska dezakegun jakin nahi dut. Zer aukera daude?"
    }
  },
  {
    "es": {
      "question": "He estudiado en otro país y necesito que mis estudios sean reconocidos aquí. ¿Cómo puedo homologar o convalidar un título extranjero?"
    },
    "en": {
      "question": "I studied in another country and I need my studies to be recognised here. How can I have a foreign qualification recognised or validated?"
    },
    "pt": {
      "question": "Estudei noutro país e preciso que os meus estudos sejam reconhecidos aqui. Como posso homologar ou validar um diploma estrangeiro?"
    },
    "ca": {
      "question": "He estudiat en un altre país i necessito que els meus estudis siguin reconeguts aquí. Com puc homologar o convalidar un títol estranger?"
    },
    "gl": {
      "question": "Estudei noutro país e necesito que os meus estudos sexan recoñecidos aquí. Como podo homologar ou validar un título estranxeiro?"
    },
    "eu": {
      "question": "Beste herrialde batean ikasi dut eta nire ikasketak hemen aitortzea behar dut. Nola homologatu edo baliozkotu dezaket atzerriko titulu bat?"
    }
  },
  {
    "es": {
      "question": "Quiero mejorar mi formación para encontrar trabajo y estoy valorando estudiar Formación Profesional. ¿Dónde puedo consultar la oferta, las especialidades y las vías de acceso?"
    },
    "en": {
      "question": "I want to improve my qualifications to find work and I am considering vocational education and training. Where can I check available courses, specialisations and entry routes?"
    },
    "pt": {
      "question": "Quero melhorar a minha formação para encontrar emprego e estou a considerar a formação profissional. Onde posso consultar a oferta, as especialidades e as vias de acesso?"
    },
    "ca": {
      "question": "Vull millorar la meva formació per trobar feina i estic valorant estudiar Formació Professional. On puc consultar l’oferta, les especialitats i les vies d’accés?"
    },
    "gl": {
      "question": "Quero mellorar a miña formación para atopar traballo e estou valorando estudar Formación Profesional. Onde podo consultar a oferta, as especialidades e as vías de acceso?"
    },
    "eu": {
      "question": "Lana aurkitzeko nire prestakuntza hobetu nahi dut eta Lanbide Heziketa egitea aztertzen ari naiz. Non kontsulta ditzaket eskaintza, espezialitateak eta sarbide-bideak?"
    }
  },
  {
    "es": {
      "question": "Acabo de mudarme y quiero saber cómo acceder al sistema sanitario público. ¿Qué tengo que hacer para poder recibir asistencia sanitaria?"
    },
    "en": {
      "question": "I have just moved here and I would like to know how to access the public healthcare system. What do I need to do to receive healthcare?"
    },
    "pt": {
      "question": "Acabei de me mudar e gostaria de saber como aceder ao sistema público de saúde. O que tenho de fazer para receber assistência médica?"
    },
    "ca": {
      "question": "M’acabo de mudar i vull saber com accedir al sistema sanitari públic. Què he de fer per poder rebre assistència sanitària?"
    },
    "gl": {
      "question": "Acabo de mudarme e quero saber como acceder ao sistema sanitario público. Que teño que facer para poder recibir asistencia sanitaria?"
    },
    "eu": {
      "question": "Duela gutxi hona bizitzera etorri naiz eta osasun-sistema publikora nola sartu jakin nahi dut. Zer egin behar dut osasun-arreta jasotzeko?"
    }
  },
  {
    "es": {
      "question": "Quiero consultar mis informes, citas o información sanitaria por internet y también saber qué centro tengo más cerca. ¿Qué servicios online y buscadores tengo disponibles?"
    },
    "en": {
      "question": "I would like to check my medical reports, appointments or health information online and also find the nearest healthcare centre. What online services and search tools are available?"
    },
    "pt": {
      "question": "Quero consultar relatórios, marcações ou informações de saúde pela internet e também saber qual é o centro de saúde mais próximo. Que serviços online e ferramentas de pesquisa estão disponíveis?"
    },
    "ca": {
      "question": "Vull consultar els meus informes, cites o informació sanitària per internet i també saber quin centre tinc més a prop. Quins serveis en línia i cercadors tinc disponibles?"
    },
    "gl": {
      "question": "Quero consultar os meus informes, citas ou información sanitaria por internet e tamén saber que centro teño máis preto. Que servizos en liña e buscadores teño dispoñibles?"
    },
    "eu": {
      "question": "Nire txostenak, hitzorduak edo osasun-informazioa internet bidez kontsultatu nahi ditut, eta hurbilen dagoen osasun-zentroa zein den ere jakin nahi dut. Zer online zerbitzu eta bilatzaile daude?"
    }
  },
  {
    "es": {
      "question": "Me he quedado sin trabajo y quiero empezar cuanto antes a buscar empleo. ¿Cómo puedo inscribirme como demandante de empleo y qué servicios de orientación tengo disponibles?"
    },
    "en": {
      "question": "I have lost my job and I want to start looking for work as soon as possible. How can I register as a job seeker and what employment guidance services are available?"
    },
    "pt": {
      "question": "Fiquei sem trabalho e quero começar a procurar emprego o mais depressa possível. Como posso inscrever-me como candidato a emprego e que serviços de orientação estão disponíveis?"
    },
    "ca": {
      "question": "M’he quedat sense feina i vull començar com més aviat millor a buscar-ne. Com puc inscriure’m com a demandant d’ocupació i quins serveis d’orientació tinc disponibles?"
    },
    "gl": {
      "question": "Quedei sen traballo e quero empezar canto antes a buscar emprego. Como podo inscribirme como demandante de emprego e que servizos de orientación teño dispoñibles?"
    },
    "eu": {
      "question": "Lanik gabe geratu naiz eta lehenbailehen lana bilatzen hasi nahi dut. Nola eman dezaket izena enplegu-eskatzaile gisa eta zer orientazio-zerbitzu ditut eskuragarri?"
    }
  },
  {
    "es": {
      "question": "Estoy buscando trabajo y también me interesa mejorar mi perfil profesional. ¿Dónde puedo consultar ofertas de empleo, cursos de formación y acreditaciones?"
    },
    "en": {
      "question": "I am looking for work and I would also like to improve my professional profile. Where can I find job offers, training courses and professional accreditations?"
    },
    "pt": {
      "question": "Estou à procura de emprego e também quero melhorar o meu perfil profissional. Onde posso consultar ofertas de emprego, cursos de formação e acreditações?"
    },
    "ca": {
      "question": "Estic buscant feina i també m’interessa millorar el meu perfil professional. On puc consultar ofertes de feina, cursos de formació i acreditacions?"
    },
    "gl": {
      "question": "Estou buscando traballo e tamén me interesa mellorar o meu perfil profesional. Onde podo consultar ofertas de emprego, cursos de formación e acreditacións?"
    },
    "eu": {
      "question": "Lana bilatzen ari naiz eta nire profil profesionala ere hobetu nahi dut. Non kontsulta ditzaket lan-eskaintzak, prestakuntza-ikastaroak eta egiaztapen profesionalak?"
    }
  },
  {
    "es": {
      "question": "Estoy pensando en empezar a trabajar por mi cuenta y quiero hacerlo correctamente desde el principio. ¿Qué trámites, recursos y ayudas existen para darme de alta como autónomo?"
    },
    "en": {
      "question": "I am thinking about becoming self-employed and I want to do everything correctly from the start. What procedures, resources and support are available to set up as self-employed?"
    },
    "pt": {
      "question": "Estou a pensar começar a trabalhar por conta própria e quero fazer tudo corretamente desde o início. Que procedimentos, recursos e apoios existem para iniciar atividade como trabalhador independente?"
    },
    "ca": {
      "question": "Estic pensant a començar a treballar pel meu compte i vull fer-ho correctament des del principi. Quins tràmits, recursos i ajuts hi ha per donar-me d’alta com a autònom?"
    },
    "gl": {
      "question": "Estou pensando en empezar a traballar pola miña conta e quero facelo correctamente desde o principio. Que trámites, recursos e axudas existen para darme de alta como autónomo?"
    },
    "eu": {
      "question": "Nire kontura lanean hastea pentsatzen ari naiz eta hasieratik dena ondo egin nahi dut. Zer izapide, baliabide eta laguntza daude autonomo gisa alta emateko?"
    }
  },
  {
    "es": {
      "question": "Quiero abrir un pequeño establecimiento y necesito saber qué requisitos debo cumplir. ¿Dónde puedo consultar licencias, normativa, horarios y los pasos para ponerlo en marcha?"
    },
    "en": {
      "question": "I want to open a small retail establishment and I need to know which requirements I must meet. Where can I find information on licences, regulations, opening hours and the steps to get started?"
    },
    "pt": {
      "question": "Quero abrir um pequeno estabelecimento comercial e preciso de saber que requisitos tenho de cumprir. Onde posso consultar licenças, regulamentação, horários e os passos necessários para começar?"
    },
    "ca": {
      "question": "Vull obrir un petit establiment comercial i necessito saber quins requisits he de complir. On puc consultar llicències, normativa, horaris i els passos per posar-lo en marxa?"
    },
    "gl": {
      "question": "Quero abrir un pequeno establecemento comercial e necesito saber que requisitos debo cumprir. Onde podo consultar licenzas, normativa, horarios e os pasos para poñelo en marcha?"
    },
    "eu": {
      "question": "Merkataritza-establezimendu txiki bat ireki nahi dut eta zer baldintza bete behar ditudan jakin behar dut. Non kontsulta ditzaket lizentziak, araudia, ordutegiak eta martxan jartzeko urratsak?"
    }
  },
  {
    "es": {
      "question": "He tenido un problema con una empresa y no hemos conseguido resolverlo directamente. ¿Cómo puedo presentar una queja, reclamación o denuncia de consumo?"
    },
    "en": {
      "question": "I have had a problem with a company and we have not been able to resolve it directly. How can I submit a consumer complaint, claim or report?"
    },
    "pt": {
      "question": "Tive um problema com uma empresa e não conseguimos resolvê-lo diretamente. Como posso apresentar uma queixa, reclamação ou denúncia de consumo?"
    },
    "ca": {
      "question": "He tingut un problema amb una empresa i no l’hem pogut resoldre directament. Com puc presentar una queixa, reclamació o denúncia de consum?"
    },
    "gl": {
      "question": "Tiven un problema cunha empresa e non conseguimos resolvelo directamente. Como podo presentar unha queixa, reclamación ou denuncia de consumo?"
    },
    "eu": {
      "question": "Enpresa batekin arazo bat izan dut eta ezin izan dugu zuzenean konpondu. Nola aurkez dezaket kontsumoko kexa, erreklamazioa edo salaketa?"
    }
  },
  {
    "es": {
      "question": "Un familiar necesita apoyo por una discapacidad o una situación de dependencia y no sabemos por dónde empezar. ¿Qué reconocimientos, prestaciones o servicios podemos solicitar?"
    },
    "en": {
      "question": "A family member needs support because of a disability or dependency situation and we do not know where to start. What assessments, benefits or services can we apply for?"
    },
    "pt": {
      "question": "Um familiar precisa de apoio devido a uma deficiência ou situação de dependência e não sabemos por onde começar. Que reconhecimentos, prestações ou serviços podemos solicitar?"
    },
    "ca": {
      "question": "Un familiar necessita suport per una discapacitat o una situació de dependència i no sabem per on començar. Quins reconeixements, prestacions o serveis podem sol·licitar?"
    },
    "gl": {
      "question": "Un familiar necesita apoio por unha discapacidade ou unha situación de dependencia e non sabemos por onde empezar. Que recoñecementos, prestacións ou servizos podemos solicitar?"
    },
    "eu": {
      "question": "Senide batek desgaitasun edo mendekotasun egoera batengatik laguntza behar du eta ez dakigu nondik hasi. Zer aitortza, prestazio edo zerbitzu eska ditzakegu?"
    }
  },
  {
    "es": {
      "question": "Creo que me han puesto una multa de tráfico y quiero comprobarlo antes de que pase el plazo. ¿Cómo puedo consultar una sanción y qué opciones tengo para gestionarla?"
    },
    "en": {
      "question": "I think I may have received a traffic fine and I want to check it before any deadline expires. How can I look up a fine and what options do I have to deal with it?"
    },
    "pt": {
      "question": "Penso que recebi uma multa de trânsito e quero confirmá-la antes de terminar o prazo. Como posso consultar a infração e que opções tenho para a tratar?"
    },
    "ca": {
      "question": "Crec que m’han posat una multa de trànsit i vull comprovar-ho abans que passi el termini. Com puc consultar una sanció i quines opcions tinc per gestionar-la?"
    },
    "gl": {
      "question": "Creo que me puxeron unha multa de tráfico e quero comprobalo antes de que pase o prazo. Como podo consultar unha sanción e que opcións teño para xestionala?"
    },
    "eu": {
      "question": "Uste dut trafiko-isun bat jarri didatela eta epea igaro aurretik egiaztatu nahi dut. Nola kontsulta dezaket zehapena eta zer aukera ditut kudeatzeko?"
    }
  },
  {
    "es": {
      "question": "Nos vamos a mudar con dos niños y quiero dejar resueltos los temas más importantes antes de instalarnos. ¿Podríais orientarme sobre vivienda, escolarización y acceso a la sanidad pública?"
    },
    "en": {
      "question": "We are moving with two children and I would like to sort out the most important matters before we settle in. Could you guide me on housing, school enrolment and access to public healthcare?"
    },
    "pt": {
      "question": "Vamos mudar-nos com duas crianças e quero resolver os assuntos mais importantes antes de nos instalarmos. Podem orientar-me sobre habitação, matrícula escolar e acesso à saúde pública?"
    },
    "ca": {
      "question": "Ens mudarem amb dos nens i vull deixar resolts els temes més importants abans d’instal·lar-nos. Em podríeu orientar sobre habitatge, escolarització i accés a la sanitat pública?"
    },
    "gl": {
      "question": "Imos mudarnos con dous nenos e quero deixar resoltos os temas máis importantes antes de instalarnos. Poderiades orientarme sobre vivenda, escolarización e acceso á sanidade pública?"
    },
    "eu": {
      "question": "Bi haurrekin lekuz aldatuko gara eta instalatu aurretik gai garrantzitsuenak konponduta utzi nahi ditut. Etxebizitzari, eskolatzeari eta osasun publikoan sartzeko moduari buruz orienta nazakezue?"
    }
  },
  {
    "es": {
      "question": "Tengo que presentar una solicitud por internet, pero no tengo certificado digital y además necesito adjuntar varios documentos. ¿Cómo puedo identificarme, presentar todo correctamente y después comprobar el estado de la solicitud?"
    },
    "en": {
      "question": "I need to submit an application online, but I do not have a digital certificate and I also need to attach several documents. How can I identify myself, submit everything correctly and then track the application?"
    },
    "pt": {
      "question": "Tenho de apresentar um pedido pela internet, mas não tenho certificado digital e preciso de anexar vários documentos. Como posso identificar-me, apresentar tudo corretamente e depois acompanhar o estado do pedido?"
    },
    "ca": {
      "question": "He de presentar una sol·licitud per internet, però no tinc certificat digital i, a més, he d’adjuntar diversos documents. Com puc identificar-me, presentar-ho tot correctament i després comprovar l’estat de la sol·licitud?"
    },
    "gl": {
      "question": "Teño que presentar unha solicitude por internet, pero non teño certificado dixital e ademais necesito achegar varios documentos. Como podo identificarme, presentalo todo correctamente e despois comprobar o estado da solicitude?"
    },
    "eu": {
      "question": "Eskaera bat internet bidez aurkeztu behar dut, baina ez daukat ziurtagiri digitalik eta hainbat dokumentu erantsi behar ditut. Nola identifikatu, dena behar bezala aurkeztu eta gero eskaeraren egoera egiaztatu dezaket?"
    }
  },
  {
    "es": {
      "question": "Tengo 24 años, quiero independizarme y ahora mismo estoy buscando trabajo. ¿Qué ayudas de vivienda, servicios de empleo y opciones de formación podría consultar para mejorar mi situación?"
    },
    "en": {
      "question": "I am 24, I want to move into my own home and I am currently looking for work. What housing support, employment services and training options could I look into to improve my situation?"
    },
    "pt": {
      "question": "Tenho 24 anos, quero tornar-me independente e neste momento estou à procura de emprego. Que apoios à habitação, serviços de emprego e opções de formação posso consultar para melhorar a minha situação?"
    },
    "ca": {
      "question": "Tinc 24 anys, vull independitzar-me i ara mateix estic buscant feina. Quins ajuts d’habitatge, serveis d’ocupació i opcions de formació podria consultar per millorar la meva situació?"
    },
    "gl": {
      "question": "Teño 24 anos, quero independizarme e agora mesmo estou buscando traballo. Que axudas de vivenda, servizos de emprego e opcións de formación podería consultar para mellorar a miña situación?"
    },
    "eu": {
      "question": "24 urte ditut, emantzipatu nahi dut eta une honetan lana bilatzen ari naiz. Zer etxebizitza-laguntza, enplegu-zerbitzu eta prestakuntza-aukera kontsulta ditzaket nire egoera hobetzeko?"
    }
  },
  {
    "es": {
      "question": "Mi padre es mayor, tiene dificultades para hacer trámites por internet y además necesita apoyo por dependencia. ¿Cómo puedo ayudarle con sus gestiones y qué prestaciones o servicios podríamos solicitar?"
    },
    "en": {
      "question": "My father is elderly, has difficulty completing online procedures and also needs support because of dependency. How can I help him with his administrative matters and what benefits or services could we apply for?"
    },
    "pt": {
      "question": "O meu pai é idoso, tem dificuldades em fazer procedimentos pela internet e também precisa de apoio por dependência. Como posso ajudá-lo nas suas gestões e que prestações ou serviços podemos solicitar?"
    },
    "ca": {
      "question": "El meu pare és gran, té dificultats per fer tràmits per internet i, a més, necessita suport per dependència. Com puc ajudar-lo amb les seves gestions i quines prestacions o serveis podríem sol·licitar?"
    },
    "gl": {
      "question": "O meu pai é maior, ten dificultades para facer trámites por internet e ademais necesita apoio por dependencia. Como podo axudarlle coas súas xestións e que prestacións ou servizos poderiamos solicitar?"
    },
    "eu": {
      "question": "Nire aita adinekoa da, internet bidezko izapideak egiteko zailtasunak ditu eta, gainera, mendekotasunagatik laguntza behar du. Nola lagun diezaioket bere kudeaketetan eta zer prestazio edo zerbitzu eska ditzakegu?"
    }
  },
  {
    "es": {
      "question": "Quiero dejar mi trabajo y abrir un pequeño negocio por mi cuenta. ¿Podríais explicarme qué pasos tengo que seguir para hacerme autónomo, poner en marcha el establecimiento y consultar posibles ayudas?"
    },
    "en": {
      "question": "I want to leave my current job and open a small business of my own. Could you explain the steps to become self-employed, open the establishment and check what support may be available?"
    },
    "pt": {
      "question": "Quero deixar o meu emprego e abrir um pequeno negócio por conta própria. Podem explicar-me os passos para me tornar trabalhador independente, abrir o estabelecimento e consultar possíveis apoios?"
    },
    "ca": {
      "question": "Vull deixar la meva feina i obrir un petit negoci pel meu compte. Em podríeu explicar quins passos he de seguir per fer-me autònom, posar en marxa l’establiment i consultar possibles ajuts?"
    },
    "gl": {
      "question": "Quero deixar o meu traballo e abrir un pequeno negocio pola miña conta. Poderiades explicarme que pasos teño que seguir para facerme autónomo, poñer en marcha o establecemento e consultar posibles axudas?"
    },
    "eu": {
      "question": "Nire lana utzi eta nire kontura negozio txiki bat ireki nahi dut. Azal diezadakezue zer urrats jarraitu behar ditudan autonomo izateko, establezimendua martxan jartzeko eta balizko laguntzak kontsultatzeko?"
    }
  },
  {
    "es": {
      "question": "Tengo un conflicto con una empresa, ya he intentado resolverlo directamente y no ha funcionado. ¿Qué opciones tengo para reclamar y, si necesito asesoramiento legal y no puedo pagarlo, puedo solicitar asistencia jurídica gratuita?"
    },
    "en": {
      "question": "I have a dispute with a company, I have already tried to resolve it directly and it has not worked. What options do I have to make a claim and, if I need legal advice but cannot afford it, can I apply for free legal assistance?"
    },
    "pt": {
      "question": "Tenho um conflito com uma empresa, já tentei resolvê-lo diretamente e não resultou. Que opções tenho para reclamar e, se precisar de aconselhamento jurídico mas não puder pagá-lo, posso solicitar apoio judiciário gratuito?"
    },
    "ca": {
      "question": "Tinc un conflicte amb una empresa, ja he intentat resoldre’l directament i no ha funcionat. Quines opcions tinc per reclamar i, si necessito assessorament legal i no el puc pagar, puc sol·licitar assistència jurídica gratuïta?"
    },
    "gl": {
      "question": "Teño un conflito cunha empresa, xa intentei resolvelo directamente e non funcionou. Que opcións teño para reclamar e, se necesito asesoramento legal e non podo pagalo, podo solicitar asistencia xurídica gratuíta?"
    },
    "eu": {
      "question": "Enpresa batekin gatazka bat dut, zuzenean konpontzen saiatu naiz eta ez du funtzionatu. Zer aukera ditut erreklamatzeko eta, aholkularitza juridikoa behar badut baina ordaindu ezin badut, doako laguntza juridikoa eska dezaket?"
    }
  },
  {
    "es": {
      "question": "Se anuncian lluvias muy intensas y vivo en una zona que puede inundarse. ¿Qué recomendaciones de prevención debo seguir y qué debería hacer si la situación se convierte en una emergencia?"
    },
    "en": {
      "question": "Very heavy rain has been forecast and I live in an area that can flood. What prevention advice should I follow and what should I do if the situation becomes an emergency?"
    },
    "pt": {
      "question": "Estão previstas chuvas muito intensas e vivo numa zona que pode inundar. Que recomendações de prevenção devo seguir e o que devo fazer se a situação se transformar numa emergência?"
    },
    "ca": {
      "question": "S’anuncien pluges molt intenses i visc en una zona que es pot inundar. Quines recomanacions de prevenció he de seguir i què hauria de fer si la situació es converteix en una emergència?"
    },
    "gl": {
      "question": "Anúncianse choivas moi intensas e vivo nunha zona que pode inundarse. Que recomendacións de prevención debo seguir e que debería facer se a situación se converte nunha emerxencia?"
    },
    "eu": {
      "question": "Euri oso handiak iragarri dituzte eta uholde-arriskua duen eremu batean bizi naiz. Zer prebentzio-gomendio jarraitu behar ditut eta zer egin beharko nuke egoera larrialdi bihurtzen bada?"
    }
  },
  {
    "es": {
      "question": "Acabo de llegar del extranjero y quiero organizar mi nueva etapa. Necesito saber cómo reconocer mis estudios, acceder a la sanidad pública y empezar a buscar trabajo. ¿Por dónde me recomendáis empezar?"
    },
    "en": {
      "question": "I have just arrived from abroad and I want to organise my new start. I need to know how to have my studies recognised, access public healthcare and begin looking for work. Where would you recommend I start?"
    },
    "pt": {
      "question": "Acabei de chegar do estrangeiro e quero organizar esta nova etapa. Preciso de saber como reconhecer os meus estudos, aceder à saúde pública e começar a procurar emprego. Por onde recomendam que comece?"
    },
    "ca": {
      "question": "Acabo d’arribar de l’estranger i vull organitzar aquesta nova etapa. Necessito saber com reconèixer els meus estudis, accedir a la sanitat pública i començar a buscar feina. Per on em recomaneu començar?"
    },
    "gl": {
      "question": "Acabo de chegar do estranxeiro e quero organizar esta nova etapa. Necesito saber como recoñecer os meus estudos, acceder á sanidade pública e empezar a buscar traballo. Por onde me recomendades empezar?"
    },
    "eu": {
      "question": "Atzerritik iritsi berria naiz eta etapa berri hau antolatu nahi dut. Nire ikasketak aitortzeko, osasun publikoan sartzeko eta lana bilatzen hasteko zer egin behar dudan jakin nahi dut. Nondik hastea gomendatzen didazue?"
    }
  }
];
