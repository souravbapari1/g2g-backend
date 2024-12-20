/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ot4pamuku3vvb84")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0xioobuv",
    "name": "refer",
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
  const collection = dao.findCollectionByNameOrId("ot4pamuku3vvb84")

  // remove
  collection.schema.removeField("0xioobuv")

  return dao.saveCollection(collection)
})
