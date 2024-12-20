/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ntrees.unit\n\nFROM trees\nGROUP BY trees.unit"
  }

  // remove
  collection.schema.removeField("vyiu1ljb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rkcrh4pn",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ntrees.area\n\nFROM trees\nGROUP BY trees.unit"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vyiu1ljb",
    "name": "area",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000000
    }
  }))

  // remove
  collection.schema.removeField("rkcrh4pn")

  return dao.saveCollection(collection)
})
