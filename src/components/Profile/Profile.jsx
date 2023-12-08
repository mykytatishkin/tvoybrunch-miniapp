import React, {useCallback, useEffect, useState} from 'react';
import './Profile.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg, user} = useTelegram();

    return (
        <div className='profile'>
            <h2>Ваш профиль</h2>
            <p className={'username'}>
                Телеграм: {user?.username}
            </p>
            <p className={'first_name'}>
                Имя: {user?.first_name}
            </p>
            <p className={'last_name'}>
                Фамилия: {user?.last_name}
            </p>
            <a className={'orders'}>
                История заказов
            </a>
        </div>
    );
};

export default Form;