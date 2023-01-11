// Iteración 1: Usa includes

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (const element of products) {
    
    if(element.includes("Camiseta")) {
        console.log(element);
    }

}

 // Iteración 2: Condicionales avanzados

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach((alumns) => {

    if (alumns.T1 && alumns.T2) {
        
        alumns.isApproved = true;

    
    } else if (alumns.T2 && alumns.T3) {

        alumns.isApproved = true;

    } else if (alumns.T1 && alumns.T3) {

        alumns.isApproved = true;
        
    } else {
    
        alumns.isApproved = false;
    }

  
console.log(alumns);

})


// Iteración #3: Probando For...of


const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const element of placesToTravel) {

    console.log(element);
    
}


// Iteración #4: Probando For...in


const alien = {

    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'

}

for (let element in alien) {

    console.log(alien[element]);

}







