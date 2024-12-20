/// <reference path="../pb_data/types.d.ts" />
routerAdd("GET", "/counting", (c) => {
    const trees_status = arrayOf(new DynamicModel({
        "id": "",
        "status": "",
        "total": 0
    }));
    $app.dao().db()
        .newQuery(`SELECT
        (ROW_NUMBER() OVER()) as id,
        trees.status,
        count(trees.status) as total
        FROM trees
        GROUP BY trees.status`)
        .all(trees_status)


    const blogs_status = arrayOf(new DynamicModel({
        "id": "",
        "public": false,
        "total": 0
    }));
    $app.dao().db()
        .newQuery(`SELECT
        (ROW_NUMBER() OVER()) as id,
        blogs.public,
        count(blogs.id) as total
        FROM blogs
        GROUP BY blogs.public;`)
        .all(blogs_status)


    const users_status = arrayOf(new DynamicModel({
        "id": "",
        "user_type": "",
        "total": 123
    }));
    $app.dao().db()
        .newQuery(`SELECT
        (ROW_NUMBER() OVER()) as id,
        users.user_type,
        count(users.id) as total
        FROM users
        GROUP BY users.user_type;`)
        .all(users_status)


    const researches_status = arrayOf(new DynamicModel({
        "id": "",
        "status": "",
        "total": 123
    }));
    $app.dao().db()
        .newQuery(`SELECT
        (ROW_NUMBER() OVER()) as id,
        researches.status,
        count(researches.id) as total
        FROM researches
        GROUP BY researches.status;`)
        .all(researches_status)


    const donate_status = arrayOf(new DynamicModel({
        "id": "",
        "total": 0,
        "donates": 0
    }));
    $app.dao().db()
        .newQuery(`SELECT
        (ROW_NUMBER() OVER()) as id,
        SUM(payments.amount) as total,
        count(payments.id) as donates
        FROM payments WHERE payments.status ="paid"
        GROUP BY payments.status;`)
        .all(donate_status)


    const unit_status = arrayOf(new DynamicModel({
        "id": "",
        "total": 0,
    }));
    $app.dao().db()
        .newQuery(`SELECT
        (ROW_NUMBER() OVER()) as id,
        count(unit_types.id) as total
        FROM unit_types;`)
        .all(unit_status)


    const project_status = arrayOf(new DynamicModel({
        "id": "",
        "total": 123,
        "status": "test"
    }));
    $app.dao().db()
        .newQuery(`SELECT
        (ROW_NUMBER() OVER()) as id,
        count(projects.id) as total,
        projects.status
        FROM projects
        GROUP BY projects.status`)
        .all(project_status)


    const tree_orders_status = arrayOf(new DynamicModel({
        "id": "",
        "total": 123,
        "status": "test"
    }));
    $app.dao().db()
        .newQuery(`SELECT
        (ROW_NUMBER() OVER()) as id,
        count(tree_planting_orders.id) as total,
        tree_planting_orders.status
        FROM tree_planting_orders
        GROUP BY tree_planting_orders.status`)
        .all(tree_orders_status)



    return c.json(200, { trees_status, blogs_status, users_status, researches_status, donate_status, unit_status, project_status, tree_orders_status })
})