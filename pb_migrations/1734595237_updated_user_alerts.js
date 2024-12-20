/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2vv3q89oy48udr2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g1fj57ou",
    "name": "user",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2vv3q89oy48udr2")

  // remove
  collection.schema.removeField("g1fj57ou")

  return dao.saveCollection(collection)
})
