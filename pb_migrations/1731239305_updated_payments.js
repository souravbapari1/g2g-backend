/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0bla5noi4qziql")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lyktym48",
    "name": "orderPlaced",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0bla5noi4qziql")

  // remove
  collection.schema.removeField("lyktym48")

  return dao.saveCollection(collection)
})
