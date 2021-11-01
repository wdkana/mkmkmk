import type { NextApiRequest, NextApiResponse } from 'next'
import { Anonymous, Member } from '../../../../utils/types/users'
import Users from '../../../../utils/classes/users'
import connectDB from '../../../../utils/db_connect';
import Users_model from '../../../../models/users';
import CryptoJS from "crypto-js";
import requestIp from "request-ip";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        res.status(200).json({ status: 500, message: 'Ilegal Activity' })
    }else{

        let users: Users[] = []
    
        let role: string
        let ip: any = requestIp.getClientIp(req)
        let username: string = req.body.username
        let pin: number = req.body.pin
        
        let public_key = CryptoJS.AES.encrypt(username + "-" + pin, 'secret pub').toString()
        let private_key = CryptoJS.AES.encrypt(username + "-" + pin, 'secret priv').toString()
    
        username !== undefined ? role = 'member' : role = 'anonymous'
    
        const anonymous: Anonymous = new Users(ip, role, pin);
        const member: Member = new Users(ip, role, pin, username, public_key, private_key);
    
        role == "member" ? users.push(member) : users.push(anonymous);
    
        try {
            var user_save = new Users_model(users[0]);
            await user_save.save();
            res.status(200).json({
                "status": "OK",
                "payload": users,
                "message": "registered successfully"
            });
        } catch (error: any) {
            res.status(200).json({
                "status": "Error",
                "message": error.message
            })
        }
    }
}

export default connectDB(handler);