import styles from './button.module.css'

const Button = (props) => {
    return (
        <button style={{padding: props.padding}} className={styles.btn}>
            {props.text}
        </button>
    );
}

export default Button;
