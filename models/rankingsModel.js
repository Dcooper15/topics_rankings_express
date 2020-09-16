const db = require("./conn");

class rankingsList {
    constructor (ranking, rankingnumber) {
        this.ranking = ranking;
        this.rankingnumber = rankingnumber;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM ranking_scale;`)
            return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = rankingsList;