/// <reference path="../pb_data/types.d.ts" />

onRecordBeforeUpdateRequest((e) => {
    try {
        const data = $app.dao().findFirstRecordByFilter("micro_actions", "isPrimary=true")
        // Save each new record (assuming saveRecord is synchronous)
        if (e.record.get("isPrimary")) {
            data.set("isPrimary", false);
            $app.dao().saveRecord(data);
        }
    } catch (error) {
        console.log(error);
    }
}, "micro_actions");


onRecordBeforeCreateRequest((e) => {
    try {
        const data = $app.dao().findFirstRecordByFilter("micro_actions", "isPrimary=true")
        // Save each new record (assuming saveRecord is synchronous)
        if (e.record.get("isPrimary")) {
            data.set("isPrimary", false);
            $app.dao().saveRecord(data);
        }
    } catch (error) {
        console.log(error);
    }
}, "micro_actions");
