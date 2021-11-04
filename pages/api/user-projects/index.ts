import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../utils/db_connect';
import create from '../../../utils/services/user_projects/create';
import deleteFunction from '../../../utils/services/user_projects/delete';
import get_data from '../../../utils/services/user_projects/get_data';
import update from '../../../utils/services/user_projects/update';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
        switch (req.method) {
            case 'POST':
                await create(req.body, res);
                break;
            case 'GET':
                await get_data(req.query, res);
                break;
            case 'PUT':
                await update(req.body, res);
                break;
            case 'DELETE':
                await deleteFunction(req.body, res);
                break;
            default :
                res.status(400).json({ 
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
