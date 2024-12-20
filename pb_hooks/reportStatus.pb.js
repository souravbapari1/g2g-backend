/// <reference path="../pb_data/types.d.ts" />
routerAdd("GET", "/impact/status", (c) => {
    // Initialize the status array with an empty model
    const status = arrayOf(new DynamicModel({
        "id": "",
        "collectionId": "",
        "collectionName": "tst",
        "unit": "",
        "status": "",
        "parameters": "",
        "sdg": []
    }));

    // Query the database for trees with their related unit types and SDGs
    $app.dao().db()
        .newQuery(`SELECT
trees.id,
trees.status,
unit_types.parameters,
unit_types.sdg,
unit_types.orm_unit,
unit_types.unit
FROM trees
JOIN unit_types ON unit_types.id = trees.unit
WHERE trees.unit != "" AND trees.status != "not planted" AND trees.status != "dead"
GROUP BY trees.id`).all(status);

    let list_params = [];

    // Process each status and parse the parameters
    status.forEach((e) => {

        if (e.parameters) {

            try {
                var data = ([...JSON.parse(e.parameters)]);

                data.forEach((item) => {
                    item['unit'] = e.unit;
                })

                list_params.push(data);
            } catch (err) {
                console.error("Error parsing parameters:", err);
            }
        }
    });


    let count = [];  // Using an array to accumulate values

    // Accumulate the values for each parameter
    list_params.forEach((paramList) => {
        paramList.forEach((param) => {
            if (param.name && param.value) {
                // Check if the parameter already exists in the count array
                const existingParam = count.find((item) => item.name === param.name);

                if (existingParam) {
                    // Accumulate the value if the parameter already exists
                    existingParam.value += +param.value;
                } else {
                    count.push({
                        id: param.id || '',  // Ensure there's an ID or set to empty string
                        name: param.name,
                        value: +param.value,
                        unit: param.unit
                    });
                }
            }
        });
    });

    let final_data = []

    const sdgIds = new Set(count.map((e) => e.id));

    [...Array.from(sdgIds)].filter((e) => e).forEach(id => {
        const record = $app.dao().findRecordById("sdg_list", id)
        final_data.push({ ...JSON.parse(JSON.stringify(record)), count: count.filter((e) => e.id == id) })
    });
    // console.log("work");
    // Return the accumulated result as JSON
    return c.json(200, final_data);
});
