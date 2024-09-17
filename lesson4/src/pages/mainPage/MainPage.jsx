import React, { useState, useEffect } from 'react';

function MainPage({ user }) {
    const [userInfo, setUserInfo] = useState({ name: '', lastname: '' });

    useEffect(() => {
        setUserInfo(user); // Сохраняем пользователя в состоянии после рендеринга
    }, [user]);

    return (
        <div>
            <h2>Добро пожаловать {userInfo.name} {userInfo.lastname}, мы тебя ждали!</h2>
        </div>
    );
}

export default MainPage;