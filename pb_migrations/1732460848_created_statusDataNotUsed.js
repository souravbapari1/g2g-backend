/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "516vetad7h0fwp3",
    "created": "2024-11-24 15:07:28.953Z",
    "updated": "2024-11-24 15:07:28.953Z",
    "name": "statusDataNotUsed",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nisippw6",
        "name": "first_name",
        "type": "text",
        "required": false,
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
    "options": {
      "query": "SELECT  users.id, users.first_name FROM users;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("516vetad7h0fwp3");

  return dao.deleteCollection(collection);
})
