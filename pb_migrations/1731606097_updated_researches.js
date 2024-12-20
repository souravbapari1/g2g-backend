/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6o8kc5rorqkc114")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7xwr3npe",
    "name": "category",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "nvomdb840x8qdz3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6o8kc5rorqkc114")

  // remove
  collection.schema.removeField("7xwr3npe")

  return dao.saveCollection(collection)
})
