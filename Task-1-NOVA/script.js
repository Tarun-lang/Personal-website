/* Theme Toggle */
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-page");
});

/* Shopping Cart */
let quantity = 0;
const productPrice = 4999;

const cartSummary = document.getElementById("cartSummary");
const quantityDisplay = document.getElementById("quantity");
const totalDisplay = document.getElementById("total");

document.getElementById("addCart").addEventListener("click", function() {
    quantity++;
    cartSummary.hidden = false;
    quantityDisplay.textContent = quantity;
    totalDisplay.textContent =
        (quantity * productPrice).toLocaleString("en-IN");
});

/* Remove Item */
document.getElementById("removeCart").addEventListener("click", function() {
    quantity = 0;
    cartSummary.hidden = true;
});

/* Buy Now */
document.getElementById("buyNow").addEventListener("click", function() {
    if (quantity === 0) {
        alert("Please add the product to your cart first.");
    } else {
        alert("Thank you! Your order has been placed successfully.");
    }
});
