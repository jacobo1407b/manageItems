//import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import multer from "multer"
import path from "path";
import { uploadFile } from "service/cloudStorage";

const upload = multer();

const apiRoute = nextConnect({
    onError(error, req, res: any) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res: any) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(upload.single("image"));

apiRoute.post(async (req: any, res: any) => {
    try {
        let filename = req.query.filename
        let file = req.file.buffer
        let size = req.file.size * 1
        let content = req.file.mimetype
        let ext = path.extname(req.file.originalname);
        console.log(await uploadFile(`${filename}${ext}`, size, file, content))
        res.status(200).json({ status: 'success', error: false, msg: "" });
    } catch (error: any) {
        res.status(500).json({ status: 'error', error: true, msg: error.toString() });
    }
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};