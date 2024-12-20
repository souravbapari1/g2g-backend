/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0bla5noi4qziql")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "na0rpail",
    "name": "other_order",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "dt9ovvzwz1410oe",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0bla5noi4qziql")

  // remove
  collection.schema.removeField("na0rpail")

  return dao.saveCollection(collection)
})
