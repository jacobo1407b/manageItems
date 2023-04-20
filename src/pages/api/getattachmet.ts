import type { NextApiRequest, NextApiResponse } from 'next';
import createClient from "service/externalReport";
import consumeReport from 'service/consumer';
import { createParams } from "utils";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { query: { org, itm } } = req;
        let Org: any = org;
        let Itm: any = itm

        let urlBi = (process.env.NEXT_PRIVATE_ERP_URL ?? "") + (process.env.NEXT_PRIVATE_ERP_BI ?? "")
        let client = await createClient(urlBi);
        let params = createParams([{ name: "ORG_ID", value: Org }, { name: "ITEM_ID", value: Itm }])
        let result: any = await consumeReport(client, process.env.NEXT_PRIVATE_PATH_ATTCH ?? "", params)
        let attach = result.DATA_DS?.ATTACHED ?? [];
        res.json({ error: false, msg: "success", data: attach })
    } catch (error: any) {
        res.status(500).json({ error: true, msg: error.toString(), data: null })
    }
}
/**
 *     AND FAD.PK1_VALUE = :ORG_ID
    AND FAD.PK2_VALUE = :ITEM_ID
 */