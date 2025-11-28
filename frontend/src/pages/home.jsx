import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="container">
      <h2>Bem-vindo</h2>
      <p>Esta é a aplicação de gestão de alunos e grupos.</p>

      <div style={{ marginTop: 20 }}>
        <Link to="/students" className="btn">Ver Alunos</Link>
        <Link to="/groups" className="btn" style={{ marginLeft: 10 }}>Ver Grupos</Link>
      </div>
    </main>
  );
}
