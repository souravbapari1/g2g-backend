/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("90c81j7nz8ifk1u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a7u30w6p",
    "name": "status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "approved",
        "reject"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("90c81j7nz8ifk1u")

  // remove
  collection.schema.removeField("a7u30w6p")

  return dao.saveCollection(collection)
})
