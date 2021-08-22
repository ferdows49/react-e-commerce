import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Loader from "./Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductList } from "../store/actions/ProductListViewAction";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const style = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

const ProductList = () => {
  const classes = useStyles();
  // const [products, setProducts] = useState([]);
  const allProducts = useSelector(state => state.products.products)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList())
  }, []);

  return (
    <Loader>
      <div style={style}>
        {allProducts.map((product) => {
          return (
            <NavLink to={`/product-details/${product.id}`}>
              <Card key={product.id} className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: "450px", width: "350px" }}
                    className={classes.media}
                    image={product.image}
                    title={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {product.category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </NavLink>
          );
        })}
      </div>
    </Loader>
  );
};

export default ProductList;
