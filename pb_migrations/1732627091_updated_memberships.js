/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vakjsyns00rs90n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nfmehnwm",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "active",
        "rejected"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vakjsyns00rs90n")

  // remove
  collection.schema.removeField("nfmehnwm")

  return dao.saveCollection(collection)
})
