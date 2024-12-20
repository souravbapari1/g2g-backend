/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id\n\nFROM trees\nGROUP BY trees.unit"
  }

  // remove
  collection.schema.removeField("flzc8me5")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nprojects.main_interventions\nFROM projects\nGROUP BY projects.main_interventions"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "flzc8me5",
    "name": "main_interventions",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
})
