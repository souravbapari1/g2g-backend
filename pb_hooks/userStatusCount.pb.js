/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/user/status/count", (c) => {
    const type = c.queryParam('type');
    const role = c.queryParam('role');


    const totalUsers = arrayOf(new DynamicModel({
        "total": 0
    }));

    $app.dao().db().newQuery(`SELECT
    (ROW_NUMBER() OVER()) as id,
    COUNT(users.id) as total
    FROM users WHERE users.user_type = '${type}' AND role = '${role}' `).all(totalUsers)


    const totalCountry = arrayOf(new DynamicModel({
        "total": 0
    }));

    $app.dao().db().newQuery(`SELECT
    (users.country) as id,
    Count(users.country) as total
    FROM users WHERE users.user_type = '${type}' AND users.country !='' AND role = '${role}'`).all(totalCountry)


    const totalCity = arrayOf(new DynamicModel({
        "total": 0
    }));

    $app.dao().db().newQuery(`SELECT
    (users.city) as id,
    Count(users.city) as total
    FROM users WHERE users.user_type = '${type}' AND users.city !='' AND role = '${role}'`).all(totalCity)


    const activeUsers = arrayOf(new DynamicModel({
        "total": 0
    }));

    $app.dao().db().newQuery(`SELECT
    (ROW_NUMBER() OVER()) as id,
    COUNT(users.id) as total
    FROM users WHERE users.user_type = '${type}' AND users.isBlocked = FALSE AND role = '${role}'`).all(activeUsers)


    const inActiveUsers = arrayOf(new DynamicModel({
        "total": 0
    }));

    $app.dao().db().newQuery(`SELECT
    (ROW_NUMBER() OVER()) as id,
    COUNT(users.id) as total
    FROM users WHERE users.user_type = '${type}' AND users.isBlocked = TRUE AND role = '${role}'`).all(inActiveUsers)


    const weeklyReports = arrayOf(new DynamicModel({
        "week1": {},
        "week2": {},
        "week3": {},
        "week4": {},
        "id": ""
    }));

    $app.dao().db().newQuery(`
    SELECT
    (ROW_NUMBER() OVER()) as id,
    weekly_reports.week1,
    weekly_reports.week2,
    weekly_reports.week3,
    weekly_reports.week4
    FROM weekly_reports
    `).all(weeklyReports)
    const totalValidWeeks = weeklyReports.reduce((count, report) => {
        // Count the valid weeks in each report
        const validWeeksInReport = Object.keys(report).filter(key =>
            key.startsWith("week") && report[key] !== null && Object.keys(report[key]).length > 0
        ).length;

        return count + validWeeksInReport; // Add to the total count
    }, 0);

    c.json(200, {
        totalCity: totalCity[0].total,
        totalCountry: totalCountry[0].total,
        totalUsers: totalUsers[0].total,
        activeUsers: activeUsers[0].total,
        inActiveUsers: inActiveUsers[0].total,
        totalWeeklyReports: weeklyReports.length,
        weeklyReportsSubmit: totalValidWeeks
    });
})