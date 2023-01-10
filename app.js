// Iteración 1: Usa includes

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (const element of products) {
    
    if(element.includes("Camiseta")) {
        console.log(element);
    }

}

