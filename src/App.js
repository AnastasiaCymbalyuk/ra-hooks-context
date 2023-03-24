import React, {useState} from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [info, setInfo] = useState({});
  return (
    <div>
      <List selectUser={setInfo} />
      {info.id && <Details info={info} />}
    </div>
  );
}

export default App;
