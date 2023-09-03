let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-detailes");
let productDetailes = products.find((item) => item.id == productId);

itemDom.innerHTML = `
<img src="${productDetailes.imageUrl}" alt="" />
<h2>${productDetailes.title}</h2>
<p>${productDetailes.desc}</p>
<span>Size : ${productDetailes.size}</span> <br>
<span>Quntatity: ${productDetailes.qty}</span>
<button onclick="editProduct(${productId})" class="edit-product">Edit Product</button>
`;
// Edit Product
function editProduct(id) {
    localStorage.setItem("editProduct", id);
    window.location = "editproduct.html";
}
