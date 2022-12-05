// import logo from './assets/logo.svg';
import logo from '../assets/yugi.png';
import pegasus from '../assets/pegasus.png'
import '../style/App.css'
import Hello from './text'
import Clock from './clock'
import Writing from './input_hello';
import ListItem from './list';
import Buttons from './machin';

function App() {
  return (
    <div className="App">
      <h1>REACT JS</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={pegasus} className="App-pegasus" alt="pegasus" ></img>
        {/* <h1>Hello world</h1> */}
        <h2>----------------------------------------------------------------------------</h2>
        <h2>Display text and time</h2>
        <Hello name='Yugi boy!'/>
        <h1>Wha- what Pegasus ?!</h1>
        <h1>You know what time it is Yugi boy?</h1>
        <Clock/>
        <h1>It's time to du-du-du-du-duel!!!!!</h1>
        <h2>----------------------------------------------------------------------------</h2>
        <h2>Display input</h2>
        <div class='form_name'>
        <Writing/>
        </div>
        {/* <label for="name">Name</label>
        <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10"></input> */}
        <h2>----------------------------------------------------------------------------</h2>
        <h2>Display list</h2>
        <ListItem />
        <h2>----------------------------------------------------------------------------</h2>
        <h2>Useless buttons</h2>
        <Buttons/>
        <h2>----------------------------------------------------------------------------</h2>
        <p>
          I edited <code>src/App.js</code> and now I realised I made a terrible mistake.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
