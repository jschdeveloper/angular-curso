

interface Pasajero {
    nombre: string;
    hijos?: string[]; //el signo de ? significa que es opcional
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0; //secure operators
    // si es undefined pone un cero

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);