/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v2j9ukvxr6bwuvr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gihqlj2o",
    "name": "support",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v2j9ukvxr6bwuvr")

  // remove
  collection.schema.removeField("gihqlj2o")

  return dao.saveCollection(collection)
})
