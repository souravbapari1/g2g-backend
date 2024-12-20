/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7qo5zy0ksnpez7t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "egwrwdgz",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "CREDIT",
        "DEBIT",
        "DONATE"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7qo5zy0ksnpez7t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "egwrwdgz",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "CREDIT",
        "DEBIT"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
