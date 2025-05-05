
import styles from './TheButton.module.css'

interface props {
    children?: string
    props?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
   
}


const TheButton = ({children, ...props}: props) => {
    return (
        <button {...props} className={styles.TheButton}>
            {children}
        </button>
    );
};

export default TheButton;