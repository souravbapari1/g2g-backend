/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ysd80i8kxq7oqjc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xw8ogv77",
    "name": "name",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("ysd80i8kxq7oqjc")

  // remove
  collection.schema.removeField("xw8ogv77")

  return dao.saveCollection(collection)
})
