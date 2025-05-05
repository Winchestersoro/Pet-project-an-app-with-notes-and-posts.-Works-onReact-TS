import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router/router';
import { useContext } from 'react';
import { AuthContext } from '../../context/context';
import Loader from '../../components/UI/Loader/Loader';
const AppRoutes = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    

    if (isLoading){
        return <Loader/>
    }
    return ( 
        <Routes>
            {isAuth 
            ? (
                privateRoutes.map(({ path, component: Component }, index) => (
                    <Route
                        key={index}
                        path={path}
                        element={<Component />}
                    />
                )))
            : (
                publicRoutes.map(({ path, component: Component }, index) => (
                    <Route
                        key={index}
                        path={path}
                        element={<Component />}
                    />
                ))
            )}
            <Route path='*' element={<Navigate to={isAuth ? "/about" : "/login"} />} />
        </Routes>
    );
};
export default AppRoutes;