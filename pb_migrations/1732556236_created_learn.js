/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5in53wea3ve7rdb",
    "created": "2024-11-25 17:37:16.560Z",
    "updated": "2024-11-25 17:37:16.560Z",
    "name": "learn",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "typ4hgvg",
        "name": "file",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "eesynyhz",
        "name": "test",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5in53wea3ve7rdb");

  return dao.deleteCollection(collection);
})
