/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "q2kyuidp1kfj73f",
    "created": "2024-11-03 08:33:06.441Z",
    "updated": "2024-11-03 08:33:06.441Z",
    "name": "trees_type_status",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kqow3k5b",
        "name": "treeType",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vde6elbv",
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
      "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ntrees.treeType,\ncount(trees.treeType) as total\nFROM trees\nGROUP BY trees.treeType"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q2kyuidp1kfj73f");

  return dao.deleteCollection(collection);
})
