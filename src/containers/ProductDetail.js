import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetails = () => {
    const product = useSelector((state) => state.product );
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(productId);


    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log("Err",err);
        });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail()
    },[productId]);

    return(
    <div>
        <h1>ProductDetails</h1>  
    </div>
    );
};

export default ProductDetails;