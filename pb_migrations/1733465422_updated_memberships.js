/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vakjsyns00rs90n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bjvfu300",
    "name": "popular",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vakjsyns00rs90n")

  // remove
  collection.schema.removeField("bjvfu300")

  return dao.saveCollection(collection)
})
