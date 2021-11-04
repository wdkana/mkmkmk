import type { NextApiRequest, NextApiResponse } from 'next'
import Userjobs from '../../../../utils/classes/addjobs'
import connectDB from '../../../../utils/db_connect';
import User_job_model from '../../../../models/user_job';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        res.status(200).json({ status: 500, message: 'Ilegal Activity' })
    }else{
        let users: Userjobs[] = []

        let public_key: string = req.body.public_key
        let title: string = req.body.title
        let skills: number = req.body.skills
        let skill_id = req.body.skill_id

        const jobs = new Userjobs(public_key, title, skills, skill_id)
        users.push(jobs)

        try {
            var job_save = new User_job_model(users[0]);
            await job_save.save();
            res.status(200).json({
                "status": "OK",
                "payload": users,
                "message": "Add jobs successfully"
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