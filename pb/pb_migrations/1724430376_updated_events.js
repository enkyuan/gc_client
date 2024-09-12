/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zxe94ugb8kma8r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nr9qkndf",
    "name": "institution",
    "type": "relation",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zxe94ugb8kma8r")

  // remove
  collection.schema.removeField("nr9qkndf")

  return dao.saveCollection(collection)
})