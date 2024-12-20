/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/soloimpact/status", (c) => {
    const id = c.queryParam("id")


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


    const submits = arrayOf(new DynamicModel({
        impact: 0,
    }));
    // Query the database for trees with their related unit types and SDGs
    $app.dao().db()
        .newQuery(` SELECT (ROW_NUMBER() OVER()) AS id,
         COALESCE(COUNT(micro_impact.impact), 0) AS impact
        FROM 
            micro_impact
        WHERE 
            micro_impact.micro_action = '${id}'
    `).all(submits);


    const users = arrayOf(new DynamicModel({
        impact: 0,
    }));
    // Query the database for trees with their related unit types and SDGs
    $app.dao().db()
        .newQuery(` SELECT (ROW_NUMBER() OVER()) AS id,
         COALESCE(COUNT(micro_impact.user),0) AS impact
        FROM 
            micro_impact
        WHERE 
            micro_impact.micro_action = '${id}' AND micro_impact.user != ''
    `).all(users);


    c.json(200, { users: users[0].impact, submits: submits[0].impact, current: current[0].impact })
})