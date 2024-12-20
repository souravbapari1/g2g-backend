/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3aixcta21039cl")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  projects.type,\n  count(projects.type) as total\nFROM projects GROUP BY projects.type"
  }

  // remove
  collection.schema.removeField("fuwntjyy")

  // remove
  collection.schema.removeField("9gtyasjb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3oumls7r",
    "name": "type",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cicr7462kdp9f7g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cojdiqwd",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  projects.city,\n  count(projects.city) as total\nFROM projects GROUP BY projects.city"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fuwntjyy",
    "name": "city",
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
    "id": "9gtyasjb",
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
  collection.schema.removeField("3oumls7r")

  // remove
  collection.schema.removeField("cojdiqwd")

  return dao.saveCollection(collection)
})
