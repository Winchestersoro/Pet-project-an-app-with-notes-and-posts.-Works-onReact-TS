
import styles from './TheInput.module.css'

interface PropsInter {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
   
}

const TheInput =  (props: PropsInter) => {
    return (
        <input className={styles.TheInput} {...props}>
            
        </input>
    );
};

export default TheInput;