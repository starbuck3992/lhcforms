export default {
    zaznamOdbornehoVysetrenia: {
        "dataId": "7A171588-C9BA-4700-8572-FFE91001D115",
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
                    "question": "Popis",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Textovy_popis.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0011",
                    "objPath": "/items[at0011]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
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
                            "question": "Diagnóza",
                            "original_type": "CLUSTER#SLOT",
                            "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Diagnoza.v1/}",
                            "parent_type": "CLUSTER",
                            "questionCode": "at0104",
                            "objPath": "/items[at0103.6]/parts[at0104]",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "answers": "",
                            "dataType": "",
                            "units": "",
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
                        }
                    ]
                },
                {
                    "question": "Odosielajúci lekár",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Zdravotnicky_pracovnik_odborneho_utvaru.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0200",
                    "objPath": "/items[at0200]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
                },
                {
                    "question": "Diagnóza pri odoslaní",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Diagnoza.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0111",
                    "objPath": "/items[at0111]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
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
                    "question": "Odporúčanie na vyšetrenie",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Odporucanie_na_vysetrenie.v3/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0007",
                    "objPath": "/items[at0007]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
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
                    "question": "Alergén",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0014]",
                    "questionCode": "at0014",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Určenie alegrénu zodpovedného za alergickú reakciu. Ak ide o alergiu na látky, je využívaný číselník typov alergénov, ak ide o alergiu na lieky, je využívaný číselník ATC skupín.",
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
                    "question": "Zmena stavu záznamu",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Zmena_stavu_zaznamu.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0500",
                    "objPath": "/items[at0500]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
                },
                {
                    "question": "Príloha",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.*/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0009",
                    "objPath": "/items[at0009]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
                }
            ]
        }]
    },
    zaznamZobrazovacieVysetrenie: {
        "dataId": "48391B65-93F9-442E-80E7-61A174199328",
        "type": "AT",
        "name": "CEN-EN13606-ENTRY.Zaznam_o_vysetreni-Lekarska_prepustacia_sprava.v6",
        "code": "at0000.1",
        "template": "en",
        "items": [{
            "original_name": "CEN-EN13606-ENTRY.Zaznam_o_vysetreni-Lekarska_prepustacia_sprava.v6",
            "standard": "CEN",
            "question": "Záznam o vyšetrení- Specialization: Lekárska prepúšťacia správa",
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
                    "codingInstructions": "Dátum a čas, kedy bol pacient odoslaný na vyšetrenie.\r\nInformácie o odoslaní vyplní nemocnica/ kúpele v prípade, že bol pacient do ústavnej ZS odoslaný na základe odporúčania na ústavnu ZS iba prostredníctvom papierového výmenného lístka a neexistuje elektronický výmenný lístok. Údaje lekár prepíše z papierových podkladov do IS. V prípade vyšetrenia na základe elektronického výmenného lístka naplní len identifikátor odporúčania na ZS, na základe ktorého bol pacient hospitalizovaný. Údaje o odoslaní v tomto prípade nevypĺňa (ALTERNATIVA – IS PZS ich naplní z udajov na odporúčaní).",
                    "header": false
                },
                {
                    "question": "Anamnéza",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.2]",
                    "questionCode": "at0.2",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.2]/value[at0.3]/originalText",
                    "codingInstructions": "Údaje o zdravotnom stave pacienta a jeho pokrvných príbuzných pred prijatím pacienta do ústavnej starostlivosti. \r\n",
                    "header": false
                },
                {
                    "question": "Dátum a čas prepustenia",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.4]",
                    "questionCode": "at0.4",
                    "questionCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "attPath": "/items[at0.4]/value[at0.5]/time",
                    "codingInstructions": "Dátum a čas kedy bol pacient prepustený z ústavnej starostlivosti (nemocnica/ kúpele).",
                    "header": false
                },
                {
                    "question": "Dátum a čas prijatia",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.7]",
                    "questionCode": "at0.7",
                    "questionCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "attPath": "/items[at0.7]/value[at0.8]/time",
                    "codingInstructions": "Dátum a čas, kedy bol pacient prijatý do ústavnej straostlivosti. V prípade prekladu pacienta v rámci jedného zariadenia je uvedený dátum prvotného prijatia do zariadenia.",
                    "header": false
                },
                {
                    "question": "Epikríza",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.9]",
                    "questionCode": "at0.9",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.9]/value[at0.10]/originalText",
                    "codingInstructions": "Písomné zhodnotenie priebehu hospitalizácie počnúc dôvodmi prijatia cez všetky liečebné procedúry až po konečný záver a odporúčanie liečby a ďalšieho postupu.  Môže obsahovať aj stanovisko k predchorobiu. ",
                    "header": false
                },
                {
                    "question": "Objektívny nález",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.13]",
                    "questionCode": "at0.13",
                    "questionCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "attPath": "/items[at0.13]/value[at0.14]/originalText",
                    "codingInstructions": "Objektívny nález zistený počas vyšetrenia pacienta. Popisuje klinický pohľad lekára na pacienta s minimálnym využitím technologického vybavenia.\r\nPopis je štruktúrovaný podľa miestnych zvyklostí.\r\nPozn: ak existuje terajšie ochorenia ,potom je vhodné zadať aj  objektívny nález a výsledok vykonaného vyšetrenia.\r\n ",
                    "header": false
                },
                {
                    "question": "Odporúčanie",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.15]",
                    "questionCode": "at0.15",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.15]/value[at0.16]/originalText",
                    "codingInstructions": "Odporúčanie ďalšieho postupu, resp. odporúčanie ďalšej liečby pacientovi. ",
                    "header": false
                },
                {
                    "question": "Terajšie ochorenie",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.19]",
                    "questionCode": "at0.19",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.19]/value[at0.20]/originalText",
                    "codingInstructions": "Subjektívne údaje pacienta alebo objektívne údaje jeho okolia o vzniku príznakoch a priebehu terajšieho ochorenia zapísané voľným textom. Môže obsahovať aj stručný popis predchorobia vo vzťahu k terajšiemu ochoreniu. \r\n\r\nOdporúčanie:  \r\nAk existuje terajšie ochorenia ,potom je odporúčané zadať aj  objektívny nález a výsledok vykonaného vyšetrenia ",
                    "header": false
                },
                {
                    "question": "Výsledok vykonaného vyšetrenia",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Textovy_popis.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0.21",
                    "objPath": "/items[at0.21]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
                },
                {
                    "question": "Záver pri prijatí",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.23]",
                    "questionCode": "at0.23",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.23]/value[at0.24]/originalText",
                    "codingInstructions": "Slovný popis diagnostického záveru pri prijatí pacienta. Stručné zhodnotenie zdravotného stavu pacienta a je doplňujúca k diagnóze pri odoslaní (po prijatí). Atribút je povinný vyplniť ošetrujúci lekár.  ",
                    "header": false
                },
                {
                    "question": "Operačné výkony",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.31]",
                    "questionCode": "at0.31",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Operačné výkony, ktoré boli vykonané počas hospitalizácie. Sú tvorené popisom. Nejedná sa o záznam v operačnej knihe, jedná sa len o stručný popis najdôležitejších operácií počas hospitalizácie. ",
                    "header": true,
                    "items": [{
                        "question": "Popis",
                        "original_type": "ELEMENT",
                        "parent_type": "CLUSTER",
                        "objPath": "/items[at0.31]/parts[at0.42]",
                        "questionCode": "at0.42",
                        "questionCardinality": {
                            "min": "1",
                            "max": "1"
                        },
                        "dataType": "ST",
                        "answerCardinality": {
                            "min": "1",
                            "max": "1"
                        },
                        "attPath": "/items[at0.31]/parts[at0.42]/value[at0.44]/originalText",
                        "codingInstructions": "Popis operačného zákroku\r\n",
                        "header": false
                    }]
                },
                {
                    "question": "Diagnostický záver",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0103.17]",
                    "questionCode": "at0103.17",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Informácie ohľadom diagnóz, ktoré má pacient pri ukončení hospitalizácie (diagnóza pri prepustení). Diagnózu je možné definovať výberom diagnózy z číselníka (MKCH10) s doplnením slovného popisu diagnózy. Tiež je možné definovať hlavnú aj život ovplyvňujúcu diagnózu. Správa obsahuje práve jednu hlavnú diagnózu.",
                    "header": true,
                    "items": [
                        {
                            "question": "Hlavná diagnóza",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0103.17]/parts[at0108]",
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
                            "attPath": "/items[at0103.17]/parts[at0108]/value[at0109]/value",
                            "answers": [
                                {"text": "True"},
                                {"text": "False"}
                            ],
                            "codingInstructions": "Príznak, že daná diagnóza je hlavná. Správa obsahuje práve jednu hlavnú diagnózu.",
                            "header": false
                        },
                        {
                            "question": "Diagnóza",
                            "original_type": "CLUSTER#SLOT",
                            "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Diagnoza.v1/}",
                            "parent_type": "CLUSTER",
                            "questionCode": "at0104",
                            "objPath": "/items[at0103.17]/parts[at0104]",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "answers": "",
                            "dataType": "",
                            "units": "",
                            "header": false
                        },
                        {
                            "question": "Život ovplyvňujúca diagnóza",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0103.17]/parts[at0008]",
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
                            "attPath": "/items[at0103.17]/parts[at0008]/value[at0010]/value",
                            "answers": [
                                {"text": "True"},
                                {"text": "False"}
                            ],
                            "codingInstructions": "Príznak život ovplyvňujúcej diagnózy. Zaškrtnutím tohto priznáku je diagnóza automaticky zobrazená aj v pacientskom sumári. Príznak je potrebné zaškrnúť ak diagnóza bola stanovená v rámci zoznamu chorôb určených výhláškou MZ SR. ",
                            "header": false
                        }
                    ]
                },
                {
                    "question": "Odosielajúci lekár",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Zdravotnicky_pracovnik_odborneho_utvaru.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0200",
                    "objPath": "/items[at0200]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
                },
                {
                    "question": "Odborný zástupca",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Zdravotnicky_pracovnik_odborneho_utvaru.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0002",
                    "objPath": "/items[at0002]",
                    "questionCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
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
                    "question": "Urgentnosť vyšetrenia",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.6]",
                    "questionCode": "at0.6",
                    "questionCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "attPath": "/items[at0.6]/value[at0.11]/codeValue",
                    "answers": [{"text": " "}],
                    "codingInstructions": "Urgentnosť vyšetrenia. \r\nOdkaz na číselník, obsahujúci stupne urgentnosti resp. naliehavosti vyšetrenia. Stanovuje urgentnosť hospitalizácie, ktorá závisí od spôsobu hospitalizácie pacienta. Pre plánovanú hospitalizáciu je možné automaticky generovať hodnotu „bežné“\r\nHodnota „urgentné“ odporúčame generovať iba pri type správy keď došlo k príjmu na základe urgentného príjmu ",
                    "header": false
                },
                {
                    "question": "Diagnóza pri odoslaní",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Diagnoza.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0111",
                    "objPath": "/items[at0111]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
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
                    "codingInstructions": "Odkaz (link) na „Odporúčané vyšetrenie“ (id. výmenného lístka), ktorým je vyšetrenie požadované. Vyplnením tohto atribútu môže autor výmenného lístka pristúpiť k výsledku zdravotného záznamu. Pole je vyplňnané automaticky IS PZS na pozadí systému. ",
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
                    "codingInstructions": "Názov vyšetrenia prostredníctvom, ktorého bude možné vyšetrenie neskôr vyhľadať",
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
                    "codingInstructions": "Časť zdravotnej dokumentácie, do ktorej môže uviesť popis, ktorý bude zdielaný medzi zdravotníckymi pracovníkmi ale nebude prístupný pacientovi ani po prihlásení sa do elektronickej zdravotnej knižky.",
                    "header": false
                },
                {
                    "question": "Identifikátor hospitalizačného prípadu",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.12]",
                    "questionCode": "at0.12",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.12]/value[at0.18]/originalText",
                    "codingInstructions": "DRG identifikátor hospitalizačného prípadu, ktorý bol pacientovi pridelený po prijatí do ústavnej starostivosti",
                    "header": false
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
                    "question": "Alergén",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0014]",
                    "questionCode": "at0014",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Alergén je zaznamenávaný v prípade, že počas poskytovania zdravotnej starostlivosti bola identifikovaná/ stanovená alergia pacienta. Vypĺňaná je primárne odbornosťami, ktoré majú v kompetencii stanovenie alergie. (napr. imunológia a alergológia)",
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
                            "codingInstructions": "Alergén - liečivo ak je zodpovedné za alergickú reakciu. Využívaný je číselník ATC skupín 1.3.158.00165387.100.10.83.",
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
                            "codingInstructions": "Alergén - látka ak je zodpovedná za alergickú reakciu. Využívaný je číselník alergénov 1.3.158.00165387.100.10.158",
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
                    "codingInstructions": "Zdravotná pomôcka implantovaná pacientovi počas hospitalizácie. Vpísanám tejto informácie je automaticky informácia o implantovanej zdravotnej pomôcke zasielaná do pacientského sumáru. ",
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
                    "question": "Zmena stavu záznamu",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Zmena_stavu_zaznamu.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0500",
                    "objPath": "/items[at0500]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
                },
                {
                    "question": "Príloha",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.*/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0009",
                    "objPath": "/items[at0009]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
                }
            ]
        }]
    },
    prepustaciSprava: {
        "dataId": "1BCFDA3F-ABC6-4197-B823-5612771BBDFD",
        "type": "AT",
        "name": "CEN-EN13606-ENTRY.Zaznam_o_vysetreni-Lekarska_prepustacia_sprava.v6",
        "code": "at0000.1",
        "template": "en",
        "items": [{
            "original_name": "CEN-EN13606-ENTRY.Zaznam_o_vysetreni-Lekarska_prepustacia_sprava.v6",
            "standard": "CEN",
            "question": "Záznam o vyšetrení- Specialization: Lekárska prepúšťacia správa",
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
                    "codingInstructions": "Dátum a čas, kedy bol pacient odoslaný na vyšetrenie.\r\nInformácie o odoslaní vyplní nemocnica/ kúpele v prípade, že bol pacient do ústavnej ZS odoslaný na základe odporúčania na ústavnu ZS iba prostredníctvom papierového výmenného lístka a neexistuje elektronický výmenný lístok. Údaje lekár prepíše z papierových podkladov do IS. V prípade vyšetrenia na základe elektronického výmenného lístka naplní len identifikátor odporúčania na ZS, na základe ktorého bol pacient hospitalizovaný. Údaje o odoslaní v tomto prípade nevypĺňa (ALTERNATIVA – IS PZS ich naplní z udajov na odporúčaní).",
                    "header": false
                },
                {
                    "question": "Anamnéza",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.2]",
                    "questionCode": "at0.2",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.2]/value[at0.3]/originalText",
                    "codingInstructions": "Údaje o zdravotnom stave pacienta a jeho pokrvných príbuzných pred prijatím pacienta do ústavnej starostlivosti. \r\n",
                    "header": false
                },
                {
                    "question": "Dátum a čas prepustenia",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.4]",
                    "questionCode": "at0.4",
                    "questionCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "attPath": "/items[at0.4]/value[at0.5]/time",
                    "codingInstructions": "Dátum a čas kedy bol pacient prepustený z ústavnej starostlivosti (nemocnica/ kúpele).",
                    "header": false
                },
                {
                    "question": "Dátum a čas prijatia",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.7]",
                    "questionCode": "at0.7",
                    "questionCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "attPath": "/items[at0.7]/value[at0.8]/time",
                    "codingInstructions": "Dátum a čas, kedy bol pacient prijatý do ústavnej straostlivosti. V prípade prekladu pacienta v rámci jedného zariadenia je uvedený dátum prvotného prijatia do zariadenia.",
                    "header": false
                },
                {
                    "question": "Epikríza",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.9]",
                    "questionCode": "at0.9",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.9]/value[at0.10]/originalText",
                    "codingInstructions": "Písomné zhodnotenie priebehu hospitalizácie počnúc dôvodmi prijatia cez všetky liečebné procedúry až po konečný záver a odporúčanie liečby a ďalšieho postupu.  Môže obsahovať aj stanovisko k predchorobiu. ",
                    "header": false
                },
                {
                    "question": "Objektívny nález",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.13]",
                    "questionCode": "at0.13",
                    "questionCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "attPath": "/items[at0.13]/value[at0.14]/originalText",
                    "codingInstructions": "Objektívny nález zistený počas vyšetrenia pacienta. Popisuje klinický pohľad lekára na pacienta s minimálnym využitím technologického vybavenia.\r\nPopis je štruktúrovaný podľa miestnych zvyklostí.\r\nPozn: ak existuje terajšie ochorenia ,potom je vhodné zadať aj  objektívny nález a výsledok vykonaného vyšetrenia.\r\n ",
                    "header": false
                },
                {
                    "question": "Odporúčanie",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.15]",
                    "questionCode": "at0.15",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.15]/value[at0.16]/originalText",
                    "codingInstructions": "Odporúčanie ďalšieho postupu, resp. odporúčanie ďalšej liečby pacientovi. ",
                    "header": false
                },
                {
                    "question": "Terajšie ochorenie",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.19]",
                    "questionCode": "at0.19",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.19]/value[at0.20]/originalText",
                    "codingInstructions": "Subjektívne údaje pacienta alebo objektívne údaje jeho okolia o vzniku príznakoch a priebehu terajšieho ochorenia zapísané voľným textom. Môže obsahovať aj stručný popis predchorobia vo vzťahu k terajšiemu ochoreniu. \r\n\r\nOdporúčanie:  \r\nAk existuje terajšie ochorenia ,potom je odporúčané zadať aj  objektívny nález a výsledok vykonaného vyšetrenia ",
                    "header": false
                },
                {
                    "question": "Výsledok vykonaného vyšetrenia",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Textovy_popis.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0.21",
                    "objPath": "/items[at0.21]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
                },
                {
                    "question": "Záver pri prijatí",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.23]",
                    "questionCode": "at0.23",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.23]/value[at0.24]/originalText",
                    "codingInstructions": "Slovný popis diagnostického záveru pri prijatí pacienta. Stručné zhodnotenie zdravotného stavu pacienta a je doplňujúca k diagnóze pri odoslaní (po prijatí). Atribút je povinný vyplniť ošetrujúci lekár.  ",
                    "header": false
                },
                {
                    "question": "Operačné výkony",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.31]",
                    "questionCode": "at0.31",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Operačné výkony, ktoré boli vykonané počas hospitalizácie. Sú tvorené popisom. Nejedná sa o záznam v operačnej knihe, jedná sa len o stručný popis najdôležitejších operácií počas hospitalizácie. ",
                    "header": true,
                    "items": [{
                        "question": "Popis",
                        "original_type": "ELEMENT",
                        "parent_type": "CLUSTER",
                        "objPath": "/items[at0.31]/parts[at0.42]",
                        "questionCode": "at0.42",
                        "questionCardinality": {
                            "min": "1",
                            "max": "1"
                        },
                        "dataType": "ST",
                        "answerCardinality": {
                            "min": "1",
                            "max": "1"
                        },
                        "attPath": "/items[at0.31]/parts[at0.42]/value[at0.44]/originalText",
                        "codingInstructions": "Popis operačného zákroku\r\n",
                        "header": false
                    }]
                },
                {
                    "question": "Diagnostický záver",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0103.17]",
                    "questionCode": "at0103.17",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Informácie ohľadom diagnóz, ktoré má pacient pri ukončení hospitalizácie (diagnóza pri prepustení). Diagnózu je možné definovať výberom diagnózy z číselníka (MKCH10) s doplnením slovného popisu diagnózy. Tiež je možné definovať hlavnú aj život ovplyvňujúcu diagnózu. Správa obsahuje práve jednu hlavnú diagnózu.",
                    "header": true,
                    "items": [
                        {
                            "question": "Hlavná diagnóza",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0103.17]/parts[at0108]",
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
                            "attPath": "/items[at0103.17]/parts[at0108]/value[at0109]/value",
                            "answers": [
                                {"text": "True"},
                                {"text": "False"}
                            ],
                            "codingInstructions": "Príznak, že daná diagnóza je hlavná. Správa obsahuje práve jednu hlavnú diagnózu.",
                            "header": false
                        },
                        {
                            "question": "Diagnóza",
                            "original_type": "CLUSTER#SLOT",
                            "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Diagnoza.v1/}",
                            "parent_type": "CLUSTER",
                            "questionCode": "at0104",
                            "objPath": "/items[at0103.17]/parts[at0104]",
                            "questionCardinality": {
                                "min": "1",
                                "max": "1"
                            },
                            "answers": "",
                            "dataType": "",
                            "units": "",
                            "header": false
                        },
                        {
                            "question": "Život ovplyvňujúca diagnóza",
                            "original_type": "ELEMENT",
                            "parent_type": "CLUSTER",
                            "objPath": "/items[at0103.17]/parts[at0008]",
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
                            "attPath": "/items[at0103.17]/parts[at0008]/value[at0010]/value",
                            "answers": [
                                {"text": "True"},
                                {"text": "False"}
                            ],
                            "codingInstructions": "Príznak život ovplyvňujúcej diagnózy. Zaškrtnutím tohto priznáku je diagnóza automaticky zobrazená aj v pacientskom sumári. Príznak je potrebné zaškrnúť ak diagnóza bola stanovená v rámci zoznamu chorôb určených výhláškou MZ SR. ",
                            "header": false
                        }
                    ]
                },
                {
                    "question": "Odosielajúci lekár",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Zdravotnicky_pracovnik_odborneho_utvaru.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0200",
                    "objPath": "/items[at0200]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
                },
                {
                    "question": "Odborný zástupca",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Zdravotnicky_pracovnik_odborneho_utvaru.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0002",
                    "objPath": "/items[at0002]",
                    "questionCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
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
                    "question": "Urgentnosť vyšetrenia",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.6]",
                    "questionCode": "at0.6",
                    "questionCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "1",
                        "max": "1"
                    },
                    "attPath": "/items[at0.6]/value[at0.11]/codeValue",
                    "answers": [{"text": " "}],
                    "codingInstructions": "Urgentnosť vyšetrenia. \r\nOdkaz na číselník, obsahujúci stupne urgentnosti resp. naliehavosti vyšetrenia. Stanovuje urgentnosť hospitalizácie, ktorá závisí od spôsobu hospitalizácie pacienta. Pre plánovanú hospitalizáciu je možné automaticky generovať hodnotu „bežné“\r\nHodnota „urgentné“ odporúčame generovať iba pri type správy keď došlo k príjmu na základe urgentného príjmu ",
                    "header": false
                },
                {
                    "question": "Diagnóza pri odoslaní",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Diagnoza.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0111",
                    "objPath": "/items[at0111]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
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
                    "codingInstructions": "Odkaz (link) na „Odporúčané vyšetrenie“ (id. výmenného lístka), ktorým je vyšetrenie požadované. Vyplnením tohto atribútu môže autor výmenného lístka pristúpiť k výsledku zdravotného záznamu. Pole je vyplňnané automaticky IS PZS na pozadí systému. ",
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
                    "codingInstructions": "Názov vyšetrenia prostredníctvom, ktorého bude možné vyšetrenie neskôr vyhľadať",
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
                    "codingInstructions": "Časť zdravotnej dokumentácie, do ktorej môže uviesť popis, ktorý bude zdielaný medzi zdravotníckymi pracovníkmi ale nebude prístupný pacientovi ani po prihlásení sa do elektronickej zdravotnej knižky.",
                    "header": false
                },
                {
                    "question": "Identifikátor hospitalizačného prípadu",
                    "original_type": "ELEMENT",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0.12]",
                    "questionCode": "at0.12",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "ST",
                    "answerCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "attPath": "/items[at0.12]/value[at0.18]/originalText",
                    "codingInstructions": "DRG identifikátor hospitalizačného prípadu, ktorý bol pacientovi pridelený po prijatí do ústavnej starostivosti",
                    "header": false
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
                    "question": "Alergén",
                    "original_type": "CLUSTER",
                    "parent_type": "ENTRY",
                    "objPath": "/items[at0014]",
                    "questionCode": "at0014",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "dataType": "",
                    "codingInstructions": "Alergén je zaznamenávaný v prípade, že počas poskytovania zdravotnej starostlivosti bola identifikovaná/ stanovená alergia pacienta. Vypĺňaná je primárne odbornosťami, ktoré majú v kompetencii stanovenie alergie. (napr. imunológia a alergológia)",
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
                            "codingInstructions": "Alergén - liečivo ak je zodpovedné za alergickú reakciu. Využívaný je číselník ATC skupín 1.3.158.00165387.100.10.83.",
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
                            "codingInstructions": "Alergén - látka ak je zodpovedná za alergickú reakciu. Využívaný je číselník alergénov 1.3.158.00165387.100.10.158",
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
                    "codingInstructions": "Zdravotná pomôcka implantovaná pacientovi počas hospitalizácie. Vpísanám tejto informácie je automaticky informácia o implantovanej zdravotnej pomôcke zasielaná do pacientského sumáru. ",
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
                    "question": "Zmena stavu záznamu",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.Zmena_stavu_zaznamu.v1/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0500",
                    "objPath": "/items[at0500]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "1"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
                },
                {
                    "question": "Príloha",
                    "original_type": "CLUSTER#SLOT",
                    "archetype_slot": "archetype_id/value matches {/CEN-EN13606-CLUSTER.*/}",
                    "parent_type": "ENTRY",
                    "questionCode": "at0009",
                    "objPath": "/items[at0009]",
                    "questionCardinality": {
                        "min": "0",
                        "max": "*"
                    },
                    "answers": "",
                    "dataType": "",
                    "units": "",
                    "header": false
                }
            ]
        }]
    },
    liekovaAnamneza: {
        "dataId": "4E5B1475-A63C-4775-85D5-630BB4CAB5BB",
        "type": "AT",
        "name": "CEN-EN13606-COMPOSITION.Liekova_Anamneza.v1",
        "code": "at0000",
        "template": "en",
        "items": [{
            "original_name": "CEN-EN13606-COMPOSITION.Liekova_Anamneza.v1",
            "standard": "CEN",
            "question": "Lieková Anamnéza",
            "original_type": "COMPOSITION",
            "questionCardinality": {
                "min": "1",
                "max": "1"
            },
            "dataType": "",
            "header": true,
            "answers": "",
            "units": "",
            "questionCode": "at0000",
            "items": [{
                "question": "Lieková Anamnéza",
                "original_type": "ENTRY",
                "parent_type": "COMPOSITION",
                "objPath": "/content[at0001]",
                "questionCode": "at0001",
                "questionCardinality": {
                    "min": "0",
                    "max": "*"
                },
                "dataType": "",
                "codingInstructions": "Lieková Anamnéza pacienta určená pre Pacienstsky sumár, je využívaná výhradne len pre čítacie služby ako EHR extrakt, pre zápisové služby nie je používaný. Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-ENTRY.Liekova_Anamneza.v1}",
                "header": true,
                "items": [
                    {
                        "question": "Aktívny Od",
                        "original_type": "ELEMENT",
                        "parent_type": "ENTRY",
                        "objPath": "/content[at0001]/items[at0002]",
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
                        "attPath": "/content[at0001]/items[at0002]/value[at0012]/time",
                        "codingInstructions": "Posledný známy začiatok užívania lieku (Výdaj lieku v lekárni) alebo dátum podania.",
                        "header": false
                    },
                    {
                        "question": "Množstvo",
                        "original_type": "ELEMENT",
                        "parent_type": "ENTRY",
                        "objPath": "/content[at0001]/items[at0003]",
                        "questionCode": "at0003",
                        "questionCardinality": {
                            "min": "0",
                            "max": "1"
                        },
                        "dataType": "REAL",
                        "answerCardinality": {
                            "min": "0",
                            "max": "1"
                        },
                        "attPath": "/content[at0001]/items[at0003]/value[at0013]/value",
                        "interval": {
                            "min": "-1.797",
                            "max": "1.797"
                        },
                        "codingInstructions": "Množstvo liečebného prostriedku alebo počet predpísaných balení liečebného prostriedku ",
                        "header": false
                    },
                    {
                        "question": "Pôvod",
                        "original_type": "ELEMENT",
                        "parent_type": "ENTRY",
                        "objPath": "/content[at0001]/items[at0004]",
                        "questionCode": "at0004",
                        "questionCardinality": {
                            "min": "1",
                            "max": "1"
                        },
                        "dataType": "CNE",
                        "answerCardinality": {
                            "min": "1",
                            "max": "1"
                        },
                        "attPath": "/content[at0001]/items[at0004]/value[at0014]/originalText",
                        "answers": [
                            {"text": "Na základe lekárskeho predpisu"},
                            {"text": "Podané lekárom"}
                        ],
                        "codingInstructions": "Pôvod záznamu: Na základe lekárskeho predpisu, Podané lekárom",
                        "header": false
                    },
                    {
                        "question": "ID záznamu",
                        "original_type": "ELEMENT",
                        "parent_type": "ENTRY",
                        "objPath": "/content[at0001]/items[at0005]",
                        "questionCode": "at0005",
                        "questionCardinality": {
                            "min": "1",
                            "max": "1"
                        },
                        "dataType": "",
                        "answerCardinality": {
                            "min": "1",
                            "max": "1"
                        },
                        "attPath": "/content[at0001]/items[at0005]/value[at0015]/extension",
                        "codingInstructions": "Identifikátor záznamu na základe, ktorého boli načítané informácie liekovej anamnézy do pacientského sumáru. ",
                        "header": false
                    },
                    {
                        "question": "ATC",
                        "original_type": "ELEMENT",
                        "parent_type": "ENTRY",
                        "objPath": "/content[at0001]/items[at0006]",
                        "questionCode": "at0006",
                        "questionCardinality": {
                            "min": "0",
                            "max": "1"
                        },
                        "dataType": "ST",
                        "answerCardinality": {
                            "min": "0",
                            "max": "1"
                        },
                        "attPath": "/content[at0001]/items[at0006]/value[at0016]/codeValue",
                        "answers": [{"text": " "}],
                        "codingInstructions": "ATC klasifikácia registrovaného lieku, ktorý bol predpísaný a je užívaný alebo bol priamo podaný.",
                        "header": false
                    },
                    {
                        "question": "Popis Medikácie",
                        "original_type": "ELEMENT",
                        "parent_type": "ENTRY",
                        "objPath": "/content[at0001]/items[at0011]",
                        "questionCode": "at0011",
                        "questionCardinality": {
                            "min": "0",
                            "max": "1"
                        },
                        "dataType": "",
                        "answerCardinality": {
                            "min": "0",
                            "max": "1"
                        },
                        "attPath": "/content[at0001]/items[at0011]/value[at0017]/originalText",
                        "codingInstructions": "Textový popis medikácie, z lekárskej správy. Informácie o podaných liekoch, množstve a potiažach pri medikácii.",
                        "header": false
                    },
                    {
                        "question": "Liek",
                        "original_type": "CLUSTER",
                        "parent_type": "ENTRY",
                        "objPath": "/content[at0001]/items[at0007]",
                        "questionCode": "at0007",
                        "questionCardinality": {
                            "min": "1",
                            "max": "1"
                        },
                        "dataType": "",
                        "codingInstructions": "Informácie o registrovanom lieku, ktorý bol predpísaný a je užívaný alebo bol priamo podaný. Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Registrovany_liek.v1}",
                        "header": true,
                        "items": [
                            {
                                "question": "Názov",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0007]/parts[at0019]",
                                "questionCode": "at0019",
                                "questionCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "dataType": "ST",
                                "answerCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0007]/parts[at0019]/value[at0024]/originalText",
                                "codingInstructions": "This is a ELEMENT object",
                                "header": false
                            },
                            {
                                "question": "Doplnok názvu",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0007]/parts[at0020]",
                                "questionCode": "at0020",
                                "questionCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "dataType": "ST",
                                "answerCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0007]/parts[at0020]/value[at0025]/originalText",
                                "codingInstructions": "This is a ELEMENT object",
                                "header": false
                            },
                            {
                                "question": "ŠÚKL kód",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0007]/parts[at0021]",
                                "questionCode": "at0021",
                                "questionCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "dataType": "",
                                "answerCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0007]/parts[at0021]/value[at0026]/originalText",
                                "codingInstructions": "This is a ELEMENT object",
                                "header": false
                            },
                            {
                                "question": "ID lieku",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0007]/parts[at0022]",
                                "questionCode": "at0022",
                                "questionCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "dataType": "",
                                "answerCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0007]/parts[at0022]/value[at0027]/extension",
                                "answers": [{
                                    "text": "[  ::  ]",
                                    "default": true
                                }],
                                "codingInstructions": "This is a ELEMENT object",
                                "header": false
                            }
                        ]
                    },
                    {
                        "question": "Duplicita",
                        "original_type": "CLUSTER",
                        "parent_type": "ENTRY",
                        "objPath": "/content[at0001]/items[at0008]",
                        "questionCode": "at0008",
                        "questionCardinality": {
                            "min": "0",
                            "max": "*"
                        },
                        "dataType": "",
                        "codingInstructions": "Zoznam duplicitných liekov identifikovaných na základe ATC skupiny alebo účinných látok v aktuálnom zozname liekovej anamnézy pacienta.  Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Registrovany_liek.v1}",
                        "header": true,
                        "items": [
                            {
                                "question": "Názov",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0008]/parts[at0029]",
                                "questionCode": "at0029",
                                "questionCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "dataType": "ST",
                                "answerCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0008]/parts[at0029]/value[at0034]/originalText",
                                "codingInstructions": "This is a ELEMENT object",
                                "header": false
                            },
                            {
                                "question": "Doplnok názvu",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0008]/parts[at0030]",
                                "questionCode": "at0030",
                                "questionCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "dataType": "ST",
                                "answerCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0008]/parts[at0030]/value[at0035]/originalText",
                                "codingInstructions": "This is a ELEMENT object",
                                "header": false
                            },
                            {
                                "question": "ŠÚKL kód",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0008]/parts[at0031]",
                                "questionCode": "at0031",
                                "questionCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "dataType": "",
                                "answerCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0008]/parts[at0031]/value[at0036]/originalText",
                                "codingInstructions": "This is a ELEMENT object",
                                "header": false
                            },
                            {
                                "question": "ID lieku",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0008]/parts[at0032]",
                                "questionCode": "at0032",
                                "questionCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "dataType": "",
                                "answerCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0008]/parts[at0032]/value[at0037]/extension",
                                "answers": [{
                                    "text": "[  ::  ]",
                                    "default": true
                                }],
                                "codingInstructions": "This is a ELEMENT object",
                                "header": false
                            }
                        ]
                    },
                    {
                        "question": "Diagnóza",
                        "original_type": "CLUSTER",
                        "parent_type": "ENTRY",
                        "objPath": "/content[at0001]/items[at0009]",
                        "questionCode": "at0009",
                        "questionCardinality": {
                            "min": "0",
                            "max": "1"
                        },
                        "dataType": "",
                        "codingInstructions": "Diagnóza na základe ktorej bol liek predpísaný alebo podaný.  Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Diagnoza.v1}",
                        "header": true,
                        "items": [
                            {
                                "question": "Kód diagnózy",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0009]/parts[at0039]",
                                "questionCode": "at0039",
                                "questionCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "dataType": "ST",
                                "answerCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0009]/parts[at0039]/value[at0042]/codeValue",
                                "answers": [{"text": " "}],
                                "codingInstructions": "Diagnóza vyjadrená kódom z MKCH10, ktorá je stanovená pacientovi v rámci diagnostického záveru. ",
                                "header": false
                            },
                            {
                                "question": "Upresnenie",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0009]/parts[at0040]",
                                "questionCode": "at0040",
                                "questionCardinality": {
                                    "min": "0",
                                    "max": "1"
                                },
                                "dataType": "ST",
                                "answerCardinality": {
                                    "min": "0",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0009]/parts[at0040]/value[at0043]/originalText",
                                "codingInstructions": "Upresnenie diagnózy formou voľného textu. Pre vyplnenie upresnenia je nevyhnutné zaznamenať diagnostický záver v rámci \\\\\\\\\\\\\\\\\\\"kódu diagnózy\\\\\\\\\\\\\\\\\\\"",
                                "header": false
                            }
                        ]
                    },
                    {
                        "question": "Zdravotnícky pracovník",
                        "original_type": "CLUSTER",
                        "parent_type": "ENTRY",
                        "objPath": "/content[at0001]/items[at0010]",
                        "questionCode": "at0010",
                        "questionCardinality": {
                            "min": "0",
                            "max": "1"
                        },
                        "dataType": "",
                        "codingInstructions": "Referencia na zdravotníckeho pracovníka (lekára), na základe ktorého preskripcie záznam vznikol alebo liečebný prostriedok pacientovi priamo podal. Comment: This node was originaly a slot node, it was solved to {CEN-EN13606-CLUSTER.Zdravotnicky_pracovnik_odborneho_utvaru.v1}",
                        "header": true,
                        "items": [
                            {
                                "question": "Identifikácia ZPrac",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0010]/parts[at0045]",
                                "questionCode": "at0045",
                                "questionCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "dataType": "",
                                "answerCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0010]/parts[at0045]/value[at0050]/extension",
                                "codingInstructions": "Identifikácia zdravotníckeho pracovníka v JRÚZ.",
                                "header": false
                            },
                            {
                                "question": "Identifikácia OÚ PZS",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0010]/parts[at0046]",
                                "questionCode": "at0046",
                                "questionCardinality": {
                                    "min": "0",
                                    "max": "1"
                                },
                                "dataType": "",
                                "answerCardinality": {
                                    "min": "0",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0010]/parts[at0046]/value[at0051]/extension",
                                "codingInstructions": "Identifikácia odborného útvaru poskytovateľa zdravotnej starostlivosti z JRÚZ, do ktorého zdravotnícky pracovník patrí.",
                                "header": false
                            },
                            {
                                "question": "Špecializácia lekára",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0010]/parts[at0047]",
                                "questionCode": "at0047",
                                "questionCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "dataType": "ST",
                                "answerCardinality": {
                                    "min": "1",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0010]/parts[at0047]/value[at0052]/codeValue",
                                "answers": [{"text": " "}],
                                "codingInstructions": "Šprecializácia tohto lekára, pod ktoru prebehla operácia, ktorú daný lekár vykonával.",
                                "header": false
                            },
                            {
                                "question": "Nezmluvný lekár",
                                "original_type": "ELEMENT",
                                "parent_type": "CLUSTER",
                                "objPath": "/content[at0001]/items[at0010]/parts[at0048]",
                                "questionCode": "at0048",
                                "questionCardinality": {
                                    "min": "0",
                                    "max": "1"
                                },
                                "dataType": "CNE",
                                "answerCardinality": {
                                    "min": "0",
                                    "max": "1"
                                },
                                "attPath": "/content[at0001]/items[at0010]/parts[at0048]/value[at0053]/value",
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
            }]
        }]
    }
}
