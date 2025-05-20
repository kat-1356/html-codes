 function cashRegister(cart) {
    let total = 0;
    for (let item in cart) {
        total += parseFloat(cart[item]);
    }
    return total.toFixed(2);
}

const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

console.log(cashRegister(cartForParty)); // 60.55
