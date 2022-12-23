
import './App.scss';
import Card from './assets/components/card';
import Footer from './assets/components/footer';
import Header from './assets/components/header';
import { listOfWords } from './assets/data/wordsData';

 


function App() {
  return (
    <div className='App'>
     <Header ></Header>
     <section className="section-cards">
     {listOfWords.map((listOfWords) => 
     <Card english={listOfWords.english} transcription = {listOfWords.transcription} russian= {listOfWords.russian} tags ={listOfWords.tags}></Card> )}
      </section>
     <Footer className="App"></Footer>
    </div>
 
  );
}

export default App;

