import React from 'react';

// Simulação de artigos estáticos
const posts = [
  {
    id: 1,
    title: "Como o Gueitebol fortalece o vínculo entre gerações",
    summary: "Descubra como o esporte promove interação social e saúde em todas as idades.",
    date: "20/07/2025",
    url: "/blog/geracoes"
  },
  {
    id: 2,
    title: "Resultados do Campeonato Brasileiro 2025",
    summary: "Confira os destaques, clubes vencedores e fotos do evento nacional.",
    date: "10/08/2025",
    url: "/blog/campeonato-2025"
  }
];

function Blog() {
  return (
    <main className="blog-container">
      <h1>Notícias e Artigos</h1>
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p><em>{post.date}</em></p>
          <p>{post.summary}</p>
          <a href={post.url}>Leia mais</a>
        </div>
      ))}
    </main>
  );
}

export default Blog;
