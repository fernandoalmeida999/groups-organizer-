import db from "../config/db.js";

// GET all users
export function getUsers(req, res) {
  const users = db.prepare("SELECT * FROM users").all();
  res.json(users);
}

// CREATE user
export function createUser(req, res) {
  const { name } = req.body;

  const stmt = db.prepare("INSERT INTO users (name) VALUES (?)");
  const info = stmt.run(name);

  res.json({ id: info.lastInsertRowid, name });
}
