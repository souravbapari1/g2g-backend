/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yjks7zp6rdqr3rj",
    "created": "2024-11-10 15:28:58.245Z",
    "updated": "2024-11-10 15:28:58.245Z",
    "name": "my_donations",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hzt08tqp",
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
      },
      {
        "system": false,
        "id": "g6uz6etj",
        "name": "total",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
      "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  payments.user,\n  count(payments.amount) as total\nFROM payments WHERE payments.status = \"paid\"\nGROUP BY payments.user"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yjks7zp6rdqr3rj");

  return dao.deleteCollection(collection);
})
