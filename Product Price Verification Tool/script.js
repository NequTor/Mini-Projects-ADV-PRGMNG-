const product = document.getElementById("product");
const btnPrice = document.getElementById("btnPrice");
const price = document.getElementById("price");

document.addEventListener("DOMContentLoaded", loadProducts);

function loadProducts() {

    axios.get("http://localhost:3000/products")

    .then(function(response) {

        response.data.forEach(function(item) {

            const option = document.createElement("option");

            option.value = item.product_id;
            option.textContent = item.product_name;

            product.appendChild(option);

        });

    })

    .catch(function(error) {

        console.log(error);

    });

}

btnPrice.addEventListener("click", function() {

    const id = product.value;

    if (id === "") {

        alert("Please select a product.");

        return;

    }

    axios.get("http://localhost:3000/products/" + id)

    .then(function(response) {

        price.textContent =
            Number(response.data.product_price).toFixed(2);

    })

    .catch(function(error) {

        console.log(error);

    });

});