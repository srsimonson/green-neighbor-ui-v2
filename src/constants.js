export const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
export const IS_PROD = !IS_DEV;
export const API = 'http://localhost:5000/api/';
