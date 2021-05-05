
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        anio: 2015,
        autor: 'Ed Sheeran'
    }
}
//desestructuracion de objetos
const { volumen: vol, segundo, cancion, detalles: { anio, autor: autorDetalle } } = reproductor;
// const { autor, anio } = detalles;

// console.log('El volumen actual es de: ', vol);
// console.log('El segundo actual es de: ', segundo);
// console.log('El cancion actual es de: ', cancion);
// console.log('El autor actual es de: ', autorDetalle);
// console.log('El anio actual es de: ', anio);

//desestructuracion de arreglos (la posición es lo importante)
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [goku, vegeta, trunks, nose] = dbz;
const [, , p3] = dbz; //desestructuracion solo del elemento 3

console.log('Personaje 1:', goku);
console.log('Personaje 2:', vegeta);
console.log('Personaje 3:', p3);