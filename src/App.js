import './App.css';
import Shop from './Components/Shop/Shop'
function App() {
  return (
    <div className="App">
      <header>
        <h1 className='text-center my-4'><span id='name-span'>Gamer</span>'s World</h1>
      </header>
      <main>
       <Shop></Shop>
      </main>
    </div>
  );
}

export default App;
