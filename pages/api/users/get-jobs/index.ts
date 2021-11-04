import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../../utils/db_connect';
import User_job_model from '../../../../models/user_job';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        res.status(200).json({ status: 500, message: 'Ilegal Activity' })
    }else{ 
        try {
            const job = await User_job_model.findOne({public_key:req.body.public_key});
            res.status(200).json({
                "status": "OK",
                "payload": job,
                "message": "Get jobs successfully"
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