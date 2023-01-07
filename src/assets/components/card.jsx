//компонент карточки (слово+перевод+транскрипция + возможность добавить слово в словарь?)

import React from 'react';
import cardStyle from '../styles/card.module.scss';





class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pressed: false
        };
    };
    handleTranslate = () => {

        this.setState({
            pressed: !this.state.pressed
        });

    };
    render() {
        const { ...props } = this.props;
        const styleRussian = {
            fontWeight: 600,
            fontSize: 'large'
        }
        return (
            <div className={cardStyle.card} >
                <div className={cardStyle.cardContainer}>
                    <div className={cardStyle.tag}> {this.props.tags}</div>
                    <div className={cardStyle.wordInEnglish}> {this.props.english}</div>
                    <div> {this.props.transcription}</div>



                </div>
                {this.state.pressed && <div style={styleRussian}> {this.props.russian}</div>}
                <button {...props} onClick={this.handleTranslate} className={cardStyle.cardButton}>
                    {this.state.pressed ? "Посмотреть перевод" : "Скрыть перевод"}
                </button>

            </div >
        )
    }
}

export default Card

