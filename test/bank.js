const data = require("./report.json");
const sites = data.DATA_DS.PERFIL[0].SITE;
let numberIndex = 500000;



function getAsign(sites) {
    let arrayAssing = [];
    let bancos = [];


    for (let i = 0; i < sites.length; i++) {
        const site = sites[i];
        let arrBank = site.BANCO;
        for (let j = 0; j < arrBank?.length; j++) {
            let bank = arrBank[j];
            bank.Bu = site.PROCUREMENT_BU
            bank.Site = site.SITE
            bancos.push(bank)
        }
    }

    for (let i = 0; i < sites.length; i++) {
        const site = sites[i];
        let arrBank = site.BANCO;
        for (let j = 0; j < arrBank?.length; j++) {
            const bank = arrBank[j];
            let asign = bancos.filter((x) => x.EXT_BANK_ACCOUNT_ID === bank.EXT_BANK_ACCOUNT_ID);
            if (asign.length > 1) {
                for (let k = 0; k < asign.length; k++) {
                    const asign2 = asign[k];
                    if (asign2.Site !== site.SITE && asign2.Bu !== site.PROCUREMENT_BU) {
                        arrayAssing.push({
                            AccountIDErp: bank.EXT_BANK_ACCOUNT_ID,
                            Bu: site.PROCUREMENT_BU,
                            Site: site.SITE,
                            id: numberIndex,
                            operation: ""
                        })
                        numberIndex = numberIndex + 5;
                    }
                }
            }
        }
    }

    return arrayAssing;
}
console.log(getAsign(sites))

//BussinesUnit
//SupplierSite

/*PageModule.prototype.filterAsign = function (sites) {
    let arrayAssing = [];
    let numberIndex = 500000;

    for (let i = 0; i < sites.length; i++) {
      const site = sites[i];
      let arrBank = site.BANCO;
      for (let j = 0; j < arrBank?.length; j++) {
        const bank = arrBank[j];
        arrayAssing.push({
          AccountIDErp: bank.EXT_BANK_ACCOUNT_ID,
          Bu: site.PROCUREMENT_BU,
          Site: site.SITE,
          id: numberIndex
        })
        numberIndex = numberIndex + 5;
      }
    };
    
    return arrayAssing
  };*/