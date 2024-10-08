function toggleDetails(serviceId) {
    const details = document.getElementById(serviceId);
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
    } else {
        details.classList.add('hidden');
    }
}
function addToCart(productName) {
    alert(productName + ' has been added to your cart!');
}