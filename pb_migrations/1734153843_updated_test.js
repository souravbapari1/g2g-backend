/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nprojects.operated_by as users\nFROM projects"
  }

  // remove
  collection.schema.removeField("t80m1hcb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "45179qvm",
    "name": "users",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nSUM(tree_planting_orders.tree_count) as total\nFROM tree_planting_orders WHERE tree_planting_orders.user = \"mhglvch6hnxrj9m\""
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t80m1hcb",
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
  collection.schema.removeField("45179qvm")

  return dao.saveCollection(collection)
})
