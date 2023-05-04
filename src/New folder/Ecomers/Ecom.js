const product = [
    {
        id: 1,
        image: 'https://tse4.mm.bing.net/th?id=OIP.JjShDuNbhhAXoOkplyoEVAHaJ0&pid=Api&P=0',
        title: 'Headphones',
        price: 20,
        catagory:'Headphones',
    },
    {
        id: 2,
        image: 'https://tse3.mm.bing.net/th?id=OIP.aNMTGxUKggh5qj0qLxQbhgHaHa&pid=Api&P=0',
        title: 'Microphone',
        price: 45,
        catagory:'Microphone',

    },
    {
        id: 3,
        image: 'https://tse1.mm.bing.net/th?id=OIP.W9RGq_8Z120_4iFCX0W0wQHaHa&pid=Api&P=0',
        title: 'Smart Watch',
        price: 60,
        catagory:'Smart Watch',
    
    },
    {
        id: 4,
        image: 'https://tse4.mm.bing.net/th?id=OIP.unFV4TmYapCCWs2CPCy8rwHaDt&pid=Api&P=0',
        title: 'HP Laptop Next Generation',
        price: 30,
        catagory:'HP Laptop Next Generation',

    },
    {
        id: 5,
        image: 'https://tse1.mm.bing.net/th?id=OIP.0lxRsfgkqLRRKOtUJqEjHQHaHa&pid=Api&P=0',
        title: '250D DSLR Camera',
        price: 65,
        catagory:'250D DSLR Camera',

    },
    {
        id: 6,
        image: 'https://tse4.mm.bing.net/th?id=OIP.96BhqObRzioeXimWvD9QCwHaHa&pid=Api&P=0',
        title: 'Metal Dask Lamp',
        price: 35,
        catagory:'Metal Dask Lamp',

    },
    {
        id: 7,
        image: 'https://tse1.mm.bing.net/th?id=OIP.rDQA66aedDtBjFVtNAcm9QHaFL&pid=Api&P=0',
        title: 'Z Flip Foldable Mobile',
        price: 50,
        catagory:'Z Flip Foldable Mobile',

    },
    {
        id: 8,
        image: 'https://tse4.mm.bing.net/th?id=OIP.5rXhyS96H4LgXSt1Z498BAHaHa&pid=Api&P=0',
        title: 'Ari Pods Pro',
        price: 100,
        catagory:'Ari Pods Pro',

    },
]
const categories = [...new Set(product.map((item)=>
    {return item}))]   
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
               
                
"<i class='bx bxs-trash-alt' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('');
    }

    
}




