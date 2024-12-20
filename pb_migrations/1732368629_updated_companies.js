/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("51ssbz2qm9ekwc2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j8mpwayv",
    "name": "approved_status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "inreview",
        "approved",
        "rejected"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("51ssbz2qm9ekwc2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j8mpwayv",
    "name": "approved_status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "approved",
        "rejected"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
