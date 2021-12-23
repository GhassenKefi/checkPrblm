import User from '../models/user.js'


export const createUser = async (req, res) => {
console.log(req.body)
    try {
        let user = new User(req.body)
        await user.save()
        res.status(200).send({msg: "User created successfully", user})

    }catch(err){
        res.status(500).send({msg: "Server error"})
    }


}