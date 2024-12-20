/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\nCOUNT(tree_planting_orders.id) AS total\nFROM \ntree_planting_orders"
  }

  // remove
  collection.schema.removeField("8bo29au9")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\n         (micro_impact.refer) AS ambassador\n        FROM \n            micro_impact\nWHERE micro_impact.refer != \"\""
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8bo29au9",
    "name": "ambassador",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("ueglog4x")

  return dao.saveCollection(collection)
})
