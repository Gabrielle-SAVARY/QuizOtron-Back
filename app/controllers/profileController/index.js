const { User } = require("../../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

const userController = {
  // Récupérer les informations de l'utilisateur
  getUserInfos: async (req, res) => {
    const { id } = req.user;
    try {
    // const foundUser ='SELECT * FROM public.user WHERE id = $1;';
    // values = [id];
    // const response = await db.query(foundUser, values);
      const user = await User.findByPk(id);
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
    // const foundUser ='SELECT * FROM public.user WHERE id = $1;';
    // values = [id];
    // const response = await db.query(foundUser, values);
      const user = await User.scope('withPassword').findByPk(id)

      let newUser = req.body;

      if (newUser.email) {
    // Si nouvel email, on vérifie qu'il n'existe pas déjà en bdd
    // const foundEmail ='SELECT * FROM public.user WHERE email ILIKE $1;';
    // values = [email];
    // const response = await db.query(foundEmail, values);
        const emailExists = await User.findOne({
          where: {
            email: {
              // Insensible à la casse
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
        // Si ancien mot de passe, on vérifie qu'il correspond à celui en bdd
        // Puis hash du nouveau mot de passe
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
      //const query = 'UPDATE public.user SET email = $1, pseudo = $2, password = $3 WHERE id = $4';
      //const values = [newUser.email, newUser.pseudo, newUser.password, id];
      //const result = await pool.query(query, values);
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
    // const foundUser ='SELECT * FROM public.user WHERE pseudo = $1;';
    // values = [pseudo];
    // const response = await db.query(foundUser, values);
    try {
      const user = await User.findOne({
        where: {
          pseudo: pseudo
        }
      });
    // const requestSQL ='DELETE FROM public.user WHERE pseudo = $1';
    // values = [user.pseudo]
    // const response = await db.query(requestSQL, values);
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
