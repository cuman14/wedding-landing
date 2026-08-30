export interface PersonaLectura {
  id: string;
  nombre: string;
  foto: string;
  message: string;
}

export interface InvitacionLectura {
  title: string;
  description: string;
  personas: PersonaLectura[];
}

export const invitacionesLectura: Record<string, InvitacionLectura> = {
  lectura2026: {
    title: "Marina & Oswald \u2014 La Lectura",
    description: "Tu voz ser\u00e1 parte de nuestro d\u00eda especial.",
    personas: [
      {
        id: "irene",
        nombre: "Irene",
        foto: "/irene.webp",
        message:
          "Eres de las personas que m\u00e1s admiro en este mundo y que seas mi amiga me llena de un orgullo tremendo. Tu forma de ser, de enfrentarte a los problemas, de transmitir tus ideales... pero sin perder ese toque de disfrute de la vida. Cuando hablamos, tengo la sensaci\u00f3n de sentirme entendido 100% y de aprender continuamente. No se me olvida un d\u00eda que estaba mal en C\u00f3rdoba, por la que va a ser mi mujer ahora, cuando lo fui a contar, t\u00fa saliste corriendo por una botella de vino y prestaste toda tu atenci\u00f3n en mi dolor. Quererte es decirte poco. Es por ello que me encantar\u00eda que leyeras en mi boda.",
      },
      {
        id: "silvia",
        nombre: "Silvia",
        foto: "/silvia.webp",
        message:
          "Uno de los mayores regalos que me ha dado la vida fue tenerte a ti como amiga, una persona tan creativa, tan atenta que sabe demostrar lo que le importan las personas que quiere de una forma que yo valoro mucho. Creo que siempre hemos tenido una gran complicidad y eso ha hecho que siempre nos sintamos el uno cerca del otro. S\u00e9 que si tengo que llorar tengo tu hombro y conf\u00edo en que t\u00fa sabes que tienes el m\u00edo. Es por ello, que como eres de las personas que mas quiero en el mundo, me encantar\u00eda que tu voz formara parte de una de las lecturas de mi boda.",
      },
      {
        id: "lorenasirene",
        nombre: "Lorena & Irene",
        foto: "/lorenasirene.webp",
        message:
          "Chicas ❤️\n\nMadrid me regal\u00f3 encontraros y desde entonces os hab\u00e9is convertido en una parte muy importante de mi vida 🥹\n\nPor eso me har\u00eda much\u00edsima ilusi\u00f3n que fuerais vosotras quienes hicierais una de las lecturas de mi boda. Me hace muy feliz imaginaros formando parte de un momento as\u00ed 🤍",
      },
      {
        id: "tamarahelena",
        nombre: "Tamara & Helena",
        foto: "/tamarahelena.webp",
        message:
          "Chicas ❤️\n\nQui\u00e9n me iba a decir, cuando coincidimos en la uni, que tantos a\u00f1os despu\u00e9s seguir\u00edais siendo una parte tan importante de mi vida 🥹\n\nHemos compartido much\u00edsimas etapas juntas y aunque la vida haya ido cambiando, siempre hab\u00e9is seguido ah\u00ed de una forma muy especial para m\u00ed. Por eso me har\u00eda much\u00edsima ilusi\u00f3n que fuerais vosotras quienes hicierais juntas una de las lecturas de mi boda 🤍",
      },
      {
        id: "jaime",
        nombre: "Jaime",
        foto: "/jaime.webp",
        message:
          "Fuiste mi primer amigo en este pa\u00eds, el primero con el que compartir la pasi\u00f3n por la inform\u00e1tica, el primero con el que cre\u00e9 mi primera p\u00e1gina web. Da igual los a\u00f1os que pasen o los caminos que elijamos, que siempre tengo la sensaci\u00f3n de que nos encontraremos, de que nos entenderemos y de que nos querremos. Por eso no conozco mejor persona que pueda, en el d\u00eda m\u00e1s especial de mi vida, dedicar unas palabras en la ceremonia. Te quiero, hoy y siempre 🤍",
      },
      {
        id: "alberto",
        nombre: "Alberto",
        foto: "/alberto.webp",
        message:
          "🍻 A\u00fan recuerdo ese d\u00eda en que nos hicimos la primera foto: era mi cumplea\u00f1os y trajiste la que era, por aquel entonces, mi cerveza favorita. Aunque parezca algo peque\u00f1o, ese detalle marc\u00f3 el comienzo de lo que siento por ti, porque en los peque\u00f1os detalles se encuentran las grandes virtudes. Ver c\u00f3mo prestaste atenci\u00f3n a lo que me gustaba me hizo ver, y m\u00e1s tarde pude confirmar, la grand\u00edsima persona y buen amigo que eres y que, aunque todos te decimos que eres un despistado, para m\u00ed, en las cosas m\u00e1s importantes has estado atento.<br/><br/>💬 Eres de las personas con las que m\u00e1s a gusto me puedo sentir, con la que comparto minuto a minuto temas banales y saber que te tengo a golpe de audio para mandarte uno dici\u00e9ndote lo que he comido y escucharte quej\u00e1ndote de tus obreros hace que nunca me pueda sentir solo.<br/><br/>🌳 Veo nuestro futuro como el de los cl\u00e1sicos abuelos que se ver\u00e1n cada poco y pasar\u00e1n horas contando batallitas, ri\u00e9ndonos y contemplando un parque, porque lo mejor ser\u00e1 la compa\u00f1\u00eda.<br/><br/>🤍 Es por todo eso y m\u00e1s que, para m\u00ed, ser\u00eda un honor que, el d\u00eda m\u00e1s feliz de mi vida, fueras la primera persona en estar conmigo en la finca, poni\u00e9ndome el traje, compartiendo esos momentos de nervios y ayud\u00e1ndome a tener a punto los \u00faltimos detalles, como el mejor amigo que eres. \u00a1Te quiero!<br/><br/><div style=\"border-top:1px solid rgba(255,255,255,0.15); padding-top:1em; margin-top:1em;\"><span style=\"opacity:0.55; font-size:0.8em; text-transform:uppercase; letter-spacing:0.25em;\">📋 Log\u00edstica</span><br/><br/>🚗 Pedir\u00e1s o te pedir\u00e9 un Uber (todo corre por nuestra cuenta) desde tu casa hasta la finca.<br/><br/>🕚 La idea es que est\u00e9s all\u00ed a las 11:50.<br/><br/>👔 Vente preparado, pero igualmente tendremos una habitaci\u00f3n para que yo me prepare y t\u00fa termines de prepararte.</div>",
      },
    ],
  },
};
