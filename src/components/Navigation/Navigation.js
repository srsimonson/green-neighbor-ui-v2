import React from 'react';
import apple from './apple.png';
import banana from './banana.png';
import styles from './index.module.scss';


const Navigation = () => {

    return (
        <div>
            <ul>
                {['apple', 'banana', 'Find Orgs', 'Save Energy', 'Shared Solar', 'Take Action', 'Rooftop Solar', 'Write Your Rep', 'About']
                    .map(nav =>
                        <li>
                            <button className={styles.banana}><img className={styles.banana} src={nav}/></button>
                            <span className={styles.hidden}>{nav}</span>
                        </li>
                    ) 
                }
                
                {/* <li>
                    <button className={styles.banana}><img className={styles.banana} src={banana}/></button>
                    <span className={styles.hidden}>BANANA</span>
                </li> */}
            </ul>
        </div>
    );
};

export default Navigation;