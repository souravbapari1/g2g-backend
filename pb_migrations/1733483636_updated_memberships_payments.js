/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sv5sc5hcu74o13y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tip9vd1i",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "new",
        "processing",
        "delivred",
        "cancelled"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sv5sc5hcu74o13y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tip9vd1i",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "confirm",
        "cancel"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
