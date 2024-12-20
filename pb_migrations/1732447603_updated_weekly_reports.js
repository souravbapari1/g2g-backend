/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yxrv93tbya7anz3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tvaiur0f",
    "name": "year",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yf3wjwvu",
    "name": "month",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("yxrv93tbya7anz3")

  // remove
  collection.schema.removeField("tvaiur0f")

  // remove
  collection.schema.removeField("yf3wjwvu")

  return dao.saveCollection(collection)
})
