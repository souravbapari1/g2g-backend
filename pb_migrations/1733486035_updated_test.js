/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCOUNT(memberships_payments.id) as total\nFROM memberships_payments"
  }

  // remove
  collection.schema.removeField("vxxacml8")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nSUM(memberships_payments.qun) as total\nFROM memberships_payments\nWHERE memberships_payments.completeOrder = true"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vxxacml8",
    "name": "total",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("fxq3dzth")

  return dao.saveCollection(collection)
})
