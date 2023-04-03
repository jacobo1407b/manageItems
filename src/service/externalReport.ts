import { Client } from "soap";
var soap = require("soap")

function createClient(url: string): Promise<Client> {
    return new Promise((resolve, reject) => {
        soap.createClient(url, { forceSoap12Headers: true }, function (err:any, client:any) {
            if (client) {
                resolve(client)
            }
            if (err) {
                reject(err)
            }
        });
    })
};

export default createClient