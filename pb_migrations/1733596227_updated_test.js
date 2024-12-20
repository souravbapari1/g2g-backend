/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\nSUM(other_projects_orders.amount) AS total\nFROM \nother_projects_orders\nWHERE other_projects_orders.project = \"m2f61tdxm2x1kyj\""
  }

  // remove
  collection.schema.removeField("po8vszkp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hohqw0nw",
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
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\nSUM(other_projects_orders.id) AS total\nFROM \nother_projects_orders\nWHERE other_projects_orders.project = \"m2f61tdxm2x1kyj\""
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "po8vszkp",
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
  collection.schema.removeField("hohqw0nw")

  return dao.saveCollection(collection)
})
