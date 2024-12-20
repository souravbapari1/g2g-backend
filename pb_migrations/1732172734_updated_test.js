/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n    trees.id,\n    trees.unit,\n    trees.status,\n    unit_types.parameters,\n    unit_types.sdg\nFROM trees\nJOIN unit_types ON unit_types.id = trees.unit\nJOIN sdg_list ON sdg_list.id = unit_types.sdg\nWHERE trees.unit != \"\" \n  AND trees.status != \"not planted\" \n  AND trees.status != \"dead\"\nGROUP BY trees.id\n"
  }

  // remove
  collection.schema.removeField("l8cz8ns0")

  // remove
  collection.schema.removeField("hmxrs7ti")

  // remove
  collection.schema.removeField("m7czga1y")

  // remove
  collection.schema.removeField("fjptjv2t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1ckvpntm",
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
    "id": "yozuapef",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h84zoj70",
    "name": "parameters",
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
    "id": "qvdj2xim",
    "name": "sdg",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "n578zbn2subzjth",
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
    "query": "SELECT\n    trees.id,\n    trees.unit,\n    trees.status,\n    unit_types.parameters,\n    unit_types.sdg\nFROM trees\nJOIN unit_types ON unit_types.id = trees.unit\nJOIN sdg_list ON sdg_list.id = unit_types.sdg\nWHERE trees.unit != \"\" \n  AND trees.status != \"not planted\" \n  AND trees.status != \"dead\"\nGROUP BY trees.id, trees.unit, trees.status, unit_types.parameters, unit_types.sdg;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l8cz8ns0",
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
    "id": "hmxrs7ti",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m7czga1y",
    "name": "parameters",
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
    "id": "fjptjv2t",
    "name": "sdg",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "n578zbn2subzjth",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("1ckvpntm")

  // remove
  collection.schema.removeField("yozuapef")

  // remove
  collection.schema.removeField("h84zoj70")

  // remove
  collection.schema.removeField("qvdj2xim")

  return dao.saveCollection(collection)
})
