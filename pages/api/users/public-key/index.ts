import type { NextApiRequest, NextApiResponse } from 'next';
import Users from '../../../../utils/classes/users';
import connectDB from '../../../../utils/db_connect';
import Users_model from '../../../../models/users';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        res.status(200).json({ status: 500, message: 'Ilegal Activity' })
    }else{
   
        try {
            Users_model.findOne({ public_key: req.body.public_key }, (err : any, result: any) => {
                if(result !== null){
                    res.status(200).json({
                        "status": "OK",
                        "message": "public key valid" 
                    })
                }else{
                    res.status(200).json({
                        "status": "error",
                        "message": "public key tidak valid" 
                    })
                }
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