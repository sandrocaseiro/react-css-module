import React from 'react';
import styles from './Child.module.css'

function Child() {
	return (
		<div className={`box ${styles.red}`}></div>
	);
}

export default Child;
