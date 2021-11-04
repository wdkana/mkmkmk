import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../../utils/db_connect';
import Users_model from '../../../../models/users';
import User_job_model from '../../../../models/user_job';
import User_skill_model from '../../../../models/user_skill';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        res.status(200).json({ status: 500, message: 'Ilegal Activity' })
    }else{ 
        try {
            const job = await User_job_model.findOne({public_key:req.body.public_key});
            if( job !== null){
                const profile = await Users_model.findOne({public_key: job.public_key});
                const skills = await User_skill_model.find({skill_id: job.skills});
                const jobs = (job.title)
                res.status(200).json({
                    "status": "OK",
                    "payload": profile,jobs,skills,
                    "message": "Get jobs successfully"
                });
            }
        } catch (error: any) {
            res.status(200).json({
                "status": "Error",
                "message": error.message
            })
        }
    }
}

export default connectDB(handler);