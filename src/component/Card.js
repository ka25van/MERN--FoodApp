import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0279/6329/3831/products/Chocolate-Truffle-Pastries_1024x1024.jpg?v=1577958105" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">New Card</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 w-15 bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    );
                                })}
                            </select>
                            <select className='m-2 h-100 w-30 bg-success rounded'>
                                return(

                                <option value="half">Half</option>

                                <option value="Full">Full</option>
                                );
                            </select>
                            <div className='h-100 d-inline fs-5'>
                                Total
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
