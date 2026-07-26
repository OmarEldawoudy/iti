let productsDiv = document.querySelector("#products");

async function getProducts() {

    try {

        let response = await fetch("https://fakestoreapi.com/products");

        if (response.ok) {

            let data = await response.json();

            displayProducts(data);

        }

    }

    catch(error){

        console.log(error);

    }

}

getProducts();

function displayProducts(dataArray) {

    let content = "";

    for (const product of dataArray) {

        content += `
        
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div class="card h-100">

                <img src="${product.image}"
                class="card-img-top"
                style="height:250px;  object-fit:contain;">

                <div class="card-body">

                    <h5 class="card-title">
                        ${product.title}
                    </h5>

                    <p class="card-text">
                        ${product.description}
                    </p>

                    <h4 class="text">
                        $${product.price}
                    </h4>

                    <button class="btn btn-primary">
                        Buy Now
                    </button>

                </div>

            </div>

        </div>

        `;

    }

    productsDiv.innerHTML = content;
}