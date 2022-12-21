import React from 'react';
import '../styles/header.scss';


class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <nav >
                    <button className='buttonInNav'>Все слова</button>
                    <button className='buttonInNav'>Мой словарь</button>
                    <button className='buttonInNav'>Начать тренеровку</button>
                </nav>
            </div>
        )
    }
}

export default Header