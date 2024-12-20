/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nSUM(other_projects_orders.amount) as total\nFROM other_projects_orders WHERE other_projects_orders.user = \"mhglvch6hnxrj9m\""
  }

  // remove
  collection.schema.removeField("htvwwzcj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r5z4rvtt",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nSUM(tree_planting_orders.amount) as total\nFROM tree_planting_orders WHERE tree_planting_orders.user = \"mhglvch6hnxrj9m\""
  }

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

  // remove
  collection.schema.removeField("r5z4rvtt")

  return dao.saveCollection(collection)
})
