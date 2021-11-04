import { AnyObject } from 'mongoose';
import connectDB from '../../db_connect';
import User_follow_model from '../../../models/user_follows';
import User_model from '../../../models/users';

const following = async (datas: AnyObject, res: any) => {
    try {
        const result = await User_follow_model.find({
            public_key: datas.public_key
        }).exec();

        const public_key_following = result.map((data) => {
            return data.public_key_target
        });

        const user = await User_model.findOne({
            public_key: datas.public_key
        }).select({ 
            'username': 1, 
            '_id': 1, 
            'public_key': 1,
            'since': 1
        }).exec();

        const user_following = await User_model.find({
            public_key: {
                '$in': public_key_following
            }
        }).select({ 
            'username': 1, 
            '_id': 1, 
            'public_key': 1,
            'since': 1
        }).exec();

        return res.status(200).json({
            status: 'OK',
            message: 'get data following success',
            payload: {
                user,
                following: user_following
            }
        });
    } catch (err: any) {
        return res.status(500).json({
            status: 500, 
            message: err.message 
        });
    }
}
export default connectDB(following);