/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/academics/status", (c) => {
    const status = arrayOf(new DynamicModel({
        "id": "",
        "academic": {},
        "status": "",
        "applicationData": {}
    }));


    // Query the database for trees with their related unit types and SDGs
    $app.dao().db()
        .newQuery(`SELECT 
     (ROW_NUMBER() OVER()) AS id,
   academics_requests.academic,
  academics_requests.status,
  academics_requests.applicationData
FROM 
    academics_requests
`).all(status);

    const totalCity = Array.from(new Set(status.map((e) => JSON.parse(JSON.stringify(e['applicationData']))['city'])));
    const names = Array.from(new Set(status.map((e) => JSON.parse(JSON.stringify(e['academic']))['title'])));



    c.json(200, {
        total: status.length,
        new: status.filter((e) => e.status == "pending").length,
        approved: status.filter((e) => e.status == "approved").length,
        cancel: status.filter((e) => e.status == "cancel").length,
        complete: status.filter((e) => e.status == "complete").length,
        totalAmount: status.reduce((sum, e) => JSON.parse(JSON.stringify(e['academic']))['amount'] + sum, 0),
        totalCity: totalCity.length,
        names: names.length
    })


})