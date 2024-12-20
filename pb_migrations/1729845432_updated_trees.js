/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7m4kwgf2i2yb4z")

  // remove
  collection.schema.removeField("ggvlt6fi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8vefcqrq",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "new planted",
        "good",
        "Poor",
        "dead",
        "producing",
        "not planted"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7m4kwgf2i2yb4z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ggvlt6fi",
    "name": "status",
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

  // remove
  collection.schema.removeField("8vefcqrq")

  return dao.saveCollection(collection)
})
