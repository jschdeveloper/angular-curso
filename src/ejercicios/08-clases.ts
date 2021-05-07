
class PersonaNormal {

    constructor(public nombre: string, public direccion: string) { }

}

class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    //inicializar las variables
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {

        //llamamos al constructor de la clase que se extiende
        super(nombreReal, 'New York USA');

    }

}

const ironman = new Heroe('Ironman', 45, 'Tony Stark');


console.log(ironman);