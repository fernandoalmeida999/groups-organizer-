import api from "./api";

// Endpoints assumidos:
// GET /groups
// POST /groups
// PUT /groups/:id
// DELETE /groups/:id

export async function getAll() {
  try {
    return await api.get("/groups");
  } catch (err) {
    console.warn("groupsService.getAll fallback mock:", err.message);
    return [
      { id: 1, name: "Grupo A", students: [1, 2] },
      { id: 2, name: "Grupo B", students: [] },
    ];
  }
}

export async function getById(id) {
  return api.get(`/groups/${id}`);
}

export async function create(data) {
  return api.post("/groups", data);
}

export async function update(id, data) {
  return api.put(`/groups/${id}`, data);
}

export async function remove(id) {
  return api.del(`/groups/${id}`);
}
