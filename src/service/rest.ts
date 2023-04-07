export const createApi = (url: string) => {
    return new Proxy({}, {
        get(target, key) {
            console.log(key)
            switch (key) {
                case "getlovs":
                    return async function (lang = "US") {
                        const response = await fetch(`${url}/getlovs?lang=${lang}`);
                        console.log(response)
                        return response.json();
                    }
                case "items":
                    return async function (lang = "US", itm: string, desc: string) {
                        const response = await fetch(`${url}/items?lang=${lang}&itm=${itm}&desc=${desc}`);
                        console.log(response)
                        return response.json();
                    }
                default:
                    return null
            }

        }
    })
}

/*
let api = createApi("/api")

// 'get' request to https://swapi.co/api/people
let people = await api.people()

// 'get' request to https://swapi.co/api/people/1
let person = await api.people(1)*/