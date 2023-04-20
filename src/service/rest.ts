import axios from "axios"
import { getCredentials } from 'utils'

export const createApi = (url: string) => {
    return new Proxy({}, {
        get(target, key) {
            console.log(key)
            switch (key) {
                case "getlovs":
                    return async function (lang = "US") {
                        let response = await callRest(`${url}/getlovs?lang=${lang}`);
                        console.log(response)
                        return response.data;
                    }
                case "items":
                    return async function (lang = "US", itm: string, desc: string) {
                        let response = await callRest(`${url}/items?lang=${lang}&itm=${itm}&desc=${desc}`);
                        console.log(response)
                        return response.data;
                    }
                case "getattachmet":
                    return async function (lang = "US", itm: string, org: string) {
                        let response = await callRest(`${url}/getattachmet?org=${org}&itm=${itm}`);
                        console.log(response)
                        return response.data;
                    }
                default:
                    console.log(key)
                    throw "Operation not found";
            }

        }
    })
}

async function callRest(url: string) {
    return await axios.get(url)
}

export const getChildV2 = (org: string, item: string): Promise<ItemResponse | null> => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.NEXT_PRIVATE_ERP_URL}/fscmRestApi/resources/11.13.18.05/itemsV2?q=ItemNumber=${item};OrganizationCode=${org}`, {
            auth: {
                username: getCredentials().user,
                password: getCredentials().password
            }
        })
            .then(res => {
                let ret = res.data.items.length === 0 ? null : res.data.items[0];
                resolve(ret)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

/*
let api = createApi("/api")

// 'get' request to https://swapi.co/api/people
let people = await api.people()

// 'get' request to https://swapi.co/api/people/1
let person = await api.people(1)
*/