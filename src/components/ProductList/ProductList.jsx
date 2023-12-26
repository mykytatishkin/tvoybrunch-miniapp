import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";

const products = [ 
    // ** TAG
    {id: 'offers', title: 'Горячие предложения',                amount: 0, image: 'https://em-content.zobj.net/source/telegram/386/fire_1f525.webp', size:'',     price: 11,   type:'tag',        description: 'Специальные акции'},
    // ** TAG

    // ** TAG
    {id: 'size_box', title: 'Комбо Боксы',                      amount: 0, image: 'https://em-content.zobj.net/source/telegram/386/bento-box_1f371.webp', size:'',     price: 11,   type:'tag',        description: 'Боксы с разными продуктами на любой вкус и цвет и главное, на любой размер'},
    // ** TAG
    
    {id: '1',  title: 'Бокс с Тарталетками',                    amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true', size:'M',    price: 91,  type:'size_box',  description: '20 штук - 740 грамм'},
    {id: '2',  title: 'Бокс с Тарталетками',                    amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true', size:'L',    price: 101, type:'size_box',    description: '25 штук - 1190 грамм'},
    {id: '3',  title: 'Бокс с Тарталетками',                    amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true', size:'XL',   price: 131, type:'size_box',    description: '30 штук - 1510 грамм'},

    {id: '4',  title: 'Бокс Брускетта delicious',               image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/Box_brusketty_delicious.jpg', size:'M',    price: 91,  type:'size_box',    description: '12 штук - 750 грамм'},
    {id: '5',  title: 'Бокс Брускетта delicious',               image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/Box_brusketty_delicious.jpg', size:'L',    price: 101, type:'size_box',    description: '16 штук - 910 грамм'},
    {id: '6',  title: 'Бокс Брускетта delicious',               image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/Box_brusketty_delicious.jpg', size:'XL',   price: 131, type:'size_box',    description: '24 штук - 1290 грамм'},

    {id: '7', title: 'Бокс к белому вину',                      image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20k%20belomy%20viny.jpg', size:'M',    price: 87,  type:'size_box',    description: '895 грамм'},
    {id: '8', title: 'Бокс к белому вину',                      image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20k%20belomy%20viny.jpg', size:'L',    price: 97,  type:'size_box',    description: '1295 грамм'},
    {id: '9', title: 'Бокс к белому вину',                      image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20k%20belomy%20viny.jpg', size:'XL',   price: 127, type:'size_box',    description: '1700 грамм'},

    {id: '10', title: 'Бокс с красному вину',                   image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20k%20krasnoy%20viny.jpg', size:'M',    price: 87,  type:'size_box',    description: '930 грамм'},
    {id: '11', title: 'Бокс с красному вину',                   image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20k%20krasnoy%20viny.jpg', size:'L',    price: 97,  type:'size_box',    description: '1190 грамм'},
    {id: '12', title: 'Бокс с красному вину',                   image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20k%20krasnoy%20viny.jpg', size:'XL',   price: 127, type:'size_box',    description: '1420 грамм'},

    {id: '13', title: 'Бокс Премиум',                           image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20premium.jpg?raw=true', size:'M',    price: 101, type:'size_box',    description: '970 грамм'},
    {id: '14', title: 'Бокс Премиум',                           image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20premium.jpg?raw=true', size:'L',    price: 121, type:'size_box',    description: '1240 грамм'},
    {id: '15', title: 'Бокс Премиум',                           image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20premium.jpg?raw=true', size:'XL',   price: 151, type:'size_box',    description: '1515 грамм'},

    {id: '16', title: 'Бокс Мясной',                            image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20myasnoi.jpg?raw=true', size:'M',    price: 101,  type:'size_box',   description: '805 грамм'},
    {id: '17', title: 'Бокс Мясной',                            image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20myasnoi.jpg?raw=true', size:'L',    price: 111,  type:'size_box',   description: '1025 грамм'},
    {id: '18', title: 'Бокс Мясной',                            image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20myasnoi.jpg?raw=true', size:'XL',   price: 141,  type:'size_box',   description: '1405 грамм'},

    {id: '22', title: 'Бокс с сандвичами',                      image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg', size:'M',    price: 81,   type:'size_box',   description: '12 штук - 875 грамм'},
    {id: '23', title: 'Бокс с сандвичами',                      image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg', size:'L',    price: 91,  type:'size_box',    description: '16 штук - 1105 грамм'},

    {id: '24', title: 'Бокс с тарталетками',                    image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true', size:'M',    price: 91,   type:'size_box',   description: '20 штук - 680 грамм'},
    {id: '25', title: 'Бокс с тарталетками',                    image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true', size:'L',    price: 101,  type:'size_box',   description: '25 штук - 1160 грамм'},
    {id: '26', title: 'Бокс с тарталетками',                    image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true', size:'XL',   price: 131,  type:'size_box',   description: '30 штук - 1460 грамм'},

    {id: '27', title: 'Бокс с брускеттами',                     image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg', size:'M',    price: 81,   type:'size_box',   description: '12 штук - 720 грамм'},
    {id: '28', title: 'Бокс с брускеттами',                     image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg', size:'L',    price: 91,   type:'size_box',   description: '16 штук - 890 грамм'},
    {id: '29', title: 'Бокс с брускеттами',                     image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg', size:'XL',   price: 121,  type:'size_box',   description: '24 штук - 1250 грамм'},

    {id: '30', title: 'Бокс Сырный',                            image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20syrnyi.jpg?raw=true', size:'M',    price: 91,   type:'size_box',   description: '1010 грамм'},
    {id: '31', title: 'Бокс Сырный',                            image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20syrnyi.jpg?raw=true', size:'L',    price: 101,  type:'size_box',   description: '1150 грамм'},
    {id: '32', title: 'Бокс Сырный',                            image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20syrnyi.jpg?raw=true', size:'XL',   price: 131,  type:'size_box',   description: '1550 грамм'},

    // ** TAG
    {id: 'box', title: 'Боксы',                                 image: 'https://em-content.zobj.net/source/telegram/386/sandwich_1f96a.webp', size:'',     price: 11,   type:'tag',        description: 'Боксы с вкусной начинкой'},
    // ** TAG

    {id: '34', title: 'Бокс десертный',                         image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20desertnyi.jpg', size:'',     price: 77,   type:'box',         description: ''},
    {id: '35', title: 'Бокс Круассанами',                       image: '', size:'',     price: 81,   type:'box',         description: ''},
    {id: '36', title: 'Бокс Завтрак Европейский',               image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/Box%20zavtrak%20evropeiskiy.jpg', size:'',     price: 81,   type:'box',        description: ''},
    {id: '41', title: 'Бокс фруктовый',                         image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/Box%20fruktoviy.jpg', size:'',     price: 81,   type:'box',        description: ''},
    {id: '42', title: 'Бокс Тапас микс',                        image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20tapas.jpg', size:'',     price: 101,  type:'box',        description: ''},
    {id: '43', title: 'Бокс праздничный',                       image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20prazdnichnui.jpg', size:'',     price: 91,   type:'box',        description: ''},
    {id: '45', title: 'Бокс девичник',                          image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20devichnik.jpg', size:'',     price: 91,   type:'box',        description: ''},
    {id: '46', title: 'Бокс от шефа ',                          image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20ot%20shefa.jpg', size:'',     price: 107,  type:'box',        description: ''},
    {id: '47', title: 'Бокс GastroBox ',                        image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20gastrobox.jpg', size:'',     price: 11,   type:'box',        description: ''},  

    // ** TAG
    {id: 'pie', title: 'Пироги',                                image: 'https://em-content.zobj.net/source/telegram/386/pie_1f967.webp', size:'',     price: 11,   type:'tag',        description: 'Свежие и вкусные пироги на любой вкус'},
    // ** TAG

    {id: '50', title: 'Пирог с с вишней и рикоттой',            image: '', size:'M',    price: 39,   type:'pie',       description: '650 грамм'},
    {id: '51', title: 'Пирог c с вишней и рикоттой',            image: '', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '52', title: 'Пирог с тунцом',                         image: '', size:'M',    price: 39,   type:'pie',       description: '650 грамм'},
    {id: '53', title: 'Пирог с тунцом',                         image: '', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '54', title: 'Пирог творожный с лимонной цедрой',      image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20tvorozhnyi.jpg', size:'M',    price: 39,   type:'pie',       description: '650 грамм'},
    {id: '55', title: 'Пирог творожный с лимонной цедрой',      image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20tvorozhnyi.jpg', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '54', title: 'Пирог с капустой и грибами',             image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/pirog%20s%20kapustoi.jpg?raw=true', size:'M',    price: 39,   type:'pie',       description: '650 грамм'},
    {id: '55', title: 'Пирог с капустой и грибами',             image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/pirog%20s%20kapustoi.jpg?raw=true', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '56', title: 'Пирог с картофелем и беконом',           image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20kartofelem%20i%20bekonom.jpg', size:'M',    price: 39,   type:'pie',       description: '650 грамм'},
    {id: '57', title: 'Пирог с картофелем и беконом',           image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20kartofelem%20i%20bekonom.jpg', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '56', title: 'Пирог овощной с трюфельным маслом',      image: '', size:'M',    price: 39,   type:'pie',       description: '650 грамм'},
    {id: '57', title: 'Пирог овощной с трюфельным маслом',      image: '', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '58', title: 'Пирог итальянский с говядиной',          image: '', size:'M',    price: 42,   type:'pie',       description: '650 грамм'},
    {id: '59', title: 'Пирог итальянский с говядиной',          image: '', size:'L',    price: 49,   type:'pie',       description: '1000 грамм'},

    {id: '60', title: 'Пирог чизкейк с нутеллой',               image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/pirog%20chizkeik%20s%20nutelloi.jpg?raw=true', size:'M',    price: 42,   type:'pie',       description: '650 грамм'},
    {id: '61', title: 'Пирог чизкейк с нутеллой',               image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/pirog%20chizkeik%20s%20nutelloi.jpg?raw=true', size:'L',    price: 49,   type:'pie',       description: '1000 грамм'},

    {id: '62', title: 'Пирог с яблоком и вишней',               image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20yablokom%20i%20vishnei.jpg', size:'M',    price: 37,   type:'pie',       description: '650 грамм'},
    {id: '63', title: 'Пирог с яблоком и вишней',               image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20yablokom%20i%20vishnei.jpg', size:'L',    price: 47,   type:'pie',       description: '1000 грамм'},

    {id: '64', title: 'Пирог четыре сыра',                      image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%204%20sura.jpg', size:'M',    price: 42,   type:'pie',       description: '650 грамм'},
    {id: '65', title: 'Пирог четыре сыра',                      image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%204%20sura.jpg', size:'L',    price: 49,   type:'pie',       description: '1000 грамм'},

    {id: '66', title: 'Пирог с цыпленком и томатами',           image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20tsuplenkom.jpg', size:'M',    price: 42,   type:'pie',       description: '650 грамм'},
    {id: '67', title: 'Пирог с цыпленком и томатами',           image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20tsuplenkom.jpg', size:'L',    price: 49,   type:'pie',       description: '1000 грамм'},

    {id: '68', title: 'Пирог с лососем и моцареллой',           image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20lososem.jpg', size:'M',    price: 48,   type:'pie',       description: '650 грамм'},
    {id: '69', title: 'Пирог с лососем и моцареллой',           image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20lososem.jpg', size:'L',    price: 56,   type:'pie',       description: '1000 грамм'},

    {id: '70', title: 'Пирог с прошутто и луковым конфитюром',  image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/pirog%20s%20proshutto%20i%20lukovum.jpg?raw=true', size:'M',    price: 48,   type:'pie',       description: '650 грамм'},
    {id: '71', title: 'Пирог с прошутто и луковым конфитюром',  image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/pirog%20s%20proshutto%20i%20lukovum.jpg?raw=true', size:'L',    price: 56,   type:'pie',       description: '1000 грамм'},

    {id: '72', title: 'Пирог с соленой карамелью и орехами',    image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20solenoy%20karamelyu%20i%20orehami.jpg', size:'M',    price: 42,   type:'pie',       description: '650 грамм'},
    {id: '73', title: 'Пирог с соленой карамелью и орехами',    image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20solenoy%20karamelyu%20i%20orehami.jpg', size:'L',    price: 49,   type:'pie',       description: '1000 грамм'},
]

// TODO: const products = [*from db*]

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
            user: tg.initDataUnsafe?.user,
        };
        fetch('https://www.tvoybranch-backend.space/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }, [addedItems, queryId, tg.initDataUnsafe?.user]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        };
    }, [onSendData]);

    const onAdd = (product) => {
        let newItems = [];
        /* const alreadyAdded = addedItems.find(item => item.id === product.id);

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }
        */

        newItems = [...addedItems, product];

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)} BYN`
            })
        }
    }

    const onRemove = (productId) => {
        const newItems = addedItems.filter(item => item.id !== productId);
        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)} BYN`
            });
        }
    };

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;
