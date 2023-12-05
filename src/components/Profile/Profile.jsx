import React, {useCallback, useEffect, useState} from 'react';
import './Contacts.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    return (
        <div className={"form"}>
            <h2>Ваш профиль</h2>
            
        </div>
    );
};

export default Form;
