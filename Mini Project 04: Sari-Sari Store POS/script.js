const groceryItems = [
    { product_id: 1, product_name: "Dried Mangoes (200g)", product_price: 180 },
    { product_id: 2, product_name: "Banana Chips (200g)", product_price: 120 },
    { product_id: 3, product_name: "Tablea Chocolate (250g)", product_price: 200 },
    { product_id: 4, product_name: "Coconut Oil (500ml)", product_price: 180 },
    { product_id: 5, product_name: "Mango Jam (250g)", product_price: 160 },
    { product_id: 6, product_name: "Peanut Brittle (200g)", product_price: 150 },
    { product_id: 7, product_name: "Cashew Nuts (250g)", product_price: 280 },
    { product_id: 8, product_name: "Philippine Coffee Beans (250g)", product_price: 320 },
    { product_id: 9, product_name: "Native Vinegar (500ml)", product_price: 120 },
    { product_id: 10, product_name: "Philippine Honey (250ml)", product_price: 250 },
    { product_id: 11, product_name: "Coconut Sugar (500g)", product_price: 180 },
    { product_id: 12, product_name: "Rice Crackers (200g)", product_price: 100 },
    { product_id: 13, product_name: "Salted Fish (Danggit, 250g)", product_price: 220 },
    { product_id: 14, product_name: "Longganisa (Frozen, 500g)", product_price: 280 },
    { product_id: 15, product_name: "Tocino (Frozen, 500g)", product_price: 300 },
    { product_id: 16, product_name: "Chicharon (100g)", product_price: 120 },
    { product_id: 17, product_name: "Pandesal Pack (12 pcs)", product_price: 80 },
    { product_id: 18, product_name: "Native Brown Rice (1kg)", product_price: 90 },
    { product_id: 19, product_name: "White Rice (1kg)", product_price: 70 },
    { product_id: 20, product_name: "Corn Coffee (250g)", product_price: 150 },
    { product_id: 21, product_name: "Coconut Water (1L)", product_price: 100 },
    { product_id: 22, product_name: "Calamansi Juice (1L)", product_price: 120 },
    { product_id: 23, product_name: "Guava Jelly (250g)", product_price: 160 },
    { product_id: 24, product_name: "Bagoong (250g)", product_price: 90 },
    { product_id: 25, product_name: "Fish Sauce (Patis, 500ml)", product_price: 110 },
    { product_id: 26, product_name: "Soy Sauce (500ml)", product_price: 95 },
    { product_id: 27, product_name: "Native Salt (250g)", product_price: 50 },
    { product_id: 28, product_name: "Coconut Milk Powder (200g)", product_price: 140 },
    { product_id: 29, product_name: "Instant Noodles (Pack of 6)", product_price: 75 },
    { product_id: 30, product_name: "Native Cheese (Kesong Puti, 250g)", product_price: 180 },
    { product_id: 31, product_name: "Eggs (Dozen)", product_price: 90 },
    { product_id: 32, product_name: "Fresh Tilapia (1kg)", product_price: 160 },
    { product_id: 33, product_name: "Fresh Bangus (Milkfish, 1kg)", product_price: 180 },
    { product_id: 34, product_name: "Fresh Chicken (1kg)", product_price: 200 },
    { product_id: 35, product_name: "Fresh Pork (1kg)", product_price: 280 },
    { product_id: 36, product_name: "Fresh Beef (1kg)", product_price: 350 },
    { product_id: 37, product_name: "Native Vegetables Basket", product_price: 250 },
    { product_id: 38, product_name: "Bananas (1kg)", product_price: 60 },
    { product_id: 39, product_name: "Mangoes (1kg)", product_price: 120 },
    { product_id: 40, product_name: "Papaya (1kg)", product_price: 70 },
    { product_id: 41, product_name: "Pineapple (Whole)", product_price: 90 },
    { product_id: 42, product_name: "Coconut (Whole)", product_price: 50 },
    { product_id: 43, product_name: "Native Peanuts (250g)", product_price: 100 },
    { product_id: 44, product_name: "Camote (Sweet Potato, 1kg)", product_price: 80 },
    { product_id: 45, product_name: "Ube Halaya (250g)", product_price: 180 },
    { product_id: 46, product_name: "Leche Flan (Whole)", product_price: 250 },
    { product_id: 47, product_name: "Bibingka (Whole)", product_price: 200 },
    { product_id: 48, product_name: "Puto (Dozen)", product_price: 120 },
    { product_id: 49, product_name: "Kakanin Sampler Pack", product_price: 300 },
    { product_id: 50, product_name: "Native Chocolate Drink (Sikwate, 250ml)", product_price: 90 }
];

let cart = [];
let transactions = [];

const productSelect = document.getElementById("product");
const quantityInput = document.getElementById("quantity");
const addButton = document.getElementById("add-btn");

const cartDiv = document.getElementById("cart");
const totalText = document.getElementById("total");

const customerInput = document.getElementById("customer");
const paymentInput = document.getElementById("payment");
const checkoutButton = document.getElementById("checkout-btn");

