/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mr1xmz86v569kuh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "itp31d5c",
    "name": "status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "new planted",
        "good",
        "poor",
        "dead",
        "producing",
        "not planted"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mr1xmz86v569kuh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "itp31d5c",
    "name": "status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "new planted",
        "good",
        "Poor",
        "dead",
        "producing",
        "not planted"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
