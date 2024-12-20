/// <reference path="../pb_data/types.d.ts" />

onRecordBeforeUpdateRequest((e) => {
    e.record.setEmailVisibility(true)
    $app.dao().saveRecord(e.record)
}, "users")