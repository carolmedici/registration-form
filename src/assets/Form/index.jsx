import React, { useState } from 'react';

const Form = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [generoPreferido, setGeneroPreferido] = useState('');
  const [segundoGeneroPreferido, setSegundoGeneroPreferido] = useState('');
  const [terceiroGeneroPreferido, setTerceiroGeneroPreferido] = useState('');
  const [tipoFilme, setTipoFilme] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
 
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Email:', email);
    console.log('CPF:', cpf);
    console.log('Gênero Preferido:', generoPreferido);

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome Completo:
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
      </label>
      <br />
      <label>
        Idade:
        <input type="number" value={idade} required onChange={(event) => setIdade(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} required onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        CPF:
        <input type="number" value={idade} required onChange={(event) => setCPF(event.target.value)} />
      </label>
      <br />
      <label>
      Gênero Preferido
        <select name="generoPreferido" id="">
          <option value="0" selected disabled>Selecionar...</option>
          <option value="Acao">Ação</option>
          <option value="Animacao">Animação</option>
          <option value="Aventura">Aventura</option>
          <option value="Comedia">Comédia</option>
          <option value="Drama">Drama</option>
          <option value="Documentario">Documentário</option>
          <option value="Ficcao">Ficção</option>
          <option value="Romance">Romance</option>
          <option value="Suspense">Suspense</option>
          <option value="Terror">Terror</option>
        </select>

      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
