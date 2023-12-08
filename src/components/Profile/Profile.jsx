import React, {useCallback, useEffect, useState} from 'react';
import './Profile.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    return (
        <div>
            <h2>Ваш профиль</h2>
            <span className={'username'}>
                {user?.username}
            </span>
            <span className={'first_name'}>
                {user?.first_name}
            </span>
            <span className={'last_name'}>
                {user?.last_name}
            </span>
            <span className={'photo_url'}>
                {user?.photo_url}
            </span>
        </div>
    );
};

export default Form;