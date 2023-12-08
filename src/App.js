import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Profile from "./components/Profile/Profile"
import Offers from "./components/Offers/Offers"


function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            
            <list className={'topnav'}>
                <ul>
                    <li><a href="#offers">🔥 Горячие предложения</a></li>
                    <li><a href="#size_box">🍱 Комбо Боксы</a></li>
                    <li><a href="#box">🥡 Боксы</a></li>
                    <li><a href="#pie">🥧Пироги</a></li>
                </ul>
            </list>
            <Header />
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
                <Route path={'contacts'} element={<Contacts />}/>
                <Route path={'profile'} element={<Profile />}/>
                <Route path={'offers'} element={<Offers />}/>
            </Routes>
            <a className='dev_contact' href='https://t.me/ktotam112'> Contact developer </a>
        </div>
    );
}

export default App;
