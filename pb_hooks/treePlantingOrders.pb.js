/// <reference path="../pb_data/types.d.ts" />

onRecordBeforeCreateRequest((e) => {
    const result = new DynamicModel({
        "count": 0,
    });

    $app.dao().db().newQuery("SELECT COUNT(*) AS count FROM tree_planting_orders").one(result);

    e.record.set("order_id",result.count+101)
    e.record.set("maping_status","pending")
    e.record.set("status","received")

    $app.dao().saveRecord(e.record)

}, "tree_planting_orders")



onRecordAfterCreateRequest((e) => {
    try {
        const user = e.record.get("user");
        const treeCount = e.record.get("tree_count");
        const orderId = e.record.get("id");
        const orderNo = e.record.get("order_id");
        const projectId = e.record.get("project");
     
        const userData = $app.dao().findRecordById("users", user);
        const name = `${userData.get("first_name")} ${userData.get("last_name")}`;
        userData.set("tree_orders",[e.record.get("id"),...userData.get("tree_orders")]);
        $app.dao().saveRecord(userData);

        // Initialize a DynamicModel to hold the count result
        const result = new DynamicModel({ "count": 0 });
        // Get the count of existing trees
        $app.dao().db().newQuery("SELECT COUNT(*) AS count FROM trees").one(result);

        const collection = $app.dao().findCollectionByNameOrId("trees");


        


        let myTreeIds =[]
        // Create and save new tree records based on treeCount
        for (let i = 0; i < treeCount; i++) {
            const newRecord = new Record(collection,{
                "treeId": (result.count) + i,
                "treeName": name, 
                "project": projectId,  
                "orderIdNo": orderNo,
                "order": orderId,
                "status": "pending",
                "user":user
            });
            // Save each new record (assuming saveRecord is synchronous)
            
            $app.dao().saveRecord(newRecord);
            myTreeIds.push(newRecord.get("id"))
        }
        e.record.set("trees",myTreeIds);
        $app.dao().saveRecord(e.record)
    } catch (error) {
        console.error("Error during record update:", error);
    }
}, "tree_planting_orders");


onRecordBeforeDeleteRequest((e) => {

    e.record.get("trees").map((e)=>{
        const record = $app.dao().findRecordById("trees", e)
        $app.dao().deleteRecord(record)
    });

}, "tree_planting_orders")