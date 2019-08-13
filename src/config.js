let config = {
    path: {url:"http://sauko.by/calc/rest.local/"},
    //path: {url:"http://rest.local"},
    vehicles: {
        sedan: {

            "econom": {
                "name": "эконом",
                "className": "econom",
                "seats" : 2,
                "rate": 0.2,
                "cons": 5,
                "rent": 150,
                "hourRate": 20
            },
            "business": {
                "name": "бизнес",
                "className": "business",
                "seats": 2,
                "rate": 0.3,
                "cons": 7,
                "rent": 200,
                "hourRate": 50
            },
            "exec": {
                "name": "представ.",
                "className": "exec",
                "seats": 2,
                "rate": 0.7,
                "cons": 12,
                "rent": 300,
                "hourRate": 70
            }
        },
        van: {
            "minivan": {
                "name": "минивэн",
                "className": "minivan",
                "seats" : 7,
                "rate": 0.3,
                "cons": 13,
                "rent": 250,
                "hourRate": 25
            },
            "econom": {
                "name": "15 мест",
                "className": "econom",
                "seats": 15,
                "rate": 0.25,
                "cons": 13,
                "rent": 250,
                "hourRate": 25
            },
            "business": {
                "name": "20 мест",
                "className": "business",
                "seats": 20,
                "rate": 0.3,
                "cons": 13,
                "rent": 280,
                "hourRate": 40
            }
        },
        bus: {
            "standart": {
                "name": "стандарт",
                "className": "standart",
                "seats" : 49,
                "rate": 0.3,
                "cons": 32,
                "rent": 350,
                "hourRate": 80
            },
            "55": {
                "name": "55 мест",
                "className": "55",
                "seats": 55,
                "rate": 0.3,
                "cons": 32,
                "rent": 500,
                "hourRate": 90
            },
            "2floor": {
                "name": "2 этажа",
                "className": "2floor",
                "seats": 70,
                "rate": 0.4,
                "cons": 35,
                "rent": 600,
                "hourRate": 120
            }
        }
    }
};

export { config };