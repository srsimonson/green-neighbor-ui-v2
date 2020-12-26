import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const LoadingTurbine = ({ className }) => (
  <div
    aria-label="loading..."
    className={`${styles.container} ${className}`}
  >
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
    >
      <g>
        <title>Layer 1</title>
        <path stroke="#ffffff" fill="#000000" strokeWidth="3" d="m124.00665,15.43851c-8.93352,-10 -9.71891,63.0472 -11.2863,70.41696c-1.56739,7.36976 5.58852,15.24901 10.02012,25.12827c4.4316,9.87926 12.66172,0.76436 13.2315,0.80258c-0.56978,-0.03822 -3.0318,-86.34781 -11.96533,-96.34781l0.00001,0z" id="svg_8" />
        <path transform="rotate(120 183.24151611328128,155.83937072753903) " stroke="#ffffff" fill="#000000" strokeWidth="3" d="m183.01218,106.23612c-8.93352,-10 -9.71891,63.0472 -11.2863,70.41696c-1.56738,7.36976 5.58852,15.24901 10.02013,25.12827c4.4316,9.87926 12.66172,0.76436 13.2315,0.80258c-0.56978,-0.03822 -3.0318,-86.34781 -11.96533,-96.34781z" id="svg_10" />
        <path transform="rotate(-120 76.5412368774414,165.03594970703125) " stroke="#ffffff" fill="#000000" strokeWidth="3" d="m76.31191,115.43271c-8.93352,-10 -9.71891,63.0472 -11.2863,70.41696c-1.56738,7.36976 5.58852,15.24901 10.02013,25.12827c4.4316,9.87926 12.66172,0.76436 13.2315,0.80258c-0.56978,-0.03822 -3.0318,-86.34781 -11.96533,-96.34781z" id="svg_11" />
        <ellipse stroke="#ffffff" fill="#000000" strokeWidth="3" strokeOpacity="null" fillOpacity="null" cx="128" cy="128" id="svg_14" rx="13.5" ry="13.5" />
      </g>
    </svg>
  </div>
);

LoadingTurbine.propTypes = {
  className: PropTypes.string,
};

LoadingTurbine.defaultProps = {
  className: '',
};

export default LoadingTurbine;
