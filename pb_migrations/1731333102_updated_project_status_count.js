/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3aixcta21039cl")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  projects.country,\n  count(projects.country) as total\nFROM projects\nGROUP BY projects.id"
  }

  // remove
  collection.schema.removeField("huwozzwn")

  // remove
  collection.schema.removeField("bzqee8qy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "psk24zqa",
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
    "id": "3u4upmzp",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  projects.country,\n  count(projects.country) as total\nFROM projects\nGROUP BY projects.country"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "huwozzwn",
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
    "id": "bzqee8qy",
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
  collection.schema.removeField("psk24zqa")

  // remove
  collection.schema.removeField("3u4upmzp")

  return dao.saveCollection(collection)
})
