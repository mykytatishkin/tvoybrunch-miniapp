import React, {useCallback, useEffect, useState} from 'react';
import './Contacts.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h2>Наши контактные данные</h2>
            <p><a href="https://www.google.com/maps/place/Vulitsa+Panamarenki+43%D0%B1,+Minsk,+Minskaja+voblas%C4%87,+Belarus/@53.8929889,27.4873939,19.13z/data=!4m6!3m5!1s0x46dbdaae1a437cdd:0x76e84036e9052437!8m2!3d53.8930043!4d27.4875863!16s%2Fg%2F11c25s9597?entry=ttu">г.Минск,ул.Пономаренко 43 Б </a></p>

            <list>
                <ul>
                    <li><a><b>Телефон&nbsp;:&nbsp;</b>+ 375 29 858-81-18</a></li>
                    <li><a href="https://t.me/tvoybrunch"><b>Телеграм&nbsp;:&nbsp;</b>@tvoybrunch </a></li>
                    <li><a href="https://tvoybrunch.by/"><b>Вебсайт&nbsp;:&nbsp;</b>https://tvoybrunch.by/ </a></li>
                    <li><a href="mailto:tvoybrunch@gmail.com"><b>Почта&nbsp;:&nbsp;</b>tvoybrunch@gmail.com </a></li>
                </ul>
            </list>

            <h3>Прием заказов осуществляется</h3>
            <list>
                <ul>
                    <li><b>Понедельник</b> &nbsp; 9:00-20:00</li>
                    <li><b>Вторник</b> &nbsp; 9:00-20:00</li>
                    <li><b>Среда</b> &nbsp; 9:00-20:00</li>
                    <li><b>Четверг</b> &nbsp; 9:00-20:00</li>
                    <li><b>Пятница</b> &nbsp; 9:00-20:00</li>
                    <li><b>Суббота</b> &nbsp; 9:00-20:00</li>
                    <li><b>Воскресенье</b> &nbsp; 9:00-20:00</li>
                </ul>
            </list>
        </div>
    );
};

export default Form;
