let bagProducts = document.querySelector(".product-container");
let bag_Product = JSON.parse(localStorage.getItem('x')) || [];

get_items();

function get_items() {
    bagProducts.innerHTML = ""; 
    bag_Product = JSON.parse(localStorage.getItem('x')) || [];
    let all_products = JSON.parse(localStorage.getItem('y'));

    for (let i = 0; i < bag_Product.length; i++) {
        for (let j = 0; j < all_products.length; j++) {
            if (parseInt(bag_Product[i]) === parseInt(all_products[j].id)) {
                productGenerator(all_products[j]);
            }
        }
    }
}

function productGenerator(productInBag) {
    bagProducts.innerHTML += `
        <div class="bag-products">
            <img src="${productInBag.product_img}" alt="Product Image" class="bag-img">
            <div class="bag-discription">
                <a href="${productInBag.product_link}" class="bag-text">${productInBag.product_text}</a>
                <div class="price-box">
                    <span class="bag-price">RS. ${productInBag.product_price}</span>
                    <span class="bag-off">- ${productInBag.product_discount}%</span>
                </div>
                <div class="rating">
                    <span class="star">${productInBag.rating.product_rating}<i class="fa-solid fa-star"></i></span> |
                    <span class="review">${productInBag.rating.product_review}<i class="fa-solid fa-user"></i></span>
                </div>
                
            </div>

            <button class="bag-clear" onclick="deleteProduct(${productInBag.id})"><i class="fa-solid fa-xmark"></i></button>
            <button class="summary-button" onclick="summary_update(${productInBag.product_price},${productInBag.id})">Summary</button>

        </div>
    `;
}


let summaryBox=document.querySelector(".summary-box")
function summary_update(priveOfItem, idOfProduct) {
    summaryBox.innerHTML = `
        <div class="summary">
            <div class="product-price">Product Price: <span class="p-price">${priveOfItem}</span></div>
            <div class="product-price">Use Voucher: <span class="v-price">0</span></div>
            <div class="product-price">Delivery Fee: <span class="d-price">150</span></div>
            <div class="total-price">Total Amount: <span class="d-price">${parseInt(priveOfItem) + 150}</span></div>
            <button class="place-order">Place Order</button>
        </div>
    `;

    for (let i = 0; i < bag_Product.length; i++) {
        if (parseInt(bag_Product[i]) === parseInt(idOfProduct)) {
            let temp = bag_Product[0];
            bag_Product[0] = bag_Product[i];
            bag_Product[i] = temp;
            break; 
        }
    }

    localStorage.setItem('x', JSON.stringify(bag_Product));
    get_items(); 
    window.scrollTo({
        top: 0,
        
    });
}





function deleteProduct(id) {
    if(bag_Product.length===1)
    {
        bag_Product=[];
    }
    for (let i = 0; i < bag_Product.length; i++) {
        if (parseInt(bag_Product[i]) === parseInt(id)) {
            bag_Product.splice(i, 1);
            break; 
        }
    }
    localStorage.setItem('x', JSON.stringify(bag_Product));
    get_items(); // Refresh the UI
}
