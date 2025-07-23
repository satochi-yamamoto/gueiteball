import React from 'react';

const clubes = [
  { nome: 'Clube da Cidade Ibirapuera', cidade: 'São Paulo', estado: 'SP' },
  { nome: 'Estádio Toru Hondo', cidade: 'São Paulo', estado: 'SP' },
  { nome: 'Associação Nipo Londrina', cidade: 'Londrina', estado: 'PR' },
];

function Clubes() {
  return (
    <main className="clubes-container">
      <h1>Clubes Cadastrados</h1>
      <ul>
        {clubes.map((clube, index) => (
          <li key={index}>
            <strong>{clube.nome}</strong> - {clube.cidade}/{clube.estado}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Clubes;
