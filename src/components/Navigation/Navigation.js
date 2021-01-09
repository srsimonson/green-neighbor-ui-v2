import React from 'react';
import apple from './apple.png';
import banana from './banana.png';
import styles from './index.module.scss';


const Navigation = () => {

    return (
        <div>
            <ul>
                <li>
                <button className={styles.banana}><img className={styles.banana} src={apple}/></button>
                    <span className={styles.hidden}>APPLE</span>
                </li>
                
              {/* ///////////////////////// */}
                <li>
                    <button className={styles.banana}><img className={styles.banana} src={banana}/></button>
                    <span className={styles.hidden}>BANANA</span>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;