import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";
import { ILanguages } from "@/components/Languages/interface";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'GET') {
            return res.status(405).end();
        }

        await serverAuth(req);

        const { userId } = req.body;

        const languagesUser: ILanguages[] = await prismadb.userLanguages.findMany({
            where: {
                userId: userId,
            }
        });

        const languages = await prismadb.languages.findMany({
            where: {
                
            }
        });
        
        for (const languageUser of languagesUser) {
            const matchingLanguage = languages.find(
                    (language) => language.id === languageUser.languageId
                );
                if (matchingLanguage) {
                    languageUser.language = matchingLanguage.language;
            }
        }

        return res.status(200).json(languagesUser);
    } catch (error) {
        console.log(error);

        return res.status(500).end();
    }
}