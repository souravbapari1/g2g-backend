/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v2j9ukvxr6bwuvr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzwsew5t",
    "name": "trees",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "e7m4kwgf2i2yb4z",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v2j9ukvxr6bwuvr")

  // remove
  collection.schema.removeField("jzwsew5t")

  return dao.saveCollection(collection)
})
