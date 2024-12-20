/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nprojects.main_interventions\nFROM projects\nGROUP BY projects.main_interventions"
  }

  // remove
  collection.schema.removeField("ic96bhmx")

  // remove
  collection.schema.removeField("jzkjphzt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "povvlplj",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nprojects.main_interventions,\ncount(projects.main_interventions) as total\nFROM projects\nGROUP BY projects.main_interventions"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ic96bhmx",
    "name": "main_interventions",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzkjphzt",
    "name": "total",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("povvlplj")

  return dao.saveCollection(collection)
})
