export default function GroupCard({ group, onDelete, onEdit }) {
  if (!group) return null;

  return (
    <article className="card">
      <h3>{group.name}</h3>
      <p><strong>ID:</strong> {group.id}</p>
      <p><strong>Students:</strong> {group.students ? group.students.length : 0}</p>
      <div className="card-actions">
        <button onClick={() => onEdit(group)}>Editar</button>
        <button onClick={() => onDelete(group.id)}>Eliminar</button>
      </div>
    </article>
  );
}
