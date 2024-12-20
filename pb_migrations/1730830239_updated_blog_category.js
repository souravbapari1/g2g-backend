/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ur8wncsk0unctg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ip9jdalv",
    "name": "showOnTab",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ur8wncsk0unctg")

  // remove
  collection.schema.removeField("ip9jdalv")

  return dao.saveCollection(collection)
})
