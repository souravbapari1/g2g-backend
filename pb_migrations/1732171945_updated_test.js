/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n id,\ntrees.unit\nFROM trees\nWHERE trees.unit != \"\" & trees.status != \"not planted\"\nGROUP BY trees.id"
  }

  // remove
  collection.schema.removeField("ex6mksyd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nfpx0s1m",
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
    "query": "SELECT\n id,\ntrees.unit\nFROM trees\nWHERE trees.unit != \"\"\nGROUP BY trees.id"
  }

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

  // remove
  collection.schema.removeField("nfpx0s1m")

  return dao.saveCollection(collection)
})
