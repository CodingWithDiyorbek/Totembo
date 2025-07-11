const product = {
    cartier:{
        name: "cartier",
        price: 1300000,
        amount: 0,
        img: "./img/Rectangle 97 (2).png",
        get Summ(){
            return this.amount * this.price
        }
    },
    audemars:{
        name: "audemars",
        price: 1420000,
        amount: 0,
        img: "./img/Rectangle 97 (1).png",
        get Summ(){
            return this.amount * this.price
        }
    },
    heuer:{
        name: "heuer",
        price: 1120000,
        amount: 0,
        img: "./img/Rectangle 97.png",
        get Summ(){
            return this.amount * this.price
        }
    },
    duchen:{
        name: "duchen",
        price: 950000,
        amount: 0,
        img: "./img/Rectangle 97 (5).png",
        get Summ(){
            return this.amount * this.price
        }
    },
    rolex:{
        name: "rolex",
        price: 2450000,
        amount: 0,
        img: "./img/Rectangle 97 (4).png",
        get Summ(){
            return this.amount * this.price
        }
    },
    spikes:{
        name: "spikes",
        price: 1450000,
        amount: 0,
        img: "./img/Rectangle 97 (3).png",
        get Summ(){
            return this.amount * this.price
        }
    },
    lannier:{
        name: "lannier",
        price: 1280000,
        amount: 0,
        img: "./img/Rectangle 97 (7).png",
        get Summ(){
            return this.amount * this.price
        }
    },
    tiamo:{
        name: "tiamo",
        price: 1000000,
        amount: 0,
        img: "./img/Rectangle 97 (6).png",
        get Summ(){
            return this.amount * this.price
        }
    },
    tag:{
        name: "tag",
        price: 1120000,
        amount: 0,
        img: "./img/myhimrasm.png",
        get Summ(){
            return this.amount * this.price
        }
    },
    montblanc:{
        name: "montblanc",
        price: 845000,
        amount: 0,
        img: "./img/Rectangle 97 (10).png" ,
        get Summ(){
            return this.amount * this.price
        }
    },
    jaeger:{
        name: "jaeger",
        price: 2450000,
        amount: 0,
        img: "./img/Rectangle 97 (9).png",
        get Summ(){
            return this.amount * this.price
        }
    },
    hockey:{
        name: "hockey",
        price: 750000,
        amount: 0,
        img: "./img/Rectangle 97 (8).png",
        get Summ(){
            return this.amount * this.price
        }
    },
}
const btns = document.querySelectorAll('.shop__korzinka'),
basekt = document.querySelector('.basket'),
shop = document.querySelector('.nav__korzinka'),
shopClose = document.querySelector('.basket__close'),
shopItem = document.querySelector('.item__span'),
basketBox = document.querySelector('.basket__box'),
basektBottom = document.querySelector('.basket__bottom'),
basketTotal = document.querySelector('.basket__total');
btns.forEach((btn) => {
    btn.addEventListener('click',function(){
        addCard(this)
    })
});
function addCard(btn) {
    const parent = btn.closest(".shop__card"),
    cardId = parent.getAttribute("id");
    product[cardId].amount++
    basketCard()
}
function basketCard() {
    const productArr = []
    for (const key in product) {
        const pk = product[key],
        productCard = document.querySelector(`#${key}`),
        span = productCard.querySelector('.card__item');
        if (pk.amount) {
            span.classList.add('active')
            span.innerHTML = pk.amount
            shopItem.classList.add("active")
            productArr.push(pk)
            shopItem.innerHTML = productArr.length
            basketAdd(pk)
        }
        else{
            span.classList.remove("active")
        }
    }
    basketBox.innerHTML=""
    // basketTotal.innerHTML = totalSumm()
    for (let i = 0; i < productArr.length; i++) {
        basketTotal.innerHTML = totalSumm()
        basketBox.innerHTML += basketAdd(productArr[i])
    }
}
function add() {
    let amount = 0
    for (const key in product) {
        amount.product[key].amount
    }
    return amount
}
function totalSumm() {
    let summ = 0
    for (const key in product) {
        summ += product[key].Summ
    }
    return summ
}
shop.addEventListener('click',()=>{
    basekt.classList.toggle('active')
});
shopClose.addEventListener('click',()=>{
    basekt.classList.remove('active')
})
function basketAdd(shop__card) {
    const {img,name,price,amount,Summ} = shop__card
    return  `
                <div class="basket__card">
                        <img src="${img}" alt="" class="basket__img">
                        <div class="basket__info">
                            <h1 class="basket__title">${name}</h1>
                            <p class="basket__price">${Summ}</p>
                        </div>
                        <div class="basket__btns" id="${name.toLowerCase()}_card">
                                <button class="basket__sym">-</button>
                                <h2 class="basket__amount">${amount}</h2>
                                <button class="basket__sym">+</button>
                        </div>
                </div>
                
            `
}

const printMain = document.querySelector('.print__main'),
basketBtn = document.querySelector('.basket__bottom'),
printTotal = document.querySelector('.print__total');

window.addEventListener('click',(e)=>{
    const btn = e.target
    if (btn.classList.contains('basket__sym')) {
        const parent = btn.closest('.basket__btns'),
        parentId = parent.getAttribute('id').split("_")[0]
        if (btn.innerHTML == "+") product[parentId].amount++
        else if (btn.innerHTML == "-") product[parentId].amount--
    }
    basketCard()
})
basketBtn.onclick = ()=>{
    for (const key in product) {
        const {Summ,name,price,amount} = product[key]
        if (amount > 0) {
            return printMain.innerHTML = `
            <div class="print__main-item">
                <h2 class="print__main-name"></h2>
                    <span>Name:${name}</span>
                    <span>Price:${price}</span>
                <h3 class="print__total"></h3>
            </div>
    `
        }
        basketTotal.innerHTML = `Jami: ${totalSumm()}`
        window.print()
    }
}