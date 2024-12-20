/// <reference path="../pb_data/types.d.ts" />

onRecordsListRequest((e) => {
    let items = e.result.items;
    // Retrieve the 'hideFields' query parameter
    const fields = e.httpContext.queryParam("hideFields");


    e.records.forEach(item => {
        const fieldsList = fields.split(",").map(field => field.trim());
        fieldsList.forEach(key => {
         item.set(key,null)
        });
    });
    

});
