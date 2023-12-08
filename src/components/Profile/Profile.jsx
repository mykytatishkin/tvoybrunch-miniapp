import React, {useCallback, useEffect, useState} from 'react';
import './Profile.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg, user} = useTelegram();

    return (
        <div>
            <h2>Ваш профиль</h2>
            <p className={'username'}>
                Телеграмм: {user?.username}
            </p>
            <p className={'first_name'}>
                Имя: {user?.first_name}
            </p>
            <p className={'last_name'}>
                Фамилия: {user?.last_name}
            </p>
            <img className={'photo_url'} src={user?.photo_url}/>
        </div>
    );
};

export default Form;