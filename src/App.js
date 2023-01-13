

import Card from './assets/components/card';
import Footer from './assets/components/footer';
import Header from './assets/components/header';
import Table from './assets/components/table';
import { listOfWords } from './assets/data/wordsData';
import './App.scss';
import Slider from './assets/components/slider';



 


function App() {
  
  return (
    <div className='App'>
     <Header ></Header>
     <section>
      <Slider></Slider>
     </section>
     <section className="section-cards">
     {listOfWords.map((listOfWords) => 
     <Card english={listOfWords.english} transcription = {listOfWords.transcription} russian= {listOfWords.russian} tags ={listOfWords.tags}></Card> )}
      </section>
      <section className="section-listOfWords">
  <Table></Table>
      </section>
     <Footer className="App"></Footer>
    </div>
 
  );
}

export default App;

