import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const [district, setDistrict] = useState('');
    const { tg, user } = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject,
            district,
            username: user.username, // Include the username in the data
        };
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject, district, tg, user]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        };
    }, [onSendData]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные',
        });
    }, [tg]);

    useEffect(() => {
        if (!street || !country || !district) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street, district, tg]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    };

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    };

    const onChangeDistrict = (e) => {
        setDistrict(e.target.value);
    };

    return (
        <div className={'form'}>
            <div className="address">
                <h5>Адресс доставки</h5>
                <input
                    className={'input'}
                    type="text"
                    placeholder={'Номер дома'}
                    value={country}
                    onChange={onChangeCountry}
                />
                <input
                    className={'input'}
                    type="text"
                    placeholder={'Улица'}
                    value={street}
                    onChange={onChangeStreet}
                />
                <select size="2" value={subject} onChange={onChangeSubject} className={'select'}>
                    <option value={'physical'}>Физ. лицо</option>
                    <option value={'legal'}>Юр. лицо</option>
                </select>
                <br />
                <select size="10" value={district} onChange={onChangeDistrict} className={'select'}>
                    <option value={'1'}>Центральный</option>
                    <option value={'2'}>Советский</option>
                    <option value={'3'}>Первомайский</option>
                    <option value={'4'}>Партизанский</option>
                    <option value={'5'}>Заводской</option>
                    <option value={'6'}>Ленинский</option>
                    <option value={'7'}>Октябрський</option>
                    <option value={'8'}>Московский</option>
                    <option value={'9'}>Фрузенский</option>
                    <option value={'10'}>За МКАДом</option>
                </select>
            </div>
            <div className="payment">
                <h5>Способ оплаты</h5>
                <select className={'select'} size='1'>
                    <option value={"Cash"}>Наличные</option>
                    <option value={"Card"} disabled>Картой</option>
                </select>
            </div>
            <div className={"delivery"}>
                <h5>Способ доставки</h5>
                <select className={'select'} size='2'>
                    <option value={"Delivery"} selected>Доставка</option>
                    <option value={"ByThemself"}>Самовывоз</option>
                </select>
            </div>
            <div className="items">
                <p>Ваш заказ</p>
            </div>
        </div>
    );
};

export default Form;
