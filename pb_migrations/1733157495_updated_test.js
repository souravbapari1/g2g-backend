/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nSUM(memberships_payments.amount) as total\nFROM memberships_payments\nWHERE memberships_payments.completeOrder = true"
  }

  // remove
  collection.schema.removeField("5dwxnpxj")

  // remove
  collection.schema.removeField("xkrlmi4v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rn2kwpma",
    "name": "total",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nmemberships_payments.status,\ncount(memberships_payments.status) as total\nFROM memberships_payments\nGROUP BY memberships_payments.status"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5dwxnpxj",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "confirm",
        "cancel"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xkrlmi4v",
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
  collection.schema.removeField("rn2kwpma")

  return dao.saveCollection(collection)
})
