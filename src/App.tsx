import { FormEvent, useState } from "react";
import "./App.css";

const App = () => {
  const [nameInput, setNameInput] = useState("");
  const [yearInput, setYearInput] = useState("");
  const [age, setAge] = useState("");

  const handleAge = (event: FormEvent) => {
    event.preventDefault();

    if (!nameInput || !yearInput) {
      alert("Por favor os campos não podem ser vazios");

      return;
    }

    const currentYear = new Date().getUTCFullYear();
    const birthYear = Number(yearInput);
    const calculateAge = currentYear - birthYear;

    setAge(`Olá ${nameInput} você tem ${calculateAge} anos.`);
    setNameInput("");
    setYearInput("");
  };

  return (
    <div className="container">
      <h1>Descubra sua idade</h1>
      <div className="form-content">
        <form>
          <label htmlFor="name">Digite seu nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            id="name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <label htmlFor="year">Digite o ano que nasceu</label>
          <input
            type="text"
            id="year"
            placeholder="Digite o ano que você nasceu"
            value={yearInput}
            onChange={(e) => setYearInput(e.target.value)}
          />
          <button className="btn" onClick={handleAge}>
            Descobrir idade
          </button>
        </form>
      </div>
      <p className="text">{age}</p>
    </div>
  );
};

export default App;
