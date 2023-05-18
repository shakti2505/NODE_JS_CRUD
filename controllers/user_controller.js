import UserModel from "../models/users.js"



class UserController {

//Creating Data
    static createUser =  async (req, res)=>{
        // console.log("Create POST METHOD")
        // console.log(req.body)
       try {
        const{name, mobile, email} = req.body
        const user = new UserModel({
            name:name,
            mobile:mobile,
            email:email,
        })
        //saving user
        const result = await user.save()
        // console.log(result)
        res.redirect("/")
       } catch (error) {
        // console.log(error)
        
       }
    }
    
// Reading Data
    static getAlldata = async(req, res)=>{

        try {
            const result = await UserModel.find()
            // console.log(result)
            res.render("index", {data:result, title:"Home Page"})
        } catch (error) {
            console.log(error)
            
        }

    }


    static editUser = async (req, res)=>{
        // console.log(req.params.id)
        try {
        const result = await UserModel.findById(req.params.id)
        // console.log(result)
        res.render("edit", {title:"Edit", data:result})
        } catch (error) {
            
        }


    }

    //EDIT Item
    static editUserbyId = async(req, res)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await UserModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
        res.redirect("/")
    }


    //Delete Item
    static deleteUserbyId = async(req, res)=>{
        // console.log(req.params.id)
        try {
            const result = await UserModel.findByIdAndDelete(req.params.id)
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
        res.redirect("/")
    }

    
}




export default UserController;