/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7m4kwgf2i2yb4z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2opbknfc",
    "name": "treeId",
    "type": "number",
    "required": false,
    "presentable": true,
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
  const collection = dao.findCollectionByNameOrId("e7m4kwgf2i2yb4z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2opbknfc",
    "name": "treeId",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
