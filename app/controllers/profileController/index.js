const { User } = require("../../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

const userController = {
  // Récupérer les informations de l'utilisateur
  getUserInfos: async (req, res) => {
    const { pseudo } = req.user;
    try {
      const user = await User.findOne({
        where: { pseudo },        
      });
      res.json(user);
    } catch (error) {
      res.json({
        statusCode: 500,
        message: `ERREUR sur getUserInfos() : ${error}`
      })
    }
  },

  // Mettre à jour les informations de l'utilisateur
  updateUser: async (req, res) => {
    const { id } = req.user;

    try {
      const user = await User.scope('withPassword').findByPk(id)

      let newUser = req.body;

      if (newUser.email) {
        // Si l'utilisateur a renseigné un nouvel email, on vérifie qu'il n'existe pas déjà en base de données
        const emailExists = await User.findOne({
          where: {
            email: {
              // On utilise Op.iLike car on veut que la recherche soit insensible à la casse
              [Op.iLike]: newUser.email,
            }
          }
        });
    
        if (emailExists && newUser.email !== user.email) {
          return res.status(400).json({
            statusCode : 400,
            message : "Cet email est déjà utilisé"
          });
        }

      }
      if (newUser.pseudo) {
        const pseudoExists = await User.findOne({
          where: {
            pseudo: {
              [Op.iLike]: newUser.pseudo,
            }
          }
        });
    
        if (pseudoExists && newUser.pseudo !== user.pseudo) {
          return res.status(400).json({
            statusCode : 400,
            message : "Ce pseudo est déjà utilisé"
          });
        }
      }
      if (newUser.oldPassword && newUser.password) {        
        if( newUser.password != newUser.passwordConfirm){
          return res.status(400).json({
            statusCode: 400,
            message: "Les mots de passes ne sont pas identiques"
            });
        }
        // Si l'utilisateur a renseigné un ancien mot de passe, on vérifie qu'il correspond à celui en base de données
        // Et ensuite on hash le nouveau mot de passe
        const match = await bcrypt.compare(newUser.oldPassword, user.password);
        if (!match) {
          return res.status(400).json({
            statusCode: 400,
            message: "L'ancien mot de passe est incorrect"
            });
        }

        const hash = bcrypt.hashSync(newUser.password, 10);
        newUser.password = hash;
      }
      await user.update(newUser);
      res.json({
        message: "Votre compte a bien été mis à jour!"
      });


    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        message: `ERREUR sur updateUser() : ${error}`
      })
    }
  },

  // Supprimer un utilisateur
  deleteUser: async (req, res) => {
    const { pseudo } = req.user;

    try {
      const user = await User.findOne({
        where: {
          pseudo: pseudo
        }
      });

      await user.destroy();

      res.json({
        message: "Votre compte a bien été supprimé!"
      });

    } catch (error) {
      res.json({
        statusCode: 500,
        message: `ERREUR sur deleteUser() : ${error}`
      })
    }
  },
  
};

module.exports = userController;
