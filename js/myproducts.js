let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");

// display Products
let drawProductsUI;
(drawProductsUI = function (products = []) {
    let myProducts = products.filter((item) => item.isMe === "Y");
    if (myProducts.length != 0) {
        let productsUI = myProducts.map((item) => {
            return `
    <div class="product-item" style="border: ${
        item.isMe === "Y" ? "2px solid green" : ""
    }">
    <img
        src="${item.imageUrl}"
        alt="headphone"
        class="product-item-img" />
    <div class="product-item-desc">
        <a onclick="saveItemDate(${item.id})">${item.title}</a>
        <p>${item.desc}</p>
        <span>Size: ${item.size}</span>

        <button class="edit-product" onclick="editProduct(${
            item.id
        })">Edit Product</button
        <br>
        <button class="edit-product" onclick="deleteProduct(${
            item.id
        })">Delete Product</button>
    </div>    
</div>

`;
        });
        productsDom.innerHTML = productsUI.join("");
    } else {
        noProductsDom.innerHTML = "No Products !!";
    }
})(JSON.parse(localStorage.getItem("products")) || productsDB);

// Edit Product
function editProduct(id) {
    localStorage.setItem("editProduct", id);
    window.location = "editproduct.html";
}

// delete Product
function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem("products")) || productsDB;
    let myProducts = products.filter((item) => item.isMe === "Y");
    let filtered = myProducts.filter((i) => i.id !== id);

    let clickedItem = myProducts.find((i) => i.id === id);
    products = products.filter((i) => i.id !== clickedItem.id);
    localStorage.setItem("products", JSON.stringify(products));
    drawProductsUI(filtered);
}
