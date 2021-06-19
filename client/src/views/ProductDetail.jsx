import React, { useEffect, useState } from 'react';
import ProductService from '../services/services.product';
import { Link, useParams } from 'react-router-dom';
import Navigation from './Navigation';

const ProductDetail = () => {
    const { id } = useParams();
    const productService = new ProductService;
    const [product, setProduct] = useState({});


    const getASingleProductFromService = async () => {
        try {
            const singleProduct = await productService.getOneSingleProduct(id);
            setProduct(singleProduct);
        } catch (err) {
            return err;
        }

    }
    useEffect(() => {
        getASingleProductFromService();
    }, [])
    return (
        <div className="container">
            <Navigation/>
            <div class="row justify-content-md-center">
                <div class="col-md-auto">
                    <div className="card">
                        <div className="card-header">
                            <h3>{product.title}</h3>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Price</h5>
                            <p className="card-text">{product.price}</p>
                            <h5 className="card-title">Description</h5>
                            <p className="card-text">{product.description}</p>
                            <Link to="/">
                                <button type="button" class="btn btn-secondary btn-lg">Volver</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default ProductDetail
