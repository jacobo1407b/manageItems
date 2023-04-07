import { parseString } from 'xml2js';
type Auth = {
    user: string,
    password: string
}

type ParamReport = {
    name: string,
    value: string
}
export function createParams(params: Array<ParamReport>) {
    let parameterNameValues: any = [];
    params.map((x) => {
        return parameterNameValues.push({
            item: {
                UIType: "Text",
                dataType: "Text",
                name: x.name,
                values: {
                    item: x.value
                }
            }
        })
    });

    return parameterNameValues;
}

export function parseJson(xml: string): Promise<any> {
    return new Promise((resolve, reject) => {
        parseString(xml, { mergeAttrs: true, ignoreAttrs: true, explicitArray: false }, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    });
}

export function getCredentials(): Auth {
    return {
        user: process.env.NEXT_PRIVATE_ERP_USER ?? "",
        password: process.env.NEXT_PRIVATE_ERP_PASS ?? ""
    }
}