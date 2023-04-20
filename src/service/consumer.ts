var soap = require("soap")
import { parseJson, getCredentials } from "utils";
type Auth = {
    user: string,
    password: string
}

export default function consumeReport(client: any, reportPath: string, params: any) {
    let args = {
        reportRequest: {
            attributeFormat: 'xml', reportAbsolutePath: reportPath, sizeOfDataChunkDownload: "-1",
            parameterNameValues: {
                item: params
            }
        }
    }

    return new Promise((resolve, reject) => {
        client.setSecurity(new soap.BasicAuthSecurity(getCredentials().user, getCredentials().password));
        client.runReport(args, async function (err: any, result: any) {
            if (err) {
                reject(err)
            } else {
                resolve(await parseJson(Buffer.from(result.runReportReturn.reportBytes, 'base64').toString('ascii')))
            }
        });
    })
}
//2064