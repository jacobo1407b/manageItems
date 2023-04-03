// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import createClient from "service/externalReport";
import consumeReport from 'service/consumer';
import { createParams } from "utils";
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let urlBi = (process.env.NEXT_PRIVATE_ERP_URL ?? "") + (process.env.NEXT_PRIVATE_ERP_BI ?? "")
  let client = await createClient(urlBi);
  let params = createParams([{ name: "P_SUPPLIER_NUMBER", value: "XPRUEBA_JAJA" }])
  let result: any = await consumeReport(
    client,
    process.env.NEXT_PRIVATE_PATH_SUPPLIER ?? ""
    , params,
    {
      user: process.env.NEXT_PRIVATE_ERP_USER ?? "",
      password: process.env.NEXT_PRIVATE_ERP_PASS ?? ""
    })
  res.setHeader('Content-Type', 'text/xml');
  res.write(result);
  res.end();
}
