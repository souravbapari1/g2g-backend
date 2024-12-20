/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bzixxz8epv5zdy2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lmqz04u4",
    "name": "color",
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
  const collection = dao.findCollectionByNameOrId("bzixxz8epv5zdy2")

  // remove
  collection.schema.removeField("lmqz04u4")

  return dao.saveCollection(collection)
})
