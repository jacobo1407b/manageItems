// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import createClient from "service/externalReport";
import consumeReport from 'service/consumer';
import { createParams } from "utils";
type Data = {
    name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { query: { lang, itm, desc, keyword } } = req;
    let valueQuery: any = lang ?? "US";
    let queryItm: any = itm ?? "";
    let queryDesc: any = desc ?? "";
    let queryKeywds: any = keyword ?? "";

    let urlBi = (process.env.NEXT_PRIVATE_ERP_URL ?? "") + (process.env.NEXT_PRIVATE_ERP_BI ?? "")
    let client = await createClient(urlBi);
    let params = createParams([{ name: "LANG", value: valueQuery }, { name: "P_DESC", value: queryDesc }, { name: "P_ITEM", value: queryItm }])
    let result: any = await consumeReport(client, process.env.NEXT_PRIVATE_PATH_ITEMS ?? "", params)
    res.json(result.DATA_DS?.ITEMS ?? []);
}
//AS85022