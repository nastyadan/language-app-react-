//компонент карточки (слово+перевод+транскрипция + возможность добавить слово в словарь?)

import React from 'react';
import cardStyle from '../styles/card.module.scss';





class Card extends React.Component {
    render() {
        return (
            <div className={cardStyle.card}>
                <div className={cardStyle.cardContainer}>
                    <div className={cardStyle.tag}> {this.props.tags}</div>
                    <div className={cardStyle.wordInEnglish}> {this.props.english}</div>
                    <div> {this.props.transcription}</div>
                    <div className={cardStyle.wordInRussian}> {this.props.russian}</div>

                </div>
                <button className={cardStyle.cardButton}>Посмотреть перевод</button>
            </div>
        )
    }
}

export default Card

