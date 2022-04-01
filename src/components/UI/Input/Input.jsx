import React from "react";
import cls from '../../../styles/Input.module.scss'
export const Input = (props) =>{
    return(
        <input className={cls.Input} {...props} />
    )
}