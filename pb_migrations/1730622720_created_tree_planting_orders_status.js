/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cwu0w5p9bjn1ggs",
    "created": "2024-11-03 08:32:00.032Z",
    "updated": "2024-11-03 08:32:00.032Z",
    "name": "tree_planting_orders_status",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lryenugw",
        "name": "status",
        "type": "text",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lkfvqruj",
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
      "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ntree_planting_orders.status,\ncount(tree_planting_orders.status) as total\nFROM tree_planting_orders\nGROUP BY tree_planting_orders.status"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cwu0w5p9bjn1ggs");

  return dao.deleteCollection(collection);
})
