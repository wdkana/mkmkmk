import { AnyObject } from 'mongoose';
import connectDB from '../../../utils/db_connect';
import User_project_model from '../../../models/user_projects';

const deleteFunction = async (datas: AnyObject, res: any) => {
    try {
        if ( 
            !datas.public_key &&
            !datas._id
        ) {
            return res.status(400).json({
                status: 400,
                message: 'invalid request' 
            });
        }
        const result = await User_project_model.deleteOne({
            public_key: datas.public_key,
            _id: datas._id
        }).exec();

        return res.status(200).json({
            status: 'OK',
            message: 'get data success',
            payload: result
        });
    } catch (err: any) {
        return res.status(500).json({
            status: 500, 
            message: err.message 
        });
    }
}

export default connectDB(deleteFunction);
