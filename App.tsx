import { useState, useEffect } from 'react'
import Button_minus from './components/button_minus'
import Button_plus from './components/Button_plus'
import './App.css';
import Button_reset from './components/Button_reset';
import Alert from './components/Alert';

function App() {
  const [count, setCount] = useState(() =>{
    const saved = localStorage.getItem('count');
    return saved ? Number(saved) : 0;
  })

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  const decrease = () => 
  {
    setCount(count - 1);
    setVisible(false);
  }

  const increase = () =>
  {
    if(count < 10)
    {
      setCount(count + 1);
    }
    else
    {
      setVisible(true);
    }
    
  }

  const reset = () =>
  {
    setCount(0);
    setVisible(false);
  }

  return (
    <div style={{ zoom: '150%'}}>
      {visible && <Alert/>}
      <h1>{count}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Button_plus onClick={increase}/>
        <Button_minus onClick={decrease}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
          <Button_reset onClick={reset}/>
      </div>
    </div>
  )
}

export default App
