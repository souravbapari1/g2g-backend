/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q2kyuidp1kfj73f")

  collection.name = "trees_plants_count"

  // remove
  collection.schema.removeField("kqow3k5b")

  // remove
  collection.schema.removeField("vde6elbv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lvc7vhsg",
    "name": "treeType",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvvwuufm",
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
  const collection = dao.findCollectionByNameOrId("q2kyuidp1kfj73f")

  collection.name = "trees_type_status"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kqow3k5b",
    "name": "treeType",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vde6elbv",
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
  collection.schema.removeField("lvc7vhsg")

  // remove
  collection.schema.removeField("cvvwuufm")

  return dao.saveCollection(collection)
})
