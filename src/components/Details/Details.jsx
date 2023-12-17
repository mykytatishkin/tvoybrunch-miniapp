// Details.jsx
import React, { useState, useEffect } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { tg, user } = useTelegram();
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        // Здесь вы можете загрузить информацию о продукте с использованием productId
        // Например, запрос к API или использование хранилища

        // Пример заглушки
        const dummyProductDetails = {
            id: '1',
            title: 'Бокс с Тарталетками',
            image: 'https://github.com/mykytatishkin/tvoybrunch-miniapp/blob/main/src/components/ProductList/imgs/box%20s%20bruskettami.jpg?raw=true',
            size: 'M',
            price: 91,
            type: 'size_box',
            description: '20 штук - 740 грамм',
        };

        // Если productId существует и равен '1', устанавливаем детали продукта
        if (productId && productId === '1') {
            setProductDetails(dummyProductDetails);
        }
    }, [productId]);

    return (
        <div className="details">
            <h2>Детальная информация про товар</h2>
            {productDetails && (
                <div>
                    <h3>{productDetails.title}</h3>
                    <p>{productDetails.description}</p>
                    {/* Другие поля продукта */}
                </div>
            )}
        </div>
    );
};

export default Details;
