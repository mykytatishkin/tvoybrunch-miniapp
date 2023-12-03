import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <list className={'topnav'}>
                <ul>
                    <li><a href="#">🔥Горячие предложения</a></li>
                    <li><a href="#size_box">🍱Комбо Боксы</a></li>
                    <li><a href="#box">🥡Боксы</a></li>
                    <li><a href="#pie">🥧Пироги</a></li>
                </ul>
            </list>
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
        </div>
    );
}

export default App;
