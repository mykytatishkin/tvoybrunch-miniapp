import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";

const products = [ 
    // ** TAG
    {id: 'size_box', title: '🍱 Комбо Боксы',                            image: '', size:'',     price: 11,   type:'tag',        description: 'Боксы с разными продуктами на любой вкус и цвет и главное, на любой размер'},
    // ** TAG
    
    {id: '1',  title: 'Бокс с Тарталетками',                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', size:'M',    price: 91,  type:'size_box',  description: '20 штук - 740 грамм'},
    {id: '2',  title: 'Бокс с Тарталетками',                    image: '', size:'L',    price: 101, type:'size_box',    description: '25 штук - 1190 грамм'},
    {id: '3',  title: 'Бокс с Тарталетками',                    image: '', size:'XL',   price: 131, type:'size_box',    description: '30 штук - 1510 грамм'},

    {id: '4',  title: 'Бокс Брускетта delicious',               image: '', size:'M',    price: 91,  type:'size_box',    description: '12 штук - 750 грамм'},
    {id: '5',  title: 'Бокс Брускетта delicious',               image: '', size:'L',    price: 101, type:'size_box',    description: '16 штук - 910 грамм'},
    {id: '6',  title: 'Бокс Брускетта delicious',               image: '', size:'XL',   price: 131, type:'size_box',    description: '24 штук - 1290 грамм'},

    {id: '7', title: 'Бокс к белому вину',                      image: '', size:'M',    price: 87,  type:'size_box',    description: '895 грамм'},
    {id: '8', title: 'Бокс к белому вину',                      image: '', size:'L',    price: 97,  type:'size_box',    description: '1295 грамм'},
    {id: '9', title: 'Бокс к белому вину',                      image: '', size:'XL',   price: 127, type:'size_box',    description: '1700 грамм'},

    {id: '10', title: 'Бокс с красному вину',                   image: '', size:'M',    price: 87,  type:'size_box',    description: '930 грамм'},
    {id: '11', title: 'Бокс с красному вину',                   image: '', size:'L',    price: 97,  type:'size_box',    description: '1190 грамм'},
    {id: '12', title: 'Бокс с красному вину',                   image: '', size:'XL',   price: 127, type:'size_box',    description: '1420 грамм'},

    {id: '13', title: 'Бокс Премиум',                           image: '', size:'M',    price: 101, type:'size_box',    description: '970 грамм'},
    {id: '14', title: 'Бокс Премиум',                           image: '', size:'L',    price: 121, type:'size_box',    description: '1240 грамм'},
    {id: '15', title: 'Бокс Премиум',                           image: '', size:'XL',   price: 151, type:'size_box',    description: '1515 грамм'},

    {id: '16', title: 'Бокс Мясной',                            image: '', size:'M',    price: 101,  type:'size_box',   description: '805 грамм'},
    {id: '17', title: 'Бокс Мясной',                            image: '', size:'L',    price: 111,  type:'size_box',   description: '1025 грамм'},
    {id: '18', title: 'Бокс Мясной',                            image: '', size:'XL',   price: 141,  type:'size_box',   description: '1405 грамм'},

    {id: '19', title: 'Бокс с бургерами',                       image: '', size:'M',    price: 91,   type:'size_box',   description: '4 штук - 690 грамм'},
    {id: '20', title: 'Бокс с бургерами',                       image: '', size:'L',    price: 101,  type:'size_box',   description: '9 штук - 1210 грамм'},
    {id: '21', title: 'Бокс с бургерами',                       image: '', size:'XL',   price: 131,  type:'size_box',   description: '1610 грамм'},

    {id: '22', title: 'Бокс с сандвичами',                      image: '', size:'M',    price: 81,   type:'size_box',   description: '12 штук - 875 грамм'},
    {id: '23', title: 'Бокс с сандвичами',                      image: '', size:'L',    price: 91,  type:'size_box',    description: '16 штук - 1105 грамм'},

    {id: '24', title: 'Бокс с тарталетками',                    image: '', size:'M',    price: 91,   type:'size_box',   description: '20 штук - 680 грамм'},
    {id: '25', title: 'Бокс с тарталетками',                    image: '', size:'L',    price: 101,  type:'size_box',   description: '25 штук - 1160 грамм'},
    {id: '26', title: 'Бокс с тарталетками',                    image: '', size:'XL',   price: 131,  type:'size_box',   description: '30 штук - 1460 грамм'},

    {id: '27', title: 'Бокс с брускеттами',                     image: '', size:'M',    price: 81,   type:'size_box',   description: '12 штук - 720 грамм'},
    {id: '28', title: 'Бокс с брускеттами',                     image: '', size:'L',    price: 91,   type:'size_box',   description: '16 штук - 890 грамм'},
    {id: '29', title: 'Бокс с брускеттами',                     image: '', size:'XL',   price: 121,  type:'size_box',   description: '24 штук - 1250 грамм'},

    {id: '30', title: 'Бокс Сырный',                            image: '', size:'M',    price: 91,   type:'size_box',   description: '1010 грамм'},
    {id: '31', title: 'Бокс Сырный',                            image: '', size:'L',    price: 101,  type:'size_box',   description: '1150 грамм'},
    {id: '32', title: 'Бокс Сырный',                            image: '', size:'XL',   price: 131,  type:'size_box',   description: '1550 грамм'},

    // ** TAG
    {id: 'box', title: '🥡 Боксы',                            image: '', size:'',     price: 11,   type:'tag',        description: 'Боксы с вкусной начинкой'},
    // ** TAG

    {id: '33', title: 'Бокс Веганский',                         image: '', size:'',     price: 91,   type:'box',         description: ''},
    {id: '34', title: 'Бокс десертный',                         image: '', size:'',     price: 77,   type:'box',         description: ''},
    {id: '35', title: 'Бокс Круассанами',                       image: '', size:'',     price: 81,   type:'box',         description: ''},
    {id: '36', title: 'Бокс Завтрак Европейский',               image: '', size:'',     price: 81,   type:'box',        description: ''},
    {id: '37', title: 'Бокс Завтрак Семейный ',                 image: '', size:'',     price: 81,   type:'box',        description: ''},
    {id: '38', title: 'Бокс маленькая италия',                  image: '', size:'',     price: 57,   type:'box',        description: ''},
    {id: '39', title: 'Бокс Для Любимой Мамы',                  image: '', size:'',     price: 110,  type:'box',        description: ''},
    {id: '40', title: 'Бокс романтический',                     image: '', size:'',     price: 57,   type:'box',        description: ''},
    {id: '41', title: 'Бокс фруктовый',                         image: '', size:'',     price: 81,   type:'box',        description: ''},
    {id: '42', title: 'Бокс Тапас микс',                        image: '', size:'',     price: 101,  type:'box',        description: ''},
    {id: '43', title: 'Бокс праздничный',                       image: '', size:'',     price: 91,   type:'box',        description: ''},
    {id: '44', title: 'Бокс осенний',                           image: '', size:'',     price: 101,  type:'box',        description: ''},
    {id: '45', title: 'Бокс девичник',                          image: '', size:'',     price: 91,   type:'box',        description: ''},
    {id: '46', title: 'Бокс от шефа ',                          image: '', size:'',     price: 107,  type:'box',        description: ''},
    {id: '47', title: 'Бокс GastroBox ',                        image: '', size:'',     price: 11,   type:'box',        description: ''},  

    // ** TAG
    {id: 'pie', title: '🥧 Пироги',                            image: '', size:'',     price: 11,   type:'tag',        description: 'Свежие и вкусные пироги на любой вкус'},
    // ** TAG

    {id: '48', title: 'Пирог Осенний',                          image: '', size:'M',    price: 42,   type:'pie',       description: '650 грамм'},
    {id: '49', title: 'Пирог Осенний',                          image: '', size:'L',    price: 49,   type:'pie',       description: '1000 грамм'},

    {id: '50', title: 'Пирог с с вишней и рикоттой',            image: '', size:'M',    price: 39,   type:'pie',       description: '650 грамм'},
    {id: '51', title: 'Пирог Осенний',                          image: '', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '52', title: 'Пирог с тунцом',                         image: '', size:'M',    price: 39,   type:'pie',       description: '650 грамм'},
    {id: '53', title: 'Пирог с тунцом',                         image: '', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '54', title: 'Пирог творожный с лимонной цедрой',      image: '', size:'M',    price: 39,   type:'pie',       description: '650 грамм'},
    {id: '55', title: 'Пирог творожный с лимонной цедрой',      image: '', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '54', title: 'Пирог с капустой и грибами',             image: '', size:'M',    price: 39,   type:'pie',       description: '650 грамм'},
    {id: '55', title: 'Пирог с капустой и грибами',             image: '', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '56', title: 'Пирог с картофелем и беконом',           image: '', size:'M',    price: 39,   type:'pie',       description: '650 грамм'},
    {id: '57', title: 'Пирог с картофелем и беконом',           image: '', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '56', title: 'Пирог овощной с трюфельным маслом',      image: '', size:'M',    price: 39,   type:'pie',       description: '650 грамм'},
    {id: '57', title: 'Пирог овощной с трюфельным маслом',      image: '', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '58', title: 'Пирог итальянский с говядиной',          image: '', size:'M',    price: 42,   type:'pie',       description: '650 грамм'},
    {id: '59', title: 'Пирог итальянский с говядиной',          image: '', size:'L',    price: 49,   type:'pie',       description: '1000 грамм'},

    {id: '60', title: 'Пирог чизкейк с нутеллой',               image: '', size:'M',    price: 42,   type:'pie',       description: '650 грамм'},
    {id: '61', title: 'Пирог чизкейк с нутеллой',               image: '', size:'L',    price: 49,   type:'pie',       description: '1000 грамм'},

    {id: '62', title: 'Пирог с яблоком и вишней',               image: '', size:'M',    price: 37,   type:'pie',       description: '650 грамм'},
    {id: '63', title: 'Пирог с яблоком и вишней',               image: '', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '64', title: 'Пирог четыре сыра',                      image: '', size:'M',    price: 42,   type:'pie',       description: '650 грамм'},
    {id: '65', title: 'Пирог четыре сыра',                      image: '', size:'L',    price: 49,   type:'pie',       description: '1000 грамм'},

    {id: '66', title: 'Пирог с цыпленком и томатами',           image: '', size:'M',    price: 42,   type:'pie',       description: '650 грамм'},
    {id: '67', title: 'Пирог с цыпленком и томатами',           image: '', size:'L',    price: 49,   type:'pie',       description: '1000 грамм'},

    {id: '68', title: 'Пирог с лососем и моцареллой',           image: '', size:'M',    price: 48,   type:'pie',       description: '650 грамм'},
    {id: '69', title: 'Пирог с лососем и моцареллой',           image: '', size:'L',    price: 56,   type:'pie',       description: '1000 грамм'},

    {id: '70', title: 'Пирог с прошутто и луковым конфитюром',  image: '', size:'M',    price: 48,   type:'pie',       description: '650 грамм'},
    {id: '71', title: 'Пирог с прошутто и луковым конфитюром',  image: '', size:'L',    price: 56,   type:'pie',       description: '1000 грамм'},

    {id: '72', title: 'Пирог с соленой карамелью и орехами',    image: '', size:'M',    price: 42,   type:'pie',       description: '650 грамм'},
    {id: '73', title: 'Пирог с соленой карамелью и орехами',    image: '', size:'L',    price: 49,   type:'pie',       description: '1000 грамм'},
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
        fetch('http://www.tvoybranch-backend.space/web-data', {
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
