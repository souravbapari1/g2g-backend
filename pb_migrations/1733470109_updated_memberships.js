/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vakjsyns00rs90n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xya9bncr",
    "name": "stocks",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vakjsyns00rs90n")

  // remove
  collection.schema.removeField("xya9bncr")

  return dao.saveCollection(collection)
})
