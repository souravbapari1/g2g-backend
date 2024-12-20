/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("516vetad7h0fwp3")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  count(projects.id) as total\nFROM projects\nGROUP BY projects.status"
  }

  // remove
  collection.schema.removeField("nul1daec")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("516vetad7h0fwp3")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  count(projects.id) as total\nFROM projects"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nul1daec",
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
  collection.schema.removeField("vxm8u5hx")

  return dao.saveCollection(collection)
})
