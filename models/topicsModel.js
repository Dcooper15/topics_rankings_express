const db = require("./conn");

class topicsList {
    constructor (topic) {
        this.topic = topic;
      
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM topics INNER JOIN ranking_scale ON topics.ranking_id = ranking_scale.id;`)
            return response;
        } catch (error) {
            return error.message;
        }
   
    }
}

module.exports = topicsList;