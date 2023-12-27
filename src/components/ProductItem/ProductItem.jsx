import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, onRemove, className, onAdd}) => {
    
    const onAddHandler = () => {
        onAdd(product);
        
        product.amount += 1;
    }

    const onRemoveHandler = () => {
        onRemove(product.id);

        product.amount -= 1;
    }

    if(product.type == 'tag') {
        return ( 
            
            <div className='topic'>
                <hr />
                <div  id={product.id}><img className='ico' src={product.image} alt="" /></div>
                <div className={'title'}><b><h1>{product.title}</h1></b></div>
                <div className={'description'}><p>{product.description}</p></div>
            </div>
            
        );
    } 
    // TODO : change image to this, when ull get pictures
    // TODO : <div className={'img'}><img className={'img'} src={product.image} alt="picture"/></div>
    else {
        return (
            <div id={product.id} className={'product'}>
                    <div className={'img'}><img className={'img'} src={product.image} alt="picture"/></div>
                    <a className="details" href={"details"+product.id}><div className={'title'}><h4>{product.title}</h4></div></a>
                    <div className={'description'}>{product.description}</div>
                    <div className={'price'}>
                    Стоимость: <b>{product.price} BYN</b>
                    </div>
                    <div className={'title'}>
                        <Button className={'add-btn'} onClick={onAddHandler}>+</Button>
                        <span className={'add-btn'}>{product.amount}</span>
                        <Button className={'add-btn'} onClick={onRemoveHandler}>-</Button>
                    </div>
            </div>
        );
    }
};


export default ProductItem;
