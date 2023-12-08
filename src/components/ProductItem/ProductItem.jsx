import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    if(product.type == 'tag') {
        return ( 
            
            <div className={'product'}>
                <hr />
                <div  id={product.id}><img className='ico' src={product.image} alt="" /></div>
                <div className={'title'}><b><h1>{product.title}</h1></b></div>
                <div className={'description'}><h3>{product.description}</h3></div>
            </div>
            
        );
    } 
    // TODO : change image to this, when ull get pictures
    // TODO : <div className={'img'}><img className={'img'} src={product.image} alt="picture"/></div>
    else {
        return (
            <div id={product.id} className={'product'}>
                
                <div className={'img'}><img className={'img'} src="https://cdn3.emoji.gg/default/facebook/bento-box.png" alt="picture"/></div>
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
