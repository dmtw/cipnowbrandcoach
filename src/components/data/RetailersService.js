(function () {
    'use strict';

    angular.module('app')
        .service('retailersService', [
            retailersService
        ]);

    function retailersService() {
        var allRetailersBC = [{code: 3, name: 'ASB SPORT SPERK'},
            {code: 26, name: 'QUELLE GMBH'},
            {code: 39, name: 'WOEHRL'},
            {code: 43, name: 'BREUNINGER'},
            {code: 1000095, name: 'DOERRZAPF LEDER-SPORT'},
            {code: 1000098, name: 'GEORG HARTMANN'},
            {code: 1000099, name: 'SPORT LOYDL'},
            {code: 1000101, name: 'BIERLEIN GMBH'},
            {code: 1000103, name: 'NEUMUELLER'},
            {code: 1000105, name: 'SPORTHAUS EISERT GMBH'},
            {code: 1000106, name: 'SCHUHHAUS RIEBEL'},
            {code: 1000108, name: 'SPORT-MODE SCHROMM GMBH'},
            {code: 1000110, name: 'SPORTHAUS BRAEUNLEIN'},
            {code: 1000114, name: 'SCHUH-WEIMER'},
            {code: 1000117, name: 'SCHUH-SPORT-KEILHOLZ'},
            {code: 1000120, name: 'SPORT FRANK'},
            {code: 1000121, name: 'SPORT RIEBEL'},
            {code: 1000123, name: 'LEITHNER GMBH & CO.KG'},
            {code: 1000126, name: 'SPORTHAUS FEHR GMBH'},
            {code: 1000133, name: 'EBERHARD WIGNER KG'},
            {code: 1000137, name: 'FRANK'},
            {code: 1000138, name: 'SCHUHHAUS BOLLMANN'},
            {code: 1000140, name: 'SPORT GEYER'},
            {code: 1000141, name: 'ORTLAM SCHUH + SPORT'},
            {code: 1000144, name: 'SPORT KOPP'},
            {code: 1000145, name: 'SPORT ERDL'},
            {code: 1000146, name: 'MAURER-CENTER GMBH'},
            {code: 1000148, name: 'FRIEDRICH MUELLER'},
            {code: 1000149, name: 'SPORT MEYER, BRUEMMER &'}];
        var allRetailers = [
            {
                "code": 3,
                "name": "ASB SPORT SPERK",
                "email": " info@sport-sperk.de",
                "homepage": "http://www.sport-sperk.de",
                "salesOfficename": "GERMANY - SOUTH",
                "branch": "FALSCH",
                "buyingGroupname": "SPORT 2000",
                "buyingGroupH2name": "SPORT 2000"
            },
            {
                "code": 26,
                "name": "QUELLE GMBH",
                "email": "",
                "homepage": "http://www.quelle.de",
                "salesOfficename": "AAM D",
                "branch": "FALSCH",
                "buyingGroupname": "No information",
                "buyingGroupH2name": "NOT DEFINED"
            },
            {
                "code": 39,
                "name": "WOEHRL",
                "email": "info@woehrl.de",
                "homepage": "http://www.woehrl.de/",
                "salesOfficename": "GERMANY - SOUTH",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT D"
            },
            {
                "code": 43,
                "name": "BREUNINGER",
                "email": "",
                "homepage": "",
                "salesOfficename": "GERMANY - SOUTH",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT D"
            },
            {
                "code": 1000095,
                "name": "DOERRZAPF LEDER-SPORT",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT SYSTEMPARTNER"
            },
            {
                "code": 1000098,
                "name": "GEORG HARTMANN",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "NOT ASSIGNED",
                "buyingGroupH2name": "NOT ASSIGNED"
            },
            {
                "code": 1000099,
                "name": "SPORT LOYDL",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "NOT ASSIGNED",
                "buyingGroupH2name": "NOT ASSIGNED"
            },
            {
                "code": 1000101,
                "name": "BIERLEIN GMBH",
                "email": "bierlein@t-online.de",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "SPORT 2000",
                "buyingGroupH2name": "ANWR"
            },
            {
                "code": 1000103,
                "name": "NEUMUELLER",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "NOT ASSIGNED",
                "buyingGroupH2name": "NOT ASSIGNED"
            },
            {
                "code": 1000105,
                "name": "SPORTHAUS EISERT GMBH",
                "email": "info@eisert.de",
                "homepage": "http://www.eisert.de",
                "salesOfficename": "GERMANY - SOUTH",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT D"
            },
            {
                "code": 1000106,
                "name": "SCHUHHAUS RIEBEL",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "SABU",
                "buyingGroupH2name": "SABU"
            },
            {
                "code": 1000108,
                "name": "SPORT-MODE SCHROMM GMBH",
                "email": "sportmode-schromm@t-online.de",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT SYSTEMPARTNER"
            },
            {
                "code": 1000110,
                "name": "SPORTHAUS BRAEUNLEIN",
                "email": "braeunlein@t-online.de",
                "homepage": "http://www.sport-braeunlein.de",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT SYSTEMPARTNER"
            },
            {
                "code": 1000114,
                "name": "SCHUH-WEIMER",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "NOT ASSIGNED",
                "buyingGroupH2name": "NOT ASSIGNED"
            },
            {
                "code": 1000117,
                "name": "SCHUH-SPORT-KEILHOLZ",
                "email": "",
                "homepage": "",
                "salesOfficename": "GERMANY - SOUTH",
                "branch": "FALSCH",
                "buyingGroupname": "NOT ASSIGNED",
                "buyingGroupH2name": "NOT ASSIGNED"
            },
            {
                "code": 1000120,
                "name": "SPORT FRANK",
                "email": "intersport.frank.hof@intersport.de",
                "homepage": "www.intersport-sport-frank.de",
                "salesOfficename": "GERMANY - SOUTH",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT D"
            },
            {
                "code": 1000121,
                "name": "SPORT RIEBEL",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "NOT ASSIGNED",
                "buyingGroupH2name": "NOT ASSIGNED"
            },
            {
                "code": 1000123,
                "name": "LEITHNER GMBH & CO.KG",
                "email": "info@intersport-leithner.de",
                "homepage": "http://www.intersport-leithner.de",
                "salesOfficename": "GERMANY - SOUTH",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT D"
            },
            {
                "code": 1000126,
                "name": "SPORTHAUS FEHR GMBH",
                "email": "sporthaus.fehr.wecodeen@intersport.de",
                "homepage": "k.a.",
                "salesOfficename": "GERMANY - SOUTH",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT D"
            },
            {
                "code": 1000133,
                "name": "EBERHARD WIGNER KG",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "SPORT 2000",
                "buyingGroupH2name": "SPORT 2000"
            },
            {
                "code": 1000137,
                "name": "FRANK",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT SYSTEMPARTNER"
            },
            {
                "code": 1000138,
                "name": "SCHUHHAUS BOLLMANN",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "SABU",
                "buyingGroupH2name": "SABU / G-Lord"
            },
            {
                "code": 1000140,
                "name": "SPORT GEYER",
                "email": "info@intersport-geyer.de",
                "homepage": "http://www.intersport-geyer.de/",
                "salesOfficename": "GERMANY - SOUTH",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT D"
            },
            {
                "code": 1000141,
                "name": "ORTLAM SCHUH + SPORT",
                "email": "info@sport-ortlam.de",
                "homepage": "www.sport-ortlam.de",
                "salesOfficename": "GERMANY - SOUTH",
                "branch": "FALSCH",
                "buyingGroupname": "NOT ASSIGNED",
                "buyingGroupH2name": "NOT ASSIGNED"
            },
            {
                "code": 1000144,
                "name": "SPORT KOPP",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT D"
            },
            {
                "code": 1000145,
                "name": "SPORT ERDL",
                "email": "info@intersport-erdl.de",
                "homepage": "http://www.intersport-erdl.de",
                "salesOfficename": "GERMANY - SOUTH",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT D"
            },
            {
                "code": 1000146,
                "name": "MAURER-CENTER GMBH",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "INTERSPORT",
                "buyingGroupH2name": "INTERSPORT D"
            },
            {
                "code": 1000148,
                "name": "FRIEDRICH MUELLER",
                "email": "",
                "homepage": "",
                "salesOfficename": "COMPACT SERVICE",
                "branch": "FALSCH",
                "buyingGroupname": "NOT ASSIGNED",
                "buyingGroupH2name": "NOT ASSIGNED"
            },
            {
                "code": 1000149,
                "name": "SPORT MEYER, BRUEMMER &",
                "email": "",
                "homepage": "",
                "salesOfficename": "GERMANY - SOUTH",
                "branch": "FALSCH",
                "buyingGroupname": "NOT ASSIGNED",
                "buyingGroupH2name": "NOT ASSIGNED"
            }
        ]
        return {
            loadAll: function () {
                return allRetailers.map(function (retailer) {
                    return {
                        value: retailer.name.toLowerCase(),
                        display: retailer.name,
                        code: retailer.code
                    };
                });
            },
            loadAllFull: function () {
                return allRetailers.map(function (retailer) {
                    return {
                        value: retailer.name.toLowerCase(),
                        name: retailer.name,
                        code: retailer.code,
                        salesOfficename: retailer.salesOfficename,
                        email: retailer.email,
                        buyingGroupname: retailer.buyingGroupname
                    };
                });
            }
        };
    }

})();
