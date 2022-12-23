import React from 'react';
import headerStyle from '../styles/header.module.scss';


class Header extends React.Component {
    render() {
        return (
            <div className={headerStyle.header}>
                <nav className={headerStyle.nav}>
                    <button className={headerStyle.buttonInNav}>Все слова</button>
                    <button className={headerStyle.buttonInNav}>Мой словарь</button>
                    <button className={headerStyle.buttonInNav}>Начать тренировку</button>
                </nav>
            </div>
        )
    }
}

export default Header