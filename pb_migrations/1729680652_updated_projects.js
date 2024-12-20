/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5c307ynvhidqk7k")

  // remove
  collection.schema.removeField("vexnux88")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2bktoyvc",
    "name": "sdgs",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ysd80i8kxq7oqjc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5c307ynvhidqk7k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vexnux88",
    "name": "sdgs",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "n578zbn2subzjth",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("2bktoyvc")

  return dao.saveCollection(collection)
})
