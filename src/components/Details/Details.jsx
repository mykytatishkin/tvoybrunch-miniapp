import React, {useCallback, useEffect, useState} from 'react';
import './Details.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg, user} = useTelegram();

    return (
        <div className='details'>
            <br/>
            <br/>
            <h2>Детальная информация про товар</h2>
            
        </div>
    );
};

export default Form;