/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vakjsyns00rs90n")

  // remove
  collection.schema.removeField("trghy9gb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evofwsc4",
    "name": "amount",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vakjsyns00rs90n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "trghy9gb",
    "name": "amount",
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

  // remove
  collection.schema.removeField("evofwsc4")

  return dao.saveCollection(collection)
})
