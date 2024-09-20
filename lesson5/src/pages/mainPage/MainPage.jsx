import React, { useState } from 'react';

function MainPage() {
    const [name, setName] = useState('')
    const [namesList, setNamesList] = useState([])

    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    const handleAddName = () => {
        if (name.trim()) {
            setNamesList([...namesList, name.trim()]);
            setName('')
        }
    }


    const handleEditName = (index) => {
        if (name.trim()) {
            const updatedList = [...namesList];
            updatedList[index] = name.trim();
            setNamesList(updatedList);
            setName('')
        }
    };

    return (
        <div>
            <h2>Добавление и редактирование имен</h2>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Введите имя"
            />
            <button onClick={handleAddName} disabled={!name.trim()}>
                Добавить
            </button>


            {namesList.length === 0 ? (
                <p>Список пуст</p>
            ) : (
                <ul>
                    {namesList.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button
                                onClick={() => handleEditName(index)}
                                disabled={!name.trim()}
                            >
                                Поменять
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MainPage;