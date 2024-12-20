/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwu0w5p9bjn1ggs")

  collection.name = "tree_planting_orders_status_count"

  // remove
  collection.schema.removeField("x8urmdio")

  // remove
  collection.schema.removeField("iqavqzh9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "votj8fit",
    "name": "status",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "phsrqyok",
    "name": "total",
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
  const collection = dao.findCollectionByNameOrId("cwu0w5p9bjn1ggs")

  collection.name = "tree_planting_orders_status"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x8urmdio",
    "name": "status",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqavqzh9",
    "name": "total",
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

  // remove
  collection.schema.removeField("votj8fit")

  // remove
  collection.schema.removeField("phsrqyok")

  return dao.saveCollection(collection)
})
