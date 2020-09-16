const db = require("./conn");

class rankingsList {
    constructor (topic, ranking, rankingnumber) {
        this.topic = topic;
        this.ranking = ranking;
        this.rankingnumber = rankingnumber;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM topics INNER JOIN ranking_scale ON topics.ranking_id = ranking_scale.id;`)
            return response;
        } catch (error) {
            return error.message;
        }
    }
 static async getAllStatuses() {

 }
 static async updateStatus(ranking_id, topic) {
     try {
        const response = await db.result(`UPDATE topics SET ranking_id = $1 WHERE topic = $2`, [ranking_id, topic]);
        return response;
     } catch (error) {
         console.error("error:", error);
         return error;
     }
 }
}

module.exports = rankingsList;