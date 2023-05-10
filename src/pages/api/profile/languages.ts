import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";
import { ILanguages } from '../../../components/Languages/interface'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'GET') {
            return res.status(405).end();
        }

        const { currentUser } = await serverAuth(req);

        const languagesUser = await prismadb.userLanguages.findMany({
            where: {
                userId: currentUser.id
            }
        }) as ILanguages[];
        
        if (languagesUser.length === 0 ) {
            return res.status(200).json(languagesUser);
        }

        for (const languageUser of languagesUser) {
            const languages = await prismadb.languages.findFirst({
                where: {
                    id: languageUser.languageId
                }
            });
           
            languageUser.language = languages?.language;
        }

        return res.status(200).json(languagesUser);
    } catch (error) {
        console.log(error);

        return res.status(500).end();
    }
}