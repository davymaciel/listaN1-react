import { useState } from "react";
import ReactDOM from "react-dom/client";
import './App.css';

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));

    if (name === "password" || name === "confirmPassword") {
      setPasswordMatch(inputs.password === inputs.confirmPassword);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputs.password !== inputs.confirmPassword) {
      alert("Erro: As senhas não coincidem!");
      return;
    }

    if (!inputs.fullname || !inputs.birthdate || !inputs.email || !inputs.password || !inputs.confirmPassword) {
      alert("Erro: Por favor, preencha todos os campos corretamente.");
      return;
    }

    alert("Sucesso: Todas as informações foram preenchidas corretamente!");
    console.log(inputs);
  };

  return (
    <div className="container">
      <h2>Formulário de Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome completo:
          <input
            type="text"
            name="fullname"
            value={inputs.fullname || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Data de nascimento:
          <input
            type="date"
            name="birthdate"
            value={inputs.birthdate || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Senha:
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Confirme sua senha:
          <input
            type="password"
            name="confirmPassword"
            value={inputs.confirmPassword || ""}
            onChange={handleChange}
            required
          />
        </label>

        {!passwordMatch && <p>As senhas não coincidem!</p>}

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);

export default MyForm;
