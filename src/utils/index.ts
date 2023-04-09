import { parseString } from 'xml2js';
import { v4 as uuidv4 } from 'uuid';
import * as XLSX from 'xlsx';

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

export function exportXlsx(data: any) {
    let uid: string = uuidv4();
    let getuid = uid.split("-")
    let fileName = `items - ${getuid[0]}`
    const worksheet = XLSX.utils?.json_to_sheet(data);
    const workbook = XLSX.utils?.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
}