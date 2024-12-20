/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v2j9ukvxr6bwuvr")

  collection.indexes = [
    "CREATE INDEX `idx_ijB8jjI` ON `tree_planting_orders` (`created`)",
    "CREATE INDEX `idx_CqBdIlc` ON `tree_planting_orders` (`project`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v2j9ukvxr6bwuvr")

  collection.indexes = [
    "CREATE INDEX `idx_ijB8jjI` ON `tree_planting_orders` (`created`)"
  ]

  return dao.saveCollection(collection)
})
