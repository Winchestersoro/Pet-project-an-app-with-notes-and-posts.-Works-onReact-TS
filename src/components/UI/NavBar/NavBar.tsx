import { Link } from "react-router-dom";
import TheButton from "../button/TheButton";
import { useContext } from "react";
import { AuthContext } from "../../../context/context";


const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () => {
      setIsAuth(false)
      localStorage.removeItem('auth')
  }
    return (
        <nav className='navbar'>
          <TheButton onClick={logout}>
            Выйти
          </TheButton>
        <div className="navbar__links">
          <Link to='/about'>О приложении</Link>
          <Link to='/posts'>Посты</Link>
        </div>
      </nav>
    );
};

export default NavBar;