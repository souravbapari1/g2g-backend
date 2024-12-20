/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7m4kwgf2i2yb4z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m3pku8fq",
    "name": "maped_by",
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
  const collection = dao.findCollectionByNameOrId("e7m4kwgf2i2yb4z")

  // remove
  collection.schema.removeField("m3pku8fq")

  return dao.saveCollection(collection)
})
