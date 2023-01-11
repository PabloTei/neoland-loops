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


// Iteración #5: Probando For  //// ESTA SIN HACER

const placesToTravel1 = [

    {id: 5,  name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}

]

for(i = 0; i < placesToTravel1.length; i++) {

    if (placesToTravel1[i].id != 11 && placesToTravel1[i].id != 40) {

        console.log(placesToTravel1[i].name); 

    } else {

    }

}


// Iteración #6: Mixed For...of e includes

const toys = [

    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}

]

for (const element of toys) {
    
    if (element.name.includes("gato") == false) {
        console.log(element.name);
    }
    
}

    
// Iteración #7: For...of avanzado


const popularToys = [];
const toys1 = [

	{id: 5,  name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}

]
    
for (const element1 of toys1) {

    if (element1.sellCount > 15) {
        
        popularToys.push(element1.name);
        
        console.log(popularToys);

     } else {

     }
     
}


    





