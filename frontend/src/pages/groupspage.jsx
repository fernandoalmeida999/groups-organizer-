import { useEffect, useState } from "react";
import GroupCard from "../components/groupcard";
import Button from "../components/button";
import * as groupsService from "../services/groupsService";

export default function GroupsPage() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "" });
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState(null);

  async function loadGroups() {
    setLoading(true);
    setError(null);
    try {
      const data = await groupsService.getAll();
      setGroups(data);
    } catch (err) {
      setError("Não foi possível carregar os grupos.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadGroups();
  }, []);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editing) {
        await groupsService.update(editing.id, form);
        setEditing(null);
      } else {
        await groupsService.create(form);
      }
      setForm({ name: "" });
      await loadGroups();
    } catch {
      setError("Erro ao guardar.");
    }
  }

  async function handleDelete(id) {
    if (!confirm("Eliminar este grupo?")) return;
    try {
      await groupsService.remove(id);
      setGroups(prev => prev.filter(g => g.id !== id));
    } catch {
      setError("Erro ao eliminar.");
    }
  }

  function handleEdit(group) {
    setEditing(group);
    setForm({ name: group.name });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="container">
      <h2>Grupos</h2>

      <form onSubmit={handleSubmit} className="card form-card">
        <h3>{editing ? "Editar Grupo" : "Novo Grupo"}</h3>

        <label>
          Nome do Grupo
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <div style={{ marginTop: 10 }}>
          <Button type="submit">{editing ? "Guardar" : "Criar"}</Button>
          {editing && <Button type="button" onClick={() => { setEditing(null); setForm({ name: "" }); }} className="muted">Cancelar</Button>}
        </div>
      </form>

      {loading && <p>Carregando...</p>}
      {error && <p className="error">{error}</p>}

      <section className="grid">
        {groups.map(g => (
          <GroupCard key={g.id} group={g} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </section>
    </main>
  );
}
