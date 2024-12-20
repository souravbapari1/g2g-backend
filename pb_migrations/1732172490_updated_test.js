/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n trees.id,\ntrees.unit as unut,\n  trees.status\nFROM trees\nJOIN \nunit_types ON unit_types.id = trees.unit\nWHERE trees.unit != \"\" AND trees.status != \"not planted\" AND trees.status != \"dead\"\nGROUP BY trees.id"
  }

  // remove
  collection.schema.removeField("tghi1ij9")

  // remove
  collection.schema.removeField("xx736gso")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zshbfquw",
    "name": "unut",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1l8ewf3sqxr9gqw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "serx7hdw",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "new planted",
        "good",
        "poor",
        "dead",
        "producing",
        "not planted",
        "pending"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n trees.id,\ntrees.unit,\n  trees.status\nFROM trees\nJOIN \nunit_types ON unit_types.id = trees.unit\nWHERE trees.unit != \"\" AND trees.status != \"not planted\" AND trees.status != \"dead\"\nGROUP BY trees.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tghi1ij9",
    "name": "unit",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1l8ewf3sqxr9gqw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xx736gso",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "new planted",
        "good",
        "poor",
        "dead",
        "producing",
        "not planted",
        "pending"
      ]
    }
  }))

  // remove
  collection.schema.removeField("zshbfquw")

  // remove
  collection.schema.removeField("serx7hdw")

  return dao.saveCollection(collection)
})
