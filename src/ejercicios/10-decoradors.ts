

//los decoradores sirven para cambiar las clases cuando esten definidas
//definen cosas antes de generar la instancia
function classDecorator<T extends { new(...args: any[]) }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new Property";
        hello = "override"
    };
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();
console.log(miClase.miPropiedad);