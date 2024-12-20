/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n id,\ntrees.unit,\n  trees.status\nFROM trees\nWHERE trees.unit != \"\" AND trees.status != \"not planted\" AND trees.status != \"dead\"\nGROUP BY trees.id"
  }

  // remove
  collection.schema.removeField("p6kjudwm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6sz5rx76",
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
    "id": "2ryn873i",
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
    "query": "SELECT\n id,\ntrees.unit\nFROM trees\nWHERE trees.unit != \"\" AND trees.status != \"not planted\" AND trees.status != \"dead\"\nGROUP BY trees.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p6kjudwm",
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

  // remove
  collection.schema.removeField("6sz5rx76")

  // remove
  collection.schema.removeField("2ryn873i")

  return dao.saveCollection(collection)
})
