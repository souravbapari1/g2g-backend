/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sv5sc5hcu74o13y")

  // remove
  collection.schema.removeField("wgwemhib")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ouamsue0",
    "name": "sessionId",
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
  const collection = dao.findCollectionByNameOrId("sv5sc5hcu74o13y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wgwemhib",
    "name": "sessionId",
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

  // remove
  collection.schema.removeField("ouamsue0")

  return dao.saveCollection(collection)
})
