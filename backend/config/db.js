import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

const dbPath = path.resolve("backden/database/database.sqlite");

const initDb = async () => {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  console.log ("swlite database connected :" ,dbPath);
  return db;
};

export default initDb;