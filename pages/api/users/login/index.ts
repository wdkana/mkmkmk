import type { NextApiRequest, NextApiResponse } from 'next'
import { Anonymous, Member } from '../../../../utils/types/users'
import Users from '../../../../utils/classes/users'
import connectDB from '../../../../utils/db_connect';
import Users_model from '../../../../models/users';
import CryptoJS from "crypto-js"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        res.status(500).json({ status: 500, message: 'Ilegal Activity' })
    }else{

        let users: Users[] = []
   
        try {
            Users_model.findOne({ private_key: req.body.private_key }, (err : any, result: any) => {
                if(result !== null){
                    if( req.body.pin === result.pin ){
                        res.status(200).json({
                            "status": "OK",
                            "payload": result,
                            "message": "login successfully" 
                        })
                    }else{
                        res.status(200).json({
                            "status": "error",
                            "message": "private key atau pin tidak sesuai" 
                        })
                    }
                }else{
                    res.status(200).json({
                        "status": "error",
                        "message": "private key atau pin tidak sesuai" 
                    })
                }
            });
        } catch (error) {
            return res.status(500).json({
                "status": "Error",
                "message": error.message
            })
        }
    }
}

export default connectDB(handler);