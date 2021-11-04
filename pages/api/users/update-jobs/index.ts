import type { NextApiRequest, NextApiResponse } from 'next'
import { Anonymous, Member } from '../../../../utils/types/users'
import Userjobs from '../../../../utils/classes/addjobs'
import connectDB from '../../../../utils/db_connect';
import Users_model from '../../../../models/users';
import User_job_model from '../../../../models/user_job';
import CryptoJS from "crypto-js"
import Users from '../../../../models/users';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "PUT") {
        res.status(200).json({ status: 500, message: 'Ilegal Activity' })
    }else{ 
        try {
            const jobs = await User_job_model.findOne({public_key:req.body.public_key});
            Object.assign(jobs, req.body);
            jobs.save();
            res.status(200).json({
                "status": "OK",
                "payload": jobs,
                "message": "Update jobs successfully"
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