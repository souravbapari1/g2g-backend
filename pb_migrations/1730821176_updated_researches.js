/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6o8kc5rorqkc114")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f6bkljkh",
    "name": "status",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6o8kc5rorqkc114")

  // remove
  collection.schema.removeField("f6bkljkh")

  return dao.saveCollection(collection)
})
