var soap = require("soap")

type Auth = {
    user: string,
    password: string
}

export default function consumeReport(client: any, reportPath: string, params: any, credentials: Auth) {
    let args = {
        reportRequest: {
            attributeFormat: 'xml', reportAbsolutePath: reportPath, sizeOfDataChunkDownload: "-1",
            parameterNameValues: params
        }
    }
    return new Promise((resolve, reject) => {
        client.setSecurity(new soap.BasicAuthSecurity(credentials.user, credentials.password));
        client.runReport(args, function (err: any, result: any) {
            if (err) {
                reject(err)
            } else {
                resolve(Buffer.from(result.runReportReturn.reportBytes, 'base64').toString('ascii'))
            }
        });
    })
}