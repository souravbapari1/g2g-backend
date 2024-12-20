/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nSUM(tree_planting_orders.amount) as total\nFROM tree_planting_orders"
  }

  // remove
  collection.schema.removeField("pq7fa9rl")

  // remove
  collection.schema.removeField("0xjd2ayu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qb1nl2i9",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ntree_planting_orders.status,\nSUM(tree_planting_orders.amount) as total\nFROM tree_planting_orders"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pq7fa9rl",
    "name": "status",
    "type": "text",
    "required": false,
    "presentable": true,
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
    "id": "0xjd2ayu",
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
  collection.schema.removeField("qb1nl2i9")

  return dao.saveCollection(collection)
})
