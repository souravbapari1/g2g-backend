/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xayye6ny19z4vj3")

  // remove
  collection.schema.removeField("91jo3hep")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xayye6ny19z4vj3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "91jo3hep",
    "name": "sponsors",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
})
