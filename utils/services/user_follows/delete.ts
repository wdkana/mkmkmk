import { AnyObject } from 'mongoose';
import connectDB from '../../db_connect';
import User_follow_model from '../../../models/user_follows';

const unfollow = async (datas: AnyObject, res: any) => {
    try {
        const result = await User_follow_model.deleteOne({
            _id: datas._id,
            public_key: datas.public_key
        }).exec();

        return res.status(200).json({
            status: 'OK',
            message: 'unfollow success',
            payload: result,
        })
    } catch (err: any) {
        return res.status(500).json({
            status: 500, 
            message: err.message 
        });
    }
}
export default connectDB(unfollow);