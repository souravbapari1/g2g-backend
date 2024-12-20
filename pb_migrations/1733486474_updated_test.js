/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nSUM(memberships_payments.amount*memberships_payments.qun) as total\nFROM memberships_payments"
  }

  // remove
  collection.schema.removeField("gndctzjv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cwwkehqu",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nmemberships_payments.amount*memberships_payments.qun as total\nFROM memberships_payments"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gndctzjv",
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
  collection.schema.removeField("cwwkehqu")

  return dao.saveCollection(collection)
})
