/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v61pvmd7rg8okw7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ew3takxi",
    "name": "liveNow",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v61pvmd7rg8okw7")

  // remove
  collection.schema.removeField("ew3takxi")

  return dao.saveCollection(collection)
})
