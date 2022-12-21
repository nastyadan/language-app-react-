import React from 'react';
import '../styles/footer.scss';


class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <nav>
                    <button className='buttonInNav'>Все слова</button>
                    <button className='buttonInNav'>Мой словарь</button>
                    <button className='buttonInNav'>Начать тренеровку</button>
                </nav>
            </div>
        )
    }
}

export default Footer