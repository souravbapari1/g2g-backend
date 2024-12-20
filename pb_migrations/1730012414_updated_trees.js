/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7m4kwgf2i2yb4z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dzdtl4ys",
    "name": "plant_date",
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
  const collection = dao.findCollectionByNameOrId("e7m4kwgf2i2yb4z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dzdtl4ys",
    "name": "plat_date",
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
})
