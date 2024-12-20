/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCOUNT(memberships_payments.id)*5 as total\nFROM memberships_payments"
  }

  // remove
  collection.schema.removeField("fxq3dzth")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5gtftnvk",
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
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCOUNT(memberships_payments.id) as total\nFROM memberships_payments"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxq3dzth",
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
  collection.schema.removeField("5gtftnvk")

  return dao.saveCollection(collection)
})
