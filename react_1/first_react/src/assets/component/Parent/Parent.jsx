import { useState } from "react";
import Child from "../Child/Child";

export default function Parent() {

    let prodArray = [
        { id: 1, pName: "Samsung", price: 3000, onSale: false, desc: "Samsung Mobile Phone", count: 0 },
        { id: 2, pName: "Oppo", price: 5000, onSale: false, desc: "Oppo Mobile Phone", count: 0 },
        { id: 3, pName: "TV", price: 10000, onSale: true, desc: "Smart TV", count: 0 },
        { id: 4, pName: "PC", price: 12000, onSale: true, desc: "Highend PC", count: 0 },
        { id: 5, pName: "Camera", price: 30000, onSale: true, desc: "DSLR Camera", count: 0 },
        { id: 6, pName: "iPad", price: 15000, onSale: false, desc: "Apple iPad", count: 0 },
        { id: 7, pName: "Tab", price: 4500, onSale: true, desc: "Android Tab", count: 0 },
    ];

    const [Products, setProducts] = useState(prodArray);

    function deleteProduct(prodId) {

        let newProducts = Products.filter(
            (product) => product.id !== prodId
        );

        setProducts(newProducts);

    }

    return (

        <div className="container">

            <div className="row">

                {Products.map((product) => (

                    <Child
                        key={product.id}
                        product={product}
                        deleteProduct={deleteProduct}
                    />

                ))}

            </div>

        </div>

    );
}