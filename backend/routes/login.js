import router from 'express';
import {User} from '../models/user';
import { joi } from "joi";
import { bcrypt } from "bcrypt";
express.Router();
router.post("/", async (req, res) => {
    try {
        const {error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).send({ messgae: "Invalid Email or Password"});
        }
        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        );
        if (!validPassword) {
            return res.status(401).send({message: "Invalid Email or Password"})
        }
        const token = user.generateAuthToken();
        res.status(200).send({data: token, messgae: "Logged in Successfully"})
    
    } catch (error) {
        res.status().send({ message: "Server Error"})
    }
})


const validate = (data) => {
    const schema = joi.object({
        email: joi.string().email().required().label("Email"),
        password: joi.string().required().label("Email")
    });

    return schema.validate(data);
}
module.exports = router;