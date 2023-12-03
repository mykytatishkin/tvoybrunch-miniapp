import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    if(product.type == 'tag') {
        return ( 
            
            <div>
                <hr />
                <div className={'title'}><b><h1>{product.title}</h1></b></div>
                <div className={'description'}><h3>{product.description}</h3></div>
            </div>
            
        );
    } 
    else {
        return (
            <div id={product.type}  className={'product ' + className}>
                <div className={'img'}><img className={'img'} src={product.image} alt="picture"/></div>
                <div className={'title'}><b>{product.title}</b></div>
                <div className={'description'}>{product.description}</div>
                <div className={'price'}>
                    <span>Стоимость: <b>{product.price}</b></span>
                </div>
                <Button className={'add-btn'} onClick={onAddHandler}>
                    Добавить в корзину
                </Button>
            </div>
        );
    }
};


export default ProductItem;
