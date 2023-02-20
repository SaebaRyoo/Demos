
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setV] = useState(null)
  const handleChange = (e) => {setV(e.target.value)}
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>{value}</p>
    </div>
  );
}

export default App;
