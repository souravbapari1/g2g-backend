/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2mbmednc4khvxsg",
    "created": "2024-11-03 08:30:47.471Z",
    "updated": "2024-11-03 08:30:47.471Z",
    "name": "trees_status",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "inwtxrqk",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "new planted",
            "good",
            "poor",
            "dead",
            "producing",
            "not planted",
            "pending"
          ]
        }
      },
      {
        "system": false,
        "id": "hjaqttob",
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
      "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  trees.status,\n  count(trees.status) as total\nFROM trees\nGROUP BY trees.status"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2mbmednc4khvxsg");

  return dao.deleteCollection(collection);
})
