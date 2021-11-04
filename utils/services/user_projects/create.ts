import { AnyObject } from 'mongoose';
import connectDB from '../../../utils/db_connect';
import User_projects from '../../classes/user_projects';
import { User_project_create } from '../../types/user_projects';
import User_project_model from '../../../models/user_projects';
import User_model from '../../../models/users';

const create = async (datas: AnyObject, res: any) => {
    try {
        const user_project_create: User_project_create = new User_projects(
            datas.public_key,
            datas.title,
            datas.description,
            datas.link,
            datas.folder_id,
            datas.status
        );

        const result: any = await User_model.findOne({ 
            public_key: datas.public_key 
        }).exec();

        if (!result) {
            return res.status(404).json({ 
                status: 404,
                message: 'invalid request',
            });
        }

        const save_user_project = new User_project_model(user_project_create);
        await save_user_project.save();
        
        return res.status(200).json({
            status: 'OK',
            message: 'create data success',
            payload: save_user_project,
        });

    } catch (err: any) {
        return res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
};

export default connectDB(create);
