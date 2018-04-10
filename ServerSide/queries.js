const database = require("./database-connection")

module.exports = {
    list() {
        return database.select("*").from('crops')
    },
    list2() {
        return database.select("*").from('soils')
    },
    read(id, table) {
        return database.select("*").from(table).where("id", id).first()
    },
    create(table, item) {
        return database(table).insert(item, "*")
            .then(record => record[0])
    },
    update(id, table, item) {
        return database(table).where("id", id).update(item, "*")
            .then(record => record[0])
    },
    delete(id, table) {
        return database(table).where("id", id).del()
    },
}