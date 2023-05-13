import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '../../lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PUT') {
        return res.status(405).end();
    }

    try {
        const { currentUser } = await serverAuth(req, res);

        const { username } = req.body;

        const existingUserByUserName = await prismadb.user.findUnique({
            where: {
                username: username,
            }
        });

        if (existingUserByUserName) {
            return res.status(422).json({ error: 'User Name already taken' });
        }

        const setUserName = await prismadb.user.update({
            where: {
                email: currentUser.email as string
            },
            data: {
                username: username,
            }
        });


        return res.status(200).json(setUserName);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}