export default {
    async getAll(){
        return db.all("select * from useres ");
    },

    async getByID(db, id){
        return db.get("select * from useres where id = ?", [id]);
    },

    async create(db, {name, email}) {
        return db.run(
            "insert into users (name, email) values (?, ?)",
            [name, email]
        );
    }
        
    };
