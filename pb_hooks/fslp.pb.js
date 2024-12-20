/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/fslp/status", (c) => {
    const status = arrayOf(new DynamicModel({
        "status": "",
        "application": {}
    }));


    // Query the database for trees with their related unit types and SDGs
    $app.dao().db()
        .newQuery(`SELECT 
        (ROW_NUMBER() OVER()) AS id,
        fslp.application,
        fslp.status
        FROM 
        fslp
    `).all(status);

    const totalCity = Array.from(new Set(status.map((e) => JSON.parse(JSON.stringify(e['application']))['city'])));
    const totalCountry = Array.from(new Set(status.map((e) => JSON.parse(JSON.stringify(e['application']))['country'])));





    c.json(200, {
        total: status.length,
        new: status.filter((e) => e.status == "pending").length,
        approved: status.filter((e) => e.status == "approved").length,
        cancel: status.filter((e) => e.status == "cancel").length,
        complete: status.filter((e) => e.status == "complete").length,
        totalCity: totalCity.length,
        totalCountry: totalCountry.length
    })


})