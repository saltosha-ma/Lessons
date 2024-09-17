import './App.css';
import React, { useState, useLayoutEffect } from 'react';
import MainPage from './pages/mainPage/MainPage';
import ErrorPage from './pages/errorPage/ErrorPage';

function App() {
    const [user, setUser] = useState({ name: '', lastname: '' });
    const [isAuthorized, setIsAuthorized] = useState(null); // null означает, что пока не определено

    useLayoutEffect(() => {
        const name = prompt("Введите ваше имя:");
        const lastname = prompt("Введите вашу фамилию:");

        const newUser = { name, lastname };
        setUser(newUser);

        if (name === "John" && lastname === "Johns") {
            setIsAuthorized(true); // Авторизован
        } else {
            setIsAuthorized(false); // Не авторизован
        }
    }, []);

    if (isAuthorized === null) {
        return <h2>Загрузка...</h2>; // Показываем пока промпт не сработал
    }

    return (
        <>
            {isAuthorized ? (
                <MainPage user={user} />
            ) : (
                <ErrorPage user={user} />
            )}
        </>
    );
}

export default App;
