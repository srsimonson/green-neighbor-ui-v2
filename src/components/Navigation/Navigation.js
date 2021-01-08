import React from 'react';
import banana from './banana.png';
import leaf from './icon.png';
import styles from './index.module.scss';


const Navigation = () => {

    return (
        <div>
            <div>
                <li> <button>x</button> Find Orgs</li>
                <li> <button>x</button> Save Energy</li>
                <li> <button>x</button> Shared Solar</li>
                <li> <button>x</button> Take Action</li>
                <li> <button>x</button> Rooftop Solar</li>
                <li> <button>x</button> Write Your Rep</li>
                <li> <button>x</button> About</li>
                <li>
                <button className={styles.banana}> <img className={styles.banana} src={banana}/> </button>
                    banana</li>
            </div>
        </div>
    );
};

export default Navigation;