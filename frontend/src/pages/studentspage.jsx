import { useEffect, useState } from "react";
import StudentCard from "../components/studentcard";
import Button from "../components/button";
import * as studentsService from "../services/studentsService";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", course: "" });
  const [error, setError] = useState(null);

  async function loadStudents() {
    setLoading(true);
    setError(null);
    try {
      const data = await studentsService.getAll();
      setStudents(data);
    } catch (err) {
      setError("Não foi possível carregar os alunos.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStudents();
  }, []);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editing) {
        await studentsService.update(editing.id, form);
        setEditing(null);
      } else {
        await studentsService.create(form);
      }
      setForm({ name: "", course: "" });
      await loadStudents();
    } catch (err) {
      setError("Erro ao guardar.");
    }
  }

  async function handleDelete(id) {
    if (!confirm("Eliminar este aluno?")) return;
    try {
      await studentsService.remove(id);
      setStudents(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      setError("Erro ao eliminar.");
    }
  }

  function handleEdit(student) {
    setEditing(student);
    setForm({ name: student.name, course: student.course ?? "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="container">
      <h2>Alunos</h2>

      <form onSubmit={handleSubmit} className="card form-card">
        <h3>{editing ? "Editar Aluno" : "Novo Aluno"}</h3>

        <label>
          Nome
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Curso
          <input name="course" value={form.course} onChange={handleChange} />
        </label>

        <div style={{ marginTop: 10 }}>
          <Button type="submit">{editing ? "Guardar" : "Criar"}</Button>
          {editing && <Button type="button" onClick={() => { setEditing(null); setForm({ name: "", course: "" }); }} className="muted">Cancelar</Button>}
        </div>
      </form>

      {loading && <p>Carregando...</p>}
      {error && <p className="error">{error}</p>}

      <section className="grid">
        {students.map(s => (
          <StudentCard key={s.id} student={s} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </section>
    </main>
  );
}
