/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nweekly_reports.week1,\n  weekly_reports.week2,\n  weekly_reports.week3,\n  weekly_reports.week4\nFROM weekly_reports"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lk1mtlko",
    "name": "week1",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "20diubkz",
    "name": "week2",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hio1cll1",
    "name": "week3",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pl45jixd",
    "name": "week4",
    "type": "json",
    "required": false,
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id\nFROM weekly_reports"
  }

  // remove
  collection.schema.removeField("lk1mtlko")

  // remove
  collection.schema.removeField("20diubkz")

  // remove
  collection.schema.removeField("hio1cll1")

  // remove
  collection.schema.removeField("pl45jixd")

  return dao.saveCollection(collection)
})
