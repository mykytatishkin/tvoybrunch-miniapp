// Details.jsx
import React, { useState, useEffect } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const { tg, user } = useTelegram();
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        // Здесь вы можете загрузить информацию о продукте с использованием productId
        // Например, запрос к API или использование хранилища

        // Пример заглушки
        const dummyProductDetails = [ 
            // ** TAG
            {id: 'offers', title: 'Горячие предложения',                amount: 0, image: 'https://em-content.zobj.net/source/telegram/386/fire_1f525.webp', size:'',     price: 11,   type:'tag',        description: 'Специальные акции'},
            // ** TAG
        
            // ** TAG
            {id: 'size_box', title: 'Комбо Боксы',                      amount: 0, image: 'https://em-content.zobj.net/source/telegram/386/bento-box_1f371.webp', size:'',     price: 11,   type:'tag',        description: 'Боксы с разными продуктами на любой вкус и цвет и главное, на любой размер'},
            // ** TAG
            
            {id: '1',  title: 'Бокс с Тарталетками',                    amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true', size:'M',    price: 91,  type:'size_box', ingirients: "", description: '20 штук - 740 грамм'},
            {id: '2',  title: 'Бокс с Тарталетками',                    amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true', size:'L',    price: 101, type:'size_box', ingirients: "", description: '25 штук - 1190 грамм'},
            {id: '3',  title: 'Бокс с Тарталетками',                    amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true', size:'XL',   price: 131, type:'size_box', ingirients: "", description: '30 штук - 1510 грамм'},
        
            {id: '4',  title: 'Бокс Брускетта delicious',               amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/Box_brusketty_delicious.jpg', size:'M',    price: 91,  type:'size_box', ingirients: "", description: '12 штук - 750 грамм'},
            {id: '5',  title: 'Бокс Брускетта delicious',               amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/Box_brusketty_delicious.jpg', size:'L',    price: 101, type:'size_box', ingirients: "", description: '16 штук - 910 грамм'},
            {id: '6',  title: 'Бокс Брускетта delicious',               amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/Box_brusketty_delicious.jpg', size:'XL',   price: 131, type:'size_box', ingirients: "", description: '24 штук - 1290 грамм'},
        
            {id: '7', title: 'Бокс к белому вину',                      amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20k%20belomy%20viny.jpg', size:'M',    price: 87,  type:'size_box', ingirients: "", description: '895 грамм'},
            {id: '8', title: 'Бокс к белому вину',                      amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20k%20belomy%20viny.jpg', size:'L',    price: 97,  type:'size_box', ingirients: "", description: '1295 грамм'},
            {id: '9', title: 'Бокс к белому вину',                      amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20k%20belomy%20viny.jpg', size:'XL',   price: 127, type:'size_box', ingirients: "", description: '1700 грамм'},
        
            {id: '10', title: 'Бокс с красному вину',                   amount: 0,  image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20k%20krasnoy%20viny.jpg', size:'M',    price: 87,  type:'size_box', ingirients: "", description: '930 грамм'},
            {id: '11', title: 'Бокс с красному вину',                   amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20k%20krasnoy%20viny.jpg', size:'L',    price: 97,  type:'size_box', ingirients: "", description: '1190 грамм'},
            {id: '12', title: 'Бокс с красному вину',                   amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20k%20krasnoy%20viny.jpg', size:'XL',   price: 127, type:'size_box', ingirients: "", description: '1420 грамм'},
        
            {id: '13', title: 'Бокс Премиум',                           amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20premium.jpg?raw=true', size:'M',    price: 101, type:'size_box', ingirients: "", description: '970 грамм'},
            {id: '14', title: 'Бокс Премиум',                           amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20premium.jpg?raw=true', size:'L',    price: 121, type:'size_box', ingirients: "", description: '1240 грамм'},
            {id: '15', title: 'Бокс Премиум',                           amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20premium.jpg?raw=true', size:'XL',   price: 151, type:'size_box', ingirients: "", description: '1515 грамм'},
        
            {id: '16', title: 'Бокс Мясной',                            amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20myasnoi.jpg?raw=true', size:'M',    price: 101,  type:'size_box', ingirients: "", description: '805 грамм'},
            {id: '17', title: 'Бокс Мясной',                            amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20myasnoi.jpg?raw=true', size:'L',    price: 111,  type:'size_box', ingirients: "", description: '1025 грамм'},
            {id: '18', title: 'Бокс Мясной',                            amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20myasnoi.jpg?raw=true', size:'XL',   price: 141,  type:'size_box', ingirients: "", description: '1405 грамм'},
        
            {id: '22', title: 'Бокс с сандвичами',                      amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg', size:'M',    price: 81,   type:'size_box', ingirients: "", description: '12 штук - 875 грамм'},
            {id: '23', title: 'Бокс с сандвичами',                      amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg', size:'L',    price: 91,  type:'size_box', ingirients: "", description: '16 штук - 1105 грамм'},
        
            {id: '24', title: 'Бокс с тарталетками',                    amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true', size:'M',    price: 91,   type:'size_box', ingirients: "", description: '20 штук - 680 грамм'},
            {id: '25', title: 'Бокс с тарталетками',                    amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true', size:'L',    price: 101,  type:'size_box', ingirients: "", description: '25 штук - 1160 грамм'},
            {id: '26', title: 'Бокс с тарталетками',                    amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true', size:'XL',   price: 131,  type:'size_box', ingirients: "", description: '30 штук - 1460 грамм'},
        
            {id: '27', title: 'Бокс с брускеттами',                     amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg', size:'M',    price: 81,   type:'size_box', ingirients: "", description: '12 штук - 720 грамм'},
            {id: '28', title: 'Бокс с брускеттами',                     amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg', size:'L',    price: 91,   type:'size_box', ingirients: "", description: '16 штук - 890 грамм'},
            {id: '29', title: 'Бокс с брускеттами',                     amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg', size:'XL',   price: 121,  type:'size_box', ingirients: "", description: '24 штук - 1250 грамм'},
        
            {id: '30', title: 'Бокс Сырный',                            amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20syrnyi.jpg?raw=true', size:'M',    price: 91,   type:'size_box', ingirients: "", description: '1010 грамм'},
            {id: '31', title: 'Бокс Сырный',                            amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20syrnyi.jpg?raw=true', size:'L',    price: 101,  type:'size_box', ingirients: "", description: '1150 грамм'},
            {id: '32', title: 'Бокс Сырный',                            amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20syrnyi.jpg?raw=true', size:'XL',   price: 131,  type:'size_box', ingirients: "", description: '1550 грамм'},
        
            // ** TAG
            {id: 'box', title: 'Боксы',                                 amount: 0, image: 'https://em-content.zobj.net/source/telegram/386/sandwich_1f96a.webp', size:'',     price: 11,   type:'tag',        description: 'Боксы с вкусной начинкой'},
            // ** TAG
        
            {id: '34', title: 'Бокс десертный',                         amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20desertnyi.jpg', size:'',     price: 77,   type:'box', ingirients: "", description: ''},
            {id: '36', title: 'Бокс Завтрак Европейский',               amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/Box%20zavtrak%20evropeiskiy.jpg', size:'',     price: 81,   type:'box', ingirients: "", description: ''},
            {id: '41', title: 'Бокс фруктовый',                         amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/Box%20fruktoviy.jpg', size:'',     price: 81,   type:'box', ingirients: "", description: ''},
            {id: '42', title: 'Бокс Тапас микс',                        amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20tapas.jpg', size:'',     price: 101,  type:'box', ingirients: "", description: ''},
            {id: '43', title: 'Бокс праздничный',                       amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20prazdnichnui.jpg', size:'',     price: 91,   type:'box', ingirients: "Фирменные закуски \n-Тапас цезарь \n-Тапас с прошутто \n-Тапас с грудинкой и корнишоном \n-Тапас с салями \n-Ролл из баклажанов с орехом и чесноком \n-Ролл из ветчины с творожным сыром", description: ''},
            {id: '45', title: 'Бокс девичник',                          amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20devichnik.jpg', size:'',     price: 91,   type:'box', ingirients: "Фирменные закуски \nТапас с паштетом \nТапас с соте из баклажанов\nКанапе из грудинки и огурчиков с горчицей\nКанапе с сыром и виноградом\nТарталетки с цыплёнком\nТарталетки с тунцом", description: ''},
            {id: '46', title: 'Бокс от шефа ',                          amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20ot%20shefa.jpg', size:'',     price: 107,  type:'box', ingirients: "", description: ''},
            {id: '47', title: 'Бокс GastroBox ',                        amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/box%20gastrobox.jpg', size:'',     price: 11,   type:'box', ingirients: "", description: ''},  
        
            // ** TAG
            {id: 'pie', title: 'Пироги',                                amount: 0, image: 'https://em-content.zobj.net/source/telegram/386/pie_1f967.webp', size:'',     price: 11,   type:'tag',        description: 'Свежие и вкусные пироги на любой вкус'},
            // ** TAG

            {id: '54', title: 'Пирог творожный с лимонной цедрой',      amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20tvorozhnyi.jpg', size:'M',    price: 39,   type:'pie', ingirients: "Фирменное тесто, творог, сливки, яйца, лимонный сок, цедра лимона, сахар", description: '650 грамм'},
            {id: '55', title: 'Пирог творожный с лимонной цедрой',      amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20tvorozhnyi.jpg', size:'L',    price: 47,   type:'pie', ingirients: "Фирменное тесто, творог, сливки, яйца, лимонный сок, цедра лимона, сахар", description: '1000 грамм'},
        
            {id: '54', title: 'Пирог с капустой и грибами',             amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/pirog%20s%20kapustoi.jpg?raw=true', size:'M',    price: 39,   type:'pie', ingirients: "Фирменное тесто, капуста, лук, шампиньоны, сливки, яйцо, сметана", description: '650 грамм'},
            {id: '55', title: 'Пирог с капустой и грибами',             amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/pirog%20s%20kapustoi.jpg?raw=true', size:'L',    price: 47,   type:'pie', ingirients: "Фирменное тесто, капуста, лук, шампиньоны, сливки, яйцо, сметана", description: '1000 грамм'},
        
            {id: '56', title: 'Пирог с картофелем и беконом',           amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20kartofelem%20i%20bekonom.jpg', size:'M',    price: 39,   type:'pie', ingirients: "Фирменное тесто, картофель, яйца, сливки, французская горчица, бекон", description: '650 грамм'},
            {id: '57', title: 'Пирог с картофелем и беконом',           amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20kartofelem%20i%20bekonom.jpg', size:'L',    price: 47,   type:'pie', ingirients: "Фирменное тесто, картофель, яйца, сливки, французская горчица, бекон", description: '1000 грамм'},
        
            {id: '60', title: 'Пирог чизкейк с нутеллой',               amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/pirog%20chizkeik%20s%20nutelloi.jpg?raw=true', size:'M',    price: 42,   type:'pie', ingirients: "Фирменное тесто, творожный крем, молоко, кокосовая стружка, нутелла, сливки, сахарная пудра", description: '650 грамм'},
            {id: '61', title: 'Пирог чизкейк с нутеллой',               amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/pirog%20chizkeik%20s%20nutelloi.jpg?raw=true', size:'L',    price: 49,   type:'pie', ingirients: "Фирменное тесто, творожный крем, молоко, кокосовая стружка, нутелла, сливки, сахарная пудра", description: '1000 грамм'},
        
            {id: '62', title: 'Пирог с яблоком и вишней',               amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20yablokom%20i%20vishnei.jpg', size:'M',    price: 37,   type:'pie', ingirients: "Фирменное тесто, яблоки, сахар, ванилин, кардамон, корица, сливки, яйца, вишня.", description: '650 грамм'},
            {id: '63', title: 'Пирог с яблоком и вишней',               amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20yablokom%20i%20vishnei.jpg', size:'L',    price: 47,   type:'pie', ingirients: "Фирменное тесто, яблоки, сахар, ванилин, кардамон, корица, сливки, яйца, вишня.", description: '1000 грамм'},
        
            {id: '64', title: 'Пирог четыре сыра',                      amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%204%20sura.jpg', size:'M',    price: 42,   type:'pie', ingirients: "Фирменное тесто, сыр мягкий творожный, сыр дор блю, сыр пармезан, сыр моцарелла, яйцо, сливки, мускатный орех, тимьян, томат черри, базилик.", description: '650 грамм'},
            {id: '65', title: 'Пирог четыре сыра',                      amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%204%20sura.jpg', size:'L',    price: 49,   type:'pie', ingirients: "Фирменное тесто, сыр мягкий творожный, сыр дор блю, сыр пармезан, сыр моцарелла, яйцо, сливки, мускатный орех, тимьян, томат черри, базилик.", description: '1000 грамм'},
        
            {id: '66', title: 'Пирог с цыпленком и томатами',           amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20tsuplenkom.jpg', size:'M',    price: 42,   type:'pie', ingirients: "Фирменное тесто,  лук, курица, ореховый соус, сыр пармезан, яйца, сливки, мускатный орех, томат черри, розмарин, микрозелень.", description: '650 грамм'},
            {id: '67', title: 'Пирог с цыпленком и томатами',           amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20tsuplenkom.jpg', size:'L',    price: 49,   type:'pie', ingirients: "Фирменное тесто,  лук, курица, ореховый соус, сыр пармезан, яйца, сливки, мускатный орех, томат черри, розмарин, микрозелень.", description: '1000 грамм'},
        
            {id: '68', title: 'Пирог с лососем и моцареллой',           amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20lososem.jpg', size:'M',    price: 48,   type:'pie', ingirients: "Фирменное тесто, сыр мягкий кремчиз, лосось, сыр моцарелла, яйцо, сливки, мускатный орех, томат черри, тимьян.", description: '650 грамм'},
            {id: '69', title: 'Пирог с лососем и моцареллой',           amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20lososem.jpg', size:'L',    price: 56,   type:'pie', ingirients: "Фирменное тесто, сыр мягкий кремчиз, лосось, сыр моцарелла, яйцо, сливки, мускатный орех, томат черри, тимьян.", description: '1000 грамм'},
        
            {id: '70', title: 'Пирог с прошутто и луковым конфитюром',  amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/pirog%20s%20proshutto%20i%20lukovum.jpg?raw=true', size:'M',    price: 48,   type:'pie', ingirients: "Фирменное тесто, сыр мягкий творожный, карамелизированный лук, грудинка в/к, яйцо, сливки, мускатный орех, прошутто, микрозелень.", description: '650 грамм'},
            {id: '71', title: 'Пирог с прошутто и луковым конфитюром',  amount: 0, image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/pirog%20s%20proshutto%20i%20lukovum.jpg?raw=true', size:'L',    price: 56,   type:'pie', ingirients: "Фирменное тесто, сыр мягкий творожный, карамелизированный лук, грудинка в/к, яйцо, сливки, мускатный орех, прошутто, микрозелень.", description: '1000 грамм'},
        
            {id: '72', title: 'Пирог с соленой карамелью и орехами',    amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20solenoy%20karamelyu%20i%20orehami.jpg', size:'M',    price: 42,   type:'pie', ingirients: "Фирменное тесто, фундук, арахис, соленая карамель, сливки 33%, сезонные фрукты, микрозелень", description: '650 грамм'},
            {id: '73', title: 'Пирог с соленой карамелью и орехами',    amount: 0, image: 'https://raw.githubusercontent.com/mykytatishkin/tvoybrunch-miniapp/main/src/components/ProductList/imgs/pirog%20s%20solenoy%20karamelyu%20i%20orehami.jpg', size:'L',    price: 49,   type:'pie', ingirients: "Фирменное тесто, фундук, арахис, соленая карамель, сливки 33%, сезонные фрукты, микрозелень", description: '1000 грамм'},
        ];

        // Если productId существует, устанавливаем детали продукта
        if (productId) {
            const selectedProduct = dummyProductDetails.find(product => product.id === productId);

            if (selectedProduct) {
                setProductDetails(selectedProduct);
            } else {
                // Обработка случая, когда продукт не найден
                setProductDetails(null);
            }
        }
    }, [productId]);

    if (!productDetails) {
        return <div>Продукт не найден</div>;
    }

    return (
        <div className="details">
            <h2>Детальная информация про товар</h2>
            <div>
                <h3>{productDetails.title}</h3>
                <p className={'descriptions'}>{productDetails.description}</p>
                <p>{productDetails.ingirients}</p>
                <img className={'img-details'} src={productDetails.image} alt="picture" />
                {/* Другие поля продукта */}
            </div>
        </div>
    );
};

export default Details;
