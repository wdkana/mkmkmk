import { AnyObject } from 'mongoose';
import connectDB from '../../db_connect';
import User_follow_model from '../../../models/user_follows';
import User_model from '../../../models/users';

const followers = async (datas: AnyObject, res: any) => {
    try {
        const result = await User_follow_model.find({
            public_key_target: datas.public_key
        }).exec();

        const public_key_follower = result.map((data) => {
            return data.public_key
        });
        
        const user = await User_model.findOne({
            public_key: datas.public_key
        }).select({ 
            'username': 1, 
            '_id': 1, 
            'public_key': 1,
            'since': 1
        }).exec();

        const user_followers = await User_model.find({
            public_key: {
                '$in': public_key_follower
            }
        }).select({ 
            'username': 1, 
            '_id': 1, 
            'public_key': 1,
            'since': 1
        }).exec();

        return res.status(200).json({
            status: 'OK',
            message: 'get data followers success',
            payload: {
                user,
                followers: user_followers
            },
        });
    } catch (err: any) {
        return res.status(500).json({
            status: 500, 
            message: err.message 
        });
    }
}
export default connectDB(followers);