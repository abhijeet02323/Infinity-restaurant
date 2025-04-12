<script>
    let cart = [];

    // Function to toggle navigation menu
    function toggleMenu() {
        document.querySelector('.nav-links').classList.toggle('active');
    }

    // Function to update cart display
    function updateCart() {
        const cartItemsContainer = document.getElementById("cart-items");
        const cartTotalElement = document.getElementById("cart-total");
        const cartCountElement = document.getElementById("cart-count");

        cartItemsContainer.innerHTML = ""; // Clear existing items
        let total = 0;

        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">❌</button>`;
            cartItemsContainer.appendChild(li);
            total += item.price;
        });

        cartTotalElement.textContent = total.toFixed(2);
        cartCountElement.textContent = cart.length;
    }

    // Function to add item to cart
    function addToCart(event) {
        let button = event.target;
        let name = button.getAttribute("data-name");
        let price = parseFloat(button.getAttribute("data-price"));

        cart.push({ name, price });
        updateCart();
    }

    // Function to remove item from cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    // Function to toggle cart modal visibility
    function toggleCart() {
        document.getElementById("cart-modal").style.display = "block";
    }

    // Function to close cart modal
    function closeCart() {
        document.getElementById("cart-modal").style.display = "none";
    }

    // Event listener for cart button
    document.getElementById("cart-btn").addEventListener("click", toggleCart);

    // Event listener for close button
    document.querySelector(".close-btn").addEventListener("click", closeCart);

    // Event listeners for all "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", addToCart);
    });

</script>
