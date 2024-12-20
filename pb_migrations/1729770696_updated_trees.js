/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7m4kwgf2i2yb4z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p673nufa",
    "name": "order",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "v2j9ukvxr6bwuvr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7m4kwgf2i2yb4z")

  // remove
  collection.schema.removeField("p673nufa")

  return dao.saveCollection(collection)
})
