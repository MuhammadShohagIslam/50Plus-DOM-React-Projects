import React, { useRef } from 'react';
import styles from './project1.module.css';

const Project1 = () => {

    const root = useRef(null);

    const changeColorHandler = () =>{
        const bgColor = generateRGBColor();
        root.current.style.backgroundColor = bgColor;
    }

    const generateRGBColor = () =>{
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        
        return `rgb(${red}, ${green}, ${blue})`;
    }

    return (
        <>
           <div className={styles.container} ref={root}>
			<h1>
				Change The Background Color By Clicking The Following Button
			</h1>
			<button onClick={changeColorHandler} >Change Color</button>
		</div>
        </>
    );
}

export default Project1;