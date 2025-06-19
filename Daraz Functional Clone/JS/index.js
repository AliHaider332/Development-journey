let productItem=document.querySelector(".container");
displayProducts();
let bagCount=document.querySelector(".bag-count");
let bagItems= JSON.parse(localStorage.getItem('x')) || [];
addToBag('$');

function addToBag(id) {
    if (id!='$') {
        bagItems.push(id); 
    }
    if(bagItems.length>0)
    {
        bagCount.style.visibility = 'visible';
    }
    bagCount.innerHTML = bagItems.length;
    let temp = JSON.stringify(bagItems);
    localStorage.setItem('x', temp);
}
const bagProduct=bagItems;
function displayProducts() {
    let i = JSON.parse(localStorage.getItem("items")) || [];
    items.forEach(function(item) 
    {
        productItem.innerHTML += `
            <div class="Product">
                <img src="${item.product_img}" alt="Product image" class="Product-image">
                <a href="${item.product_link}" target="_blank" class="Product-text">${item.product_text}</a>          
                <span class="price">Rs. ${item.product_price} <span class="discount"> -${item.product_discount}% OFF </span> </span>
                <span class="rating"><span id="star">${item.rating.product_rating}<i class="fa-solid fa-star"></i>   |  </span>${item.rating.product_review} <i class="fa-solid fa-user"></i></span>
                <button class="add" onclick="addToBag(${item.id})">Add to Cart</button>
            </div>
        `
    })
    
}

