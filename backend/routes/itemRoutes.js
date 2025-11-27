import express from "express";
import db from "../config/db.js";

const router = express.Router();

// GET all items
router.get("/", (req, res) => {
  const items = db.prepare("SELECT * FROM items").all();
  res.json(items);
});

// POST create item
router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const stmt = db.prepare("INSERT INTO items (name) VALUES (?)");
  const info = stmt.run(name);

  res.json({ id: info.lastInsertRowid, name });
});

// DELETE item
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const stmt = db.prepare("DELETE FROM items WHERE id = ?");
  stmt.run(id);

  res.json({ success: true });
});

export default router;
