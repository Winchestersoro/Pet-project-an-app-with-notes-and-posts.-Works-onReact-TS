import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/UI/NavBar/NavBar';
import AppRoutes from './pages/AppRoutes/AppRoutes';
import { AuthContext } from './context/context';
import { useEffect, useState } from 'react';
function App() {
    const [isAuth,setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        } 
        setIsLoading(false)
    }, [])

  return (
    <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        setIsLoading
    }}>
        <BrowserRouter>
        <NavBar/>
        <AppRoutes/>
        </BrowserRouter>
    </AuthContext.Provider>
    
    
  );
}
export default App;