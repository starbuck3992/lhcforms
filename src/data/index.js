export default {
    zaznamOdbornehoVysetrenia: {
        "dataId": "54B20340-3294-42BC-96C5-A1B668A9ADE8",
        "type": "AT",
        "name": "CEN-EN13606-ENTRY.Zaznam_o_vysetreni-Zaznam_o_odbornom_vysetreni.v7",
        "code": "at0000.1",
        "template": "en",
        "items": [{
            "original_name": "CEN-EN13606-ENTRY.Zaznam_o_vysetreni-Zaznam_o_odbornom_vysetreni.v7",
            "standard": "CEN",
            "question": "Záznam o vyšetrení - Specialization: Záznam o odbornom vyšetrení",
            "original_type": "ENTRY",
            "questionCardinality": {
                "min": "1",
                "max": "1"
            },
            "dataType": "",
            "header": true,
            "answers": "",
            "units": "",
            "questionCode": "at0000.1",
            "items": [
                {
                    "question": "Dátum a čas odoslania",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0101]",
                    "questionCode": "at0101",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0101]/value[at0102]/time",
                    "codingInstructions": "Dátum a čas, kedy bol pacient odoslaný na vyšetrenie.\r\nInformácie o odoslaní vyplní ošetrujúci lekár v prípade, že bol pacient k nemu odoslaný na základe papierového výmenného lístka. Údaje lekár prepíše z údajov uvedených na VL. V prípade vyšetrenia na základe elektronického VL naplní len identifikátor VL, na základe ktorého bolo vyšetrenie vykonané. Údaje o odoslaní v tomto prípade nemusí vypĺňaťť \r\n(ALTERNATIVA – IS PZS ich naplní z údajov o VL.) ",
                    "header": false
                },
                {
                    "question": "Dátum a čas vyšetrenia",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.2]",
                    "questionCode": "at0.2",
                    "questionCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "attPath": "/items[at0.2]/value[at0.3]/time",
                    "codingInstructions": "Dátum a čas ukončenia vyšetrenia. V prípade, že vyšetrenie je realizované ON TIME je naplňnané automaticky IS PZS na základe systémového dátumu a času. ",
                    "header": false
                },
                {
                    "question": "Len výmenný lístok",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0005]",
                    "questionCode": "at0005",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "CNE",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0005]/value[at0006]/value",
                    "answers": [
                        {"text": "True"},
                        {"text": "False"}
                    ],
                    "codingInstructions": "Príznak, že záznam z vyšetrenia bol vytvorený len pre potrebu zaevidovania výmenného lístka. V tomto prípade sú všetky nepovinné atribúty mimo časti 'Odporúčanie na vyšetrenie' nenaplnené.",
                    "header": false
                },
                {
                    "question": "Anamnéza",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.8]",
                    "questionCode": "at0.8",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.8]/value[at0.42]/originalText",
                    "codingInstructions": "Údaje o zdravotnom stave pacienta a jeho pokrvných príbuzných pred súčastnou chorobou.",
                    "header": false
                },
                {
                    "question": "Dispenzarizácia",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.10]",
                    "questionCode": "at0.10",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "CNE",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.10]/value[at0.11]/value",
                    "answers": [
                        {"text": "True"},
                        {"text": "False"}
                    ],
                    "codingInstructions": "Príznak, či sa jedná o dispenzarizovaného pacienta. V prípade, že IS PZS eviduje dispenzár samostatne, tento atribút používaný nie je. ",
                    "header": false
                },
                {
                    "question": "Odporúčanie",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.12]",
                    "questionCode": "at0.12",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.12]/value[at0.45]/originalText",
                    "codingInstructions": "Odporúčanie ďalšieho postupu, resp. odporúčanie ďalšej liečby pacienta. ",
                    "header": false
                },
                {
                    "question": "Urgentnosť vyšetrenia",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0117]",
                    "questionCode": "at0117",
                    "questionCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "attPath": "/items[at0117]/value[at0118.9]/codeValue",
                    "answers": [{"text": " "}],
                    "codingInstructions": "Urgentnosť vyšetrenia. Odkaz na číselník, obsahujúci stupne urgentnosti resp. naliehavosti vyšetrenia.",
                    "header": false
                },
                {
                    "question": "Diagnostický záver",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0103.6]",
                    "questionCode": "at0103.6",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Informácie ohľadom diagnóz, ktoré má pacient pri ukončení vyšetrení. Diagnózu je možné definovať výberom diagnózy z číselníka (MKCH10) s doplnením slovného popisu diagnózy. Tiež je možné definovať hlavnú aj život ovplyvňujúcu diagnózu. Správa obsahuje práve jednu hlavnú diagnózu.",
                    "header": true,
                    "items": [
                        {
                            "question": "Hlavná diagnóza",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0103.6]/parts[at0108]",
                            "questionCode": "at0108",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "CNE",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0103.6]/parts[at0108]/value[at0109]/value",
                            "answers": [
                                {"text": "True"},
                                {"text": "False"}
                            ],
                            "codingInstructions": "Príznak, že daná diagnóza je hlavná. Správa obsahuje práve jednu hlavnú diagnózu.",
                            "header": false
                        },
                        {
                            "question": "Život ovplyvňujúca diagnóza",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0103.6]/parts[at0008]",
                            "questionCode": "at0008",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "CNE",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0103.6]/parts[at0008]/value[at0010]/value",
                            "answers": [
                                {"text": "True"},
                                {"text": "False"}
                            ],
                            "codingInstructions": "Príznak život ovplyvňujúcej diagnózy.",
                            "header": false
                        },
                        {
                            "question": "Diagnóza",
                            "original_type": "CLUSTER",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0103.6]/parts[at0104]",
                            "questionCode": "at0104",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "",
                            "codingInstructions": "Diagnóza vyjadrená kódom z MKCH10, ktorú má pacient po vyšetrení. Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Diagnoza.v1}",
                            "header": true,
                            "items": [
                                {
                                    "question": "Kód diagnózy",
                                    "original_type": "ELEMENT",
                                    "parent_type": "CLUSTER",
                                    "objPath": "/items[at0103.6]/parts[at0104]/parts[at0032]",
                                    "questionCode": "at0032",
                                    "questionCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "dataType": "ST",
                                    "answerCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "attPath": "/items[at0103.6]/parts[at0104]/parts[at0032]/value[at0035]/codeValue",
                                    "answers": [{"text": " "}],
                                    "codingInstructions": "Diagnóza vyjadrená kódom z MKCH10, ktorá je stanovená pacientovi v rámci diagnostického záveru. ",
                                    "header": false
                                },
                                {
                                    "question": "Upresnenie",
                                    "original_type": "ELEMENT",
                                    "parent_type": "CLUSTER",
                                    "objPath": "/items[at0103.6]/parts[at0104]/parts[at0033]",
                                    "questionCode": "at0033",
                                    "questionCardinality": {
                                        "min": "0",
                                        "max": "1"
                                    },
                                    "dataType": "ST",
                                    "answerCardinality": {
                                        "min": "0",
                                        "max": "1"
                                    },
                                    "attPath": "/items[at0103.6]/parts[at0104]/parts[at0033]/value[at0036]/originalText",
                                    "codingInstructions": "Upresnenie diagnózy formou voľného textu. Pre vyplnenie upresnenia je nevyhnutné zaznamenať diagnostický záver v rámci \\\\\\\\\\\\\\\\\\\"kódu diagnózy\\\\\\\\\\\\\\\\\\\"",
                                    "header": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "question": "Požiadavka na vyšetrenie",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0999]",
                    "questionCode": "at0999",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0999]/value[at0998]/extension",
                    "codingInstructions": "Odkaz (link) na „Odporúčané vyšetrenie“ (id. výmenného lístka), ktorým je vyšetrenie požadované. Vyplnením tohto atribútu môže autor výmenného lístka pristúpiť k výsledku zdravotného záznamu. \r\n",
                    "header": false
                },
                {
                    "question": "Názov vyšetrenia",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.34]",
                    "questionCode": "at0.34",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.34]/value[at0.39]/originalText",
                    "codingInstructions": "Názov vyšetrenia prostredníctvom, ktorého bude možné vyšetrenie neskôr vyhľadať.",
                    "header": false
                },
                {
                    "question": "Interná poznámka",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.50]",
                    "questionCode": "at0.50",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.50]/value[at0.55]/originalText",
                    "codingInstructions": "Časť zdravotnej dokumentácie, do ktorej lekár môže uviesť popis, ktorý bude zdieľaný medzi zdravotníckymi pracovníkmi ale nebude prístupný pacientovi ani po prihlásení sa do elektronickej zdravotnej knižky.",
                    "header": false
                },
                {
                    "question": "Medikácia",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.71]",
                    "questionCode": "at0.71",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Zdravotnícky pracovník, s možnosťou zápisu medikačného záznamu zapíše podané lieky volaním služby ZapisMedikacnyZaznam a uvedie identifikátory medikačných záznamov v „Medikačný záznam“.\r\nAlternatívou je, že zdravotnícky pracovník, zapíše informáciu o podaných liekoch ako popisom v časti „Popis Medikácie“. ",
                    "header": true,
                    "items": [
                        {
                            "question": "Medikačný záznam",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0.71]/parts[at0.74]",
                            "questionCode": "at0.74",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0.71]/parts[at0.74]/value[at0.76]/extension",
                            "codingInstructions": "Identifikátor medikačného záznamu, ktorý vznikol na základe zápisu medikačného záznamu prostredníctvom sluzby ZapisMedikacnyZaznam. Tento identifikator nie je povinný. V prípade, že lekár zapisuje len popisnú medikáciu zaznamená ju do popisu medikácie. ",
                            "header": false
                        },
                        {
                            "question": "Popis medikácie",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0.71]/parts[at0.79]",
                            "questionCode": "at0.79",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0.71]/parts[at0.79]/value[at0.81]/originalText",
                            "codingInstructions": "Slovný popis medikácie pacienta. \r\nObsahuje podané lieky(liečivo), množstvo, cestu podania  a môže obsahovať aj ťažkosti spojené s medikáciou.",
                            "header": false
                        }
                    ]
                },
                {
                    "question": "Predpokladaný dátum pôrodu",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0012]",
                    "questionCode": "at0012",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "DT",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0012]/value[at0013]/date",
                    "codingInstructions": "Prepdokladaný dátum pôrodu pacientky. ",
                    "header": false
                },
                {
                    "question": "Dávkovanie",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0014]",
                    "questionCode": "at0014",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "V prípade predpísania lieku je povinná aspoň jedna dávkovacia schéma.\r\nV prípade podania lieku lekárom je povinná aspoň jedna dávkovacia schéma.\r\nV prípade výdaja lieku v lekárni je zakázané udávať dávkovaciu schému.",
                    "header": true,
                    "items": [
                        {
                            "question": "Liečivo",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0014]/parts[at0015]",
                            "questionCode": "at0015",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0014]/parts[at0015]/value[at0016]/codeValue",
                            "answers": [{"text": " "}],
                            "codingInstructions": "Popis alergénu - liečiva ak je zodpovedné za alergickú reakciu. Využívaný je číselník ATC skupín 1.3.158.00165387.100.10.83",
                            "header": false
                        },
                        {
                            "question": "Látka",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0014]/parts[at0018]",
                            "questionCode": "at0018",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0014]/parts[at0018]/value[at0019]/codeValue",
                            "answers": [{"text": " "}],
                            "codingInstructions": "Popis alergénu - látky ak je zodpovedná za alergickú reakciu. Využívaný je číselník  typov alergénov 1.3.158.00165387.100.10.158",
                            "header": false
                        }
                    ]
                },
                {
                    "question": "Implantovaná zdravotnícka pomôcka",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0020]",
                    "questionCode": "at0020",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Zdravotnícka pomôcka alebo implantát zavedený pacientovi.",
                    "header": true,
                    "items": [
                        {
                            "question": "Druh",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0020]/parts[at0024]",
                            "questionCode": "at0024",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0020]/parts[at0024]/value[at0025]/codeValue",
                            "answers": [{"text": " "}],
                            "codingInstructions": "Druhu zdravotníckej pomôcky alebo implantátu zavedeného pacientovi. Využíva sa číselník druhov zdravotníckych pomôcok a implantátov 1.3.158.00165387.100.10.126",
                            "header": false
                        },
                        {
                            "question": "Popis zdravotníckej pomôcky",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0020]/parts[at0027]",
                            "questionCode": "at0027",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0020]/parts[at0027]/value[at0028]/originalText",
                            "codingInstructions": "Popis zdravotnej pomôcky v prípade, že nebol dohľadaný druh ZP v číselníku.",
                            "header": false
                        }
                    ]
                },
                {
                    "question": "Popis",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0011]",
                    "questionCode": "at0011",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "",
                    "codingInstructions": "Sumarizácia výsledku odborného vyšetrenia. Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Textovy_popis.v1}",
                    "header": true,
                    "items": [
                        {
                            "question": "Text",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0011]/parts[at0002]",
                            "questionCode": "at0002",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0011]/parts[at0002]/value[at0030]/originalText",
                            "codingInstructions": "Zápis záznamu prostredníctvom dátového typu SIMPLE TEXT",
                            "header": false
                        },
                        {
                            "question": "Text HTML",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0011]/parts[at0023]",
                            "questionCode": "at0023",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0011]/parts[at0023]/value[at0031]/originalText",
                            "codingInstructions": "Zápis záznamu prostredníctvom dátového typu HTML TEXTu",
                            "header": false
                        }
                    ]
                },
                {
                    "question": "Odosielajúci lekár",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0200]",
                    "questionCode": "at0200",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "",
                    "codingInstructions": "Lekár, ktorý pacienta na vyšetrenie odoslal. Odkaz na archetyp Zdravotnicky_pracovnik_odborneho_utvaru. \r\nInformácie o odoslaní vyplní ošetrujúci lekár v prípade, že bol pacient k nemu odoslaný na základe papierového výmenného lístka. Údaje lekár prepíše z údajov uvedených na VL. V prípade vyšetrenia na základe elektronického VL naplní len identifikátor VL, na základe ktorého bolo vyšetrenie vykonané. Údaje o odoslaní v tomto prípade nemusí vypĺňaťť \r\n(ALTERNATIVA – IS PZS ich naplní z údajov o VL.)  Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Zdravotnicky_pracovnik_odborneho_utvaru.v1}",
                    "header": true,
                    "items": [
                        {
                            "question": "Identifikácia ZPrac",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0200]/parts[at0038]",
                            "questionCode": "at0038",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0200]/parts[at0038]/value[at0043]/extension",
                            "codingInstructions": "Identifikácia zdravotníckeho pracovníka v JRÚZ.",
                            "header": false
                        },
                        {
                            "question": "ELEMENT",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0200]/parts[at0039]",
                            "questionCode": "at0039",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0200]/parts[at0039]/value[at0044]/extension",
                            "codingInstructions": "This is a ELEMENT object",
                            "header": false
                        },
                        {
                            "question": "Špecializácia lekára",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0200]/parts[at0040]",
                            "questionCode": "at0040",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0200]/parts[at0040]/value[at0045]/codeValue",
                            "answers": [{"text": " "}],
                            "codingInstructions": "Šprecializácia tohto lekára, pod ktoru prebehla operácia, ktorú daný lekár vykonával.",
                            "header": false
                        },
                        {
                            "question": "ELEMENT",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0200]/parts[at0041]",
                            "questionCode": "at0041",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "CNE",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0200]/parts[at0041]/value[at0046]/value",
                            "answers": [
                                {"text": "True"},
                                {"text": "False"}
                            ],
                            "codingInstructions": "This is a ELEMENT object",
                            "header": false
                        }
                    ]
                },
                {
                    "question": "Diagnóza pri odoslaní",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0111]",
                    "questionCode": "at0111",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Odkaz na diagnózy, ktoré boli zistené pri odosielaní pacienta, resp. kvôli ktorým bol pacient prijatý. Informácie o odoslaní vyplní ošetrujúci lekár v prípade, že pacienta prijal na základe papierového výmenného lístka. Údaje lekár prepíše z údajov uvedených na VL. V prípade vyšetrenia na základe elektronického VL údaje o odoslaní naplní IS PZS z údajov na VL.  Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Diagnoza.v1}",
                    "header": true,
                    "items": [
                        {
                            "question": "Kód diagnózy",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0111]/parts[at0050]",
                            "questionCode": "at0050",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0111]/parts[at0050]/value[at0053]/codeValue",
                            "answers": [{"text": " "}],
                            "codingInstructions": "Diagnóza vyjadrená kódom z MKCH10, ktorá je stanovená pacientovi v rámci diagnostického záveru. ",
                            "header": false
                        },
                        {
                            "question": "Upresnenie",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0111]/parts[at0051]",
                            "questionCode": "at0051",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0111]/parts[at0051]/value[at0054]/originalText",
                            "codingInstructions": "Upresnenie diagnózy formou voľného textu. Pre vyplnenie upresnenia je nevyhnutné zaznamenať diagnostický záver v rámci \\\\\\\\\\\\\\\\\\\"kódu diagnózy\\\\\\\\\\\\\\\\\\\"",
                            "header": false
                        }
                    ]
                },
                {
                    "question": "Odporúčanie na vyšetrenie",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0007]",
                    "questionCode": "at0007",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Objekt Odporúčanie na vyšetrenie obsahuje štrukúru údajov potrebnú pre evidenciu výmenného lístka alebo žiadanky. Vyplnenie údajov je nepovinné a vypĺňa sa len v prípade, ak je na základe výsledku vyšetrenia požadované ďalšie odborné / zobrazovacie vyšetrenie, alebo hospitalizácia. Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Odporucanie_na_vysetrenie.v3}",
                    "header": true,
                    "items": [
                        {
                            "question": "Identifikátor výmenného lístku",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0056]",
                            "questionCode": "at0056",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0056]/value[at0074]/extension",
                            "codingInstructions": "Identifikátor výmennéhlo lístku pomocou/ žiadanky, na základe ktorého je stanovená jednoznačnosť výmenného lístka a na základe ktorého je možné vyhľadať výmenný lístok.  ",
                            "header": false
                        },
                        {
                            "question": "Druh špecializovaného útvaru",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0057]",
                            "questionCode": "at0057",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0057]/value[at0075]/codeValue",
                            "answers": [{"text": " "}],
                            "codingInstructions": "Druh špecializovaného útvaru (oddelenie, ambulancia, ...) pre ktorý je odporúčanie na vyšetrenie požadované. Hodnota je napĺňaná z číselníka 1.3.158.00165387.100.10.37",
                            "header": false
                        },
                        {
                            "question": "Odborné zameranie",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0058]",
                            "questionCode": "at0058",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0058]/value[at0076]/codeValue",
                            "answers": [{"text": " "}],
                            "codingInstructions": "Odborné zameranie útvaru, ktorému je odporúčanie na vyšetrenie zasielané. Hodnota je napĺňaná z číselníka 1.3.158.00165387.100.10.39",
                            "header": false
                        },
                        {
                            "question": "Vyšetrovaný orgán",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0059]",
                            "questionCode": "at0059",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0059]/value[at0077]/originalText",
                            "codingInstructions": "Orgán resp. oblasť tela, ktorá má byť vyšetrená v rámci žiadanky na zobrazovacie vyšetrenie. Využíva sa len pre účely žiadanky na zobrazovacie vyšetrenie. \r\nOd verzie v3 nie je možné jeho vyplnenie formou textu ale len odkazom na číselník, t.j. v položke [at0064]",
                            "header": false
                        },
                        {
                            "question": "Vyšetrovaný orgán CV",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0060]",
                            "questionCode": "at0060",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0060]/value[at0078]/codeValue",
                            "answers": [{"text": " "}],
                            "codingInstructions": "Orgán resp. oblasť tela, ktorá má byť vyšetrená v rámci žiadanky na zobrazovacie vyšetrenie.  ",
                            "header": false
                        },
                        {
                            "question": "Modalita zobrazovacieho vyšetrenia",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0061]",
                            "questionCode": "at0061",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0061]/value[at0079]/originalText",
                            "codingInstructions": "Kód modality zobrazovacieho vyšetrenia.\r\nCT; RTG; NMR; MRI; SPECT; PET; ECG; EEG; US; MEG; DSA; NIRS; OCT'; EIT; ...\r\nOd verzie v2 nie je možné vyplnenie formou textu ale len odkazom na číselník, t.j. v položke [at0107]",
                            "header": false
                        },
                        {
                            "question": "Modalita zobrazovacieho vyšetrenia CV",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0062]",
                            "questionCode": "at0062",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0062]/value[at0080]/codeValue",
                            "answers": [{"text": " "}],
                            "codingInstructions": "Modalita zobrazovacieho vyšetrenia odkazom na číselník modalít",
                            "header": false
                        },
                        {
                            "question": "Požadované vyšetrenie",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0063]",
                            "questionCode": "at0063",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0063]/value[at0081]/originalText",
                            "codingInstructions": "Voľným textom definovaný popis požiadavky na odporúčané vyšetrenie. Lekár ho využíva pre sumarizáciu potrebných výsledkov pre iného lekára. V prípade, že lekár nemá možnosť zosumarizovať požiadavky je uvádzaná štandardná formulácia \\\" Prosím o vyšetrenie\\\". V tomto prípade by však mal byť priradený \\\"extrakt\\\". ",
                            "header": false
                        },
                        {
                            "question": "Diagnóza",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0064]",
                            "questionCode": "at0064",
                            "questionCardinality": {
                                "min": "0",
                                "max": "*"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0064]/value[at0082]/codeValue",
                            "answers": [{"text": " "}],
                            "codingInstructions": "Diagnóza, kvôli ktorej je pacient odosielaný na vyšetrenie. Môže byť totožná s diagnostickým záverom alebo ju môže lekár určiť individuálne v prípade potreby. \r\nOd verzie v3 je atribút povinný.",
                            "header": false
                        },
                        {
                            "question": "Urgentnosť výmenného lístku",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0065]",
                            "questionCode": "at0065",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0065]/value[at0083]/codeValue",
                            "answers": [{"text": " "}],
                            "codingInstructions": "Urgentnosť výmenného lístku. Číselník, obsahujúci stupne urgentnosti resp. naliehavosti vyšetrenia požadovaného prostredníctvom vymenného lístku.\r\n\r\nPredpokladaný obsah: \r\n- bežné\r\n- urgentné",
                            "header": false
                        },
                        {
                            "question": "Informácia pre pacienta",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0066]",
                            "questionCode": "at0066",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0066]/value[at0084]/originalText",
                            "codingInstructions": "Informácia prepacienta, aký režim má dodržať pred požadovaným vyšetrením (napr. vyšetrenie nalačno) ",
                            "header": false
                        },
                        {
                            "question": "Extrakt",
                            "original_type": "CLUSTER",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0067]",
                            "questionCode": "at0067",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "",
                            "codingInstructions": "Do extraktu je možné vložiť záznamy pacienta, ktoré súvisia s požadovaným vyšetrením. ",
                            "header": true,
                            "items": [{
                                "question": "Zdravotný záznam",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/items[at0007]/parts[at0067]/parts[at0085]",
                                "questionCode": "at0085",
                                "questionCardinality": {
                                    "min": "1",
                                    "max": "*"
                                },
                                "dataType": "",
                                "answerCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "attPath": "/items[at0007]/parts[at0067]/parts[at0085]/value[at0100]/extension",
                                "codingInstructions": "Konkértny odkaz na existujúci záznam:\r\n- Záznam o zobrazovacom vyšetrení\r\n- Záznam o odbornom vyšetrení\r\n- Lekárska prepúštacia správa\r\n- Laboratórny výsledok",
                                "header": false
                            }]
                        },
                        {
                            "question": "Potreba sedácie",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0068]",
                            "questionCode": "at0068",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "CNE",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0068]/value[at0087]/value",
                            "answers": [
                                {"text": "True"},
                                {"text": "False"}
                            ],
                            "codingInstructions": "Informácia pre vyšetrujúceho lekára o potrebe sedácie pred vyšetrením (v prípade klaustrofóbie, malých detí, nekľudných pacientov a pod.). Využíva sa len pre potreby žiadanky na zobrazovacie vyšetrenie, v iných prípadoch atribút využívaný nie je. ",
                            "header": false
                        },
                        {
                            "question": "Výsledok",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0069]",
                            "questionCode": "at0069",
                            "questionCardinality": {
                                "min": "0",
                                "max": "*"
                            },
                            "dataType": "",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0007]/parts[at0069]/value[at0088]/extension",
                            "codingInstructions": "Automaticky napĺňané NZIS. Neslúži na účely zápisu ale len ako odkaz, že k danému \\\"Odporúčaniu na vyšetrenie\\\" existuje zapísaný výsledok z vyšetrenia. (spárovaný výsledok vyšetrenia s výmenným lístkom).",
                            "header": false
                        },
                        {
                            "question": "Prevzatie odporúčania",
                            "original_type": "CLUSTER",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0070]",
                            "questionCode": "at0070",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "",
                            "codingInstructions": "Automaticky napĺňané NZIS. Neslúži na účely zápisu ale ako doplňujúca informácia, že k dané \\\"Odporúčaniu na vyšetrenie\\\" bolo prevzaté -  Zákon 153/2013; §5; odst. 6; bod b)\r\nAk je naplnené, znamená to, že výmenný lístok bol prevzatý.",
                            "header": true,
                            "items": [
                                {
                                    "question": "Čas prevzatia",
                                    "original_type": "ELEMENT",
                                    "parent_type": "CLUSTER",
                                    "objPath": "/items[at0007]/parts[at0070]/parts[at0089]",
                                    "questionCode": "at0089",
                                    "questionCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "dataType": "ST",
                                    "answerCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "attPath": "/items[at0007]/parts[at0070]/parts[at0089]/value[at0105]/time",
                                    "codingInstructions": "Dátum a čas prevzatia výmenného lístka",
                                    "header": false
                                },
                                {
                                    "question": "Platnosť súhlasu do",
                                    "original_type": "ELEMENT",
                                    "parent_type": "CLUSTER",
                                    "objPath": "/items[at0007]/parts[at0070]/parts[at0090]",
                                    "questionCode": "at0090",
                                    "questionCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "dataType": "ST",
                                    "answerCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "attPath": "/items[at0007]/parts[at0070]/parts[at0090]/value[at0106]/time",
                                    "codingInstructions": "Čas, do kedy je platný prístup k údajom pacienta",
                                    "header": false
                                },
                                {
                                    "question": "CLUSTER",
                                    "original_type": "CLUSTER",
                                    "parent_type": "CLUSTER",
                                    "objPath": "/items[at0007]/parts[at0070]/parts[at0091]",
                                    "questionCode": "at0091",
                                    "questionCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "dataType": "",
                                    "codingInstructions": "",
                                    "header": true,
                                    "items": [
                                        {
                                            "question": "Identifikácia ZPrac",
                                            "original_type": "ELEMENT",
                                            "parent_type": "CLUSTER",
                                            "objPath": "/items[at0007]/parts[at0070]/parts[at0091]/parts[at0587]",
                                            "questionCode": "at0587",
                                            "questionCardinality": {
                                                "min": "1",
                                                "max": "1"
                                            },
                                            "dataType": "",
                                            "answerCardinality": {
                                                "min": "1",
                                                "max": "1"
                                            },
                                            "attPath": "/items[at0007]/parts[at0070]/parts[at0091]/parts[at0587]/value[at0592]/extension",
                                            "codingInstructions": "Identifikácia zdravotníckeho pracovníka v JRÚZ.",
                                            "header": false
                                        },
                                        {
                                            "question": "Identifikácia OÚ PZS",
                                            "original_type": "ELEMENT",
                                            "parent_type": "CLUSTER",
                                            "objPath": "/items[at0007]/parts[at0070]/parts[at0091]/parts[at0588]",
                                            "questionCode": "at0588",
                                            "questionCardinality": {
                                                "min": "0",
                                                "max": "1"
                                            },
                                            "dataType": "",
                                            "answerCardinality": {
                                                "min": "0",
                                                "max": "1"
                                            },
                                            "attPath": "/items[at0007]/parts[at0070]/parts[at0091]/parts[at0588]/value[at0593]/extension",
                                            "codingInstructions": "Identifikácia odborného útvaru poskytovateľa zdravotnej starostlivosti z JRÚZ, do ktorého zdravotnícky pracovník patrí.",
                                            "header": false
                                        },
                                        {
                                            "question": "Špecializácia lekára",
                                            "original_type": "ELEMENT",
                                            "parent_type": "CLUSTER",
                                            "objPath": "/items[at0007]/parts[at0070]/parts[at0091]/parts[at0589]",
                                            "questionCode": "at0589",
                                            "questionCardinality": {
                                                "min": "1",
                                                "max": "1"
                                            },
                                            "dataType": "ST",
                                            "answerCardinality": {
                                                "min": "1",
                                                "max": "1"
                                            },
                                            "attPath": "/items[at0007]/parts[at0070]/parts[at0091]/parts[at0589]/value[at0594]/codeValue",
                                            "answers": [{"text": " "}],
                                            "codingInstructions": "Šprecializácia tohto lekára, pod ktoru prebehla operácia, ktorú daný lekár vykonával.",
                                            "header": false
                                        },
                                        {
                                            "question": "Nezmluvný lekár",
                                            "original_type": "ELEMENT",
                                            "parent_type": "CLUSTER",
                                            "objPath": "/items[at0007]/parts[at0070]/parts[at0091]/parts[at0590]",
                                            "questionCode": "at0590",
                                            "questionCardinality": {
                                                "min": "0",
                                                "max": "1"
                                            },
                                            "dataType": "CNE",
                                            "answerCardinality": {
                                                "min": "0",
                                                "max": "1"
                                            },
                                            "attPath": "/items[at0007]/parts[at0070]/parts[at0091]/parts[at0590]/value[at0595]/value",
                                            "answers": [
                                                {"text": "True"},
                                                {"text": "False"}
                                            ],
                                            "codingInstructions": "Doplňujúci atribút, ktorý sa použije na prenos informácie, že daný zdravotnícky pracovník - lekár, nemal pri svojom úkone zmluvný vzťah k poisťovni pacienta a teda, že tento úkon si bude hradiť pacient. Použije sa napríklad pri predpisovaní liekov.",
                                            "header": false
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "question": "CLUSTER",
                            "original_type": "CLUSTER",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0007]/parts[at0071]",
                            "questionCode": "at0071",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "",
                            "codingInstructions": "",
                            "header": true,
                            "items": [
                                {
                                    "question": "Čas zmeny stavu",
                                    "original_type": "ELEMENT",
                                    "parent_type": "CLUSTER",
                                    "objPath": "/items[at0007]/parts[at0071]/parts[at0599]",
                                    "questionCode": "at0599",
                                    "questionCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "dataType": "ST",
                                    "answerCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "attPath": "/items[at0007]/parts[at0071]/parts[at0599]/value[at0603]/time",
                                    "codingInstructions": "Dátum a čas vykonania zmeny stavu",
                                    "header": false
                                },
                                {
                                    "question": "Dôvod zmeny stavu",
                                    "original_type": "ELEMENT",
                                    "parent_type": "CLUSTER",
                                    "objPath": "/items[at0007]/parts[at0071]/parts[at0600]",
                                    "questionCode": "at0600",
                                    "questionCardinality": {
                                        "min": "0",
                                        "max": "1"
                                    },
                                    "dataType": "ST",
                                    "answerCardinality": {
                                        "min": "0",
                                        "max": "1"
                                    },
                                    "attPath": "/items[at0007]/parts[at0071]/parts[at0600]/value[at0604]/originalText",
                                    "codingInstructions": "Zdôvodnenie vykonania zmeny stavu pre auditné účely. Využíva sa len pri úkone storno záznamu, pri iných typoch záznamu dôvod nemusí byť uvádzaný. ",
                                    "header": false
                                },
                                {
                                    "question": "CLUSTER",
                                    "original_type": "CLUSTER",
                                    "parent_type": "CLUSTER",
                                    "objPath": "/items[at0007]/parts[at0071]/parts[at0601]",
                                    "questionCode": "at0601",
                                    "questionCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "dataType": "",
                                    "codingInstructions": "",
                                    "header": true,
                                    "items": [
                                        {
                                            "question": "Identifikácia ZPrac",
                                            "original_type": "ELEMENT",
                                            "parent_type": "CLUSTER",
                                            "objPath": "/items[at0007]/parts[at0071]/parts[at0601]/parts[at0617]",
                                            "questionCode": "at0617",
                                            "questionCardinality": {
                                                "min": "1",
                                                "max": "1"
                                            },
                                            "dataType": "",
                                            "answerCardinality": {
                                                "min": "1",
                                                "max": "1"
                                            },
                                            "attPath": "/items[at0007]/parts[at0071]/parts[at0601]/parts[at0617]/value[at0622]/extension",
                                            "codingInstructions": "Identifikácia zdravotníckeho pracovníka v JRÚZ.",
                                            "header": false
                                        },
                                        {
                                            "question": "Identifikácia OÚ PZS",
                                            "original_type": "ELEMENT",
                                            "parent_type": "CLUSTER",
                                            "objPath": "/items[at0007]/parts[at0071]/parts[at0601]/parts[at0618]",
                                            "questionCode": "at0618",
                                            "questionCardinality": {
                                                "min": "0",
                                                "max": "1"
                                            },
                                            "dataType": "",
                                            "answerCardinality": {
                                                "min": "0",
                                                "max": "1"
                                            },
                                            "attPath": "/items[at0007]/parts[at0071]/parts[at0601]/parts[at0618]/value[at0623]/extension",
                                            "codingInstructions": "Identifikácia odborného útvaru poskytovateľa zdravotnej starostlivosti z JRÚZ, do ktorého zdravotnícky pracovník patrí.",
                                            "header": false
                                        },
                                        {
                                            "question": "Špecializácia lekára",
                                            "original_type": "ELEMENT",
                                            "parent_type": "CLUSTER",
                                            "objPath": "/items[at0007]/parts[at0071]/parts[at0601]/parts[at0619]",
                                            "questionCode": "at0619",
                                            "questionCardinality": {
                                                "min": "1",
                                                "max": "1"
                                            },
                                            "dataType": "ST",
                                            "answerCardinality": {
                                                "min": "1",
                                                "max": "1"
                                            },
                                            "attPath": "/items[at0007]/parts[at0071]/parts[at0601]/parts[at0619]/value[at0624]/codeValue",
                                            "answers": [{"text": " "}],
                                            "codingInstructions": "Šprecializácia tohto lekára, pod ktoru prebehla operácia, ktorú daný lekár vykonával.",
                                            "header": false
                                        },
                                        {
                                            "question": "Nezmluvný lekár",
                                            "original_type": "ELEMENT",
                                            "parent_type": "CLUSTER",
                                            "objPath": "/items[at0007]/parts[at0071]/parts[at0601]/parts[at0620]",
                                            "questionCode": "at0620",
                                            "questionCardinality": {
                                                "min": "0",
                                                "max": "1"
                                            },
                                            "dataType": "CNE",
                                            "answerCardinality": {
                                                "min": "0",
                                                "max": "1"
                                            },
                                            "attPath": "/items[at0007]/parts[at0071]/parts[at0601]/parts[at0620]/value[at0625]/value",
                                            "answers": [
                                                {"text": "True"},
                                                {"text": "False"}
                                            ],
                                            "codingInstructions": "Doplňujúci atribút, ktorý sa použije na prenos informácie, že daný zdravotnícky pracovník - lekár, nemal pri svojom úkone zmluvný vzťah k poisťovni pacienta a teda, že tento úkon si bude hradiť pacient. Použije sa napríklad pri predpisovaní liekov.",
                                            "header": false
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "question": "Zmena stavu záznamu",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0500]",
                    "questionCode": "at0500",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "",
                    "codingInstructions": "Definuje štruktúru auditných informácií o zmene stavu záznamu. Slúži len pre čítacie služby v prípade, že daný záznam bol editovaný lekárom (potvrdil klinický záver/ zneplatnil záznam/ vykonal storno záznamu)  Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Zmena_stavu_zaznamu.v1}",
                    "header": true,
                    "items": [
                        {
                            "question": "Čas zmeny stavu",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0500]/parts[at0110]",
                            "questionCode": "at0110",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0500]/parts[at0110]/value[at0115]/time",
                            "codingInstructions": "Dátum a čas vykonania zmeny stavu",
                            "header": false
                        },
                        {
                            "question": "Dôvod zmeny stavu",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0500]/parts[at0112]",
                            "questionCode": "at0112",
                            "questionCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "0",
                                "max": "1"
                            },
                            "attPath": "/items[at0500]/parts[at0112]/value[at0116]/originalText",
                            "codingInstructions": "Zdôvodnenie vykonania zmeny stavu pre auditné účely. Využíva sa len pri úkone storno záznamu, pri iných typoch záznamu dôvod nemusí byť uvádzaný. ",
                            "header": false
                        },
                        {
                            "question": "CLUSTER",
                            "original_type": "CLUSTER",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0500]/parts[at0113]",
                            "questionCode": "at0113",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "",
                            "codingInstructions": "",
                            "header": true,
                            "items": [
                                {
                                    "question": "Identifikácia ZPrac",
                                    "original_type": "ELEMENT",
                                    "parent_type": "CLUSTER",
                                    "objPath": "/items[at0500]/parts[at0113]/parts[at0605]",
                                    "questionCode": "at0605",
                                    "questionCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "dataType": "",
                                    "answerCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "attPath": "/items[at0500]/parts[at0113]/parts[at0605]/value[at0610]/extension",
                                    "codingInstructions": "Identifikácia zdravotníckeho pracovníka v JRÚZ.",
                                    "header": false
                                },
                                {
                                    "question": "Identifikácia OÚ PZS",
                                    "original_type": "ELEMENT",
                                    "parent_type": "CLUSTER",
                                    "objPath": "/items[at0500]/parts[at0113]/parts[at0606]",
                                    "questionCode": "at0606",
                                    "questionCardinality": {
                                        "min": "0",
                                        "max": "1"
                                    },
                                    "dataType": "",
                                    "answerCardinality": {
                                        "min": "0",
                                        "max": "1"
                                    },
                                    "attPath": "/items[at0500]/parts[at0113]/parts[at0606]/value[at0611]/extension",
                                    "codingInstructions": "Identifikácia odborného útvaru poskytovateľa zdravotnej starostlivosti z JRÚZ, do ktorého zdravotnícky pracovník patrí.",
                                    "header": false
                                },
                                {
                                    "question": "Špecializácia lekára",
                                    "original_type": "ELEMENT",
                                    "parent_type": "CLUSTER",
                                    "objPath": "/items[at0500]/parts[at0113]/parts[at0607]",
                                    "questionCode": "at0607",
                                    "questionCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "dataType": "ST",
                                    "answerCardinality": {
                                        "min": "1",
                                        "max": "1"
                                    },
                                    "attPath": "/items[at0500]/parts[at0113]/parts[at0607]/value[at0612]/codeValue",
                                    "answers": [{"text": " "}],
                                    "codingInstructions": "Šprecializácia tohto lekára, pod ktoru prebehla operácia, ktorú daný lekár vykonával.",
                                    "header": false
                                },
                                {
                                    "question": "Nezmluvný lekár",
                                    "original_type": "ELEMENT",
                                    "parent_type": "CLUSTER",
                                    "objPath": "/items[at0500]/parts[at0113]/parts[at0608]",
                                    "questionCode": "at0608",
                                    "questionCardinality": {
                                        "min": "0",
                                        "max": "1"
                                    },
                                    "dataType": "CNE",
                                    "answerCardinality": {
                                        "min": "0",
                                        "max": "1"
                                    },
                                    "attPath": "/items[at0500]/parts[at0113]/parts[at0608]/value[at0613]/value",
                                    "answers": [
                                        {"text": "True"},
                                        {"text": "False"}
                                    ],
                                    "codingInstructions": "Doplňujúci atribút, ktorý sa použije na prenos informácie, že daný zdravotnícky pracovník - lekár, nemal pri svojom úkone zmluvný vzťah k poisťovni pacienta a teda, že tento úkon si bude hradiť pacient. Použije sa napríklad pri predpisovaní liekov.",
                                    "header": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "question": "Príloha",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0009]",
                    "questionCode": "at0009",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Obsahuje prílohu k záznamu o vyšetrení. Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Laboratorna_vzorka.v2}",
                    "header": true,
                    "items": [
                        {
                            "question": "Kód dietetickej potraviny",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0009]/parts[at0577]",
                            "questionCode": "at0577",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0009]/parts[at0577]/value[at0582]/originalText",
                            "codingInstructions": "Kód pridelený dietetickej potravine MZ.",
                            "header": false
                        },
                        {
                            "question": "Názov dietetickej potraviny",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0009]/parts[at0578]",
                            "questionCode": "at0578",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0009]/parts[at0578]/value[at0583]/originalText",
                            "codingInstructions": "Oficiálny názov dietetickej potraviny.",
                            "header": false
                        },
                        {
                            "question": "ID dietetickej potraviny",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0009]/parts[at0579]",
                            "questionCode": "at0579",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0009]/parts[at0579]/value[at0584]/extension",
                            "answers": [{
                                "text": "[  ::  ]",
                                "default": true
                            }],
                            "codingInstructions": "Identifikátor dietetickej potraviny z registrov.",
                            "header": false
                        },
                        {
                            "question": "Doplnok názvu",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0009]/parts[at0580]",
                            "questionCode": "at0580",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "dataType": "ST",
                            "answerCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "attPath": "/items[at0009]/parts[at0580]/value[at0585]/originalText",
                            "codingInstructions": "Doplnok názvu dietetickej potraviny.",
                            "header": false
                        }
                    ]
                }
            ]
        }]
    },
    zaznamZobrazovacieVysetrenie: {
        dataId: "44170DC5-FA95-49A0-A35C-00583404AB04",
        type: "AT",
        name: "CEN-EN13606-ENTRY.Zaznam_o_vysetreni-Zaznam_o_zobrazovacom_vysetreni.v5",
        code: "at0000.1",
        template: "en",
        items: [
            {
                original_name:
                    "CEN-EN13606-ENTRY.Zaznam_o_vysetreni-Zaznam_o_zobrazovacom_vysetreni.v5",
                standard: "CEN",
                question:
                    "Záznam o vyšetrení - Specialization: Záznam o zobrazovacom vyšetrení",
                original_type: "ENTRY",
                questionCardinality: {
                    min: "1",
                    max: "1",
                },
                dataType: "",
                header: true,
                answers: "",
                units: "",
                questionCode: "at0000.1",
                items: [
                    {
                        question: "Dátum a čas odoslania",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0101]",
                        questionCode: "at0101",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0101]/value[at0102]/time",
                        codingInstructions:
                            "Dátum a čas, kedy bol pacient odoslaný na vyšetrenie.\r\nInformácie o odoslaní vyplní ošetrujúci lekár v prípade, že bol pacient k nemu odoslaný na základe papierového výmenného lístka. Údaje lekár prepíše z údajov uvedených na VL. V prípade vyšetrenia na základe elektronického VL naplní len identifikátor VL, na základe ktorého bolo vyšetrenie vykonané. Údaje o odoslaní v tomto prípade nemusí vypĺňaťť \r\n(ALTERNATIVA – IS PZS ich naplní z údajov o VL.) ",
                        header: false,
                    },
                    {
                        question: "Dátum a čas vyšetrenia",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.2]",
                        questionCode: "at0.2",
                        questionCardinality: {
                            min: "1",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "1",
                            max: "1",
                        },
                        attPath: "/items[at0.2]/value[at0.3]/time",
                        codingInstructions: "Dátum a čas ukončenia vyšetrenia. ",
                        header: false,
                    },
                    {
                        question: "Diagnostický záver",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0103.7]",
                        questionCode: "at0103.7",
                        questionCardinality: {
                            min: "0",
                            max: "*",
                        },
                        dataType: "",
                        codingInstructions:
                            "Informácie ohľadom diagnóz, ktoré má pacient pri ukončení vyšetrenia. Diagnózu je možné definovať výberom diagnózy z číselníka (MKCH10) a doplnením slovného popisu diagnózy. Tiež je možné definovať hlavnú diagnózu. Hlavná diagnóza môže byť vždy maximálne jedna.",
                        header: true,
                        items: [
                            {
                                question: "Hlavná diagnóza",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0103.7]/parts[at0108]",
                                questionCode: "at0108",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "CNE",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath: "/items[at0103.7]/parts[at0108]/value[at0109]/value",
                                answers: [{text: "True"}, {text: "False"}],
                                codingInstructions:
                                    "Príznak, že daná diagnóza je hlavná. Ak IS PZS nepoužíva stanovenie hlavnej diagnózy, hlavná diagnóza je vždy prvá v poradí. ",
                                header: false,
                            },
                            {
                                question: "Diagnóza",
                                original_type: "CLUSTER",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0103.7]/parts[at0104]",
                                questionCode: "at0104",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "",
                                codingInstructions:
                                    "Diagnóza vyjadrená kódom z MKCH10, ktorú má pacient po vyšetrení, resp. pri ukončení hospitalizácie. Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Diagnoza.v1}",
                                header: true,
                                items: [
                                    {
                                        question: "Kód diagnózy",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/items[at0103.7]/parts[at0104]/parts[at0007]",
                                        questionCode: "at0007",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/items[at0103.7]/parts[at0104]/parts[at0007]/value[at0010]/codeValue",
                                        answers: [{text: " "}],
                                        codingInstructions:
                                            "Diagnóza vyjadrená kódom z MKCH10, ktorá je stanovená pacientovi v rámci diagnostického záveru. ",
                                        header: false,
                                    },
                                    {
                                        question: "Upresnenie",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/items[at0103.7]/parts[at0104]/parts[at0008]",
                                        questionCode: "at0008",
                                        questionCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        attPath:
                                            "/items[at0103.7]/parts[at0104]/parts[at0008]/value[at0012]/originalText",
                                        codingInstructions:
                                            'Upresnenie diagnózy formou voľného textu. Pre vyplnenie upresnenia je nevyhnutné zaznamenať diagnostický záver v rámci \\\\\\\\\\\\\\\\\\"kódu diagnózy\\\\\\\\\\\\\\\\\\"',
                                        header: false,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        question: "Urgentnosť vyšetrenia",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0117]",
                        questionCode: "at0117",
                        questionCardinality: {
                            min: "1",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "1",
                            max: "1",
                        },
                        attPath: "/items[at0117]/value[at0118.10]/codeValue",
                        answers: [{text: " "}],
                        codingInstructions:
                            "Urgentnosť vyšetrenia. Odkaz na číselník, obsahujúci stupne urgentnosti resp. naliehavosti vyšetrenia.",
                        header: false,
                    },
                    {
                        question: "Požiadavka na vyšetrenie",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0999]",
                        questionCode: "at0999",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0999]/value[at0998]/extension",
                        codingInstructions:
                            "Odkaz (link) na „Odporúčané vyšetrenie“ (id. výmenného lístka), ktorým je vyšetrenie požadované. Vyplnením tohto atribútu môže autor výmenného lístka pristúpiť k výsledku zdravotného záznamu. ",
                        header: false,
                    },
                    {
                        question: "Názov vyšetrenia",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.34]",
                        questionCode: "at0.34",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0.34]/value[at0.39]/originalText",
                        codingInstructions:
                            "Názov vyšetrenia prostredníctvom, ktorého bude možné vyšetrenie neskôr vyhľadať.",
                        header: false,
                    },
                    {
                        question: "Interná poznámka",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.50]",
                        questionCode: "at0.50",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0.50]/value[at0.55]/originalText",
                        codingInstructions:
                            "Časť zdravotnej dokumentácie, do ktorej lekár môže uviesť popis, ktorý bude zdieľaný medzi zdravotníckymi pracovníkmi ale nebude prístupný pacientovi ani po prihlásení sa do elektronickej zdravotnej knižky.",
                        header: false,
                    },
                    {
                        question: "Modalita zobrazovacieho vyšetrenia",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0105]",
                        questionCode: "at0105",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0105]/value[at0106]/originalText",
                        codingInstructions:
                            "Kód modality zobrazovacieho vyšetrenia.\r\nCT; RTG; NMR; MRI; SPECT; PET; ECG; EEG; US; MEG; DSA; NIRS; OCT'; EIT; ...\r\n",
                        header: false,
                    },
                    {
                        question: "Modalita zobrazovacieho vyšetrenia CV",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0107]",
                        questionCode: "at0107",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0107]/value[at0110]/codeValue",
                        answers: [{text: " "}],
                        codingInstructions:
                            "Modalita zobrazovacieho vyšetrenia odkazom na číselník modalít",
                        header: false,
                    },
                    {
                        question: "Vyšetrovaný orgán",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0064]",
                        questionCode: "at0064",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0064]/value[at0065]/codeValue",
                        answers: [{text: " "}],
                        codingInstructions:
                            "Orgán resp. oblasť tela, ktorá bola vyšetrená.",
                        header: false,
                    },
                    {
                        question: "Popis",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0011]",
                        questionCode: "at0011",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "",
                        codingInstructions:
                            "Sumarizácia výsledku (popis) zobrazovacieho vyšetrenia. Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Textovy_popis.v1}",
                        header: true,
                        items: [
                            {
                                question: "Text",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0011]/parts[at0000]",
                                questionCode: "at0000",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0011]/parts[at0000]/value[at0005]/originalText",
                                codingInstructions:
                                    "Zápis záznamu prostredníctvom dátového typu SIMPLE TEXT",
                                header: false,
                            },
                            {
                                question: "Text HTML",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0011]/parts[at0002]",
                                questionCode: "at0002",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0011]/parts[at0002]/value[at0006]/originalText",
                                codingInstructions:
                                    "Zápis záznamu prostredníctvom dátového typu HTML TEXTu",
                                header: false,
                            },
                        ],
                    },
                    {
                        question: "Odosielajúci lekár",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0200]",
                        questionCode: "at0200",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "",
                        codingInstructions:
                            "Lekár, ktorý pacienta na vyšetrenie odoslal. Odkaz na archetyp Zdravotnicky_pracovnik_odborneho_utvaru. \r\nInformácie o odoslaní vyplní ošetrujúci lekár v prípade, že bol pacient k nemu odoslaný na základe papierového výmenného lístka. Údaje lekár prepíše z údajov uvedených na VL. V prípade vyšetrenia na základe elektronického VL naplní len identifikátor VL, na základe ktorého bolo vyšetrenie vykonané. Údaje o odoslaní v tomto prípade nemusí vypĺňaťť \r\n(ALTERNATIVA – IS PZS ich naplní z údajov o VL.)  Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Zdravotnicky_pracovnik_odborneho_utvaru.v1}",
                        header: true,
                        items: [
                            {
                                question: "Identifikácia ZPrac",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0200]/parts[at0014]",
                                questionCode: "at0014",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath: "/items[at0200]/parts[at0014]/value[at0019]/extension",
                                codingInstructions:
                                    "Identifikácia zdravotníckeho pracovníka v JRÚZ.",
                                header: false,
                            },
                            {
                                question: "Identifikácia OÚ PZS",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0200]/parts[at0015]",
                                questionCode: "at0015",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/items[at0200]/parts[at0015]/value[at0020]/extension",
                                codingInstructions:
                                    "Identifikácia odborného útvaru poskytovateľa zdravotnej starostlivosti z JRÚZ, do ktorého zdravotnícky pracovník patrí.",
                                header: false,
                            },
                            {
                                question: "Špecializácia lekára",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0200]/parts[at0016]",
                                questionCode: "at0016",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath: "/items[at0200]/parts[at0016]/value[at0021]/codeValue",
                                answers: [{text: " "}],
                                codingInstructions:
                                    "Šprecializácia tohto lekára, pod ktoru prebehla operácia, ktorú daný lekár vykonával.",
                                header: false,
                            },
                            {
                                question: "Nezmluvný lekár",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0200]/parts[at0017]",
                                questionCode: "at0017",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "CNE",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/items[at0200]/parts[at0017]/value[at0022]/value",
                                answers: [{text: "True"}, {text: "False"}],
                                codingInstructions:
                                    "Doplňujúci atribút, ktorý sa použije na prenos informácie, že daný zdravotnícky pracovník - lekár, nemal pri svojom úkone zmluvný vzťah k poisťovni pacienta a teda, že tento úkon si bude hradiť pacient. Použije sa napríklad pri predpisovaní liekov.",
                                header: false,
                            },
                        ],
                    },
                    {
                        question: "Diagnóza pri odoslaní",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0111]",
                        questionCode: "at0111",
                        questionCardinality: {
                            min: "0",
                            max: "*",
                        },
                        dataType: "",
                        codingInstructions:
                            "Odkaz na diagnózy, ktoré boli zistené pri odosielaní pacienta, resp. kvôli ktorým bol pacient prijatý. Informácie o odoslaní vyplní ošetrujúci lekár v prípade, že pacienta prijal na základe papierového výmenného lístka. Údaje lekár prepíše z údajov uvedených na VL. V prípade vyšetrenia na základe elektronického VL údaje o odoslaní naplní IS PZS z údajov na VL.  Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Diagnoza.v1}",
                        header: true,
                        items: [
                            {
                                question: "Kód diagnózy",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0111]/parts[at0026]",
                                questionCode: "at0026",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath: "/items[at0111]/parts[at0026]/value[at0029]/codeValue",
                                answers: [{text: " "}],
                                codingInstructions:
                                    "Diagnóza vyjadrená kódom z MKCH10, ktorá je stanovená pacientovi v rámci diagnostického záveru. ",
                                header: false,
                            },
                            {
                                question: "Upresnenie",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0111]/parts[at0027]",
                                questionCode: "at0027",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0111]/parts[at0027]/value[at0030]/originalText",
                                codingInstructions:
                                    'Upresnenie diagnózy formou voľného textu. Pre vyplnenie upresnenia je nevyhnutné zaznamenať diagnostický záver v rámci \\\\\\\\\\\\\\\\\\"kódu diagnózy\\\\\\\\\\\\\\\\\\"',
                                header: false,
                            },
                        ],
                    },
                    {
                        question: "Zmena stavu záznamu",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0500]",
                        questionCode: "at0500",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "",
                        codingInstructions:
                            "Definuje štruktúru auditných informácií o zmene stavu záznamu. Slúži len pre čítacie služby v prípade, že daný záznam bol editovaný lekárom (potvrdil klinický záver/ vykonal storno záznamu)  Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Zmena_stavu_zaznamu.v1}",
                        header: true,
                        items: [
                            {
                                question: "Čas zmeny stavu",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0500]/parts[at0032]",
                                questionCode: "at0032",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath: "/items[at0500]/parts[at0032]/value[at0036]/time",
                                codingInstructions: "Dátum a čas vykonania zmeny stavu",
                                header: false,
                            },
                            {
                                question: "Dôvod zmeny stavu",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0500]/parts[at0033]",
                                questionCode: "at0033",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0500]/parts[at0033]/value[at0037]/originalText",
                                codingInstructions:
                                    "Zdôvodnenie vykonania zmeny stavu pre auditné účely. Využíva sa len pri úkone storno záznamu, pri iných typoch záznamu dôvod nemusí byť uvádzaný. ",
                                header: false,
                            },
                            {
                                question: "CLUSTER",
                                original_type: "CLUSTER",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0500]/parts[at0034]",
                                questionCode: "at0034",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "",
                                codingInstructions: "",
                                header: true,
                                items: [
                                    {
                                        question: "Identifikácia ZPrac",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/items[at0500]/parts[at0034]/parts[at0038]",
                                        questionCode: "at0038",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/items[at0500]/parts[at0034]/parts[at0038]/value[at0043]/extension",
                                        codingInstructions:
                                            "Identifikácia zdravotníckeho pracovníka v JRÚZ.",
                                        header: false,
                                    },
                                    {
                                        question: "Identifikácia OÚ PZS",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/items[at0500]/parts[at0034]/parts[at0039]",
                                        questionCode: "at0039",
                                        questionCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        dataType: "",
                                        answerCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        attPath:
                                            "/items[at0500]/parts[at0034]/parts[at0039]/value[at0044]/extension",
                                        codingInstructions:
                                            "Identifikácia odborného útvaru poskytovateľa zdravotnej starostlivosti z JRÚZ, do ktorého zdravotnícky pracovník patrí.",
                                        header: false,
                                    },
                                    {
                                        question: "Špecializácia lekára",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/items[at0500]/parts[at0034]/parts[at0040]",
                                        questionCode: "at0040",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/items[at0500]/parts[at0034]/parts[at0040]/value[at0045]/codeValue",
                                        answers: [{text: " "}],
                                        codingInstructions:
                                            "Šprecializácia tohto lekára, pod ktoru prebehla operácia, ktorú daný lekár vykonával.",
                                        header: false,
                                    },
                                    {
                                        question: "Nezmluvný lekár",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/items[at0500]/parts[at0034]/parts[at0041]",
                                        questionCode: "at0041",
                                        questionCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        dataType: "CNE",
                                        answerCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        attPath:
                                            "/items[at0500]/parts[at0034]/parts[at0041]/value[at0046]/value",
                                        answers: [{text: "True"}, {text: "False"}],
                                        codingInstructions:
                                            "Doplňujúci atribút, ktorý sa použije na prenos informácie, že daný zdravotnícky pracovník - lekár, nemal pri svojom úkone zmluvný vzťah k poisťovni pacienta a teda, že tento úkon si bude hradiť pacient. Použije sa napríklad pri predpisovaní liekov.",
                                        header: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    prepustaciSprava: {
        dataId: "0AA3C8E2-A7FF-4AC1-929D-580A8F0B29AF",
        type: "AT",
        name: "CEN-EN13606-ENTRY.Zaznam_o_vysetreni-Lekarska_prepustacia_sprava.v6",
        code: "at0000.1",
        template: "en",
        items: [
            {
                original_name:
                    "CEN-EN13606-ENTRY.Zaznam_o_vysetreni-Lekarska_prepustacia_sprava.v6",
                standard: "CEN",
                question:
                    "Záznam o vyšetrení- Specialization: Lekárska prepúšťacia správa",
                original_type: "ENTRY",
                questionCardinality: {
                    min: "1",
                    max: "1",
                },
                dataType: "",
                header: true,
                answers: "",
                units: "",
                questionCode: "at0000.1",
                items: [
                    {
                        question: "Dátum a čas odoslania",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0101]",
                        questionCode: "at0101",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0101]/value[at0102]/time",
                        codingInstructions:
                            "Dátum a čas, kedy bol pacient odoslaný na vyšetrenie.\r\nInformácie o odoslaní vyplní nemocnica/ kúpele v prípade, že bol pacient do ústavnej ZS odoslaný na základe odporúčania na ústavnu ZS iba prostredníctvom papierového výmenného lístka a neexistuje elektronický výmenný lístok. Údaje lekár prepíše z papierových podkladov do IS. V prípade vyšetrenia na základe elektronického výmenného lístka naplní len identifikátor odporúčania na ZS, na základe ktorého bol pacient hospitalizovaný. Údaje o odoslaní v tomto prípade nevypĺňa (ALTERNATIVA – IS PZS ich naplní z udajov na odporúčaní).",
                        header: false,
                    },
                    {
                        question: "Anamnéza",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.2]",
                        questionCode: "at0.2",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0.2]/value[at0.3]/originalText",
                        codingInstructions:
                            "Údaje o zdravotnom stave pacienta a jeho pokrvných príbuzných pred prijatím pacienta do ústavnej starostlivosti. \r\n",
                        header: false,
                    },
                    {
                        question: "Dátum a čas prepustenia",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.4]",
                        questionCode: "at0.4",
                        questionCardinality: {
                            min: "1",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "1",
                            max: "1",
                        },
                        attPath: "/items[at0.4]/value[at0.5]/time",
                        codingInstructions:
                            "Dátum a čas kedy bol pacient prepustený z ústavnej starostlivosti (nemocnica/ kúpele).",
                        header: false,
                    },
                    {
                        question: "Dátum a čas prijatia",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.7]",
                        questionCode: "at0.7",
                        questionCardinality: {
                            min: "1",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "1",
                            max: "1",
                        },
                        attPath: "/items[at0.7]/value[at0.8]/time",
                        codingInstructions:
                            "Dátum a čas, kedy bol pacient prijatý do ústavnej straostlivosti. V prípade prekladu pacienta v rámci jedného zariadenia je uvedený dátum prvotného prijatia do zariadenia.",
                        header: false,
                    },
                    {
                        question: "Epikríza",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.9]",
                        questionCode: "at0.9",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0.9]/value[at0.10]/originalText",
                        codingInstructions:
                            "Písomné zhodnotenie priebehu hospitalizácie počnúc dôvodmi prijatia cez všetky liečebné procedúry až po konečný záver a odporúčanie liečby a ďalšieho postupu.  Môže obsahovať aj stanovisko k predchorobiu. ",
                        header: false,
                    },
                    {
                        question: "Objektívny nález",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.13]",
                        questionCode: "at0.13",
                        questionCardinality: {
                            min: "1",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "1",
                            max: "1",
                        },
                        attPath: "/items[at0.13]/value[at0.14]/originalText",
                        codingInstructions:
                            "Objektívny nález zistený počas vyšetrenia pacienta. Popisuje klinický pohľad lekára na pacienta s minimálnym využitím technologického vybavenia.\r\nPopis je štruktúrovaný podľa miestnych zvyklostí.\r\nPozn: ak existuje terajšie ochorenia ,potom je vhodné zadať aj  objektívny nález a výsledok vykonaného vyšetrenia.\r\n ",
                        header: false,
                    },
                    {
                        question: "Odporúčanie",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.15]",
                        questionCode: "at0.15",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0.15]/value[at0.16]/originalText",
                        codingInstructions:
                            "Odporúčanie ďalšieho postupu, resp. odporúčanie ďalšej liečby pacientovi. ",
                        header: false,
                    },
                    {
                        question: "Terajšie ochorenie",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.19]",
                        questionCode: "at0.19",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0.19]/value[at0.20]/originalText",
                        codingInstructions:
                            "Subjektívne údaje pacienta alebo objektívne údaje jeho okolia o vzniku príznakoch a priebehu terajšieho ochorenia zapísané voľným textom. Môže obsahovať aj stručný popis predchorobia vo vzťahu k terajšiemu ochoreniu. \r\n\r\nOdporúčanie:  \r\nAk existuje terajšie ochorenia ,potom je odporúčané zadať aj  objektívny nález a výsledok vykonaného vyšetrenia ",
                        header: false,
                    },
                    {
                        question: "Záver pri prijatí",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.23]",
                        questionCode: "at0.23",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0.23]/value[at0.24]/originalText",
                        codingInstructions:
                            "Slovný popis diagnostického záveru pri prijatí pacienta. Stručné zhodnotenie zdravotného stavu pacienta a je doplňujúca k diagnóze pri odoslaní (po prijatí). Atribút je povinný vyplniť ošetrujúci lekár.  ",
                        header: false,
                    },
                    {
                        question: "Operačné výkony",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.31]",
                        questionCode: "at0.31",
                        questionCardinality: {
                            min: "0",
                            max: "*",
                        },
                        dataType: "",
                        codingInstructions:
                            "Operačné výkony, ktoré boli vykonané počas hospitalizácie. Sú tvorené popisom. Nejedná sa o záznam v operačnej knihe, jedná sa len o stručný popis najdôležitejších operácií počas hospitalizácie. ",
                        header: true,
                        items: [
                            {
                                question: "Popis",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0.31]/parts[at0.42]",
                                questionCode: "at0.42",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0.31]/parts[at0.42]/value[at0.44]/originalText",
                                codingInstructions: "Popis operačného zákroku\r\n",
                                header: false,
                            },
                        ],
                    },
                    {
                        question: "Diagnostický záver",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0103.17]",
                        questionCode: "at0103.17",
                        questionCardinality: {
                            min: "0",
                            max: "*",
                        },
                        dataType: "",
                        codingInstructions:
                            "Informácie ohľadom diagnóz, ktoré má pacient pri ukončení hospitalizácie (diagnóza pri prepustení). Diagnózu je možné definovať výberom diagnózy z číselníka (MKCH10) s doplnením slovného popisu diagnózy. Tiež je možné definovať hlavnú aj život ovplyvňujúcu diagnózu. Správa obsahuje práve jednu hlavnú diagnózu.",
                        header: true,
                        items: [
                            {
                                question: "Hlavná diagnóza",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0103.17]/parts[at0108]",
                                questionCode: "at0108",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "CNE",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/items[at0103.17]/parts[at0108]/value[at0109]/value",
                                answers: [{text: "True"}, {text: "False"}],
                                codingInstructions:
                                    "Príznak, že daná diagnóza je hlavná. Správa obsahuje práve jednu hlavnú diagnózu.",
                                header: false,
                            },
                            {
                                question: "Život ovplyvňujúca diagnóza",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0103.17]/parts[at0008]",
                                questionCode: "at0008",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "CNE",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/items[at0103.17]/parts[at0008]/value[at0010]/value",
                                answers: [{text: "True"}, {text: "False"}],
                                codingInstructions:
                                    "Príznak život ovplyvňujúcej diagnózy. Zaškrtnutím tohto priznáku je diagnóza automaticky zobrazená aj v pacientskom sumári. Príznak je potrebné zaškrnúť ak diagnóza bola stanovená v rámci zoznamu chorôb určených výhláškou MZ SR. ",
                                header: false,
                            },
                            {
                                question: "Diagnóza",
                                original_type: "CLUSTER",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0103.17]/parts[at0104]",
                                questionCode: "at0104",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "",
                                codingInstructions:
                                    "Diagnóza vyjadrená kódom z MKCH10, ktorú má pacient po vyšetrení, resp. pri ukončení hospitalizácie. Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Diagnoza.v1}",
                                header: true,
                                items: [
                                    {
                                        question: "Kód diagnózy",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/items[at0103.17]/parts[at0104]/parts[at0029]",
                                        questionCode: "at0029",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/items[at0103.17]/parts[at0104]/parts[at0029]/value[at0032]/codeValue",
                                        answers: [{text: " "}],
                                        codingInstructions:
                                            "Diagnóza vyjadrená kódom z MKCH10, ktorá je stanovená pacientovi v rámci diagnostického záveru. ",
                                        header: false,
                                    },
                                    {
                                        question: "ELEMENT",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/items[at0103.17]/parts[at0104]/parts[at0030]",
                                        questionCode: "at0030",
                                        questionCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        attPath:
                                            "/items[at0103.17]/parts[at0104]/parts[at0030]/value[at0033]/originalText",
                                        codingInstructions: "This is a ELEMENT object",
                                        header: false,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        question: "Medikácia",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.71]",
                        questionCode: "at0.71",
                        questionCardinality: {
                            min: "0",
                            max: "*",
                        },
                        dataType: "",
                        codingInstructions:
                            "Zdravotnícky pracovník, s možnosťou zápisu medikačného záznamu zapíše podané lieky volaním služby ZapisMedikacnyZaznam a uvedie identifikátory medikačných záznamov v „Medikačný záznam“.\r\nAlternatívou je, že zdravotnícky pracovník, zapíše informáciu o podaných liekoch ako popisom v časti „Popis Medikácie“. ",
                        header: true,
                        items: [
                            {
                                question: "Medikačný záznam",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0.71]/parts[at0.74]",
                                questionCode: "at0.74",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/items[at0.71]/parts[at0.74]/value[at0.76]/extension",
                                codingInstructions:
                                    "Identifikátor medikačného záznamu, ktorý vznikol na základe zápisu medikačného záznamu prostredníctvom sluzby ZapisMedikacnyZaznam. Tento identifikator nie je povinný. V prípade, že lekár zapisuje len popisnú medikáciu zaznamená ju do popisu medikácie. ",
                                header: false,
                            },
                            {
                                question: "Popis medikácie",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0.71]/parts[at0.79]",
                                questionCode: "at0.79",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0.71]/parts[at0.79]/value[at0.81]/originalText",
                                codingInstructions:
                                    "Slovný popis medikácie pacienta. \r\nObsahuje podané lieky(liečivo), množstvo, cestu podania  a môže obsahovať aj ťažkosti spojené s medikáciou.",
                                header: false,
                            },
                        ],
                    },
                    {
                        question: "Urgentnosť vyšetrenia",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.6]",
                        questionCode: "at0.6",
                        questionCardinality: {
                            min: "1",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "1",
                            max: "1",
                        },
                        attPath: "/items[at0.6]/value[at0.11]/codeValue",
                        answers: [{text: " "}],
                        codingInstructions:
                            "Urgentnosť vyšetrenia. \r\nOdkaz na číselník, obsahujúci stupne urgentnosti resp. naliehavosti vyšetrenia. Stanovuje urgentnosť hospitalizácie, ktorá závisí od spôsobu hospitalizácie pacienta. Pre plánovanú hospitalizáciu je možné automaticky generovať hodnotu „bežné“\r\nHodnota „urgentné“ odporúčame generovať iba pri type správy keď došlo k príjmu na základe urgentného príjmu ",
                        header: false,
                    },
                    {
                        question: "Požiadavka na vyšetrenie",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0999]",
                        questionCode: "at0999",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0999]/value[at0998]/extension",
                        codingInstructions:
                            "Odkaz (link) na „Odporúčané vyšetrenie“ (id. výmenného lístka), ktorým je vyšetrenie požadované. Vyplnením tohto atribútu môže autor výmenného lístka pristúpiť k výsledku zdravotného záznamu. Pole je vyplňnané automaticky IS PZS na pozadí systému. ",
                        header: false,
                    },
                    {
                        question: "Názov vyšetrenia",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.34]",
                        questionCode: "at0.34",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0.34]/value[at0.39]/originalText",
                        codingInstructions:
                            "Názov vyšetrenia prostredníctvom, ktorého bude možné vyšetrenie neskôr vyhľadať",
                        header: false,
                    },
                    {
                        question: "Interná poznámka",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.50]",
                        questionCode: "at0.50",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0.50]/value[at0.55]/originalText",
                        codingInstructions:
                            "Časť zdravotnej dokumentácie, do ktorej môže uviesť popis, ktorý bude zdielaný medzi zdravotníckymi pracovníkmi ale nebude prístupný pacientovi ani po prihlásení sa do elektronickej zdravotnej knižky.",
                        header: false,
                    },
                    {
                        question: "Identifikátor hospitalizačného prípadu",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.12]",
                        questionCode: "at0.12",
                        questionCardinality: {
                            min: "0",
                            max: "*",
                        },
                        dataType: "ST",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0.12]/value[at0.18]/originalText",
                        codingInstructions:
                            "DRG identifikátor hospitalizačného prípadu, ktorý bol pacientovi pridelený po prijatí do ústavnej starostivosti",
                        header: false,
                    },
                    {
                        question: "Predpokladaný dátum pôrodu",
                        original_type: "ELEMENT",
                        parent_type: "ENTRY",
                        objPath: "/items[at0012]",
                        questionCode: "at0012",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "DT",
                        answerCardinality: {
                            min: "0",
                            max: "1",
                        },
                        attPath: "/items[at0012]/value[at0013]/date",
                        codingInstructions: "Prepdokladaný dátum pôrodu pacientky. ",
                        header: false,
                    },
                    {
                        question: "Dávkovanie",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0014]",
                        questionCode: "at0014",
                        questionCardinality: {
                            min: "0",
                            max: "*",
                        },
                        dataType: "",
                        codingInstructions:
                            "V prípade predpísania lieku je povinná aspoň jedna dávkovacia schéma.\r\nV prípade podania lieku lekárom je povinná aspoň jedna dávkovacia schéma.\r\nV prípade výdaja lieku v lekárni je zakázané udávať dávkovaciu schému.",
                        header: true,
                        items: [
                            {
                                question: "Liečivo",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0014]/parts[at0015]",
                                questionCode: "at0015",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/items[at0014]/parts[at0015]/value[at0016]/codeValue",
                                answers: [{text: " "}],
                                codingInstructions:
                                    "Alergén - liečivo ak je zodpovedné za alergickú reakciu. Využívaný je číselník ATC skupín 1.3.158.00165387.100.10.83.",
                                header: false,
                            },
                            {
                                question: "Látka",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0014]/parts[at0018]",
                                questionCode: "at0018",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/items[at0014]/parts[at0018]/value[at0019]/codeValue",
                                answers: [{text: " "}],
                                codingInstructions:
                                    "Alergén - látka ak je zodpovedná za alergickú reakciu. Využívaný je číselník alergénov 1.3.158.00165387.100.10.158",
                                header: false,
                            },
                        ],
                    },
                    {
                        question: "Implantovaná zdravotnícka pomôcka",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0020]",
                        questionCode: "at0020",
                        questionCardinality: {
                            min: "0",
                            max: "*",
                        },
                        dataType: "",
                        codingInstructions:
                            "Zdravotná pomôcka implantovaná pacientovi počas hospitalizácie. Vpísanám tejto informácie je automaticky informácia o implantovanej zdravotnej pomôcke zasielaná do pacientského sumáru. ",
                        header: true,
                        items: [
                            {
                                question: "Druh",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0020]/parts[at0024]",
                                questionCode: "at0024",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/items[at0020]/parts[at0024]/value[at0025]/codeValue",
                                answers: [{text: " "}],
                                codingInstructions:
                                    "Druhu zdravotníckej pomôcky alebo implantátu zavedeného pacientovi. Využíva sa číselník druhov zdravotníckych pomôcok a implantátov 1.3.158.00165387.100.10.126",
                                header: false,
                            },
                            {
                                question: "Popis zdravotníckej pomôcky",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0020]/parts[at0027]",
                                questionCode: "at0027",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0020]/parts[at0027]/value[at0028]/originalText",
                                codingInstructions:
                                    "Popis zdravotnej pomôcky v prípade, že nebol dohľadaný druh ZP v číselníku.",
                                header: false,
                            },
                        ],
                    },
                    {
                        question: "Výsledok vykonaného vyšetrenia",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0.21]",
                        questionCode: "at0.21",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "",
                        codingInstructions:
                            "Voľným textom popísaný objektívny nález ako aj zhodnotenie laboratórnych výsledkov, zobrazovacích a konziliárnych vyšetrení v čase zápisu LPS dostupných voľným popisným textom vo formáte Text alebo HTML.\r\n\r\nOdporúčanie:  \r\nAk existuje terajšie ochorenia ,potom je povinné zadať aj  objektívny nález a výsledok vykonaného vyšetrenia Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Textovy_popis.v1}",
                        header: true,
                        items: [
                            {
                                question: "Text",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0.21]/parts[at0003]",
                                questionCode: "at0003",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0.21]/parts[at0003]/value[at0021]/originalText",
                                codingInstructions:
                                    "Zápis záznamu prostredníctvom dátového typu SIMPLE TEXT",
                                header: false,
                            },
                            {
                                question: "Text HTML",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0.21]/parts[at0004]",
                                questionCode: "at0004",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0.21]/parts[at0004]/value[at0023]/originalText",
                                codingInstructions:
                                    "Zápis záznamu prostredníctvom dátového typu HTML TEXTu",
                                header: false,
                            },
                        ],
                    },
                    {
                        question: "Odosielajúci lekár",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0200]",
                        questionCode: "at0200",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "",
                        codingInstructions:
                            "Lekár, ktorý pacienta na vyšetrenie odoslal. Archetyp Zdravotnicky_pracovnik_odborneho_utvaru. Informácie o odoslaní vyplní nemocnica v prípade, že bol pacient do ústavnej ZS odoslaný na základe papierového odporúčania na ústavnu ZS a toto odporúčanie neexistuje ako elektronické odporúčanie. Údaje lekár prepíše z papierových podkladov do IS. V prípade vyšetrenia na základe elektronického odporúčania naplní len identifikátor odporúčania na ZS, na základe ktorého bol pacient hospitalizovaný. Údaje o odoslaní v tomto prípade nevypĺňa (ALTERNATIVA – IS PZS ich naplní z udajov na odporúčaní). Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Zdravotnicky_pracovnik_odborneho_utvaru.v1}",
                        header: true,
                        items: [
                            {
                                question: "Identifikácia ZPrac",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0200]/parts[at0035]",
                                questionCode: "at0035",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath: "/items[at0200]/parts[at0035]/value[at0040]/extension",
                                codingInstructions:
                                    "Identifikácia zdravotníckeho pracovníka v JRÚZ.",
                                header: false,
                            },
                            {
                                question: "Identifikácia OÚ PZS",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0200]/parts[at0036]",
                                questionCode: "at0036",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/items[at0200]/parts[at0036]/value[at0041]/extension",
                                codingInstructions:
                                    "Identifikácia odborného útvaru poskytovateľa zdravotnej starostlivosti z JRÚZ, do ktorého zdravotnícky pracovník patrí.",
                                header: false,
                            },
                            {
                                question: "ELEMENT",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0200]/parts[at0037]",
                                questionCode: "at0037",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath: "/items[at0200]/parts[at0037]/value[at0042]/codeValue",
                                answers: [{text: " "}],
                                codingInstructions: "This is a ELEMENT object",
                                header: false,
                            },
                            {
                                question: "Nezmluvný lekár",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0200]/parts[at0038]",
                                questionCode: "at0038",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "CNE",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/items[at0200]/parts[at0038]/value[at0043]/value",
                                answers: [{text: "True"}, {text: "False"}],
                                codingInstructions:
                                    "Doplňujúci atribút, ktorý sa použije na prenos informácie, že daný zdravotnícky pracovník - lekár, nemal pri svojom úkone zmluvný vzťah k poisťovni pacienta a teda, že tento úkon si bude hradiť pacient. Použije sa napríklad pri predpisovaní liekov.",
                                header: false,
                            },
                        ],
                    },
                    {
                        question: "Odborný zástupca",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0002]",
                        questionCode: "at0002",
                        questionCardinality: {
                            min: "1",
                            max: "1",
                        },
                        dataType: "",
                        codingInstructions:
                            "Fyzická osoba, ktorá osobne zodpovedá za odborné poskytnutie zdravotnej starostlivosti. Archetyp Zdravotnicky_pracovnik_odborneho_utvaru.  Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Zdravotnicky_pracovnik_odborneho_utvaru.v1}",
                        header: true,
                        items: [
                            {
                                question: "ELEMENT",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0002]/parts[at0047]",
                                questionCode: "at0047",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath: "/items[at0002]/parts[at0047]/value[at0052]/extension",
                                codingInstructions: "This is a ELEMENT object",
                                header: false,
                            },
                            {
                                question: "Identifikácia OÚ PZS",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0002]/parts[at0048]",
                                questionCode: "at0048",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/items[at0002]/parts[at0048]/value[at0053]/extension",
                                codingInstructions:
                                    "Identifikácia odborného útvaru poskytovateľa zdravotnej starostlivosti z JRÚZ, do ktorého zdravotnícky pracovník patrí.",
                                header: false,
                            },
                            {
                                question: "Špecializácia lekára",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0002]/parts[at0049]",
                                questionCode: "at0049",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath: "/items[at0002]/parts[at0049]/value[at0054]/codeValue",
                                answers: [{text: " "}],
                                codingInstructions:
                                    "Šprecializácia tohto lekára, pod ktoru prebehla operácia, ktorú daný lekár vykonával.",
                                header: false,
                            },
                            {
                                question: "Nezmluvný lekár",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0002]/parts[at0050]",
                                questionCode: "at0050",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "CNE",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/items[at0002]/parts[at0050]/value[at0055]/value",
                                answers: [{text: "True"}, {text: "False"}],
                                codingInstructions:
                                    "Doplňujúci atribút, ktorý sa použije na prenos informácie, že daný zdravotnícky pracovník - lekár, nemal pri svojom úkone zmluvný vzťah k poisťovni pacienta a teda, že tento úkon si bude hradiť pacient. Použije sa napríklad pri predpisovaní liekov.",
                                header: false,
                            },
                        ],
                    },
                    {
                        question: "Diagnóza pri odoslaní",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0111]",
                        questionCode: "at0111",
                        questionCardinality: {
                            min: "0",
                            max: "*",
                        },
                        dataType: "",
                        codingInstructions:
                            "Odkaz na diagnózy, ktoré boli zistené pri odosielaní pacienta, resp. kvôli ktorým bol pacient prijatý. Informácie o odoslaní vyplní nemocnica v prípade, že bol pacient do ústavnej ZS prijatý na základe odporúčania na ústavnu ZS v papierovej forme a toto odporúčanie neexistuje ako elektronický výmenný lístok. Údaje lekár prepíše z údajov uvedených na odporúčaní. V prípade vyšetrenia na základe elektronického odporúčania údaje o odoslaní naplní IS PZS z údajov na odporúčaní.  Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Diagnoza.v1}",
                        header: true,
                        items: [
                            {
                                question: "Kód diagnózy",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0111]/parts[at0059]",
                                questionCode: "at0059",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath: "/items[at0111]/parts[at0059]/value[at0062]/codeValue",
                                answers: [{text: " "}],
                                codingInstructions:
                                    "Diagnóza vyjadrená kódom z MKCH10, ktorá je stanovená pacientovi v rámci diagnostického záveru. ",
                                header: false,
                            },
                            {
                                question: "Upresnenie",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0111]/parts[at0060]",
                                questionCode: "at0060",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0111]/parts[at0060]/value[at0063]/originalText",
                                codingInstructions:
                                    'Upresnenie diagnózy formou voľného textu. Pre vyplnenie upresnenia je nevyhnutné zaznamenať diagnostický záver v rámci \\\\\\\\\\\\\\\\\\"kódu diagnózy\\\\\\\\\\\\\\\\\\"',
                                header: false,
                            },
                        ],
                    },
                    {
                        question: "Zmena stavu záznamu",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0500]",
                        questionCode: "at0500",
                        questionCardinality: {
                            min: "0",
                            max: "1",
                        },
                        dataType: "",
                        codingInstructions:
                            "Definuje štruktúru auditných informácií o zmene stavu záznamu. Slúži len pre čítacie služby v prípade, že daný záznam bol editovaný lekárom (potvrdil klinický záver/ vykonal storno záznamu)  Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Zmena_stavu_zaznamu.v1}",
                        header: true,
                        items: [
                            {
                                question: "Čas zmeny stavu",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0500]/parts[at0065]",
                                questionCode: "at0065",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath: "/items[at0500]/parts[at0065]/value[at0069]/time",
                                codingInstructions: "Dátum a čas vykonania zmeny stavu",
                                header: false,
                            },
                            {
                                question: "Dôvod zmeny stavu",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0500]/parts[at0066]",
                                questionCode: "at0066",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0500]/parts[at0066]/value[at0070]/originalText",
                                codingInstructions:
                                    "Zdôvodnenie vykonania zmeny stavu pre auditné účely. Využíva sa len pri úkone storno záznamu, pri iných typoch záznamu dôvod nemusí byť uvádzaný. ",
                                header: false,
                            },
                            {
                                question: "CLUSTER",
                                original_type: "CLUSTER",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0500]/parts[at0067]",
                                questionCode: "at0067",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "",
                                codingInstructions: "",
                                header: true,
                                items: [
                                    {
                                        question: "Identifikácia ZPrac",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/items[at0500]/parts[at0067]/parts[at0546]",
                                        questionCode: "at0546",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/items[at0500]/parts[at0067]/parts[at0546]/value[at0551]/extension",
                                        codingInstructions:
                                            "Identifikácia zdravotníckeho pracovníka v JRÚZ.",
                                        header: false,
                                    },
                                    {
                                        question: "Identifikácia OÚ PZS",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/items[at0500]/parts[at0067]/parts[at0547]",
                                        questionCode: "at0547",
                                        questionCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        dataType: "",
                                        answerCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        attPath:
                                            "/items[at0500]/parts[at0067]/parts[at0547]/value[at0552]/extension",
                                        codingInstructions:
                                            "Identifikácia odborného útvaru poskytovateľa zdravotnej starostlivosti z JRÚZ, do ktorého zdravotnícky pracovník patrí.",
                                        header: false,
                                    },
                                    {
                                        question: "Špecializácia lekára",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/items[at0500]/parts[at0067]/parts[at0548]",
                                        questionCode: "at0548",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/items[at0500]/parts[at0067]/parts[at0548]/value[at0553]/codeValue",
                                        answers: [{text: " "}],
                                        codingInstructions:
                                            "Šprecializácia tohto lekára, pod ktoru prebehla operácia, ktorú daný lekár vykonával.",
                                        header: false,
                                    },
                                    {
                                        question: "Nezmluvný lekár",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/items[at0500]/parts[at0067]/parts[at0549]",
                                        questionCode: "at0549",
                                        questionCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        dataType: "CNE",
                                        answerCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        attPath:
                                            "/items[at0500]/parts[at0067]/parts[at0549]/value[at0554]/value",
                                        answers: [{text: "True"}, {text: "False"}],
                                        codingInstructions:
                                            "Doplňujúci atribút, ktorý sa použije na prenos informácie, že daný zdravotnícky pracovník - lekár, nemal pri svojom úkone zmluvný vzťah k poisťovni pacienta a teda, že tento úkon si bude hradiť pacient. Použije sa napríklad pri predpisovaní liekov.",
                                        header: false,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        question: "Príloha",
                        original_type: "CLUSTER",
                        parent_type: "ENTRY",
                        objPath: "/items[at0009]",
                        questionCode: "at0009",
                        questionCardinality: {
                            min: "0",
                            max: "*",
                        },
                        dataType: "",
                        codingInstructions:
                            "Obsahuje prílohu k záznamu o vyšetrení. Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Laboratorna_vzorka.v2}",
                        header: true,
                        items: [
                            {
                                question: "Kód dietetickej potraviny",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0009]/parts[at0536]",
                                questionCode: "at0536",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0009]/parts[at0536]/value[at0541]/originalText",
                                codingInstructions: "Kód pridelený dietetickej potravine MZ.",
                                header: false,
                            },
                            {
                                question: "Názov dietetickej potraviny",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0009]/parts[at0537]",
                                questionCode: "at0537",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0009]/parts[at0537]/value[at0542]/originalText",
                                codingInstructions: "Oficiálny názov dietetickej potraviny.",
                                header: false,
                            },
                            {
                                question: "ID dietetickej potraviny",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0009]/parts[at0538]",
                                questionCode: "at0538",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath: "/items[at0009]/parts[at0538]/value[at0543]/extension",
                                answers: [
                                    {
                                        text: "[  ::  ]",
                                        default: true,
                                    },
                                ],
                                codingInstructions:
                                    "Identifikátor dietetickej potraviny z registrov.",
                                header: false,
                            },
                            {
                                question: "Doplnok názvu",
                                original_type: "ELEMENT",
                                parent_type: "CLUSTER",
                                objPath: "/items[at0009]/parts[at0539]",
                                questionCode: "at0539",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath:
                                    "/items[at0009]/parts[at0539]/value[at0544]/originalText",
                                codingInstructions: "Doplnok názvu dietetickej potraviny.",
                                header: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    liekovaAnamneza: {
        dataId: "C5FFADFE-7C3A-4114-A294-78AF49561F68",
        type: "AT",
        name: "CEN-EN13606-COMPOSITION.Liekova_Anamneza.v1",
        code: "at0000",
        template: "en",
        items: [
            {
                original_name: "CEN-EN13606-COMPOSITION.Liekova_Anamneza.v1",
                standard: "CEN",
                question: "Lieková Anamnéza",
                original_type: "COMPOSITION",
                questionCardinality: {
                    min: "1",
                    max: "1",
                },
                dataType: "",
                header: true,
                answers: "",
                units: "",
                questionCode: "at0000",
                items: [
                    {
                        question: "Lieková Anamnéza",
                        original_type: "ENTRY",
                        parent_type: "COMPOSITION",
                        objPath: "/content[at0001]",
                        questionCode: "at0001",
                        questionCardinality: {
                            min: "0",
                            max: "*",
                        },
                        dataType: "",
                        codingInstructions:
                            "Lieková Anamnéza pacienta určená pre Pacienstsky sumár, je využívaná výhradne len pre čítacie služby ako EHR extrakt, pre zápisové služby nie je používaný. Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-ENTRY.Liekova_Anamneza.v1}",
                        header: true,
                        items: [
                            {
                                question: "Aktívny Od",
                                original_type: "ELEMENT",
                                parent_type: "ENTRY",
                                objPath: "/content[at0001]/items[at0002]",
                                questionCode: "at0002",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/content[at0001]/items[at0002]/value[at0012]/time",
                                codingInstructions:
                                    "Posledný známy začiatok užívania lieku (Výdaj lieku v lekárni) alebo dátum podania.",
                                header: false,
                            },
                            {
                                question: "Množstvo",
                                original_type: "ELEMENT",
                                parent_type: "ENTRY",
                                objPath: "/content[at0001]/items[at0003]",
                                questionCode: "at0003",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "REAL",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath: "/content[at0001]/items[at0003]/value[at0013]/value",
                                interval: {
                                    min: "-1.797",
                                    max: "1.797",
                                },
                                codingInstructions:
                                    "Množstvo liečebného prostriedku alebo počet predpísaných balení liečebného prostriedku ",
                                header: false,
                            },
                            {
                                question: "Pôvod",
                                original_type: "ELEMENT",
                                parent_type: "ENTRY",
                                objPath: "/content[at0001]/items[at0004]",
                                questionCode: "at0004",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "CNE",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath:
                                    "/content[at0001]/items[at0004]/value[at0014]/originalText",
                                answers: [
                                    {text: "Na základe lekárskeho predpisu"},
                                    {text: "Podané lekárom"},
                                ],
                                codingInstructions:
                                    "Pôvod záznamu: Na základe lekárskeho predpisu, Podané lekárom",
                                header: false,
                            },
                            {
                                question: "ID záznamu",
                                original_type: "ELEMENT",
                                parent_type: "ENTRY",
                                objPath: "/content[at0001]/items[at0005]",
                                questionCode: "at0005",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "",
                                answerCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                attPath:
                                    "/content[at0001]/items[at0005]/value[at0015]/extension",
                                codingInstructions:
                                    "Identifikátor záznamu na základe, ktorého boli načítané informácie liekovej anamnézy do pacientského sumáru. ",
                                header: false,
                            },
                            {
                                question: "ATC",
                                original_type: "ELEMENT",
                                parent_type: "ENTRY",
                                objPath: "/content[at0001]/items[at0006]",
                                questionCode: "at0006",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "ST",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath:
                                    "/content[at0001]/items[at0006]/value[at0016]/codeValue",
                                answers: [{text: " "}],
                                codingInstructions:
                                    "ATC klasifikácia registrovaného lieku, ktorý bol predpísaný a je užívaný alebo bol priamo podaný.",
                                header: false,
                            },
                            {
                                question: "Popis Medikácie",
                                original_type: "ELEMENT",
                                parent_type: "ENTRY",
                                objPath: "/content[at0001]/items[at0011]",
                                questionCode: "at0011",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "",
                                answerCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                attPath:
                                    "/content[at0001]/items[at0011]/value[at0017]/originalText",
                                codingInstructions:
                                    "Textový popis medikácie, z lekárskej správy. Informácie o podaných liekoch, množstve a potiažach pri medikácii.",
                                header: false,
                            },
                            {
                                question: "Aktívny Od",
                                original_type: "CLUSTER",
                                parent_type: "ENTRY",
                                objPath: "/content[at0001]/items[at0007]",
                                questionCode: "at0007",
                                questionCardinality: {
                                    min: "1",
                                    max: "1",
                                },
                                dataType: "",
                                codingInstructions:
                                    "Posledný známy začiatok užívania lieku (Výdaj lieku v lekárni) alebo dátum podania.",
                                header: true,
                                items: [
                                    {
                                        question: "Názov",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0007]/parts[at0019]",
                                        questionCode: "at0019",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0007]/parts[at0019]/value[at0024]/originalText",
                                        codingInstructions: "This is a ELEMENT object",
                                        header: false,
                                    },
                                    {
                                        question: "Doplnok názvu",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0007]/parts[at0020]",
                                        questionCode: "at0020",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0007]/parts[at0020]/value[at0025]/originalText",
                                        codingInstructions: "This is a ELEMENT object",
                                        header: false,
                                    },
                                    {
                                        question: "ŠÚKL kód",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0007]/parts[at0021]",
                                        questionCode: "at0021",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0007]/parts[at0021]/value[at0026]/originalText",
                                        codingInstructions: "This is a ELEMENT object",
                                        header: false,
                                    },
                                    {
                                        question: "ID lieku",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0007]/parts[at0022]",
                                        questionCode: "at0022",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0007]/parts[at0022]/value[at0027]/extension",
                                        answers: [
                                            {
                                                text: "[  ::  ]",
                                                default: true,
                                            },
                                        ],
                                        codingInstructions: "This is a ELEMENT object",
                                        header: false,
                                    },
                                ],
                            },
                            {
                                question: "CLUSTER",
                                original_type: "CLUSTER",
                                parent_type: "ENTRY",
                                objPath: "/content[at0001]/items[at0008]",
                                questionCode: "at0008",
                                questionCardinality: {
                                    min: "0",
                                    max: "*",
                                },
                                dataType: "",
                                codingInstructions: "",
                                header: true,
                                items: [
                                    {
                                        question: "Názov",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0008]/parts[at0029]",
                                        questionCode: "at0029",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0008]/parts[at0029]/value[at0034]/originalText",
                                        codingInstructions: "This is a ELEMENT object",
                                        header: false,
                                    },
                                    {
                                        question: "Doplnok názvu",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0008]/parts[at0030]",
                                        questionCode: "at0030",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0008]/parts[at0030]/value[at0035]/originalText",
                                        codingInstructions: "This is a ELEMENT object",
                                        header: false,
                                    },
                                    {
                                        question: "ŠÚKL kód",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0008]/parts[at0031]",
                                        questionCode: "at0031",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0008]/parts[at0031]/value[at0036]/originalText",
                                        codingInstructions: "This is a ELEMENT object",
                                        header: false,
                                    },
                                    {
                                        question: "ID lieku",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0008]/parts[at0032]",
                                        questionCode: "at0032",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0008]/parts[at0032]/value[at0037]/extension",
                                        answers: [
                                            {
                                                text: "[  ::  ]",
                                                default: true,
                                            },
                                        ],
                                        codingInstructions: "This is a ELEMENT object",
                                        header: false,
                                    },
                                ],
                            },
                            {
                                question: "Množstvo",
                                original_type: "CLUSTER",
                                parent_type: "ENTRY",
                                objPath: "/content[at0001]/items[at0009]",
                                questionCode: "at0009",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "",
                                codingInstructions:
                                    "Množstvo liečebného prostriedku alebo počet predpísaných balení liečebného prostriedku ",
                                header: true,
                                items: [
                                    {
                                        question: "Kód diagnózy",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0009]/parts[at0039]",
                                        questionCode: "at0039",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0009]/parts[at0039]/value[at0042]/codeValue",
                                        answers: [{text: " "}],
                                        codingInstructions:
                                            "Diagnóza vyjadrená kódom z MKCH10, ktorá je stanovená pacientovi v rámci diagnostického záveru. ",
                                        header: false,
                                    },
                                    {
                                        question: "Upresnenie",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0009]/parts[at0040]",
                                        questionCode: "at0040",
                                        questionCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0009]/parts[at0040]/value[at0043]/originalText",
                                        codingInstructions:
                                            'Upresnenie diagnózy formou voľného textu. Pre vyplnenie upresnenia je nevyhnutné zaznamenať diagnostický záver v rámci \\\\\\\\\\\\\\\\\\"kódu diagnózy\\\\\\\\\\\\\\\\\\"',
                                        header: false,
                                    },
                                ],
                            },
                            {
                                question: "CLUSTER",
                                original_type: "CLUSTER",
                                parent_type: "ENTRY",
                                objPath: "/content[at0001]/items[at0010]",
                                questionCode: "at0010",
                                questionCardinality: {
                                    min: "0",
                                    max: "1",
                                },
                                dataType: "",
                                codingInstructions: "",
                                header: true,
                                items: [
                                    {
                                        question: "Identifikácia ZPrac",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0010]/parts[at0045]",
                                        questionCode: "at0045",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0010]/parts[at0045]/value[at0050]/extension",
                                        codingInstructions:
                                            "Identifikácia zdravotníckeho pracovníka v JRÚZ.",
                                        header: false,
                                    },
                                    {
                                        question: "Identifikácia OÚ PZS",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0010]/parts[at0046]",
                                        questionCode: "at0046",
                                        questionCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        dataType: "",
                                        answerCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0010]/parts[at0046]/value[at0051]/extension",
                                        codingInstructions:
                                            "Identifikácia odborného útvaru poskytovateľa zdravotnej starostlivosti z JRÚZ, do ktorého zdravotnícky pracovník patrí.",
                                        header: false,
                                    },
                                    {
                                        question: "Špecializácia lekára",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0010]/parts[at0047]",
                                        questionCode: "at0047",
                                        questionCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        dataType: "ST",
                                        answerCardinality: {
                                            min: "1",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0010]/parts[at0047]/value[at0052]/codeValue",
                                        answers: [{text: " "}],
                                        codingInstructions:
                                            "Šprecializácia tohto lekára, pod ktoru prebehla operácia, ktorú daný lekár vykonával.",
                                        header: false,
                                    },
                                    {
                                        question: "Nezmluvný lekár",
                                        original_type: "ELEMENT",
                                        parent_type: "CLUSTER",
                                        objPath: "/content[at0001]/items[at0010]/parts[at0048]",
                                        questionCode: "at0048",
                                        questionCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        dataType: "CNE",
                                        answerCardinality: {
                                            min: "0",
                                            max: "1",
                                        },
                                        attPath:
                                            "/content[at0001]/items[at0010]/parts[at0048]/value[at0053]/value",
                                        answers: [{text: "True"}, {text: "False"}],
                                        codingInstructions:
                                            "Doplňujúci atribút, ktorý sa použije na prenos informácie, že daný zdravotnícky pracovník - lekár, nemal pri svojom úkone zmluvný vzťah k poisťovni pacienta a teda, že tento úkon si bude hradiť pacient. Použije sa napríklad pri predpisovaní liekov.",
                                        header: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
