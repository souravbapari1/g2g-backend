/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id\n\nFROM trees\nGROUP BY trees.unit"
  }

  // remove
  collection.schema.removeField("vyiu1ljb")

  return dao.saveCollection(collection)
})
