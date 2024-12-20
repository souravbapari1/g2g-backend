/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mr1xmz86v569kuh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6dveravm",
    "name": "other_comments",
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
  const collection = dao.findCollectionByNameOrId("mr1xmz86v569kuh")

  // remove
  collection.schema.removeField("6dveravm")

  return dao.saveCollection(collection)
})
