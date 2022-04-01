import React from 'react';
import { useSelector } from 'react-redux';
import { Auth } from './components/Auth/Auth';
import cls from './styles/App.module.scss';

function App() {
  const users = useSelector(state=>state).users
console.log(users);
  return (
    <div className={cls.App}>
      <Auth/>
    </div>
  );
}

export default App;
