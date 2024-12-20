/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("67cd3d3t3em3x07")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mvcmeds9",
    "name": "category",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "jh11rscicoiu2y6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("67cd3d3t3em3x07")

  // remove
  collection.schema.removeField("mvcmeds9")

  return dao.saveCollection(collection)
})
