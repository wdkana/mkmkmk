import { AnyObject } from 'mongoose';
import connectDB from '../../db_connect';
import User_follow_model from '../../../models/user_follows';
import { User_follows } from '../../../utils/types/user_follows';
import User_follow_class from '../../../utils/classes/user_follows';

const create = async (datas: AnyObject, res: any) => {
    try {
        const data_user : User_follows = new User_follow_class(
            datas.public_key,
            datas.public_key_target
        );
        const find = await User_follow_model.findOne({
            public_key: datas.public_key,
            public_key_target: datas.public_key_target
        }).exec();
        
        if (find) {
            return res.status(400).json({
                status: 400,
                message: 'invalid request'
            });
        }

        const result = new User_follow_model(data_user);
        await result.save();

        return res.status(200).json({
            status: 'OK',
            message: 'following success',
            payload: result
        });
    } catch (err: any) {
        return res.status(500).json({
            status: 500, 
            message: err.message 
        });
    }
}
export default connectDB(create);