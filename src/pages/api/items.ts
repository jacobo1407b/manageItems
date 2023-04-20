// Next.js API route support: https://nextjs.org/docs/api-r;outes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import createClient from "service/externalReport";
import consumeReport from 'service/consumer';
import { createParams } from "utils";

type Data = {
    name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { query: { lang, itm, desc } } = req;
    let valueQuery: any = lang ?? "US";
    let queryItm: any = itm ?? "";
    let queryDesc: any = desc ?? "";
    let urlBi = (process.env.NEXT_PRIVATE_ERP_URL ?? "") + (process.env.NEXT_PRIVATE_ERP_BI ?? "")
    let client = await createClient(urlBi);
    let params = createParams([{ name: "LANG", value: valueQuery }, { name: "P_DESC", value: queryDesc }, { name: "P_ITEM", value: queryItm }])
    let result: any = await consumeReport(client, process.env.NEXT_PRIVATE_PATH_ITEMS ?? "", params)
    let resolveResponse = typeof result.DATA_DS?.ITEMS === 'object' ? [result.DATA_DS?.ITEMS] : result.DATA_DS?.ITEMS
    res.json(resolveResponse ?? []);
}
//AS85022