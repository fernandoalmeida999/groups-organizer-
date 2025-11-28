import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../database/database.sqlite");

// Abre/cria a base de dados
const db = new Database(dbPath);

console.log("📦 SQLite ligado via better-sqlite3:", dbPath);

export default db;
