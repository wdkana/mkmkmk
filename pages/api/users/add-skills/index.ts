import type { NextApiRequest, NextApiResponse } from 'next'
import Userskills from '../../../../utils/classes/add-skills'
import connectDB from '../../../../utils/db_connect';
import User_skill_model from '../../../../models/user_skill';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        res.status(200).json({ status: 500, message: 'Ilegal Activity' })
    }else{
        let users: Userskills[] = []

        let skill_id: number = req.body.skill_id
        let title: string = req.body.title
        let description: string = req.body.description
        let difficult: string = req.body.difficult

        const skills = new Userskills(skill_id, title, description, difficult)
        users.push(skills)

        try {
            var skill_save = new User_skill_model(users[0]);
            await skill_save.save();
            res.status(200).json({
                "status": "OK",
                "payload": users,
                "message": "Add skills successfully"
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