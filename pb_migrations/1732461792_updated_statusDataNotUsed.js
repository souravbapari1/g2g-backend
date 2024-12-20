/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("516vetad7h0fwp3")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  count(unit_types.id) as donates\nFROM unit_types"
  }

  // remove
  collection.schema.removeField("m6jvvd7a")

  // remove
  collection.schema.removeField("a3memhvn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygrq2s1d",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  SUM(payments.amount) as total,\n  count(payments.id) as donates\nFROM payments WHERE payments.status =\"paid\"\nGROUP BY payments.status;"
  }

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

  // remove
  collection.schema.removeField("ygrq2s1d")

  return dao.saveCollection(collection)
})
