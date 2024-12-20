/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q2kyuidp1kfj73f")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ntrees.unit,\ncount(trees.unit) as total\nFROM trees\nGROUP BY trees.unit"
  }

  // remove
  collection.schema.removeField("jwdlnwsh")

  // remove
  collection.schema.removeField("hpncmdxj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ujpltdcs",
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
    "id": "stiiaizc",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q2kyuidp1kfj73f")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ntrees.treeType,\ncount(trees.treeType) as total\nFROM trees\nGROUP BY trees.treeType"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jwdlnwsh",
    "name": "treeType",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hpncmdxj",
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
  collection.schema.removeField("ujpltdcs")

  // remove
  collection.schema.removeField("stiiaizc")

  return dao.saveCollection(collection)
})
