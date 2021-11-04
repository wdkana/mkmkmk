import { AnyObject } from 'mongoose';
import connectDB from '../../../utils/db_connect';
import { User_project_update } from '../../types/user_projects';
import User_projects from '../../classes/user_projects';
import User_project_model from '../../../models/user_projects';


const update = async (datas: AnyObject, res: any) => {
    try {
        const data_user : User_project_update = new User_projects(
            datas.public_key,
            datas.title,
            datas.description,
            datas.link,
            datas.folder_id,
            datas.status,
            datas._id
        );
        
        const result = await User_project_model.findOneAndUpdate({
            public_key: data_user.public_key,
            _id: data_user._id
        },{
            title: data_user.title,
            description: data_user.description,
            link: data_user.link,
            folder_id: data_user.folder_id,
            status: data_user.status
        },{
            new: true,
            upsert: true
        }).exec();

        return res.status(200).json({
            status: 'OK',
            message: 'update data success',
            payload: result
        });
    } catch (err: any) {
        return res.status(400).json({
            status: 400, 
            message: err.message 
        });
    }
}

export default connectDB(update);
