// const db = require("./conn");

// class languagesRankingsList {
//     constructor (name, ranking) {
//         this.name = name;
//         this.ranking = ranking;
//     }

//     static async getAll() {
//         try {
//             const response = await db.any(`SELECT * FROM languages_rankings;`)
//             return response;
//         } catch (error) {
//             return error.message;
//         }
//     }
// }

// module.exports = languagesRankingsList;