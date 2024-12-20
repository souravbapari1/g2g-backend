/// <reference path="../pb_data/types.d.ts" />

onRecordAfterCreateRequest((e) => {


    try {
        const id = e.record.get("id");
        const collection = $app.dao().findCollectionByNameOrId("project_docs");
        const newRecord = new Record(collection, {
            project: id
        });
        // Save each new record (assuming saveRecord is synchronous)
        $app.dao().saveRecord(newRecord);
        console.log(newRecord.get("id"));
        e.record.set("docs", newRecord.get("id"));
        $app.dao().saveRecord(e.record);
    } catch (error) {
        console.log(error);

    }


}, "projects");


routerAdd("GET", "/project/target", (c) => {
    const id = c.queryParam("id");
    const type = c.queryParam("type") || "tree";
    const status = arrayOf(new DynamicModel({
        "total": 0
    }));
    // Query the database for trees with their related unit types and SDGs
    if (type == "tree") {
        $app.dao().db()
            .newQuery(`SELECT (ROW_NUMBER() OVER()) AS id,
COALESCE(SUM(tree_planting_orders.tree_count),0) AS total
FROM 
tree_planting_orders
WHERE tree_planting_orders.project = "${id}"
`).all(status);
    } else {
        $app.dao().db()
            .newQuery(` SELECT (ROW_NUMBER() OVER()) AS id,
SUM(other_projects_orders.amount) AS total
FROM 
other_projects_orders
WHERE other_projects_orders.project = "${id}"
`).all(status);
    }


    c.json(200, { total: status[0].total })

})
