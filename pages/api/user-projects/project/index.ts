import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../../utils/db_connect';
import get_data from '../../../../utils/services/user_projects/get_data';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
        switch (req.method) {
            case 'POST':
                await get_data(req.body, res);
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
