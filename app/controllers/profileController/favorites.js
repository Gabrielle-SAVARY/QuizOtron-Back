const { Quiz, User } = require("../../models");

const favoritesUserController = {
  // Récupérer les quiz favoris de l'utilisateur
  getUserFavorites: async (req, res) => {
    const { id } = req.user;
		try {
			const userFavorites = await User.findByPk(id, {
				include: [
					{
						association: 'favorites',
            attributes: { exclude: ['level_id', 'user_id', ] },
						include: [
							{
								association: 'level',
							},
							{
								association: 'author',
								attributes: ['id', 'pseudo']
							},
							{
								association: 'tags',
								through: {
									attributes: []
								},
							},
						],            
					}
				]
			});			
			res.json(userFavorites);			
    } catch (error) {
      res.json({
        statusCode: 500,
        message: `ERREUR sur getUserFavorites() : ${error}`
      })
    }
  },



  // Ajouter un quiz aux favoris de l'utilisateur
  addFavorite: async (req, res) => {
    const { id } = req.user;
    const { quiz_id } = req.body;

    try {
      const user = await User.findByPk(id);
      const quiz = await Quiz.findByPk(quiz_id);

      await user.addFavorite(quiz);

      res.json({
        message: "Le quiz a bien été ajouté à vos favoris!"
      });

    } catch (error) {
      res.json({
        statusCode: 500,
        message: `ERREUR sur addFavorite() : ${error}`
      })
    }
  },

  // Supprimer un quiz des favoris de l'utilisateur
  deleteFavorite: async (req, res) => {
    const { id } = req.user;
    const { quiz_id } = req.body;

    try {
      const user = await User.findByPk(id);
      const quiz = await Quiz.findByPk(quiz_id);

      await user.removeFavorite(quiz);

      res.json({
        message: "Le quiz a bien été supprimé de vos favoris!"
      });

    } catch (error) {
      res.json({
        statusCode: 500,
        message: `ERREUR sur deleteFavorite() : ${error}`
      })
    }
  },

}

module.exports = favoritesUserController