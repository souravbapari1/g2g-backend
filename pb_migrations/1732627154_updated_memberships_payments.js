/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sv5sc5hcu74o13y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xcmwc4kh",
    "name": "completeOrder",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sv5sc5hcu74o13y")

  // remove
  collection.schema.removeField("xcmwc4kh")

  return dao.saveCollection(collection)
})
