const express = require("express")
const app = express()
const queries = require("./queries")
const bodyParser = require("body-parser")
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.get("/crops", (request, response) => {
    queries.list().then(crops => {
        response.json({ crops })
    }).catch(console.error)
})

app.get("/crops/:id", (request, response) => {
    queries.read(request.params.id, 'crops').then(crop => {
        crop
            ? response.json({ crop })
            : response.sendStatus(404)
    }).catch(console.error)
})

app.post("/crops", (request, response) => {
    console.log(request.body)
    queries.create('crops', request.body).then(crop => {
        response.status(201).json({ crop })
    }).catch(console.error)
})

app.delete("/crops/:id", (request, response) => {
    queries.delete(request.params.id, 'crops').then(() => {
        response.sendStatus(204)
    }).catch(console.error)
})

app.put("/crops/:id", (request, response) => {
    queries.update(request.params.id, 'crops', request.body).then(crop => {
        response.json({ crop })
    }).catch(console.error)
})

app.get("/soils", (request, response) => {
    queries.list2().then(crops => {
        response.json({ crops })
    }).catch(console.error)
})

app.get("/soils/:id", (request, response) => {
    queries.read(request.params.id, 'soils').then(crop => {
        crop
            ? response.json({ crop })
            : response.sendStatus(404)
    }).catch(console.error)
})

app.post("/soils", (request, response) => {
    queries.create('soils', request.body).then(soil => {
        response.status(201).json({ soil })
    }).catch(console.error)
})

app.delete("/soils/:id", (request, response) => {
    queries.delete(request.params.id, 'soils').then(() => {
        response.sendStatus(204)
    }).catch(console.error)
})

app.put("/soils/:id", (request, response) => {
    queries.update(request.params.id, 'soils', request.body).then(soil => {
        response.json({ soil })
    }).catch(console.error)
})

app.use((request, response) => {
    response.sendStatus(404)
})

module.exports = app