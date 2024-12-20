/// <reference path="../pb_data/types.d.ts" />
routerAdd("GET", "/project/status", (c) => {
    try {
        const status = arrayOf(new DynamicModel({
            "id": "RECORD_ID",
            "status": "test",
            "total": 123
        }));

        const country = arrayOf(new DynamicModel({
            "id": "RECORD_ID",
            "country": "test",
            "total": 123
        }));

        const city = arrayOf(new DynamicModel({
            "id": "RECORD_ID",
            "city": "test",
            "total": 123
        }))

        const type = arrayOf(new DynamicModel({
            "id": "RECORD_ID",
            "type": "test",
            "name": "",
            "total": 123
        }))


        let main_interventions = arrayOf(new DynamicModel({
            "id": "RECORD_ID",
            "main_interventions":"",
        }))


        $app.dao().db()
            .newQuery(`SELECT (ROW_NUMBER() OVER()) as id, projects.status, count(projects.status) as total FROM projects GROUP BY projects.status`)
            .all(status)


        $app.dao().db()
            .newQuery(`SELECT (ROW_NUMBER() OVER()) as id, projects.country, count(projects.country) as total FROM projects GROUP BY projects.country`)
            .all(country)

        $app.dao().db()
            .newQuery(`SELECT (ROW_NUMBER() OVER()) as id, projects.city, count(projects.city) as total FROM projects GROUP BY projects.city`)
            .all(city)

        $app.dao().db()
            .newQuery(`SELECT  (ROW_NUMBER() OVER()) AS id, project_type.id AS type, project_type.name AS name, COUNT(projects.id) AS total FROM projects JOIN project_type ON project_type.id = projects.type GROUP BY project_type.id, project_type.name;`)
            .all(type)

        $app.dao().db()
            .newQuery(`SELECT (ROW_NUMBER() OVER()) as id, projects.main_interventions FROM projects GROUP BY projects.main_interventions`)
            .all(main_interventions)


      const interventions=   main_interventions.map((e)=>{
           return JSON.parse(e.main_interventions).map((e)=>{
            return e;
           })
          });

        const uniqueInterventions = [...new Set(interventions.flat())];

        return c.json(200, { status, country, city, type, interventions:uniqueInterventions})
    } catch (error) {
        console.log(error);

    }
}, /* optional middlewares */)