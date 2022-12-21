//компонент карточки (слово+перевод+транскрипция + возможность добавить слово в словарь?)

import React from 'react';
import '../styles/card.scss';



class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card-container'>
                    <div className='tag'> {this.props.tags}</div>
                    <div className='wordInEnglish '> {this.props.english}</div>
                    <div> {this.props.transcription}</div>
                    <div className='wordInRussian '> {this.props.russian}</div>

                </div>
                <button className='card-button'>Посмотреть перевод</button>
            </div>
        )
    }
}

export default Card

