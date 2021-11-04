import type { NextApiRequest, NextApiResponse } from 'next'
import { Anonymous, Member } from '../../../../utils/types/users'
import Userjobs from '../../../../utils/classes/getjobs'
import connectDB from '../../../../utils/db_connect';
import Users_model from '../../../../models/users';
import User_job_model from '../../../../models/user_job';
import CryptoJS from "crypto-js"
import Users from '../../../../models/users';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "DELETE") {
        res.status(200).json({ status: 500, message: 'Ilegal Activity' })
    }else{ 
        try {
            let public_key = req.body.public_key
            const jobs = await User_job_model.deleteOne({public_key});
            res.status(200).json({
                "status": "OK",
                "payload": jobs,
                "message": "Delete jobs successfully"
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