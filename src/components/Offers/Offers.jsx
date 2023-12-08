import React, {useCallback, useEffect, useState} from 'react';
import './Offers.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    return (
        <div className={"offers"}>
            <h3>Наши акционные предложения</h3>
        </div>
    );
};

export default Form;
