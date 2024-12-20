/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\nSUM(tree_planting_orders.id) AS total\nFROM \ntree_planting_orders\nWHERE tree_planting_orders.project = \"vn2eke2o6pwm4hf\""
  }

  // remove
  collection.schema.removeField("dgerkemu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "coks3qo0",
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
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\nSUM(tree_planting_orders.id) AS total\nFROM \ntree_planting_orders\nWHERE tree_planting_orders.project = \"aqih4s5u4nfpzvk\""
  }

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

  // remove
  collection.schema.removeField("coks3qo0")

  return dao.saveCollection(collection)
})
