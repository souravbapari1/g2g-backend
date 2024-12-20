/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sv5sc5hcu74o13y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uzt61vbb",
    "name": "qun",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sv5sc5hcu74o13y")

  // remove
  collection.schema.removeField("uzt61vbb")

  return dao.saveCollection(collection)
})
