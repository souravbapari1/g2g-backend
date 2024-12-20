/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   fslp.application,\n  fslp.status\nFROM \n    fslp\n"
  }

  // remove
  collection.schema.removeField("1ayaha8k")

  // remove
  collection.schema.removeField("ljqtmim7")

  // remove
  collection.schema.removeField("qi1cqmep")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yb06y5ff",
    "name": "application",
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
    "id": "mpzxfy2v",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "approved",
        "cancel",
        "complete"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   academics_requests.academic,\n  academics_requests.status,\n  academics_requests.applicationData\nFROM \n    academics_requests\n"
  }

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

  // remove
  collection.schema.removeField("yb06y5ff")

  // remove
  collection.schema.removeField("mpzxfy2v")

  return dao.saveCollection(collection)
})
