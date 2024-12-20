/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lxeuccuy4ddzv1z")

  // remove
  collection.schema.removeField("8my9o3ew")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqzu2smu",
    "name": "state",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lxeuccuy4ddzv1z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8my9o3ew",
    "name": "state",
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
  collection.schema.removeField("tqzu2smu")

  return dao.saveCollection(collection)
})
