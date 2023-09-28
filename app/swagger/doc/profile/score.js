//* ROUTE: GET /profile/score
/** 
 * GET /profile/score
 * @summary Get user average score
 * @tags Profile Score
 * @security BearerAuth
 * @return {array<AvgScore>} 200 - tableau contenant la moyenne des scores de l'utilisateur
 * @returns 500 - ERREUR sur getUserAverageScore()
*/
/**
 * AvgScore
 * @typedef {object} AvgScore
 * @property {number} averageScore - moyenne des scores de l'utilisateur
*/

