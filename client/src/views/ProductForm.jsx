import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import { Link, useParams, useHistory } from 'react-router-dom';
import ProductService from '../services/services.product';


const ProductForm = () => {
    const { id } = useParams();
    const history = useHistory();
    const productService = new ProductService;
    const initialState = {
        "title":'',
        "price": '',
        "description": ''
    }
    const [product, setProduct] = useState(initialState)
    const [error, setError] = useState('')
    //const [sucessMessage, setSucessMessage] = useState()

    const getASingleProductFromService = async () => {
        try {
            const singleProduct = await productService.getOneSingleProduct(id);
            setProduct(singleProduct);
        } catch (err) {
            return err;
        }

    }

    const createProduct = async (e) =>{
        e.preventDefault();
        await productService.createProduct(product);
     //   setSucessMessage("Producto creado exitosamente");
        history.push('/');
    }
    const updateProduct = async (e) =>{
        e.preventDefault();
        await productService.updateproduct(id,product);
       // setSucessMessage("Producto actualizado exitosamente");
        history.push('/');

    }
    const handleCommit = (e)=>{
        id ? updateProduct(e) : createProduct(e);
        
    }
//^[0-9,$]*$
    const handleChangeInput = (e)=>{
        if(e.target.name==='title'){
            (e.target.value.length >0 && e.target.value.length <2) ? setError('* El titulo debe tener por lo menos 2 caracteres') : setError('')
        }else if (e.target.name==='price'){
            const numberRegExp = /^[0-9]*$/;
            numberRegExp.test(e.target.value) ? setError('') : setError('* Favor Ingresar solo numeros');
        }
        setProduct({...product, [e.target.name]: e.target.value});
    }

    useEffect(()=>{
        if (id){
            getASingleProductFromService();
        }else{
            setProduct(initialState);
        }
    },[])

    return (
        <div className="container">
            <Navigation />
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <div className="card mt-3">
                        <div className="card-body">
                            <h3 className="text-center">{id ? 'Edit Product' : 'Create New Product'}</h3>
                            
                            <form onSubmit={(e) => handleCommit(e)}>
                                <div className="row mb-3">
                                    <label htmlFor="title" className="col-sm-5 col-form-label">Title</label>
                                    <div className="col-sm-7">
                                        <input type="text" className="form-control" name="title" id="title" value={product.title} onChange={(e) => handleChangeInput(e)} />
                                        <span className="badge bg-danger">{error}</span>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="price" className="col-sm-5 col-form-label">Price</label>
                                    <div className="col-sm-7">
                                        <input type="text" className="form-control" name="price" id="price" value={product.price} onChange={(e) => handleChangeInput(e)} />
                                        <span className="badge bg-danger">{error}</span>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="description" className="col-sm-5 col-form-label">Description</label>
                                    <div className="col-sm-7">
                                        <input type="text" className="form-control" name="description" id="description" value={product.description} onChange={(e) => handleChangeInput(e)} />
                                    </div>
                                </div>
                                <div className="row mb-3">

                                    <div className="col text-center">
                                        <button type="submit" className="btn btn-primary btn-lg">Save</button>
                                    </div>
                                </div>
                                

                            </form>
                            
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductForm
