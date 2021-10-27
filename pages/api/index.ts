import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'
// import UserBlock from '../../utils/classes/userBlock';
// import UserChain from '../../utils/classes/usersChain';
import Registration, { Chain } from '../../utils/classes/mejakerja'

export default (req: NextApiRequest, res: NextApiResponse) => {
  let ip: string = `172.153.111.x - ${Math.floor(Math.random() * 6) + Math.random()}`
  
  const dea = new Registration()
  const rifki = new Registration()
  
  dea.enterSystem(ip, rifki.publicKey)
  dea.enterSystem(ip, dea.publicKey)

  res.status(200).json({
    "payload": Chain.instance
  });
}