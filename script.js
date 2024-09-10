let quantity = 1;

function increaseQuantity() {
    quantity++;
    document.getElementById('quantity').value = quantity;
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').value = quantity;
    }
}

function showAlert() {
    alert(`Added ${quantity} item(s) to cart!`);
}
