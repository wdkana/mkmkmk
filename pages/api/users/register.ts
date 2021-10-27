import type { NextApiRequest, NextApiResponse } from 'next'
import { Anonymous, Member } from '../../../utils/types/users'
import Users from '../../../utils/classes/users'

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        res.status(500).json({ status: 500, message: 'Ilegal Activity' })
    }
    let users: Users[] = []

    let role: string
    let ip: string = req.body.ip
    let username: string = req.body.username

    username !== undefined ? role = 'member' : role = 'anonymous'

    const anonymous: Anonymous = new Users(ip, role);
    const member: Member = new Users(ip, role, username, 'pub - asdjjkasjdhajksd', 'priv - asdasdasd');

    role == "member" ? users.push(member) : users.push(anonymous);

    res.status(200).json({
        "status": "OK",
        "payload": users,
        "message": "registered successfully"
    });
}