import React, { useState, useEffect } from 'react';

function ErrorPage({ user }) {
    const [userInfo, setUserInfo] = useState({ name: '', lastname: '' });

    useEffect(() => {
        setUserInfo(user); // Сохраняем пользователя в состоянии после рендеринга
    }, [user]);

    return (
        <div>
            <h2>Тебе сюда нельзя - {userInfo.name} {userInfo.lastname}</h2>
        </div>
    );
}

export default ErrorPage;