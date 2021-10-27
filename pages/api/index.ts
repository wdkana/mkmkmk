import type { NextApiRequest, NextApiResponse } from 'next'
import { Anonymous, Member } from '../../utils/types/users'
import Users from '../../utils/classes/users'

export default (req: NextApiRequest, res: NextApiResponse) => {
    let users: Users[] = []
    
    const anonymous: Anonymous = new Users('192.168.1.1', 'anonymous');
    const member: Member = new Users('192.122.133.1', 'member', 'dea asd', 'pub - asdjjkasjdhajksd', 'priv - asdasdasd');
    
    users.push(anonymous)
    users.push(member)

    res.status(200).json({
        "payload": users
    });
}