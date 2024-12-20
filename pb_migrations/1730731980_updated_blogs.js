/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mbxepr0hrjz7crg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t45pu675",
    "name": "public",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mbxepr0hrjz7crg")

  // remove
  collection.schema.removeField("t45pu675")

  return dao.saveCollection(collection)
})
