import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Profile from "./components/Profile/Profile"

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])


    return (
        <div className="App">
            <Header />
            <list id='myHeader' className={'topnav'}>
                <ul>
                    <li><a href="#offers">🔥 Горячие предложения</a></li>
                    <li><a href="#size_box">🍱 Комбо Боксы</a></li>
                    <li><a href="#box">🥡 Боксы</a></li>
                    <li><a href="#pie">🥧Пироги</a></li>
                </ul>
            </list>
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
                <Route path={'contacts'} element={<Contacts />}/>
                <Route path={'profile'} element={<Profile />}/>
            </Routes>
        </div>
    );
}

export default App;
