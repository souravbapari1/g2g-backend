/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dt9ovvzwz1410oe")

  // remove
  collection.schema.removeField("yvu249eq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dt9ovvzwz1410oe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvu249eq",
    "name": "order_id",
    "type": "number",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
