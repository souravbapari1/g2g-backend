/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0bla5noi4qziql")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "frongvtw",
    "name": "payurl",
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
  const collection = dao.findCollectionByNameOrId("i0bla5noi4qziql")

  // remove
  collection.schema.removeField("frongvtw")

  return dao.saveCollection(collection)
})
