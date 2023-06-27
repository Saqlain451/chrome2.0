import bookmark from "../model/bookmarkSchema.js";

const createBookmark = async (req, res) => {
    const {mail,name, link, icon, type } = req.body
    if (!mail || !name || !link || !icon || !type) {
        return res.status(501).json({ err: "This feild can not be empty" })
    }
    try {
        const existName = await bookmark.findOne({mail,name,type});
        const newData = new bookmark({ ...req.body });
        !existName && await newData.save();
        existName ? res.status(501).json({ err: "It is already Added" }) : res.status(201).json({ msg: "Bookmark added" })
    } catch (error) {
        console.log(error);
    }
}


const updateBookmark = async (req, res) => {
    const { id } = req.params;

    try {
        await bookmark.updateOne({ _id: id }, { $set: { ...req.body } })
        res.status(301).json({ msg: "Update Done" })
    } catch (error) {
        res.status(501).json({ err: "Not updated" });
    }
}


const getAllData = async (req, res) => {
    const {mail,type} = req.params
    try {

        const allData = await bookmark.find({mail,type})
        res.status(201).json({ success: allData })

    } catch (error) {
        res.status(401).json({ err: "No data Found" })
    }
}

const delData = async (req, res) => {
    const { id } = req.params;
    try {
        await bookmark.deleteOne({ _id: id })
        res.status(301).json({ msg: "Deleted" })
    } catch (error) {
        res.status(401).json({ err: "Not deleted" })
        console.log(error)
    }
}

export { createBookmark, updateBookmark, getAllData, delData };