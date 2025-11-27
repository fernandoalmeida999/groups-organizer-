import itemModel from "../models/itemModel";

export const getItems = async (req, res) => {
    const db = req.db;
    const items = await itemModel.getAll(db);
    res.json(items);
};

export const createItem = async (req, res) => {
    const db = req.db;
    const {title, description, user_id} = req.body;

    await itemModel.create(db, {title, description, user_id});
    res.json({message: "Item created successfully"});
};