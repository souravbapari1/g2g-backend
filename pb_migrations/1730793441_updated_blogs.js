/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mbxepr0hrjz7crg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9nmttb7j",
    "name": "category",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "5ur8wncsk0unctg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mbxepr0hrjz7crg")

  // remove
  collection.schema.removeField("9nmttb7j")

  return dao.saveCollection(collection)
})
