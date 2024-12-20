/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3aixcta21039cl")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  projects.country,\n  count(projects.city) as total\nFROM projects GROUP BY projects.city"
  }

  // remove
  collection.schema.removeField("a77zpvn9")

  // remove
  collection.schema.removeField("oyt6jzty")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pabe9ycd",
    "name": "country",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lakjhlxz",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  projects.country,\n  count(projects.country) as total\nFROM projects GROUP BY projects.country"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a77zpvn9",
    "name": "country",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oyt6jzty",
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
  collection.schema.removeField("pabe9ycd")

  // remove
  collection.schema.removeField("lakjhlxz")

  return dao.saveCollection(collection)
})
