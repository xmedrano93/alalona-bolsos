const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyA49CWvodWCO7gjgZl72ghmsK--ghEcBmE",
    authDomain: "alalona-bolsos.firebaseapp.com",
    projectId: "alalona-bolsos",
});

var db = firebase.firestore();

var productos = [
    {
        "id":0,
        "qtyUn": 0,
        "category":"lona",
        "title":"Lona verde",
        "price":600,
        "imgUrl":"product1.jpg",
        "stock":5,
        "alt":"Lona verde",
        "description":"Producto de tela, ideal para salidas de picnic. Muy cómodo para usarlo en todo momento. Gran capacidad de almacenaje"
    },
    {
        "id":1,
        "qtyUn": 0,
        "category":"lona",
        "title":"Lona rosada",
        "price":800,
        "imgUrl":"product2.jpg",
        "stock":10,
        "alt":"Lona rosado",
        "description":"Producto de tela, ideal para salidas de picnic. Muy cómodo para usarlo en todo momento. Gran capacidad de almacenaje"
        
    },
    {
        "id":2,
        "qtyUn": 0,
        "category":"lona",
        "title":"Lona amarilla",
        "price":1000,
        "imgUrl":"product3.jpg",
        "stock":15,
        "alt":"Lona amarillo",
        "description":"Producto de tela, ideal para salidas de picnic. Muy cómodo para usarlo en todo momento. Gran capacidad de almacenaje"
    },
    {
        "id":3,
        "qtyUn": 0,
        "category":"lona",
        "title":"Lona azul",
        "price":1200,
        "imgUrl":"product4.jpg",
        "stock":20,
        "alt":"Lona azul",
        "description":"Producto de tela, ideal para salidas de picnic. Muy cómodo para usarlo en todo momento. Gran capacidad de almacenaje"
    },
    {
        "id":4,
        "qtyUn": 0,
        "category":"lona",
        "title":"Lona violeta",
        "price":1200,
        "imgUrl":"product4.jpg",
        "stock":20,
        "alt":"Lona violeta",
        "description":"Producto de tela, ideal para salidas de picnic. Muy cómodo para usarlo en todo momento. Gran capacidad de almacenaje"
    },
    {
        "id":5,
        "qtyUn": 0,
        "category":"lona",
        "title":"Lona bordó",
        "price":1200,
        "imgUrl":"product4.jpg",
        "stock":20,
        "alt":"Lona bordó",
        "description":"Producto de tela, ideal para salidas de picnic. Muy cómodo para usarlo en todo momento. Gran capacidad de almacenaje"
    },
    {
        "id":6,
        "qtyUn": 0,
        "category":"mochila",
        "title":"Mochila roja",
        "price":1200,
        "imgUrl":"product4.jpg",
        "stock":20,
        "alt":"Mochila roja",
        "description":"Producto de tela, ideal para salidas de picnic. Muy cómodo para usarlo en todo momento. Gran capacidad de almacenaje"
    },
    {
        "id":7,
        "qtyUn": 0,
        "category":"mochila",
        "title":"Mochila azul",
        "price":1200,
        "imgUrl":"product4.jpg",
        "stock":20,
        "alt":"Mochila azul",
        "description":"Producto de tela, ideal para salidas de picnic. Muy cómodo para usarlo en todo momento. Gran capacidad de almacenaje"
    },
    {
        "id":8,
        "qtyUn": 0,
        "category":"neceser",
        "title":"Neceser verde",
        "price":1200,
        "imgUrl":"product4.jpg",
        "stock":20,
        "alt":"Neceser verde",
        "description":"Producto de tela, ideal para salidas de picnic. Muy cómodo para usarlo en todo momento. Gran capacidad de almacenaje"
    },
    {
        "id":9,
        "qtyUn": 0,
        "category":"neceser",
        "title":"Neceser azul",
        "price":1200,
        "imgUrl":product4.jpg,
        "stock":20,
        "alt":"Neceser azul",
        "description":"Producto de tela, ideal para salidas de picnic. Muy cómodo para usarlo en todo momento. Gran capacidad de almacenaje"
    }
]

productos.forEach((obj) =>{
    db.collection('productos')
    .add({
        id :obj.id,
        qtyUn: obj.qtyUn,
        category: obj.category,
        title: obj.title,
        price: obj.price,
        imgUrl: obj.imgUrl,
        stock: obj.stock,
        alt: obj.alt,
        description: obj.description,
    })
    .then((docRef)=>{
        console.log('Producto registrado bajo ID:', docRef.id);
    })
    .catch((error)=>{
        console.log('Error al agregar producto:', error);
    });
});