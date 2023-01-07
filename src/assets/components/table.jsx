//компонент карточки (слово+перевод+транскрипция + возможность добавить слово в словарь?)

import React from 'react';
import tableStyle from '../styles/table.module.scss';
import { listOfWords } from '../data/wordsData';





class Table extends React.Component {

    render() {

        return (
            <table className={tableStyle.table}>
                <thead>
                    <tr>
                        <td className={tableStyle.tdName}>English</td>
                        <td className={tableStyle.tdName}>Транскрипция</td>
                        <td className={tableStyle.tdName}>Перевод</td>
                        <td className={tableStyle.tdName}>Действие</td>
                    </tr>
                </thead>
                <tbody>
                    {listOfWords.map(function (item) {
                        return <tr key={item.id}>
                            <td className={tableStyle.tdWords}>{item.english}</td>
                            <td className={tableStyle.tdWords}>{item.transcription}</td>
                            <td className={tableStyle.tdWords}>{item.russian}</td>
                            <td className={tableStyle.tdWords}>
                                <button className={tableStyle.tableButton} >Редактировать</button>
                            </td>
                        </tr>;
                    })}

                </tbody>
            </table>
        )
    }
}

export default Table
