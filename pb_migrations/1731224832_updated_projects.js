/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5c307ynvhidqk7k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0fh7h2em",
    "name": "project_prefix",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "tree",
        "plastic",
        "others"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5c307ynvhidqk7k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0fh7h2em",
    "name": "project_prefix",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "tree",
        "plastic"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
