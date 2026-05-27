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
          "Pasan los a\u00f1os y veo imposible imaginarme la vida sin estar tu a mi lado. No solo eres parte fundamental de mi d\u00eda a d\u00eda, eres adem\u00e1s ese faro en el que pienso cuando estoy perdido, esa amiga a la que admiro y quiero por partes iguales; y te quiero much\u00edsimo. Es por ello, que me encantar\u00eda que tu voz forme parte de mi boda con una breve e intensa lectura.",
      },
      {
        id: "silvia",
        nombre: "Silvia",
        foto: "/silvia.webp",
        message:
          "Pasan los a\u00f1os y veo imposible imaginarme la vida sin estar tu a mi lado. No solo eres parte fundamental de mi d\u00eda a d\u00eda, eres adem\u00e1s ese faro en el que pienso cuando estoy perdido, esa amiga a la que admiro y quiero por partes iguales; y te quiero much\u00edsimo. Es por ello, que me encantar\u00eda que tu voz forme parte de mi boda con una breve e intensa lectura.",
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
          "Chicas ❤️\n\nQui\u00e9n me iba a decir, cuando coincidimos en la uni, que tantos a\u00f1os despu\u00e9s seguir\u00edais siendo una parte tan importante de mi vida 🥹\n\nHemos compartido much\u00edsimas etapas juntas y, aunque la vida haya ido cambiando, siempre hay\u00e1is seguido ah\u00ed de una forma muy especial para m\u00ed. Por eso me har\u00eda much\u00edsima ilusi\u00f3n que fuerais vosotras quienes hicierais juntas una de las lecturas de mi boda 🤍",
      },
    ],
  },
};