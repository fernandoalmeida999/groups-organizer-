import db from "../config/db.js";

const ItemModel = {
  getAll() {
    return db.prepare("SELECT * FROM items").all();
  },

  getById(id) {
    return db.prepare("SELECT * FROM items WHERE id = ?").get(id);
  },

  create({ name, description }) {
    const stmt = db.prepare(
      "INSERT INTO items (name, description) VALUES (?, ?)"
    );
    const result = stmt.run(name, description);
    return { id: result.lastInsertRowid, name, description };
  },

  update(id, { name, description }) {
    const stmt = db.prepare(
      "UPDATE items SET name = ?, description = ? WHERE id = ?"
    );
    stmt.run(name, description, id);
    return this.getById(id);
  },

  delete(id) {
    const stmt = db.prepare("DELETE FROM items WHERE id = ?");
    return stmt.run(id);
  },
};

export default ItemModel;
