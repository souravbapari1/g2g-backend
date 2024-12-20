/// <reference path="../pb_data/types.d.ts" />


routerAdd("GET", "/maimpact/status", (c) => {
    try {
        const id = c.queryParam("id")

        const status = arrayOf(new DynamicModel({
            "impact": 0
        }));
        // Query the database for trees with their related unit types and SDGs
        $app.dao().db()
            .newQuery(`SELECT 
        (ROW_NUMBER() OVER()) AS id,
        SUM(micro_impact.impact) as impact
        FROM 
        micro_impact
    `).all(status);


        const current = arrayOf(new DynamicModel({
            impact: 0,
        }));
        // Query the database for trees with their related unit types and SDGs
        $app.dao().db()
            .newQuery(`
            SELECT 
                (ROW_NUMBER() OVER()) AS id,
                COALESCE(SUM(micro_impact.impact), 0) AS impact
            FROM 
                micro_impact
            WHERE 
                micro_impact.micro_action = '${id}'
        `).all(current);



        const users = arrayOf(new DynamicModel({
            "users": 0
        }));
        // Query the database for trees with their related unit types and SDGs
        $app.dao().db()
            .newQuery(`SELECT 
        (ROW_NUMBER() OVER()) AS id,
        COUNT(micro_impact.user) as users
        FROM 
        micro_impact WHERE micro_impact.user != ''
    `).all(users);


        const submits = arrayOf(new DynamicModel({
            "submits": 0
        }));
        // Query the database for trees with their related unit types and SDGs
        $app.dao().db()
            .newQuery(`SELECT 
            (ROW_NUMBER() OVER()) AS id,
            COUNT(micro_impact.id) as submits
            FROM 
            micro_impact
        `).all(submits);


        const totalMc = arrayOf(new DynamicModel({
            "total": 0
        }));
        // Query the database for trees with their related unit types and SDGs
        $app.dao().db()
            .newQuery(` SELECT (ROW_NUMBER() OVER()) AS id,
        COALESCE(COUNT(micro_actions.id),0) AS total
        FROM 
        micro_actions
        `).all(totalMc);


        const totalRefer = arrayOf(new DynamicModel({
            "ambassador": ""
        }));
        // Query the database for trees with their related unit types and SDGs
        $app.dao().db()
            .newQuery(` SELECT (ROW_NUMBER() OVER()) AS id,
            (micro_impact.refer) AS ambassador
            FROM 
            micro_impact
            WHERE micro_impact.refer != ""`).all(totalRefer);

        const totalAmbassador = Array.from(new Set(totalRefer.map((e) => e['ambassador'])))

        const sponsors = arrayOf(new DynamicModel({
            "partners": []
        }));
        // Query the database for trees with their related unit types and SDGs
        $app.dao().db()
            .newQuery(`SELECT (ROW_NUMBER() OVER()) AS id,
            (micro_actions.partners) AS partners
            FROM 
            micro_actions`).all(sponsors);


        const totalSponsors = sponsors.map((e) => e['partners'])
        const uniqueSponsors = [...new Set(totalSponsors.flat())];


        const usersData = arrayOf(new DynamicModel({
            "users": {}
        }));
        // Query the database for trees with their related unit types and SDGs
        $app.dao().db()
            .newQuery(`SELECT 
        (ROW_NUMBER() OVER()) AS id,
        (micro_impact.userData) as users
        FROM 
        micro_impact
    `).all(usersData);


        const totalCity = usersData.filter((e) => {
            return (JSON.parse(JSON.stringify(e['users']))['city']);
        })

        const totalCountry = usersData.filter((e) => {
            return (JSON.parse(JSON.stringify(e['users']))['country']);
        })


        c.json(200, { total: status[0], users: users[0], totalAmbassador: totalAmbassador.length, sponsors: uniqueSponsors.length, totalCity: totalCity.length, current: current[0], submits: submits[0], totalCountry: totalCountry.length, totalMc: totalMc[0].total })

    } catch (error) {
        console.log(error);
    }
})