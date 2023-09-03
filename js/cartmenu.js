let cartproductDivDom = document.querySelector(".carts-products div");
let cartproductMenu = document.querySelector(".carts-products");
let badgeDom = document.querySelector(".badge");
let shoppingCartIcon = document.querySelector(".shoppingCart");
shoppingCartIcon.addEventListener("click", openCartMenu);

// Check If there is items LocalStorage
let addedItem = localStorage.getItem("productsInCart")
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [];
if (addedItem) {
    addedItem.map((item) => {
        cartproductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });
    badgeDom.style.display = "block";
    badgeDom.innerHTML += addedItem.length;
}

// Open cart Menu
function openCartMenu() {
    if (cartproductDivDom.innerHTML != "") {
        if (cartproductMenu.style.display == "block") {
            cartproductMenu.style.display = "none";
        } else {
            cartproductMenu.style.display = "block";
        }
    }
}
