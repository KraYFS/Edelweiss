import styles from './Title.module.css'

const Title = (props) => {
    return (
        <h1 style={{textAlign: props.align}} className={styles.title}>
            {props.text}
        </h1>
    );
}

export default Title;
