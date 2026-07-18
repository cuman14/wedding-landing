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
    ],
  },
};
