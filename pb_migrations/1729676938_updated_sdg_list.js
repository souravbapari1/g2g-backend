/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n578zbn2subzjth")

  // remove
  collection.schema.removeField("jzffxlg6")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n578zbn2subzjth")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzffxlg6",
    "name": "sort_desc",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
