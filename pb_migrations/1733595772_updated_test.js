/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\nSUM(tree_planting_orders.id) AS total\nFROM \ntree_planting_orders\nWHERE tree_planting_orders.project = \"aqih4s5u4nfpzvk\""
  }

  // remove
  collection.schema.removeField("dhlkns1u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dgerkemu",
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
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\nSUM(tree_planting_orders.id) AS total\nFROM \ntree_planting_orders"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dhlkns1u",
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
  collection.schema.removeField("dgerkemu")

  return dao.saveCollection(collection)
})
