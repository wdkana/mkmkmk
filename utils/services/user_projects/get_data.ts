import { AnyObject } from 'mongoose';
import connectDB from '../../db_connect';
import User_project_model from '../../../models/user_projects';

const get_data = async (datas: AnyObject, res: any) => {
    try {
        if (
            !datas.public_key && 
            !datas._id
        ) {
            return res.status(400).json({
                status: 400, 
                message: 'invalid parameter' 
            });
        }
        if (datas.public_key) {
            const result = await User_project_model.find({
                public_key: datas.public_key
            }).exec();
            
            return res.status(200).json({
                status: 'OK',
                message: 'get data success',
                payload: result
            });
        } else {
            const result_find: any = await User_project_model.findById({
                _id: datas._id
            }).exec();

            return res.status(200).json({
                status: 'OK',
                message: 'get data success',
                payload: result_find
            });
        }
    } catch (err: any) {
        return res.status(500).json({
            status: 500, 
            message: err.message 
        });
    }
}

export default connectDB(get_data);
