import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container">
      <h2>404 — Página não encontrada</h2>
      <p>Volta para a <Link to="/">Home</Link>.</p>
    </main>
  );
}
