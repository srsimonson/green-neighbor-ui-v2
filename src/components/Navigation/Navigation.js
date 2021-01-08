import React from 'react';
import banana from './banana.png';
import leaf from './icon.png';
import styles from './index.module.scss';


const Navigation = () => {

    return (
        <div>
            <ul>
                <li> <button>1</button> Find Orgs</li>
                <li> <button>2</button> Save Energy</li>
                <li> <button>3</button> Shared Solar</li>
                <li> <button>4</button> Take Action</li>
                <li> <button>5</button> Rooftop Solar</li>
                <li> <button>6</button> Write Your Rep</li>
                <li> <button>7</button> About</li>
                <li>
                    <button 
                        className={styles.banana}> 
                        <img className={styles.banana} src={banana}/> 
                    </button>
                    banana
                </li>
            </ul>
        </div>
    );
};

export default Navigation;