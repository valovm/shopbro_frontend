const products = [
    {
        id: 1,
        name: "Cheeseburger Pizza",
        image: {
            url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/en-GB/b5f1aa0e-a950-4dde-94eb-1c1d79ae82ca_292x292.webp'
        },
        teaser: "Beef, tomatoes, red onions, cheddar, mozzarella, tomato sauce, mayonnaise, ketchup, peri peri",
        price: {
            cents: 7401,
            currency: 'RUB',
        }
    },
    {
        id: 2,
        name: "Курица с четырьмя сырами",
        image: {
            url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/en-GB/debc621a-609c-444f-98b0-2b0add4e5bbb_292x292.webp'
        },
        teaser: "Сэндвич с курицей и четырьмя сырами - сыр, сливочный сыр, курица-гриль, горгонзола, пармезан и оливковое масло.",
        price: {
            cents: 7400,
            currency: 'RUB',
        }
    },
    {
        id: 3,
        name: "Курица с четырьмя сырами",
        image: {
            url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/en-GB/debc621a-609c-444f-98b0-2b0add4e5bbb_292x292.webp'
        },
        teaser: "Сэндвич с курицей и четырьмя сырами - сыр, сливочный сыр, курица-гриль, горгонзола, пармезан и оливковое масло.",
        price: {
            cents: 7400,
            currency: 'RUB',
        }
    },
]


function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(products);}, 0);
    });
}

function getProductDetail(productId) {
    const product = products.find(product => product.id === productId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(product){ resolve(product); }
        }, 0);
    });
}

export { getProducts, getProductDetail }

