import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";

const products = [
    {id: '1', title: 'Бокс с Круасанами', price: 81, description: 'Свежие и вкусные круасаны'},
    {id: '2', title: 'Бокс Тарталетки delicious', price: 101, description: 'L (≈ 1 190 гр)101 р. (25шт) \nM (≈ 740 гр)91 р. (20шт) \nXL (≈ 1 510 гр)131 р. (30шт)'},
    {id: '3', title: 'Бокс Брускетта delicious', price: 101, description: 'L (≈ 910 гр)101 р. (16шт) \nM (≈ 750 гр)91 р. (12шт) \nXL (≈ 1 290 гр)131 р. (24шт)'},
    {id: '4', title: 'Бокс Веганский', price: 91, description: 'Набор для веганов'},
    {id: '5', title: 'Бокс десертный', price: 77, description: 'Для любителей сладкого'},
    {id: '6', title: 'Бокс Завтрак Европейский', price: 81, description: 'Европейский завтрак'},
    {id: '7', title: 'Бокс завтрак семейный', price: 81, description: 'Для вкусного семейного завтрака'},
    {id: '8', title: 'Бокс к белому вину', price: 97, description: ' L (≈ 1 295 гр)97 р. \nМ (≈ 895 гр)87 р. \nXL (≈ 1 700 гр)127 р'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('https://tvoybranch.azurewebsites.net/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;
