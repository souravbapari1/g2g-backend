/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nSUM(memberships_payments.amount) as total\nFROM memberships_payments\nWHERE memberships_payments.completeOrder = true"
  }

  // remove
  collection.schema.removeField("tiwlx853")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4kfn3joq",
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
    "query": "SELECT \n        (ROW_NUMBER() OVER()) AS id,\n        SUM(micro_impact.user) as users\n        FROM \n        micro_impact\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tiwlx853",
    "name": "users",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("4kfn3joq")

  return dao.saveCollection(collection)
})
