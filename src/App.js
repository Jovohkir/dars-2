import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Home from './pages/Home';

function App() {
  const [title, setTitle] = useState('')
  return (
    <div className="App">
      <Button title='Submit' color='red' onClick={() => setTitle("llasdas")} />
      <Button title='Submit' />
      <Button title='Submit' isLink color='green' url='/kadsdasd' />
      <Home />
    </div>
  );
}

export default App;
