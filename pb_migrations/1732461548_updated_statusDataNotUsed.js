/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("516vetad7h0fwp3")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  SUM(payments.amount) as total,\n  count(payments.id) as donates\nFROM payments WHERE payments.status =\"paid\"\nGROUP BY payments.status;"
  }

  // remove
  collection.schema.removeField("zt9gjrok")

  // remove
  collection.schema.removeField("rhwnhzqk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m6jvvd7a",
    "name": "total",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a3memhvn",
    "name": "donates",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  researches.status,\n  count(researches.id) as total\nFROM researches\nGROUP BY researches.status;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zt9gjrok",
    "name": "status",
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
    "id": "rhwnhzqk",
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
  collection.schema.removeField("m6jvvd7a")

  // remove
  collection.schema.removeField("a3memhvn")

  return dao.saveCollection(collection)
})
