/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5c307ynvhidqk7k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jnotwj5l",
    "name": "report",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5c307ynvhidqk7k")

  // remove
  collection.schema.removeField("jnotwj5l")

  return dao.saveCollection(collection)
})
