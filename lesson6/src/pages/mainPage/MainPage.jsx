import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const [users, setUsers] = useState([]);

    function submit(values) {
        setUsers([...users, values]);
        reset();
    }

    function deleteUser(index) {
        setUsers(users.filter((_, i) => i !== index));
    }

    function clearTable() {
        setUsers([]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    <input
                        type="text"
                        className={errors.name && "error"}
                        placeholder="Имя"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <small>Обязательное поле для ввода</small>}
                </label>

                <label>
                    <input
                        type="text"
                        className={errors.username && "error"}
                        placeholder="Имя пользователя"
                        {...register("username", { required: true })}
                    />
                    {errors.username && <small>Обязательное поле для ввода</small>}
                </label>

                <label>
                    <input
                        type="email"
                        className={errors.email && "error"}
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <small>Обязательное поле для ввода</small>}
                </label>

                <label>
                    <input
                        type="tel"
                        className={errors.phone && "error"}
                        placeholder="Телефон"
                        {...register("phone", { required: true })}
                    />
                    {errors.phone && <small>Обязательное поле для ввода</small>}
                </label>

                <label>
                    <input
                        type="text"
                        placeholder="Вебсайт"
                        {...register("website")}
                    />
                </label>

                <button type="submit">Создать</button>
                <button type="button" onClick={clearTable}>Очистить таблицу</button>
            </form>

            {users.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Имя пользователя</th>
                        <th>Email</th>
                        <th>Телефон</th>
                        <th>Вебсайт</th>
                        <th>Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <button onClick={() => deleteUser(index)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>Таблица пуста</p>
            )}
        </div>
    );
}

export default FormPage;