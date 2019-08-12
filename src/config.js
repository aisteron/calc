let config = {
    vehicles: {
        sedan: {

            "econom": {
                "name": "эконом",
                "className": "econom",
                "seats" : 2,
                "rate": 0.2,
                "cons": 5,
                "rent": 150
            },
            "business": {
                "name": "бизнес",
                "className": "business",
                "seats": 2,
                "rate": 0.3,
                "cons": 7,
                "rent": 200
            },
            "exec": {
                "name": "представ.",
                "className": "exec",
                "seats": 2,
                "rate": 0.7,
                "cons": 12,
                "rent": 300
            }
        },
        van: {
            "minivan": {
                "name": "минивэн",
                "className": "minivan",
                "seats" : 7,
                "rate": 0.3,
                "cons": 13,
                "rent": 250
            },
            "econom": {
                "name": "15 мест",
                "className": "econom",
                "seats": 15,
                "rate": 0.4,
                "cons": 13,
                "rent": 300
            },
            "business": {
                "name": "20 мест",
                "className": "business",
                "seats": 20,
                "rate": 0.7,
                "cons": 13,
                "rent": 500
            }
        },
        bus: {
            "standart": {
                "name": "стандарт",
                "className": "standart",
                "seats" : 49,
                "rate": 0.3,
                "cons": 32,
                "rent": 450
            },
            "55": {
                "name": "55 мест",
                "className": "55",
                "seats": 55,
                "rate": 0.3,
                "cons": 32,
                "rent": 500
            },
            "2floor": {
                "name": "2 этажа",
                "className": "2floor",
                "seats": 70,
                "rate": 0.4,
                "cons": 35,
                "rent": 600
            }
        }
    }
};

export { config };