// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import createClient from "service/externalReport";
import consumeReport from 'service/consumer';
import { createParams } from "utils";
type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { query: { lang } } = req;
  let valueQuery: any = lang;

  let urlBi = (process.env.NEXT_PRIVATE_ERP_URL ?? "") + (process.env.NEXT_PRIVATE_ERP_BI ?? "")
  let client = await createClient(urlBi);
  let params = createParams([{ name: "LANG", value: valueQuery ?? "US" }])
  let result: any = await consumeReport(client, process.env.NEXT_PRIVATE_PATH_LOV ?? "", params);
  res.json(result.DATA_DS?.LOVS ?? []);
}
