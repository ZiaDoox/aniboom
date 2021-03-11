import { Button, CardActionArea, CardActions, Paper } from '@material-ui/core';
import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { grey } from '@material-ui/core/colors';

const styles = theme => ({
    card: {
        padding: "20px",
        backgroundColor: grey[200],
        maxWidth: 400,
        margin: 'auto',
        transition: '0.3s',
        boxShadow: '0 8px 20px -12px rgba(0,0,0,0.3)',
        "&:hover": {
            boxShadow: "0 6px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: '70.25%',
        margin: `${theme.spacing.unit * 1}px 0`
    },
    content: {
        textAlign: 'left',
    },
    divider: {
        margin: `${theme.spacing.unit * 3}px 0`
    },
    heading: {
        fontWeigh: 'bold'
    },
    subheading: {
        lineHeight: 1.8
    }
})

const ItemCustom = ({item, classes}) => {
    return (
        <>
            <Card className={classes.card}>
                <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image={item.image} />
                <CardContent className={classes.content}>
                    <Typography
                        className='title'
                        variant={"h6"}
                        gutterBottom
                    >
                        {item.name}
                    </Typography>
                    <Typography
                        className='pit-description'
                    >
                        {item.description}
                    </Typography>
                    <Typography
                        className='product-price'
                        variant={"h6"}
                        gutterBottom
                    >
                        Prix: {item.price}DH
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small"color="primary">
                        Ajouter au panier
                    </Button>
                    <Button size="small" color="secondary" variant="outline">
                        Details
                    </Button>
                </CardActions>

            </Card>
        </>
    )
}

export default withStyles(styles)(ItemCustom)