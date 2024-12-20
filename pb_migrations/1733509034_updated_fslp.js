/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xy1tv1o7htp2dri")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fvoncn39",
    "name": "review_note",
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
  const collection = dao.findCollectionByNameOrId("xy1tv1o7htp2dri")

  // remove
  collection.schema.removeField("fvoncn39")

  return dao.saveCollection(collection)
})
