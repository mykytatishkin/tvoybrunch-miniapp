import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, onRemove, className, onAdd}) => {
    let amount = document.getElementById("amount"); 
    
    const onAddHandler = () => {
        onAdd(product);
        
        let currentAmount = parseInt(amount.textContent);
        currentAmount += 1;
        amount.textContent = currentAmount;
    }

    const onRemoveHandler = () => {
        onRemove(product.id);
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
                    <div>
                        <Button className={'add-btn'} onClick={onAddHandler}>
                            Добавить
                        </Button>
                        <p id="amount">0</p>
                    </div>
            </div>
        );
    }
};


export default ProductItem;
