/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/membership/status", (c) => {

    try {
        const requestStatus = arrayOf(new DynamicModel({
            "status": "",
            "total": 0
        }));

        $app.dao().db()
            .newQuery(`SELECT
(ROW_NUMBER() OVER()) as id,
memberships_payments.status,
COALESCE(count(memberships_payments.status),0) as total
FROM memberships_payments WHERE memberships_payments.status != '' 
GROUP BY memberships_payments.status `).all(requestStatus);

        const amount = arrayOf(new DynamicModel({
            "total": ""
        }));

        $app.dao().db()
            .newQuery(`SELECT
(ROW_NUMBER() OVER()) as id,
COALESCE(SUM(memberships_payments.amount*memberships_payments.qun),0) as total
FROM memberships_payments
WHERE memberships_payments.completeOrder = true`).all(amount);


        const quantity = arrayOf(new DynamicModel({
            "total": ""
        }));

        $app.dao().db()
            .newQuery(`SELECT
(ROW_NUMBER() OVER()) as id,
COALESCE(SUM(memberships_payments.qun),0) as total
FROM memberships_payments
WHERE memberships_payments.completeOrder = true`).all(quantity);



        const cityData = arrayOf(new DynamicModel({
            "id": "RECORD_ID",
            "payment_id": "RELATION_RECORD_ID",
            "city": "",
            "total_payments": 123
        }));

        $app.dao().db()
            .newQuery(`SELECT 
     (ROW_NUMBER() OVER()) AS id,
    memberships_payments.id AS payment_id,
    users.city AS city,
    COALESCE(COUNT(memberships_payments.id),0) AS total_payments
FROM 
    memberships_payments
JOIN 
    users ON memberships_payments.user = users.id
GROUP BY 
    memberships_payments.id, users.city
ORDER BY 
    city`).all(cityData);


        const cityCount = Array.from((new Set(cityData.map((e) => e.city))));
        const totalOrders = requestStatus.reduce((sum, current) => sum + current.total, 0);


        return c.json(200, {
            requestStatus,
            amount: amount[0]?.total,
            cityData,
            cityCount: cityCount?.length,
            totalOrders,
            quantity: quantity[0]?.total,

        });

    } catch (error) {
        c.json(200, {
            requestStatus: [

            ],
            amount: 0,
            cityData,
            cityCount: 0,
            totalOrders: 0,
            quantity: 0,
        })
    }

})