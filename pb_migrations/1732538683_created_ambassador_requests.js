/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "90c81j7nz8ifk1u",
    "created": "2024-11-25 12:44:43.704Z",
    "updated": "2024-11-25 12:44:43.704Z",
    "name": "ambassador_requests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b5lh7ktx",
        "name": "user",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("90c81j7nz8ifk1u");

  return dao.deleteCollection(collection);
})
