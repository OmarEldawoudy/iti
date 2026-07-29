import { useState } from 'react';

export default function Child({ product, deleteProduct }) {
    let { id, pName, price, desc, onSale  , count } = product;

    return (
        <><div className="col-md-3">
            <div className="bg-success text-center item shadow-lg p-4 rounded position-relative" >
                <h2>product Name:{pName}</h2>
                <h2>product price:{price}</h2>
                <h2>product desc:{desc}</h2>
                <h2>count:{count}</h2>
                { onSale ? <span className="badge bg-danger p-2 position-absolute top-0 end-0">OnSale</span> :""}
            </div>
            <div className="d-flex justify-content-around my-3">
                <button className='btn btn-danger'onClick={() =>
                    deleteProduct(id)
                } >Delete</button>
                
                <button className='btn btn-primary'> Update count</button>

            </div>
        </div>
        </>
    );
}