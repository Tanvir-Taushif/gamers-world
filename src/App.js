import './App.css';
import Shop from './Components/Shop/Shop'
function App() {
  return (
    <div className="App">
      <header>
        <h1 className='text-center my-4'><span id='name-span'>Gamer</span>'s World</h1>
      </header>
      <main>
       <div className="container">
          <div className="row">
            <div className=" col-md-10 col-12 ">
              <Shop></Shop>
            </div>
            <div className=" col-md-2 col-12 ">
              Column
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
