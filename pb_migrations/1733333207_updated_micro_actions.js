/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xayye6ny19z4vj3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ixoaiyed",
    "name": "isPrimary",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xayye6ny19z4vj3")

  // remove
  collection.schema.removeField("ixoaiyed")

  return dao.saveCollection(collection)
})
