const solicitud = require("./sol.json");
let sitios = solicitud.Sites;

function readAsignReq(sitios) {
    let arrayAssing = [];
    let idAsgin = 500000;

    for (let i = 0; i < sitios.length; i++) {
        const banks = sitios[i]?.Bank;
        for (let j = 0; j < banks?.length; j++) {
            const assigns = banks[j]?.Assing;
            for (let k = 0; k < assigns?.length; k++) {
                let asign = assigns[k];
                asign.id = idAsgin

                arrayAssing.push(asign);
                idAsgin = idAsgin + 5;
            }
        }
    }
    return arrayAssing
}

//276002
//1681495701731
let num = "0";


function isErpBanco(supplierNumber) {
    let conver = supplierNumber * 1;
    return conver === 0 ? false : true
}


console.log(isErpBanco(num))