/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   academics_requests.academic,\n  academics_requests.status,\n  academics_requests.applicationData\nFROM \n    academics_requests\n"
  }

  // remove
  collection.schema.removeField("itzc7efv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1ayaha8k",
    "name": "academic",
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
    "id": "ljqtmim7",
    "name": "status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "approved",
        "complete",
        "cancel"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qi1cqmep",
    "name": "applicationData",
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
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   academics_requests.academic  as Amount\nFROM \n    academics_requests\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "itzc7efv",
    "name": "Amount",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("1ayaha8k")

  // remove
  collection.schema.removeField("ljqtmim7")

  // remove
  collection.schema.removeField("qi1cqmep")

  return dao.saveCollection(collection)
})
