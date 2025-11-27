export default function StudentCard({ student, onDelete, onEdit }) {
  if (!student) return null;

  return (
    <article className="card">
      <h3>{student.name}</h3>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Course:</strong> {student.course ?? "—"}</p>
      <div className="card-actions">
        <button onClick={() => onEdit(student)}>Editar</button>
        <button onClick={() => onDelete(student.id)}>Eliminar</button>
      </div>
    </article>
  );
}
