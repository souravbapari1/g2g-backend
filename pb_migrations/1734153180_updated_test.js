/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nSUM(tree_planting_orders.amount) as total\nFROM tree_planting_orders WHERE tree_planting_orders.user = \"mhglvch6hnxrj9m\""
  }

  // remove
  collection.schema.removeField("qb1nl2i9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "htvwwzcj",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nSUM(tree_planting_orders.amount) as total\nFROM tree_planting_orders"
  }

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

  // remove
  collection.schema.removeField("htvwwzcj")

  return dao.saveCollection(collection)
})
