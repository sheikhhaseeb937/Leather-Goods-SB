import User from "../model/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


///signup controller
export const userCreate = async (req, res) => {
    try {
        const { name, email, password ,image} = req.body;

        /// Validate input
        if (!name || !email || !password || !image) {
            return res.status(400).json({
                message: "Please provide all required fields",
            });
        }
        //// Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        ////password hashing
        const hashedPassword = bcrypt.hashSync(password, 10);

        ////new user creation
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            image,
        });

        console.log(newUser);



        res.status(201).json({
            message: "User created successfully",
            newUser,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};


///login controller
export const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        //// Validate input
        if (!email || !password) {
            return res.status(400).json({
                message: "Please provide both email and password",
            });
        }
        ///// Validate email format
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User email not found",
            });
        }
        console.log(user)

        //// Validate password
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid password and email ",
            });
        }


        //jwt token 
        const tokenjwt = jwt.sign({
            userId: user._id,
            name: user.name,
            email: user.email
        }, process.env.JWT_SECRET, { expiresIn: '1h' });

// console.log(tokenjwt)

        // Successful login
        res.status(200).json({
            message: "Login successful",
            user,
            tokenjwt
        });

        
    } catch (error) {
        /// Handle errors
        return res.status(500).json({
            message: "An error occurred while logging in",
            error: error.message,
        })
    }
}