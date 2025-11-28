import db from "../config/db.js";

const UserModel = {
  getAll() {
    return db.prepare("SELECT * FROM users").all();
  },

  getById(id) {
    return db.prepare("SELECT * FROM users WHERE id = ?").get(id);
  },

  create({ name, email }) {
    const stmt = db.prepare(
      "INSERT INTO users (name, email) VALUES (?, ?)"
    );
    const result = stmt.run(name, email);
    return { id: result.lastInsertRowid, name, email };
  },

  update(id, { name, email }) {
    const stmt = db.prepare(
      "UPDATE users SET name = ?, email = ? WHERE id = ?"
    );
    stmt.run(name, email, id);
    return this.getById(id);
  },

  delete(id) {
    const stmt = db.prepare("DELETE FROM users WHERE id = ?");
    return stmt.run(id);
  },
};

export default UserModel;
