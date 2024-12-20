/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0bla5noi4qziql")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "koiv4wal",
    "name": "tree_order",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "v2j9ukvxr6bwuvr",
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
  collection.schema.removeField("koiv4wal")

  return dao.saveCollection(collection)
})
