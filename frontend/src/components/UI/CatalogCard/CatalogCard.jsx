import React from "react";
import styles from "./CatalogCard.module.css";
import { Link } from "react-router-dom";

const CatalogCard = (props) => {
  return (
    <Link to={props.link} className={styles.catalogCard}>
      <div className={styles.img_wrapper}>
        <img
          src={props.img}
          className={styles.catalogCard_img}
          alt=""
          srcSet=""
        />
      </div>
      <div className={styles.catalogCard_inner}>
        <span className={styles.catalogCard_title}>{props.title}</span>
        <div className={styles.catalogCard_properties}>
          <div className={styles.catalogCard_characteristic}>
            <span>Площадь:</span>
            {props.squareMeter}
          </div>
          <div className={styles.catalogCard_characteristic}>
            <span>Габариты:</span>
            {props.square}
          </div>
          <div className={styles.catalogCard_characteristic}>
            <span>Спален:</span>
            {props.bedrooms}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CatalogCard;
