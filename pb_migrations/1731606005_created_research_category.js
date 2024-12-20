/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nvomdb840x8qdz3",
    "created": "2024-11-14 17:40:05.172Z",
    "updated": "2024-11-14 17:40:05.172Z",
    "name": "research_category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "usu4zsjf",
        "name": "title",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("nvomdb840x8qdz3");

  return dao.deleteCollection(collection);
})
