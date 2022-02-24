import React, { useRef } from "react";
import styles from "./Project1.module.css";

const Project2 = () => {
    const root = useRef()
    const output = useRef();
    const changeBtn = useRef();

    const changeColorHandler = () =>{
        const bgColor = generateHEXAColor();
        root.current.style.backgroundColor = bgColor;
        console.log(output)
        output.current.value = bgColor;
    }

    const generateHEXAColor = () =>{
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);

        // if we want to converted number to hexa decimal number, we should use toString() with number and put 16.
        // if we put 8, it will be octal number
        // if we put 2, it will be binary number.

        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }

    return (
        <>
            <div className={styles.container} ref={root}>
                <h1>
                    Change The Background Color By Clicking The Following Button
                </h1>
                <input type="text" disabled value="#000000" ref={output} />
                <button ref={changeBtn} onClick={changeColorHandler}>Change Color</button>
            </div>
        </>
    );
};

export default Project2;
