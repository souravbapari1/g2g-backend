/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yi5kxp2otj3pkd2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mpjvnju3",
    "name": "status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "approved",
        "complete",
        "cancel"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cf6rbiui",
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
  const collection = dao.findCollectionByNameOrId("yi5kxp2otj3pkd2")

  // remove
  collection.schema.removeField("mpjvnju3")

  // remove
  collection.schema.removeField("cf6rbiui")

  return dao.saveCollection(collection)
})
