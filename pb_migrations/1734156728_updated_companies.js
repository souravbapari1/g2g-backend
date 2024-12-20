/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("51ssbz2qm9ekwc2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pgtuarcc",
    "name": "approvedBy",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ak5vhm4f",
    "name": "approvedDate",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("51ssbz2qm9ekwc2")

  // remove
  collection.schema.removeField("pgtuarcc")

  // remove
  collection.schema.removeField("ak5vhm4f")

  return dao.saveCollection(collection)
})
