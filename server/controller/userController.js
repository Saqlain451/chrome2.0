import bcrypt from 'bcryptjs';
import users from "../model/users.js";

const createUser = async (req, res) => {
    const { name, mail, pass, cpass } = req.body;
    if (!name || !mail || !pass || !cpass) {
        return res.status(501).json({ err: "Feild can not be empty" })
    }
    const hashedPassword = await bcrypt.hash(pass, 12);
    const hashedcPassword = await bcrypt.hash(cpass, 12);
    const newData = new users({ ...req.body, pass: hashedPassword, cpass: hashedcPassword })
    try {
        const existUser = await users.findOne({ mail })
        if (existUser) {
            return res.status(501).json({ err: "User is already registered" })
        } else if (pass !== cpass) {
            return res.status(501).json({ err: "Password and Confirm password must be same" })
        }
        await newData.save();
        res.status(201).json({ msg: "Registed" })
    } catch (error) {
        res.status(401).json({ err: "Not Registered" })
    }
}

//  *for log in creating function  ----->

const checkUser = async (req, res) => {
    const { mail, pass } = req.body;
    if (!mail || !pass) {
        return res.status(501).json({ err: "Field can not be empty" })
    }
    try {
        const chekMail = await users.findOne({ mail })
        const isPassMatch = await bcrypt.compare(pass, chekMail.pass);
        if (chekMail && isPassMatch) {
            res.status(201).json({ msg: "Log in Successfull", userDetails: chekMail })
        } else {
            res.status(501).json({ err: "Invalid Credential" })
        }
    } catch (error) {
        res.status(501).json({ err: "User is not registered" })
    }
}

export { createUser, checkUser };