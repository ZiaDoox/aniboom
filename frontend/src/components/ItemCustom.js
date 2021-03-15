import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Paper,
  Tabs,
} from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import { useHistory } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";
import { ImageOutlined } from "@material-ui/icons";
import Rating from "./Rating";
import SimpleTabs from "./SimpleTabs";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    margin: `5px auto`,
    maxHeight: "450px",
  },
  mediaParent: {
    backgroundColor: "#fff",
    textAlign: "center",
  },
  body: {
    backgroundColor: "#282B28",
  },
  productTitle: {
    color: "#fff",
    fontWeight: "bold",
    padding: "0 1rem",
    minHeight: "40px",
  },
  productCategory: {
    color: "gold",
    padding: ".5rem 1rem",
  },
  productRating: {
    margin: ".5rem 1rem",
  },
});

const ItemCustom = ({ item, classes }) => {
  const history = useHistory();
  const addToCartHandler = () => {
    history.push(`/cart/${item._id}?qty=${1}`)
  }

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6} className={classes.mediaParent}>
          <img src={item.image} className={classes.media} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.body}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
          >
              <Typography
                item
                variant={"h6"}
                className={classes.productCategory}
                gutterBottom
              >
                {item.category}
              </Typography>
              <Typography
                item
                variant={"h4"}
                className={classes.productTitle}
                gutterBottom
              >
                {item.name}
              </Typography>
              <div item className={classes.productRating}>
                <Rating value={item.numReviews} />
              </div>
                <SimpleTabs product={item}></SimpleTabs>
                
          <Button
            className="rounded mt-3 mx-auto bg-light font-medium font-size-lg"
            onClick={addToCartHandler}
            variant="primary"
          >
            Ajouter au panier
          </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(ItemCustom);
