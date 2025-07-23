import React, { useState } from 'react';

function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Integre com EmailJS, Firebase ou API
  };

  return (
    <main className="contato-container">
      <h1>Fale com a gente</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Mensagem"
          value={form.mensagem}
          onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default Contato;
