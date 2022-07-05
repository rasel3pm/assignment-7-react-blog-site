import React from 'react';
import styles from '../Hero_add/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines,faAddressCard,faListCheck,faRectangleAd } from '@fortawesome/free-solid-svg-icons'

const HeroAdd = () => {
    return (
        <div>
                    <div className={styles.container}>
            <div className={styles.scser}>
                <div className={styles.item}>
                    <div>
                    <FontAwesomeIcon className={styles.icon} icon={faFileLines} />
                    </div>
                    <h5>Case Studies</h5>
                </div>
                <div className={styles.item}>
                    <div>
                    <FontAwesomeIcon className={styles.icon} icon={faAddressCard} />
                    </div>
                    <h5>Innovation</h5>
                </div>
                <div className={styles.item}>
                    <div>
                    <FontAwesomeIcon className={styles.icon} icon={faListCheck} />
                    </div>
                    <h5>Manegment</h5>
                </div>
                <div className={styles.item}>
                    <div>
                    <FontAwesomeIcon className={styles.icon} icon={faRectangleAd} />
                    </div>
                    <h5>Advirtising</h5>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HeroAdd;