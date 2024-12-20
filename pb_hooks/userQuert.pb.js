/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/user/status", (c) => {
    const id = c.queryParam("id")
    if (!id) {
        return c.json(200, {
            assignedProjects: 0,
            noOrders: 0,
            noTrees: 0,
            totalAmount: 0,
        });
    }

    const totalTreeAmount = arrayOf(new DynamicModel({
        "total": 0
    }));

    $app.dao().db().newQuery(`SELECT
(ROW_NUMBER() OVER()) as id,
COALESCE(SUM(tree_planting_orders.amount),0) as total
FROM tree_planting_orders WHERE tree_planting_orders.user = "${id}"`).all(totalTreeAmount)


    const totalOthersAmount = arrayOf(new DynamicModel({
        "total": 0
    }));

    $app.dao().db().newQuery(`SELECT
(ROW_NUMBER() OVER()) as id,
COALESCE(SUM(other_projects_orders.amount),0) as total
FROM other_projects_orders WHERE other_projects_orders.user = "${id}"`).all(totalOthersAmount)


    const totalOthers = arrayOf(new DynamicModel({
        "total": 0
    }));

    $app.dao().db().newQuery(`SELECT
(ROW_NUMBER() OVER()) as id,
COUNT(other_projects_orders.id) as total
FROM other_projects_orders WHERE other_projects_orders.user = "${id}"`).all(totalOthers)


    const totalTrees = arrayOf(new DynamicModel({
        "total": 0
    }));

    $app.dao().db().newQuery(`SELECT
    (ROW_NUMBER() OVER()) as id,
    COALESCE(SUM(tree_planting_orders.tree_count),0) as total
    FROM tree_planting_orders WHERE tree_planting_orders.user = "${id}"`).all(totalTrees)



    const projectUsers = arrayOf(new DynamicModel({
        "users": []
    }));

    $app.dao().db().newQuery(`SELECT
    (ROW_NUMBER() OVER()) as id,
    projects.operated_by as users
    FROM projects`).all(projectUsers)


    const totalProjects = projectUsers.filter((e) => {
        return e['users'].includes(id)
    })

    return c.json(200, {
        totalTreeAmount: totalTreeAmount[0]['total'],
        totalOthersAmount: totalOthersAmount[0]['total'],
        totalTrees: totalTrees[0]['total'],
        // projectUsers,
        assignedProjects: totalProjects.length,
        totalAmount: totalTreeAmount[0]['total'] + totalOthersAmount[0]['total'],
        totalOthers: totalOthers[0].length
    })


})