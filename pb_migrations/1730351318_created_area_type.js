/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bzixxz8epv5zdy2",
    "created": "2024-10-31 05:08:38.727Z",
    "updated": "2024-10-31 05:08:38.727Z",
    "name": "area_type",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xapiherp",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bzixxz8epv5zdy2");

  return dao.deleteCollection(collection);
})
