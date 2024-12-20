/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n id,\ntrees.unit\nFROM trees\nWHERE trees.unit != \"\"\nGROUP BY trees.id"
  }

  // remove
  collection.schema.removeField("4bayjrbr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ex6mksyd",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n id,\ntrees.unit\n\nFROM trees\nWHERE trees.unit != \"\"\nGROUP BY trees.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4bayjrbr",
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
  collection.schema.removeField("ex6mksyd")

  return dao.saveCollection(collection)
})
