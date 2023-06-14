import React, { useState } from 'react';

const Form = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [generoPreferido, setGeneroPreferido] = useState('');
  const [GeneroPreferido2, setSegundoGeneroPreferido] = useState('');
  const [GeneroPreferido3, setTerceiroGeneroPreferido] = useState('');
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
    <form onSubmit={handleSubmit} className='my-14'>
      <label>
        Nome Completo:
        <input type="text" value={nome} className='ml-4 mt-4 bg-gray-200 rounded-lg text-black' minLength="8" maxLength="25" onChange={(event) => setNome(event.target.value)} />
      </label>
      <br />
      <label>
        Idade:
        <input type="number" max="2" className='ml-4 mt-4 bg-gray-200 rounded-lg text-black' value={idade} required onChange={(event) => setIdade(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" minLength="7" maxLength="20" className='ml-4 mt-4 bg-gray-200 rounded-lg text-black' value={email} required onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        CPF:
        <input type="number" max="14" value={cpf} className='ml-4 mt-4 bg-gray-200 rounded-lg text-black' required onChange={(event) => setCPF(event.target.value)} />
      </label>
      <br />
      <label>
      Gênero Preferido
        <select name="generoPreferido" id="" className='ml-4 mt-4 bg-gray-200 rounded-lg text-black'>
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
        <label className=''>
      2º Gênero Preferido
        <select name="generoPreferido2" id="" className='ml-4 mt-4 bg-gray-200 rounded-lg text-black'>
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
        <label>
      3º Gênero Preferido
        <select name="generoPreferido3" id="" className='ml-4 mt-4 bg-gray-200 rounded-lg text-black'>
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
      <label>
      Prefiro...
        <select name="tipoFilme" id="" className='ml-4 mt-4 bg-gray-200 rounded-lg text-black'>
          <option value="0" selected disabled>Selecionar...</option>
          <option value="Curtas">Curtas</option>
          <option value="Filmes">Filmes</option>
          <option value="MiniSerie">Mini Série</option>
          <option value="Serie">Série</option>
         </select>
             </label>
      <br />
      <button type="submit " className='mt-5 bg-gray-200 rounded-lg text-black p-2 hover:bg-gray-500'>Enviar</button>
    </form>
  );
};

export default Form;
