import React, { useState } from 'react'; 
import ReactDOM from 'react-dom/client';
import './App.css';

function Item(props) {
  return (
    <li>
      <label>
        <input 
          type="radio" 
          name="names" 
          value={props.name} 
          onChange={props.onChange} 
          checked={props.selected === props.name} 
        />
        {props.name}
      </label>
    </li>
  );
}

function List() {
  const [selectedName, setSelectedName] = useState('');
  const correctAnswer = 'Maciel';

  const handleValidation = () => {
    if (selectedName === correctAnswer) {
      alert('Correto! A resposta é ' + correctAnswer);
    } else {
      alert('Errado! Tente novamente.');
    }
  };

  const names = ['Silva', 'Martins', 'Maciel', 'Sousa'];
  
  return (
    <div className="container">
      <h1>Qual meu segundo sobrenome?</h1>
      <ul>
        {names.map((name) => (
          <Item 
            key={name} 
            name={name} 
            selected={selectedName}
            onChange={() => setSelectedName(name)}
          />
        ))}
      </ul>
      <button onClick={handleValidation}>Enviar</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<List />);

export default App;
