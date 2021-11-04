import type { NextApiRequest, NextApiResponse } from 'next';
import create from '../../../../utils/services/user_follows/create';
import unfollow from '../../../../utils/services/user_follows/delete';
import connectDB from '../../../../utils/db_connect';
import get_data_following from '../../../../utils/services/user_follows/following';
import get_data_followers from '../../../../utils/services/user_follows/followers';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
        switch (req.method) {
            case 'GET':
                    if (req.headers.action == 'following') {
                        await get_data_following(req.headers, res);
                    } else {
                        await get_data_followers(req.headers, res);
                    }
                break;
            case 'POST':
                    await create(req.body, res);
                break;
            case 'DELETE':
                    await unfollow(req.body, res);
                break;
            default:
                    res.status(500).json({ 
                        status: 500, 
                        message: 'Ilegal Activity' 
                    });
                break;
        }
    } catch (err: any) {
        return res.status(400).json({ 
            status: 400, 
            message: err.message 
        });
    }
}

export default connectDB(handler);