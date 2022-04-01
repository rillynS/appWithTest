import React, { useState } from "react";
import cls from '../../styles/Auth.module.scss'
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

export const Auth = () => {
    const [user,setUser] = useState({
        username:'',
        password:''
    })
    function inputValue () {

    }
    return(
        <form className={cls.Auth} onSubmit={(e)=>e.preventDefault()}>
            <Input value={user.username} onChange={e=>setUser({...user,username:e.target.value})} type='text'/>
            <Input value={user.password} onChange={e=>setUser({...user,password:e.target.value})}  type='password'/>
            <Button>Войти</Button>
        </form>
    )
}