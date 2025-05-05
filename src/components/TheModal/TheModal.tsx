import styles from './TheModal.module.css'
const TheModal = ({children, visible, setVisible} : any) => {
    const rootClasses = [styles.TheModal];
    if (visible) {
        rootClasses.push(styles.active);
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.TheModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
export default TheModal;