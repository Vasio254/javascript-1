function istotalcost(cart) {
    let totalcost=0

    for (let i=0; i < cart.length -1; i++) {
        totalcost += cart[i].price
    }
    
    return totalcost;
}
const items = [{price: 10.99}, {price: 5.99} ,{price: 29.99 }];
const total = totalcost(items);
console.log(`Total cost`);