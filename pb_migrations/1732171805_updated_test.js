/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ntrees.unit\n\nFROM trees\n  WHERE trees.unit != NULL\nGROUP BY trees.id"
  }

  // remove
  collection.schema.removeField("u0vyqgvc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mxna97uo",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ntrees.unit\n\nFROM trees\nGROUP BY trees.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u0vyqgvc",
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
  collection.schema.removeField("mxna97uo")

  return dao.saveCollection(collection)
})
