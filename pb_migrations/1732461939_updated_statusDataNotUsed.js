/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("516vetad7h0fwp3")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  count(projects.id) as total,\n  projects.status\nFROM projects\nGROUP BY projects.status"
  }

  // remove
  collection.schema.removeField("vxm8u5hx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w0nuxgoq",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dmczgd3k",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("516vetad7h0fwp3")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  count(projects.id) as total\nFROM projects\nGROUP BY projects.status"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vxm8u5hx",
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
  collection.schema.removeField("w0nuxgoq")

  // remove
  collection.schema.removeField("dmczgd3k")

  return dao.saveCollection(collection)
})
