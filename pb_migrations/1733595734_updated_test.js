/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\nSUM(tree_planting_orders.id) AS total\nFROM \ntree_planting_orders"
  }

  // remove
  collection.schema.removeField("ueglog4x")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\nCOUNT(tree_planting_orders.id) AS total\nFROM \ntree_planting_orders"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ueglog4x",
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
  collection.schema.removeField("dhlkns1u")

  return dao.saveCollection(collection)
})
