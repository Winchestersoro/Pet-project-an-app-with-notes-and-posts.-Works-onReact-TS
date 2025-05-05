
import { FormEvent, useContext, useState } from 'react';
import TheButton from '../../components/UI/button/TheButton';
import TheInput from '../../components/UI/input/TheInput';
import { AuthContext } from '../../context/context';

const Login = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = (e: FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()

        if (username === 'admin' && password === 'admin') {
            setIsAuth(true);
            localStorage.setItem('auth', 'true')
        } else {
            alert('Неверный логин или пароль'); 
        }

    }
    return (
        <div>
            <h1>Авторизация пользователя</h1>
            <form onSubmit={login}>
            <TheInput 
                    type='text' 
                    placeholder='Введите логин' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <TheInput 
                    type='password' 
                    placeholder='Введите пароль' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <TheButton> Войти </TheButton>
            </form>
        </div>
    );
};

export default Login;