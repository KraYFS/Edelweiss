import styles from './Button.module.css'

const Button = (props) => {
    return (
        <button onClick={props.onClick} style={{padding: props.padding}} className={styles.btn}>
            {props.text}
        </button>
    );
}

export default Button;
