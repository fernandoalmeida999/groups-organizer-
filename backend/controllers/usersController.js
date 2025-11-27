import userModel  from "../models/userModel";

export const getUsers = async (req, res) => {
    const db = req.db;
    const users = await userModel.getAll(db);
    res.json(users);
};

export const createUser = async (req, res) => {
    const db = req.db;
    const {name, email} = req.body;

    await userModel.create (db, {name, email});
    res.json({message: "User created successfully"});
}