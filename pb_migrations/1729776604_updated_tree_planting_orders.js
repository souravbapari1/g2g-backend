/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v2j9ukvxr6bwuvr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7oun9ij9",
    "name": "order_id",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v2j9ukvxr6bwuvr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7oun9ij9",
    "name": "order_id",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
