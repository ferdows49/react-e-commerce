import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Button } from "@material-ui/core";
import Loader from "./Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetail, productDetailView } from "../store/actions/ProductDetailViewAction";

const ProductDetails = () => {
  // const [productDetails, setProductDetails] = useState([]);
  const productDetails = useSelector(state => state.products.currentProduct)
  const dispatch = useDispatch()
  const { productId } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchProductDetail(productId))
  }, [productId]);

  const onDeleteHandler = () => {
    axios.delete(`https://fakestoreapi.com/products/${productId}`)
      .then(response => console.log(response))
      .catch(err => err)
    history.push(`/`)
  }

  return (
    <Loader>
      <img
        src={productDetails.image}
        alt={ProductDetails.title}
        style={{ height: "25rem", width: "20rem" }}
      />
      <h2>{ProductDetails.title}</h2>
      <p>${productDetails.price}</p>
      <p>{productDetails.category}</p>
      <p>{productDetails.description}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          history.push(`/product-details/${productId}/edit-product`)
        }
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={onDeleteHandler}
      >
        Delete
      </Button>
    </Loader>
  );
};

export default ProductDetails;
