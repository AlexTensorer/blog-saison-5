# Étapes

1. Mise en place de l'arborescence du dossier devant acueillir notre application
    - assets
    - app
        - router
        - dataMappers || models
        - controllers
        - views
    - data (jsons, script import sql…)
    - docs (brief, mcd, users stories…)
2. Initialisation du gestionnaire de modules (npm) `npm init -y`
3. Installation des modules nécessaires `npm i …`
4. Soit le projet a été créé sur github (`git clone …`) soit on initialise (`git init`)
5. Ajout du fichier .gitignore (node_module/, .env, …)
6. Ajout du fichier .env et .env.example
7. Seeding (ajouter des données réelles ou de test) > Exécution des scripts d'import
8. Point d'entrée de l'application (serveur web) `./index.js`
9. Création des dataMappers || models `./app/dataMappers` || `./app/models`
10. Controllers `./app/controllers`
11. Views
    1. les partials `./views/partials/`
        1. Entête de page `./views/partials/header.ejs`
        2. Pied de page `./views/partials/footer.ejs`
    2. les pages principales qui vont inclure les partials
12. Router `./app/router.js`
13. Les test des routes

### Middleware

-   Qu'est ce qu'un middleware ?

    -   C'est un intercepteur, entre le moment ou le client demande qqchose au serveur et le moment ou le serveur envoie la réponse, du code peut être exécuté, c'est ce qu'on appelle un middleware.
    -   Si dans notre code on a un système de login/logout, au moment ou l'utilisateur va envoyer les données de connexion mdp + username, avant d'afficher la page de profil de la personne, on va vérifier que la personne en question est bien autorisé a voir cette page, le code qui va faire ça est un middleware.
    -   Au moment ou l'utilisateur crée un compte sur notre app, on va vérifier diverses choses avant de créer le compte, c'est un ou plusieurs middleware qui s'occupe de ça.
    -   On peut avoir plusieurs middleware pour la même requête, si on prend l'exemple précédent, on aura au moins un middleware pour vérifier que l'email est bien un email, un middleware pour chiffrer le mot de passe, et un middleware pour chaque champs du formulaire qui doit être vérifier et valider.
    -   On peut aussi avoir un middleware pour connecter deux applications ensemble, si par exemple dans un e-commerce on reçoit une commande, on peut vouloir enregistrer des statistiques dans un logiciel de gestion, ce sera un middleware qui sera chargé de transmettre les données.
    -   Avec un (plusieurs) middleware(s), on pourra donc effectuer tous types de tâches.

-   Qu'est ce qu'un processeur de middleware ?
    -   C'est une fonction qui regroupe tous nos middlewares dans un ordre précis et qui est chargé de les exécuter dans l'ordre, c'est une chaîne. Express fonctionne de cette façon.

### Code

-   Le middleware est donc bien un intercepteur chargé d'effectuer un tâche précise entre la requête et la réponse.
-   Avec middleware pour le routeur (toutes les routes) (middleware global routeur)
-   Avec middleware pour le routeur (uniquement pour une route) (middleware local)
-   Avec middleware pour l'app (global) (middleware global)
