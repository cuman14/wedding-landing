export interface PasajeroBus {
  id: string;
  nombre: string;
  /** Solo viaja en el autobús de vuelta. */
  soloVuelta: boolean;
}

export interface ListaBus {
  id: string;
  titulo: string;
  lugar: string;
  mapsUrl: string;
  /** Hora de recogida en la ida. */
  horaIda: string;
  /** Hora de salida de la finca en la vuelta. */
  horaVuelta: string;
  /** Recorrido del autobús de vuelta. */
  rutaVuelta: string;
  pasajeros: PasajeroBus[];
}

export interface Bus {
  id: string;
  titulo: string;
  lista: ListaBus;
  /** Sublista de una parada intermedia que sube al mismo autobús. */
  sublista?: ListaBus;
}

// "Nombre" o "Nombre (V)" => solo vuelta. Cada entrada del array es una fila
// de la lista original; los acompañantes se separan con " + ".
function pasajeros(prefijo: string, filas: string[]): PasajeroBus[] {
  return filas.flatMap((fila, i) =>
    fila.split(" + ").map((raw, j) => {
      const soloVuelta = raw.endsWith(" (V)");
      return {
        id: `${prefijo}-${i + 1}-${j + 1}`,
        nombre: soloVuelta ? raw.slice(0, -4) : raw,
        soloVuelta,
      };
    }),
  );
}

export const buses: Bus[] = [
  {
    id: "atocha",
    titulo: "Autobús de Atocha",
    lista: {
      id: "atocha",
      titulo: "Suben en Atocha",
      lugar: "Frente al Restaurante El Brillante",
      mapsUrl: "https://maps.app.goo.gl/8YE2DgH4kZ6g5qjg7",
      horaIda: "12:15",
      horaVuelta: "00:00",
      rutaVuelta: "Cubillana → Atocha",
      pasajeros: pasajeros("atocha", [
        "Paloma Zarzuela Gutiérrez",
        "Daniel Arribas + Sofía Carretero",
        "José María Hernández",
        "Carlos Martínez",
        "Guarina Vara Casacret",
        "Sara Sacristán Fernández",
        "Sonia Ortiz Burgos",
        "Eduardo Pallet Vara",
        "Lorena Escribano Atanes",
        "Víctor Bedmar Lam + Cristina González Macho",
        "Clara Mesa Gil",
        "Pablo López Buitrago + Alba Sardon Fernandez",
        "Minerva Martínez + Christian Adán",
        "Luciano Carlomagno",
        "Irene Calvo Sánchez + Joaquín Rodríguez Sánchez",
        "Marina Durán Pérez",
        "Juliette Ruiz Vara + Alberto Fernández",
        "Laura Casado Rojo",
        "Samah Tibri Rmadi",
      ]),
    },
  },
  {
    id: "alcorcon",
    titulo: "Autobús de Alcorcón",
    lista: {
      id: "alcorcon",
      titulo: "Suben en Alcorcón",
      lugar: "Puerta del Sur",
      mapsUrl: "https://maps.app.goo.gl/N3etxwYCNs668SkPA",
      horaIda: "12:30",
      horaVuelta: "00:00",
      rutaVuelta: "Cubillana → Valmojado → Alcorcón",
      pasajeros: pasajeros("alcorcon", [
        "Carlos Collado Alonso + Julia Molano Vidal",
        "Tomás Gutiérrez Agurto",
        "Daniel Sánchez Rojas (V)",
        "Silvia Quintas Rosillo",
        "Irene Durán Pérez + Mario Gómez Ramos",
        "Guada Chico",
        "María Onella Megret de la Cruz + Eddy Filibert Hanegreefs",
        "Osvaldo Megret de la Cruz + Adela Lucila Martínez Navia",
        "Lorenzo Tejada Cortes + Lorena Tejada + Laura Tejada",
        "Alba Pérez García (V)",
        "Ricardo Espinosa + Karol Torres",
        "Raul del Pozo (V)",
        "Lorena Baudil Cerezo + Alejandro Lozano Olmos",
        "Jorge Alejandro Hernández Caballero + Laura Ortariz Gracia",
        "Alberto Fernández Muñoz (V) + Laura López Díaz (V)",
      ]),
    },
    sublista: {
      id: "valmojado",
      titulo: "Suben en Valmojado",
      lugar: "Hostal La Cañada Segoviana",
      mapsUrl: "https://maps.app.goo.gl/DCrxNJ4mWDPWwoAx6",
      horaIda: "13:00",
      horaVuelta: "00:00",
      rutaVuelta: "Cubillana → Valmojado → Alcorcón",
      pasajeros: pasajeros("valmojado", [
        "Marta Sanchez Sanchez",
        "Alejandro del Pino Tortonda",
        "Miriam Fernández Rayo",
        "Tamara Mateos Fanegas",
        "María José Fernández Sánchez + Félix Reyes Ruiz Fernández",
        "Francisco Javier Tejada Cortés + María Nieves Baison Baison (V) + Javier Tejada Baison",
        "Conso Tejada (V) + Javier Castaño + Fernando Castaño + Jimena Castaño",
      ]),
    },
  },
];
