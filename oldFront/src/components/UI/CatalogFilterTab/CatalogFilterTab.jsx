import React from 'react';
import styles from './CatalogFilterTab.module.css'

const CatalogFilterTab = (props) => {
    return (
        <div className={`${styles.CatalogFilterTab} ${props.className}`} onClick={props.onClick}>
            <img className={styles.icon} src={props.icon} />
            {props.title}
        </div>
    );
}

export default CatalogFilterTab;
