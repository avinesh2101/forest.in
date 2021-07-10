import React from "react";
import {Grid} from "@material-ui/core";
import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     {id:1, name:"Shoes",description:'Running shoes',price:'$50',image:'http://www.fubiz.net/wp-content/uploads/2016/07/woodsculptedshoes1.jpg'},
//     {id:2, name:"Tshirts",description:'soft',price:'$30',image:'https://www.beyoung.in/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/p/i/pikachu_mustard_women_model.jpg'},
// ]
    


function Products({products}) {
    const classes= useStyles();
    return(

        <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
        {
            products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                   <Product product={product}/>
                </Grid>
            ))
        }

        </Grid>

    </main>
    )
}
export default Products;