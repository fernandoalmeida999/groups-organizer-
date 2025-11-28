import api from "./api";

// Endpoints assumidos:
// GET /students
// POST /students
// PUT /students/:id
// DELETE /students/:id

export async function getAll() {
  try {
    return await api.get("/students");
  } catch (err) {
    // fallback mock se API não estiver a correr
    console.warn("studentsService.getAll fallback mock:", err.message);
    return [
      { id: 1, name: "Alice Silva", course: "Matemática" },
      { id: 2, name: "Bruno Costa", course: "Informática" },
    ];
  }
}

export async function getById(id) {
  return api.get(`/students/${id}`);
}

export async function create(data) {
  return api.post("/students", data);
}

export async function update(id, data) {
  return api.put(`/students/${id}`, data);
}

export async function remove(id) {
  return api.del(`/students/${id}`);
}
