/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("51ssbz2qm9ekwc2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gl7cgkap",
    "name": "updateBy",
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
  const collection = dao.findCollectionByNameOrId("51ssbz2qm9ekwc2")

  // remove
  collection.schema.removeField("gl7cgkap")

  return dao.saveCollection(collection)
})
