/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yi5kxp2otj3pkd2",
    "created": "2024-12-03 15:04:45.030Z",
    "updated": "2024-12-03 15:04:45.030Z",
    "name": "academics_requests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3vlymegu",
        "name": "academic",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "igxpg15p",
        "name": "applicationData",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yi5kxp2otj3pkd2");

  return dao.deleteCollection(collection);
})
