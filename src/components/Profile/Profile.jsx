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
                {user?.username}
            </p>
            <p className={'first_name'}>
                {user?.first_name}
            </p>
            <p className={'last_name'}>
                {user?.last_name}
            </p>
            <p className={'photo_url'}>
                {user?.photo_url}
            </p>
        </div>
    );
};

export default Form;