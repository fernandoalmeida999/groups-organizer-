export default {
    async getAll(db) {
        return db.all("select * from items");
    },

    async getByID(db, id){
        return db.get("select * from items where id = ?", [id]);
    },

    async create(db, {title, description, user_id}){
        return db.run(
            "insert into items (title, description, user_id) values (?, ?, ?)",
            [title, description, user_id]
        );
    }
};