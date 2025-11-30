// console log AS required by mam 
console.log("Cart page loaded - Ready for interactions");

let items = document.querySelectorAll(".cart-item");

// Function to update total price(THIS WAS SOOOOO DIFIICULTTT)
function updateTotal() {
    let total = 0;
    items.forEach(item => {
        let price = parseInt(item.querySelector(".price").textContent.replace("RS.", ""));
        let qty = parseInt(item.querySelector(".quantity").textContent);
        total += price * qty;
    });
    document.querySelector(".total-amount").textContent = "RS." + total;
}

// Handle quantity buttons and removal
items.forEach(item => {
    const plus = item.querySelector(".plus");
    const minus = item.querySelector(".minus");
    const qtyBox = item.querySelector(".quantity");
    const removeBtn = item.querySelector(".remove-btn");

    plus.addEventListener("click", () => {
        qtyBox.textContent = parseInt(qtyBox.textContent) + 1;
        updateTotal();
    });

    minus.addEventListener("click", () => {
        let current = parseInt(qtyBox.textContent);
        if (current > 1) {
            qtyBox.textContent = current - 1;
            updateTotal();
        }
    });

    removeBtn.addEventListener("click", () => {
        item.remove();
        updateTotal();
    });
});

// Proceed to Payment button functional and working v gooood
document.querySelector(".btn-success").addEventListener("click", () => {
    // Re-query cart items in case some were removed
    let remainingItems = document.querySelectorAll(".cart-item");
    if (remainingItems.length === 0) {
        alert("if cart is akready empty what you wanna buy Please add items before."); // Alert 1
        return;
    }
    console.log("Proceeding to Payment page"); // Console log 2in case 
    window.location.href = "payemntinfo.html"; // Redirect to Payment page finalllyyyyyu 
});
