/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("67cd3d3t3em3x07")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "at9vycjq",
    "name": "location_url",
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
  const collection = dao.findCollectionByNameOrId("67cd3d3t3em3x07")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "at9vycjq",
    "name": "location_url",
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
})
