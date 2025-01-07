import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import styles from './HousePage.module.css'
import { BASE_URL } from '../../urls.ts'
import Title from '../../components/UI/Title/Title.jsx';
import Header from '../../components/Header/Header.jsx';


const HousePage = () => {
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`${BASE_URL}/api/houseInfo/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    if (!data) return <div>wait</div>
    return (
        <>
            <Header />
            <div className={styles.housePage}>
                <div className="container">
                    <div className={styles.housePage_inner}>
                        {/* <div className={styles.history_items}>
                        <Link className={styles.history_item}></Link>
                    </div> */}
                        <Title align="center" text={`${data.name}`} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HousePage;
