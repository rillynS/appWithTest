import React from "react";
import cls from '../../../styles/Button.module.scss'
export const Button = (props) => {
    return(
        <button {...props} className={cls.Button}>{props.children}</button>
    )
}