const message = document.getElementById("message");
const receiptDiv = document.getElementById("receipt");


groceryItems.forEach(function(product) {

    const option = document.createElement("option");

    option.value = product.product_id;

    option.textContent =
        product.product_id +
        ". " +
        product.product_name +
        " - ₱" +
        product.product_price;

    productSelect.appendChild(option);
});


addButton.addEventListener("click", function() {

    const productId = Number(productSelect.value);
    const quantity = Number(quantityInput.value);

    if (productId === 0 || quantity <= 0) {

        alert("Please select a product and quantity.");

        return;
    }

    const product = groceryItems.find(function(item) {

        return item.product_id === productId;

    });

    const subtotal =
        product.product_price * quantity;

    cart.push({

        product_id: product.product_id,

        product_name: product.product_name,

        product_price: product.product_price,

        quantity: quantity,

        subtotal: subtotal

    });

    displayCart();
});


function displayCart() {

    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach(function(item) {

        const div = document.createElement("div");

        div.className = "cart-item";

        div.textContent =
            item.product_name +
            " × " +
            item.quantity +
            " = ₱" +
            item.subtotal.toFixed(2);

        cartDiv.appendChild(div);

        total = total + item.subtotal;
    });

    if (cart.length === 0) {

        cartDiv.textContent = "No items added.";

    }

    totalText.textContent =
        total.toFixed(2);
}


checkoutButton.addEventListener("click", function() {

    if (cart.length === 0) {

        message.textContent =
            "Please add a product first.";

        return;
    }

    const customer =
        customerInput.value || "Walk-in Customer";

    const payment =
        Number(paymentInput.value);

    let total = 0;

    cart.forEach(function(item) {

        total = total + item.subtotal;

    });

    if (payment <= 0) {

        message.textContent =
            "Please enter payment.";

        return;
    }

    if (payment < total) {

        message.textContent =
            "Insufficient payment.";

        return;
    }

    const change =
        payment - total;

    const transaction = {

        transaction_id:
            transactions.length + 1,

        date:
            new Date().toLocaleString(),

        customer:
            customer,

        products:
            cart,

        total:
            total,

        amount_paid:
            payment,

        change:
            change
    };

    transactions.push(transaction);

    message.textContent =
        "Transaction completed!";

    showReceipt(transaction);

    cart = [];

    displayCart();

    customerInput.value = "";

    paymentInput.value = "";

    productSelect.value = "";

    quantityInput.value = 1;
});


function showReceipt(transaction) {

    let receipt = "";

    receipt += "<h3>SARI-SARI STORE</h3>";

    receipt +=
        "Transaction ID: " +
        transaction.transaction_id +
        "<br>";

    receipt +=
        "Date: " +
        transaction.date +
        "<br>";

    receipt +=
        "Customer: " +
        transaction.customer +
        "<hr>";

    transaction.products.forEach(function(item) {

        receipt +=
            item.product_name +
            " × " +
            item.quantity +
            " = ₱" +
            item.subtotal.toFixed(2) +
            "<br>";

    });

    receipt += "<hr>";

    receipt +=
        "Total: ₱" +
        transaction.total.toFixed(2) +
        "<br>";

    receipt +=
        "Paid: ₱" +
        transaction.amount_paid.toFixed(2) +
        "<br>";

    receipt +=
        "Change: ₱" +
        transaction.change.toFixed(2);

    receiptDiv.innerHTML = receipt;

    showReports();
}


function showReports() {

    document.getElementById("transaction-count").textContent =
        transactions.length;

    let sales = 0;

    transactions.forEach(function(transaction) {

        sales = sales + transaction.total;

    });

    document.getElementById("total-sales").textContent =
        sales.toFixed(2);

    let productCount = {};

    transactions.forEach(function(transaction) {

        transaction.products.forEach(function(item) {

            if (productCount[item.product_name]) {

                productCount[item.product_name] =
                    productCount[item.product_name] +
                    item.quantity;

            } else {

                productCount[item.product_name] =
                    item.quantity;

            }

        });

    });

    let mostPurchased = "None";

    let highest = 0;

    for (let product in productCount) {

        if (productCount[product] > highest) {

            highest =
                productCount[product];

            mostPurchased =
                product;

        }

    }

    document.getElementById("most-purchased").textContent =
        mostPurchased;

    showTransactionRecords();
}


function showTransactionRecords() {

    const table =
        document.getElementById("transaction-table");

    table.innerHTML = "";

    transactions.forEach(function(transaction) {

        let products = "";

        transaction.products.forEach(function(item) {

            products +=
                item.product_name +
                " × " +
                item.quantity +
                "<br>";

        });

        const row =
            document.createElement("tr");

        row.innerHTML = `

            <td>${transaction.transaction_id}</td>

            <td>${transaction.date}</td>

            <td>${transaction.customer}</td>

            <td>${products}</td>

            <td>₱${transaction.total.toFixed(2)}</td>

            <td>₱${transaction.amount_paid.toFixed(2)}</td>

            <td>₱${transaction.change.toFixed(2)}</td>

        `;

        table.appendChild(row);

    });
}


displayCart();

showReports();
