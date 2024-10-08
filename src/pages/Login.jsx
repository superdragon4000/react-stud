import React from 'react'
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';

const Login = () => {
    return ( 
        <>
            <h1>Страница для логина</h1>
            <form action="">
                <MyInput type="text" placeholder='Введите логин'/>
                <MyInput type="password" placeholder='Введите пароль'/>
                <MyButton>Войти</MyButton>
            </form>
        </> 
    );
}
 
export default Login;