const hotelQuestions = [
  {
    "es": {
      "question": "Estoy comparando varios hoteles para una próxima estancia y me gustaría saber qué servicios ofrece el hotel a sus huéspedes. ¿Qué podría disfrutar durante mi estancia?"
    },
    "en": {
      "question": "I'm comparing a few hotels for an upcoming stay in and I'd like to understand what el hotel offers its guests. What services could I enjoy during my stay?"
    },
    "pt": {
      "question": "Estou a comparar vários hotéis para uma próxima estadia em e gostaria de saber que serviços o el hotel oferece aos seus hóspedes. De que poderia usufruir durante a minha estadia?"
    },
    "ca": {
      "question": "Estic comparant diversos hotels per a una propera estada a i m'agradaria saber quins serveis ofereix el hotel als seus hostes. De què podria gaudir durant l'estada?"
    },
    "gl": {
      "question": "Estou comparando varios hoteis para unha próxima estadía en e gustaríame saber que servizos ofrece el hotel aos seus hóspedes. De que podería gozar durante a miña estadía?"
    },
    "eu": {
      "question": "egingo dudan hurrengo egonaldirako hainbat hotel alderatzen ari naiz, eta Mitel Hospitalityk gonbidatuei zer zerbitzu eskaintzen dizkien jakin nahiko nuke. Zer aukera izango nituzke egonaldian gozatzeko?"
    }
  },
  {
    "es": {
      "question": "Mi vuelo llega por la mañana y el día de regreso salgo bastante tarde. ¿A qué hora puedo hacer el check-in y a qué hora tendría que dejar la habitación?"
    },
    "en": {
      "question": "My flight arrives in the morning, and on my departure day I leave quite late. What time can I check in, and what time would I need to check out?"
    },
    "pt": {
      "question": "O meu voo chega de manhã e, no dia do regresso, parto bastante tarde. A partir de que horas posso fazer o check-in e a que horas tenho de deixar o quarto?"
    },
    "ca": {
      "question": "El meu vol arriba al matí i el dia de tornada marxo bastant tard. A quina hora puc fer el check-in i a quina hora hauria de deixar l'habitació?"
    },
    "gl": {
      "question": "O meu voo chega pola mañá e o día de regreso saio bastante tarde. A que hora podo facer o check-in e a que hora tería que deixar a habitación?"
    },
    "eu": {
      "question": "Nire hegaldia goizean iristen da, eta itzulera-egunean nahiko berandu ateratzen naiz. Zer ordutan egin dezaket check-in-a, eta zer ordutarako utzi behar nuke gela?"
    }
  },
  {
    "es": {
      "question": "Durante mi estancia seguramente necesitaré coordinar algunas cosas con el hotel. ¿Cuál es la forma más sencilla de ponerme en contacto con recepción?"
    },
    "en": {
      "question": "I'll probably need to coordinate a few things with the hotel during my stay. What's the easiest way to get in touch with reception?"
    },
    "pt": {
      "question": "Durante a minha estadia provavelmente vou precisar de tratar de algumas coisas com o hotel. Qual é a forma mais simples de entrar em contacto com a receção?"
    },
    "ca": {
      "question": "Durant la meva estada segurament hauré de coordinar algunes coses amb l'hotel. Quina és la manera més senzilla de posar-me en contacte amb recepció?"
    },
    "gl": {
      "question": "Durante a miña estadía seguramente necesitarei coordinar algunhas cousas co hotel. Cal é a maneira máis sinxela de poñerme en contacto coa recepción?"
    },
    "eu": {
      "question": "Egonaldian zehar ziurrenik hainbat gauza koordinatu beharko ditut hotelarekin. Zein da harrerarekin harremanetan jartzeko modurik errazena?"
    }
  },
  {
    "es": {
      "question": "Voy a viajar con mi pareja y quiero elegir bien la habitación antes de reservar. ¿Qué tipos de habitaciones tenéis en el hotel y qué opciones podría valorar?"
    },
    "en": {
      "question": "I'm travelling with my partner and I'd like to choose the right room before booking. What room types do you have at el hotel, and what options should I consider?"
    },
    "pt": {
      "question": "Vou viajar em casal e quero escolher bem o quarto antes de reservar. Que tipos de quartos existem no el hotel e que opções devo considerar?"
    },
    "ca": {
      "question": "Viatjaré amb la meva parella i vull triar bé l'habitació abans de reservar. Quins tipus d'habitacions teniu a el hotel i quines opcions podria valorar?"
    },
    "gl": {
      "question": "Vou viaxar coa miña parella e quero escoller ben a habitación antes de reservar. Que tipos de habitacións tedes en el hotel e que opcións podería valorar?"
    },
    "eu": {
      "question": "Bikotekidearekin bidaiatuko dut eta erreserba egin aurretik gela ondo aukeratu nahi dut. Zer gela mota dituzue Mitel Hospitalityn, eta zer aukera hartu beharko nituzke kontuan?"
    }
  },
  {
    "es": {
      "question": "Estoy dudando entre reservar una habitación Deluxe o una Suite para una estancia especial. ¿Cuáles son las principales diferencias entre ambas?"
    },
    "en": {
      "question": "I'm trying to decide between a Deluxe Room and a Suite for a special stay. What are the main differences between the two?"
    },
    "pt": {
      "question": "Estou indeciso entre reservar um quarto Deluxe ou uma Suite para uma estadia especial. Quais são as principais diferenças entre as duas opções?"
    },
    "ca": {
      "question": "Estic dubtant entre reservar una habitació Deluxe o una Suite per a una estada especial. Quines són les principals diferències entre totes dues?"
    },
    "gl": {
      "question": "Estou dubidando entre reservar unha habitación Deluxe ou unha Suite para unha estadía especial. Cales son as principais diferenzas entre ambas?"
    },
    "eu": {
      "question": "Egonaldi berezi baterako Deluxe gela edo Suite bat erreserbatu zalantzan nabil. Zein dira bien arteko desberdintasun nagusiak?"
    }
  },
  {
    "es": {
      "question": "Quiero asegurarme de tener todo lo necesario sin tener que pedir cosas al llegar. ¿Qué servicios y comodidades incluyen las habitaciones?"
    },
    "en": {
      "question": "I'd like to make sure I'll have everything I need without having to request things once I arrive. What services and amenities are included in the rooms?"
    },
    "pt": {
      "question": "Quero ter a certeza de que vou encontrar tudo o que preciso sem ter de pedir coisas quando chegar. Que serviços e comodidades estão incluídos nos quartos?"
    },
    "ca": {
      "question": "Vull assegurar-me de tenir tot el que necessito sense haver de demanar coses quan arribi. Quins serveis i comoditats inclouen les habitacions?"
    },
    "gl": {
      "question": "Quero asegurarme de ter todo o necesario sen ter que pedir cousas ao chegar. Que servizos e comodidades inclúen as habitacións?"
    },
    "eu": {
      "question": "Iritsitakoan gauzak eskatu behar ez izateko, behar dudan guztia izango dudala ziurtatu nahi dut. Zer zerbitzu eta erosotasun daude geletan?"
    }
  },
  {
    "es": {
      "question": "Es mi primera visita a y me haría ilusión alojarme en una habitación con buenas vistas. ¿Hay habitaciones con vistas a la ciudad?"
    },
    "en": {
      "question": "It's my first visit to and I'd really like a room with a nice view. Do you have rooms overlooking the city?"
    },
    "pt": {
      "question": "É a minha primeira visita a e gostava muito de ficar num quarto com boas vistas. Há quartos com vista para a cidade?"
    },
    "ca": {
      "question": "És la meva primera visita a i em faria il·lusió allotjar-me en una habitació amb bones vistes. Hi ha habitacions amb vistes a la ciutat?"
    },
    "gl": {
      "question": "É a miña primeira visita a e faríame ilusión aloxarme nunha habitación con boas vistas. Hai habitacións con vistas á cidade?"
    },
    "eu": {
      "question": "Madrilera egiten dudan lehen bisita da, eta hiriaren ikuspegi politak dituen gela batean ostatu hartzea gustatuko litzaidake. Ba al dituzue hirira begira dauden gelak?"
    }
  },
  {
    "es": {
      "question": "Quiero sorprender a mi pareja por nuestro aniversario y me gustaría que la habitación fuese realmente especial. ¿Cuál me recomendaríais para una ocasión así?"
    },
    "en": {
      "question": "I'd like to surprise my partner for our anniversary and I'd love the room to feel truly special. Which one would you recommend for an occasion like this?"
    },
    "pt": {
      "question": "Quero surpreender a minha cara-metade no nosso aniversário e gostava que o quarto fosse realmente especial. Qual me recomendaria para uma ocasião destas?"
    },
    "ca": {
      "question": "Vull sorprendre la meva parella pel nostre aniversari i m'agradaria que l'habitació fos realment especial. Quina em recomanaríeu per a una ocasió així?"
    },
    "gl": {
      "question": "Quero sorprender á miña parella polo noso aniversario e gustaríame que a habitación fose realmente especial. Cal me recomendariades para unha ocasión así?"
    },
    "eu": {
      "question": "Gure urteurrenean bikotekidea harritu nahi dut, eta gela benetan berezia izatea gustatuko litzaidake. Zein gomendatuko zenidakete horrelako une baterako?"
    }
  },
  {
    "es": {
      "question": "Después de un día entero visitando probablemente no me apetezca volver a salir para cenar. ¿Qué opciones de restaurante tengo dentro de el hotel?"
    },
    "en": {
      "question": "After a full day exploring, I probably won't feel like going back out for dinner. What restaurant options are available at el hotel?"
    },
    "pt": {
      "question": "Depois de um dia inteiro a visitar, provavelmente não me vai apetecer voltar a sair para jantar. Que opções de restaurante tenho dentro do el hotel?"
    },
    "ca": {
      "question": "Després de passar tot el dia visitant, probablement no em vindrà de gust tornar a sortir per sopar. Quines opcions de restaurant tinc dins de el hotel?"
    },
    "gl": {
      "question": "Despois dun día enteiro visitando probablemente non me apeteza volver saír para cear. Que opcións de restaurante teño dentro de el hotel?"
    },
    "eu": {
      "question": "Madril bisitatzen egun osoa eman ondoren, agian ez dut berriro kalera atera nahi afaltzera. Zer jatetxe aukera ditut Mitel Hospitalityren barruan?"
    }
  },
  {
    "es": {
      "question": "Quiero cenar en el hotel una de las noches y prefiero no quedarme sin mesa. ¿Es necesario reservar con antelación?"
    },
    "en": {
      "question": "I'd like to have dinner at the hotel one evening and I'd rather not risk missing out on a table. Do I need to book in advance?"
    },
    "pt": {
      "question": "Quero jantar no hotel numa das noites e prefiro não correr o risco de ficar sem mesa. É necessário reservar com antecedência?"
    },
    "ca": {
      "question": "Vull sopar a l'hotel una de les nits i prefereixo no quedar-me sense taula. Cal reservar amb antelació?"
    },
    "gl": {
      "question": "Quero cear no hotel unha das noites e prefiro non quedar sen mesa. É necesario reservar con antelación?"
    },
    "eu": {
      "question": "Gauetako batean hotelean afaldu nahi dut eta ez nuke mahairik gabe geratu nahi. Aldez aurretik erreserbatu behar al da?"
    }
  },
  {
    "es": {
      "question": "Después de un viaje largo puede que prefiera cenar tranquilamente en la habitación. ¿el hotel dispone de servicio de habitaciones?"
    },
    "en": {
      "question": "After a long journey, I may prefer to have dinner quietly in my room. Does el hotel offer room service?"
    },
    "pt": {
      "question": "Depois de uma viagem longa, talvez prefira jantar tranquilamente no quarto. O el hotel tem serviço de quartos?"
    },
    "ca": {
      "question": "Després d'un viatge llarg, potser preferiria sopar tranquil·lament a l'habitació. el hotel disposa de servei d'habitacions?"
    },
    "gl": {
      "question": "Despois dunha viaxe longa pode que prefira cear tranquilamente na habitación. el hotel dispón de servizo de habitacións?"
    },
    "eu": {
      "question": "Bidaia luze baten ondoren, agian gelan lasai afaldu nahiago izango dut. Mitel Hospitalityk gelako zerbitzua eskaintzen al du?"
    }
  },
  {
    "es": {
      "question": "Estoy preparando una cena romántica para sorprender a mi pareja y me gustaría elegir bien. ¿Qué restaurante de el hotel me recomendaríais para una ocasión especial?"
    },
    "en": {
      "question": "I'm planning a romantic dinner to surprise my partner and I'd like to choose the right place. Which restaurant at el hotel would you recommend for a special occasion?"
    },
    "pt": {
      "question": "Estou a preparar um jantar romântico para surpreender a minha cara-metade e gostava de escolher bem. Que restaurante do el hotel me recomendaria para uma ocasião especial?"
    },
    "ca": {
      "question": "Estic preparant un sopar romàntic per sorprendre la meva parella i m'agradaria encertar amb l'elecció. Quin restaurant de el hotel em recomanaríeu per a una ocasió especial?"
    },
    "gl": {
      "question": "Estou preparando unha cea romántica para sorprender á miña parella e gustaríame escoller ben. Que restaurante de el hotel me recomendariades para unha ocasión especial?"
    },
    "eu": {
      "question": "Bikotekidea harritzeko afari erromantiko bat prestatzen ari naiz, eta ondo aukeratu nahi nuke. Mitel Hospitalityko zein jatetxe gomendatuko zenidakete une berezi baterako?"
    }
  },
  {
    "es": {
      "question": "Voy a tener una tarde libre durante mi estancia y me gustaría aprovecharla para relajarme. ¿Qué tratamientos ofrece el spa de el hotel?"
    },
    "en": {
      "question": "I'll have a free afternoon during my stay and I'd like to use it to relax. What treatments does the el hotel spa offer?"
    },
    "pt": {
      "question": "Vou ter uma tarde livre durante a minha estadia e gostava de aproveitá-la para relaxar. Que tratamentos oferece o spa do el hotel?"
    },
    "ca": {
      "question": "Tindré una tarda lliure durant l'estada i m'agradaria aprofitar-la per relaxar-me. Quins tractaments ofereix l'spa de el hotel?"
    },
    "gl": {
      "question": "Vou ter unha tarde libre durante a miña estadía e gustaríame aproveitala para relaxarme. Que tratamentos ofrece o spa de el hotel?"
    },
    "eu": {
      "question": "Egonaldian arratsalde libre bat izango dut eta erlaxatzeko aprobetxatu nahiko nuke. Zer tratamendu eskaintzen ditu Mitel Hospitalityko spa-k?"
    }
  },
  {
    "es": {
      "question": "Después del vuelo suelo llegar bastante cargado de espalda y hombros. Si quisiera reservar un masaje para recuperarme, ¿cuál me recomendaríais?"
    },
    "en": {
      "question": "After flying, I usually arrive with quite a lot of tension in my back and shoulders. If I wanted to book a massage to recover, which one would you recommend?"
    },
    "pt": {
      "question": "Depois do voo costumo chegar com bastante tensão nas costas e nos ombros. Se quisesse reservar uma massagem para recuperar, qual me recomendaria?"
    },
    "ca": {
      "question": "Després del vol acostumo a arribar amb força tensió a l'esquena i les espatlles. Si volgués reservar un massatge per recuperar-me, quin em recomanaríeu?"
    },
    "gl": {
      "question": "Despois do voo adoito chegar con bastante tensión nas costas e nos ombreiros. Se quixese reservar unha masaxe para recuperarme, cal me recomendariades?"
    },
    "eu": {
      "question": "Hegaldiaren ondoren bizkarrean eta sorbaldetan tentsio handiarekin iritsi ohi naiz. Suspertzeko masaje bat erreserbatu nahi banu, zein gomendatuko zenidakete?"
    }
  },
  {
    "es": {
      "question": "Tengo la agenda bastante ajustada durante mi estancia y quiero ver cuándo podría escaparme al spa. ¿Cuál es su horario?"
    },
    "en": {
      "question": "My schedule will be quite tight during my stay and I'd like to see when I could fit in a visit to the spa. What are its opening hours?"
    },
    "pt": {
      "question": "Vou ter a agenda bastante preenchida durante a minha estadia e quero perceber quando poderia ir ao spa. Qual é o horário?"
    },
    "ca": {
      "question": "Tinc l'agenda bastant ajustada durant l'estada i vull veure quan podria escapar-me a l'spa. Quin horari té?"
    },
    "gl": {
      "question": "Teño a axenda bastante axustada durante a miña estadía e quero ver cando podería escaparme ao spa. Cal é o seu horario?"
    },
    "eu": {
      "question": "Egonaldian agenda nahiko estua izango dut eta spa-ra noiz joan naitekeen ikusi nahi dut. Zein da spa-ren ordutegia?"
    }
  },
  {
    "es": {
      "question": "Quiero dedicar unas horas a desconectar de verdad y volver renovado. ¿Qué experiencias de bienestar me recomendaríais en el hotel?"
    },
    "en": {
      "question": "I'd like to spend a few hours properly switching off and feeling refreshed. What wellness experiences would you recommend at el hotel?"
    },
    "pt": {
      "question": "Quero dedicar algumas horas a desligar completamente e sair renovado. Que experiências de bem-estar me recomendaria no el hotel?"
    },
    "ca": {
      "question": "Vull dedicar unes hores a desconnectar de debò i tornar renovat. Quines experiències de benestar em recomanaríeu a el hotel?"
    },
    "gl": {
      "question": "Quero dedicar unhas horas a desconectar de verdade e volver renovado. Que experiencias de benestar me recomendariades en el hotel?"
    },
    "eu": {
      "question": "Benetan deskonektatzeko eta indarberrituta itzultzeko ordu batzuk hartu nahi ditut. Zer ongizate-esperientzia gomendatuko zenidakete Mitel Hospitalityn?"
    }
  },
  {
    "es": {
      "question": "Estamos empezando a organizar nuestra boda en y buscamos un lugar elegante donde poder celebrarla. ¿Sería posible organizarla en el hotel?"
    },
    "en": {
      "question": "We're starting to plan our wedding in and we're looking for an elegant venue to host it. Would it be possible to hold our wedding at el hotel?"
    },
    "pt": {
      "question": "Estamos a começar a organizar o nosso casamento em e procuramos um local elegante onde o possamos celebrar. Seria possível organizá-lo no el hotel?"
    },
    "ca": {
      "question": "Estem començant a organitzar el nostre casament a i busquem un lloc elegant on celebrar-lo. Seria possible organitzar-lo a el hotel?"
    },
    "gl": {
      "question": "Estamos empezando a organizar a nosa voda en e buscamos un lugar elegante onde poder celebrala. Sería posible organizala en el hotel?"
    },
    "eu": {
      "question": "gure ezkontza antolatzen hasi gara eta ospatzeko leku dotore baten bila gabiltza. Posible izango litzateke Mitel Hospitalityn antolatzea?"
    }
  },
  {
    "es": {
      "question": "Estoy organizando una reunión de trabajo y necesito un espacio profesional dentro del hotel. ¿Disponéis de salas de reuniones?"
    },
    "en": {
      "question": "I'm organising a business meeting and I need a professional space within the hotel. Do you have meeting rooms available?"
    },
    "pt": {
      "question": "Estou a organizar uma reunião de trabalho e preciso de um espaço profissional dentro do hotel. Têm salas de reuniões disponíveis?"
    },
    "ca": {
      "question": "Estic organitzant una reunió de feina i necessito un espai professional dins de l'hotel. Disposeu de sales de reunions?"
    },
    "gl": {
      "question": "Estou organizando unha reunión de traballo e necesito un espazo profesional dentro do hotel. Dispoñedes de salas de reunións?"
    },
    "eu": {
      "question": "Lan-bilera bat antolatzen ari naiz eta hotelaren barruan espazio profesional bat behar dut. Ba al dituzue bilera-gelak?"
    }
  },
  {
    "es": {
      "question": "Voy a llegar al hotel en coche con bastante equipaje y preferiría no tener que preocuparme por aparcar. ¿Tenéis servicio de aparcacoches?"
    },
    "en": {
      "question": "I'll be arriving at the hotel by car with quite a bit of luggage and I'd rather not have to worry about parking. Do you offer valet parking?"
    },
    "pt": {
      "question": "Vou chegar ao hotel de carro com bastante bagagem e preferia não ter de me preocupar com o estacionamento. Têm serviço de valet parking?"
    },
    "ca": {
      "question": "Arribaré a l'hotel en cotxe amb força equipatge i preferiria no haver-me de preocupar per aparcar. Teniu servei d'aparcacotxes?"
    },
    "gl": {
      "question": "Vou chegar ao hotel en coche con bastante equipaxe e preferiría non ter que preocuparme por aparcar. Tedes servizo de aparcacoches?"
    },
    "eu": {
      "question": "Hotelera autoz iritsiko naiz ekipaje dezentearekin, eta nahiago nuke aparkatzeaz ez kezkatu. Ba al duzue autoa aparkatzeko valet zerbitzurik?"
    }
  },
  {
    "es": {
      "question": "Tengo un vuelo y me gustaría organizar el trayecto con tiempo para no preocuparme ese día. ¿el hotel ofrece servicio de traslado al aeropuerto?"
    },
    "en": {
      "question": "I have a flight and I'd like to arrange the journey in advance so I don't have to worry about it on the day. Does el hotel offer airport transfers?"
    },
    "pt": {
      "question": "Tenho um voo e gostava de organizar a deslocação com antecedência para não ter de me preocupar nesse dia. O el hotel disponibiliza serviço de transfer para o aeroporto?"
    },
    "ca": {
      "question": "Tinc un vol i m'agradaria organitzar el trajecte amb temps per no haver-me'n de preocupar aquell dia. el hotel ofereix servei de trasllat a l'aeroport?"
    },
    "gl": {
      "question": "Teño un voo e gustaríame organizar o traxecto con tempo para non preocuparme ese día. el hotel ofrece servizo de traslado ao aeroporto?"
    },
    "eu": {
      "question": "Hegaldia dut eta joan-etorria aldez aurretik antolatu nahi nuke, egun horretan ez kezkatzeko. Mitel Hospitalityk aireporturako transfer zerbitzua eskaintzen al du?"
    }
  },
  {
    "es": {
      "question": "No quiero dejar a mi perro en casa durante el viaje y me gustaría alojarme con él. ¿Se admiten mascotas en el hotel?"
    },
    "en": {
      "question": "I don't want to leave my dog at home while I'm away and I'd like to bring him with me. Are pets allowed at el hotel?"
    },
    "pt": {
      "question": "Não quero deixar o meu cão em casa durante a viagem e gostava de ficar alojado com ele. O el hotel aceita animais de estimação?"
    },
    "ca": {
      "question": "No vull deixar el meu gos a casa durant el viatge i m'agradaria allotjar-m'hi amb ell. S'admeten mascotes a el hotel?"
    },
    "gl": {
      "question": "Non quero deixar o meu can na casa durante a viaxe e gustaríame aloxarme con el. Admítense mascotas en el hotel?"
    },
    "eu": {
      "question": "Ez dut nire txakurra etxean utzi nahi bidaiaren bitartean, eta berarekin ostatu hartu nahiko nuke. Onartzen al dira maskotak Mitel Hospitalityn?"
    }
  },
  {
    "es": {
      "question": "Voy a estar varios días en y además tengo un evento formal durante el viaje. ¿Dispone el hotel de servicio de lavandería?"
    },
    "en": {
      "question": "I'll be in for several days and I also have a formal event during the trip. Does the hotel offer a laundry service?"
    },
    "pt": {
      "question": "Vou ficar vários dias em e tenho também um evento formal durante a viagem. O hotel dispõe de serviço de lavandaria?"
    },
    "ca": {
      "question": "Estaré diversos dies a i, a més, tinc un esdeveniment formal durant el viatge. L'hotel disposa de servei de bugaderia?"
    },
    "gl": {
      "question": "Vou estar varios días en e, ademais, teño un evento formal durante a viaxe. Dispón o hotel de servizo de lavandería?"
    },
    "eu": {
      "question": "Hainbat egun emango ditut eta, gainera, ekitaldi formal bat daukat bidaian. Hotelak garbitegi-zerbitzua eskaintzen al du?"
    }
  },
  {
    "es": {
      "question": "Es mi primera vez en y me gustaría aprovechar bien el tiempo sin hacer grandes desplazamientos. ¿Qué lugares interesantes me recomendaríais visitar cerca de el hotel?"
    },
    "en": {
      "question": "It's my first time in and I'd like to make the most of my time without travelling too far. What interesting places would you recommend visiting near el hotel?"
    },
    "pt": {
      "question": "É a minha primeira vez em e gostava de aproveitar bem o tempo sem fazer grandes deslocações. Que locais interessantes me recomendaria visitar perto do el hotel?"
    },
    "ca": {
      "question": "És la meva primera vegada a i m'agradaria aprofitar bé el temps sense fer grans desplaçaments. Quins llocs interessants em recomanaríeu visitar a prop de el hotel?"
    },
    "gl": {
      "question": "É a miña primeira vez en e gustaríame aproveitar ben o tempo sen facer grandes desprazamentos. Que lugares interesantes me recomendariades visitar preto de el hotel?"
    },
    "eu": {
      "question": "nagoen lehen aldia da, eta denbora ondo aprobetxatu nahi nuke urrutira joan gabe. Zer leku interesgarri gomendatuko zenidakete Mitel Hospitalitytik gertu bisitatzeko?"
    }
  },
  {
    "es": {
      "question": "Voy a pasar un fin de semana en el hotel y quiero aprovecharlo al máximo, tanto dentro como fuera del hotel. ¿Qué experiencias me recomendaríais?"
    },
    "en": {
      "question": "I'm spending a weekend at el hotel and I'd like to make the most of it, both inside and outside the hotel. What experiences would you recommend?"
    },
    "pt": {
      "question": "Vou passar um fim de semana no el hotel e quero aproveitá-lo ao máximo, tanto dentro como fora do hotel. Que experiências me recomendaria?"
    },
    "ca": {
      "question": "Passaré un cap de setmana a el hotel i vull aprofitar-lo al màxim, tant dins com fora de l'hotel. Quines experiències em recomanaríeu?"
    },
    "gl": {
      "question": "Vou pasar unha fin de semana en el hotel e quero aproveitala ao máximo, tanto dentro como fóra do hotel. Que experiencias me recomendariades?"
    },
    "eu": {
      "question": "Asteburu bat emango dut Mitel Hospitalityn eta ahalik eta gehien aprobetxatu nahi dut, bai hotelaren barruan bai kanpoan. Zer esperientzia gomendatuko zenidakete?"
    }
  },
  {
    "es": {
      "question": "Voy a celebrar nuestro aniversario de boda y quiero preparar una sorpresa completa para mi pareja. ¿Podríais recomendarme una habitación especial y también un restaurante para una cena romántica?"
    },
    "en": {
      "question": "We're celebrating our wedding anniversary and I'd like to plan a complete surprise for my partner. Could you recommend a special room and also a restaurant for a romantic dinner?"
    },
    "pt": {
      "question": "Vamos celebrar o nosso aniversário de casamento e quero preparar uma surpresa completa para a minha cara-metade. Poderia recomendar-me um quarto especial e também um restaurante para um jantar romântico?"
    },
    "ca": {
      "question": "Celebrarem el nostre aniversari de casament i vull preparar una sorpresa completa per a la meva parella. Em podríeu recomanar una habitació especial i també un restaurant per a un sopar romàntic?"
    },
    "gl": {
      "question": "Vou celebrar o noso aniversario de voda e quero preparar unha sorpresa completa para a miña parella. Poderiades recomendarme unha habitación especial e tamén un restaurante para unha cea romántica?"
    },
    "eu": {
      "question": "Gure ezkontza-urteurrena ospatuko dugu eta bikotekidearentzat sorpresa oso bat prestatu nahi dut. Gela berezi bat eta afari erromantiko baterako jatetxe bat gomendatuko zenidakete?"
    }
  },
  {
    "es": {
      "question": "Mi vuelo llega bastante pronto y seguramente estaré en el hotel antes de la hora del check-in. ¿Qué podría hacer o qué servicios podría disfrutar mientras espero a que esté lista la habitación?"
    },
    "en": {
      "question": "My flight arrives quite early, so I'll probably reach the hotel before check-in time. What could I do, or which hotel services could I enjoy while I wait for my room to be ready?"
    },
    "pt": {
      "question": "O meu voo chega bastante cedo e provavelmente estarei no hotel antes da hora do check-in. O que poderia fazer ou de que serviços poderia usufruir enquanto espero que o quarto fique pronto?"
    },
    "ca": {
      "question": "El meu vol arriba força aviat i segurament seré a l'hotel abans de l'hora del check-in. Què podria fer o de quins serveis podria gaudir mentre espero que l'habitació estigui preparada?"
    },
    "gl": {
      "question": "O meu voo chega bastante cedo e seguramente estarei no hotel antes da hora do check-in. Que podería facer ou de que servizos podería gozar mentres agardo a que estea lista a habitación?"
    },
    "eu": {
      "question": "Nire hegaldia nahiko goiz iristen da eta ziurrenik check-in ordua baino lehen iritsiko naiz hotelera. Zer egin nezake edo zer zerbitzuz gozatu nezake gela prest egon arte?"
    }
  },
  {
    "es": {
      "question": "Viajo con mi pareja para celebrar una ocasión especial y me gustaría que la estancia fuese algo más que dormir en el hotel. ¿Qué experiencias nos recomendaríais para que el viaje sea realmente memorable?"
    },
    "en": {
      "question": "I'm travelling with my partner for a special occasion and I'd like the stay to be about more than just sleeping at the hotel. What experiences would you recommend to make the trip truly memorable?"
    },
    "pt": {
      "question": "Viajo em casal para celebrar uma ocasião especial e gostava que a estadia fosse muito mais do que apenas dormir no hotel. Que experiências nos recomendaria para tornar a viagem verdadeiramente memorável?"
    },
    "ca": {
      "question": "Viatjo amb la meva parella per celebrar una ocasió especial i m'agradaria que l'estada fos alguna cosa més que dormir a l'hotel. Quines experiències ens recomanaríeu perquè el viatge sigui realment memorable?"
    },
    "gl": {
      "question": "Viaxo coa miña parella para celebrar unha ocasión especial e gustaríame que a estadía fose algo máis que durmir no hotel. Que experiencias nos recomendariades para que a viaxe sexa realmente memorable?"
    },
    "eu": {
      "question": "Bikotekidearekin bidaiatzen dut une berezi bat ospatzeko, eta egonaldia hotelean lo egitea baino zerbait gehiago izatea gustatuko litzaidake. Zer esperientzia gomendatuko zenigukete bidaia benetan ahaztezina izan dadin?"
    }
  },
  {
    "es": {
      "question": "Voy a viajar a con mi perro y quiero asegurarme de que también esté cómodo durante la estancia. ¿Qué opciones o servicios ofrece el hotel para huéspedes que viajan con mascota?"
    },
    "en": {
      "question": "I'm travelling to with my dog and I'd like to make sure he'll be comfortable during the stay as well. What options or services does el hotel offer for guests travelling with pets?"
    },
    "pt": {
      "question": "Vou viajar para com o meu cão e quero garantir que ele também fica confortável durante a estadia. Que opções ou serviços oferece o el hotel aos hóspedes que viajam com animais de estimação?"
    },
    "ca": {
      "question": "Viatjaré a amb el meu gos i vull assegurar-me que ell també estigui còmode durant l'estada. Quines opcions o serveis ofereix el hotel als hostes que viatgen amb mascota?"
    },
    "gl": {
      "question": "Vou viaxar a co meu can e quero asegurarme de que tamén estea cómodo durante a estadía. Que opcións ou servizos ofrece el hotel para hóspedes que viaxan con mascota?"
    },
    "eu": {
      "question": "Nire txakurrarekin joango naiz Madrilera eta egonaldian bera ere eroso egongo dela ziurtatu nahi dut. Zer aukera edo zerbitzu eskaintzen dizkie Mitel Hospitalityk maskotarekin bidaiatzen duten gonbidatuei?"
    }
  },
  {
    "es": {
      "question": "Tengo que organizar una reunión de empresa para unas cincuenta personas y busco una solución cómoda y profesional en el propio hotel. ¿Qué opciones podría ofrecerme el hotel?"
    },
    "en": {
      "question": "I need to organise a company meeting for around fifty people and I'm looking for a convenient, professional solution within the hotel. What options could el hotel offer me?"
    },
    "pt": {
      "question": "Tenho de organizar uma reunião de empresa para cerca de cinquenta pessoas e procuro uma solução cómoda e profissional no próprio hotel. Que opções me poderia oferecer o el hotel?"
    },
    "ca": {
      "question": "He d'organitzar una reunió d'empresa per a unes cinquanta persones i busco una solució còmoda i professional al mateix hotel. Quines opcions em podria oferir el hotel?"
    },
    "gl": {
      "question": "Teño que organizar unha reunión de empresa para unhas cincuenta persoas e busco unha solución cómoda e profesional no propio hotel. Que opcións podería ofrecerme el hotel?"
    },
    "eu": {
      "question": "Berrogeita hamar lagun ingururentzako enpresa-bilera bat antolatu behar dut eta hotel berean irtenbide eroso eta profesional bat bilatzen ari naiz. Zer aukera eskain diezazkidake Mitel Hospitalityk?"
    }
  },
  {
    "es": {
      "question": "Solo voy a estar un fin de semana en y no quiero perder tiempo buscando planes sobre la marcha. ¿Qué actividades me recomendaríais hacer cerca de el hotel?"
    },
    "en": {
      "question": "I'll only be in for a weekend and I don't want to waste time searching for things to do once I'm there. What activities would you recommend near el hotel?"
    },
    "pt": {
      "question": "Só vou estar em durante um fim de semana e não quero perder tempo a procurar planos à última hora. Que atividades me recomendaria fazer perto do el hotel?"
    },
    "ca": {
      "question": "Només estaré un cap de setmana a i no vull perdre temps buscant plans sobre la marxa. Quines activitats em recomanaríeu fer a prop de el hotel?"
    },
    "gl": {
      "question": "Só vou estar unha fin de semana en e non quero perder tempo buscando plans sobre a marcha. Que actividades me recomendariades facer preto de el hotel?"
    },
    "eu": {
      "question": "Asteburu bakarra emango dut eta ez dut denbora galdu nahi azken momentuan planak bilatzen. Zer jarduera gomendatuko zenidakete Mitel Hospitalitytik gertu egiteko?"
    }
  },
  {
    "es": {
      "question": "Quiero darme un capricho y disfrutar de una estancia realmente especial en el hotel. Si quisiera vivir la experiencia más completa posible, ¿qué servicios o experiencias me diríais que no debería perderme?"
    },
    "en": {
      "question": "I'd like to treat myself to a truly special stay at el hotel. If I wanted the most complete experience possible, which services or experiences would you say I shouldn't miss?"
    },
    "pt": {
      "question": "Quero mimar-me e desfrutar de uma estadia verdadeiramente especial no el hotel. Se quisesse ter a experiência mais completa possível, que serviços ou experiências diria que não devo perder?"
    },
    "ca": {
      "question": "Em vull donar un caprici i gaudir d'una estada realment especial a el hotel. Si volgués viure l'experiència més completa possible, quins serveis o experiències em diríeu que no m'hauria de perdre?"
    },
    "gl": {
      "question": "Quero darme un capricho e gozar dunha estadía realmente especial en el hotel. Se quixese vivir a experiencia máis completa posible, que servizos ou experiencias me diriades que non debería perder?"
    },
    "eu": {
      "question": "Nire buruari opari bat egin eta Mitel Hospitalityn egonaldi benetan berezi batez gozatu nahi dut. Ahalik eta esperientziarik osoena bizi nahi banu, zer zerbitzu edo esperientzia ez nuke galdu behar?"
    }
  },
  {
    "es": {
      "question": "Quiero organizar una tarde de relax y terminar el día con una buena cena sin tener que preocuparme de coordinarlo todo por separado. ¿Podríais ayudarme a reservar una cita en el spa y una mesa para cenar el mismo día?"
    },
    "en": {
      "question": "I'd like to plan a relaxing afternoon and finish the day with a nice dinner without having to coordinate everything separately. Could you help me book a spa appointment and a dinner table for the same day?"
    },
    "pt": {
      "question": "Quero organizar uma tarde de relaxamento e terminar o dia com um bom jantar sem ter de me preocupar em coordenar tudo separadamente. Poderia ajudar-me a reservar uma marcação no spa e uma mesa para jantar no mesmo dia?"
    },
    "ca": {
      "question": "Vull organitzar una tarda de relax i acabar el dia amb un bon sopar sense haver-me de preocupar de coordinar-ho tot per separat. Em podríeu ajudar a reservar una cita a l'spa i una taula per sopar el mateix dia?"
    },
    "gl": {
      "question": "Quero organizar unha tarde de relax e rematar o día cunha boa cea sen ter que preocuparme de coordinalo todo por separado. Poderiades axudarme a reservar unha cita no spa e unha mesa para cear o mesmo día?"
    },
    "eu": {
      "question": "Erlaxatzeko arratsalde bat antolatu eta eguna afari on batekin amaitu nahi dut, dena bereizita koordinatu behar izan gabe. Lagunduko al didazue egun berean spa-rako hitzordua eta afaltzeko mahaia erreserbatzen?"
    }
  },
  {
    "es": {
      "question": "Solo voy a disponer de 24 horas en y quiero aprovechar cada momento, pero sin ir con prisas todo el día. Si me alojo en el hotel, ¿cómo me recomendaríais organizar la estancia para disfrutar al máximo del hotel y de la ciudad?"
    },
    "en": {
      "question": "I'll only have 24 hours in and I'd like to make every moment count without rushing around all day. If I'm staying at el hotel, how would you recommend planning my stay to get the best of both the hotel and the city?"
    },
    "pt": {
      "question": "Só vou ter 24 horas em e quero aproveitar cada momento, mas sem andar a correr o dia inteiro. Se ficar alojado no el hotel, como me recomendaria organizar a estadia para aproveitar ao máximo o hotel e a cidade?"
    },
    "ca": {
      "question": "Només disposaré de 24 hores a i vull aprofitar cada moment, però sense anar amb presses tot el dia. Si m'allotjo a el hotel, com em recomanaríeu organitzar l'estada per gaudir al màxim de l'hotel i de la ciutat?"
    },
    "gl": {
      "question": "Só vou dispoñer de 24 horas en e quero aproveitar cada momento, pero sen andar ás présas todo o día. Se me aloxo en el hotel, como me recomendariades organizar a estadía para gozar ao máximo do hotel e da cidade?"
    },
    "eu": {
      "question": "24 ordu baino ez ditut izango eta une bakoitza aprobetxatu nahi dut, baina egun osoan presaka ibili gabe. Mitel Hospitalityn ostatu hartzen badut, nola gomendatuko zenidakete egonaldia antolatzea hotela eta hiria ahalik eta gehien gozatzeko?"
    }
  }
];
