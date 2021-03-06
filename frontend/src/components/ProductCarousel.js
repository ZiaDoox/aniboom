import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";
import  Carousel  from "react-material-ui-carousel";
import ItemCustom from "./ItemCustom";

const ProductCarousel = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;
  console.log(products)
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
    </>
  )
  // ) : (
  //   <Carousel>
  //     {products.map((product, i) => (
  //       <ItemCustom key={i} item={product} />
  //     ))}
  //   </Carousel>
  // );
};

export default ProductCarousel;
