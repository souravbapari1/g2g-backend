/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3aixcta21039cl")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  projects.status,\n  count(projects.status) as total\nFROM projects\nGROUP BY projects.status"
  }

  // remove
  collection.schema.removeField("y92eyvfy")

  // remove
  collection.schema.removeField("wi5xv4kh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4z824feu",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ciemjw52",
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
  const collection = dao.findCollectionByNameOrId("g3aixcta21039cl")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  projects.status,\n  count(projects.status) as total\nFROM projects\nGROUP BY projects.status\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y92eyvfy",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wi5xv4kh",
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
  collection.schema.removeField("4z824feu")

  // remove
  collection.schema.removeField("ciemjw52")

  return dao.saveCollection(collection)
})
