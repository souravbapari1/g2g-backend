/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3aixcta21039cl")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  projects.city,\n  count(projects.city) as total\nFROM projects GROUP BY projects.city"
  }

  // remove
  collection.schema.removeField("hyjkn3eh")

  // remove
  collection.schema.removeField("p15uf4hx")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3aixcta21039cl")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  projects.city,\n  count(projects.id) as total\nFROM projects GROUP BY projects.city"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hyjkn3eh",
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
    "id": "p15uf4hx",
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
  collection.schema.removeField("fuwntjyy")

  // remove
  collection.schema.removeField("9gtyasjb")

  return dao.saveCollection(collection)
})
