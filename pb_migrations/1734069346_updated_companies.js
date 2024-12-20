/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("51ssbz2qm9ekwc2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvr1epmc",
    "name": "rejectReason",
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
  const collection = dao.findCollectionByNameOrId("51ssbz2qm9ekwc2")

  // remove
  collection.schema.removeField("cvr1epmc")

  return dao.saveCollection(collection)
})
