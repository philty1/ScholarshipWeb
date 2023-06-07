import '../css/App.css';
import Body from '../components/Body';
import Header from '../components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <Body/>
      </div>
    </div>
  );
}

export default App;
