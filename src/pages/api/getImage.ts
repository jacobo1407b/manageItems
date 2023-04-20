import type { NextApiRequest, NextApiResponse } from 'next';
import { getFile } from "service/cloudStorage";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { query } = req;
        let fileName: any = query.filename;
        let bufferFile = await getFile(fileName);
        let tx = Buffer.from(bufferFile.data).toString('base64')
        let finFile = `data:${bufferFile.contenType};base64,${tx}`;
        res.status(200).json({ file: finFile })
    } catch (error: any) {
        res.status(500).json({ msg: error.toString(), error: true });
    }
}
