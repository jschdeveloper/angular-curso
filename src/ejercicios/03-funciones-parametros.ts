/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

interface PersonajeLOR { //define la estructura de un objeto
    nombre: string;
    pv: number;
    mostrarHp: () => void; //definir funciones

}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;

    console.log(personaje);

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Jesús',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida:', this.pv);
    }

}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();