# On va faire un blog

---

## MCD pour un blog

On veut qu'un auteur puisse écrire des articles

On veut pouvoir associer des catégories, ou thèmes, ou sous-catégories à nos articles.

1. Identifier les entités
2. Identifier les attributs
2. Identifier les associations ( cardinalités \:) )

one-to-one : hasOne belongsTo
one-to-many : hasMany belongsTo (réciproque)
many-to-many : belongsToMany

```
user: code user, prenom, nom, email, password, role, pseudo, avatar
créé, 0N user, 11 article
article: code article, titre, sous titre, image, description, auteur, résumé
detient, 0N categorie, 0N article
categorie: code categorie, nom, couleur
```

article et catégorie

```js
const article = {
    title: 'title',
    description: 'description'
}
const article2 = {
    title: 'title',
    description: 'description'
}
const article3 = {
    title: 'title',
    description: 'description'
}

const category = 'PHP';
const category2 = 'JS';
const category3 = 'HTML';

const author1 = 'Laurent';
const author2 = 'Emilie';
const author3 = 'Clément';

// * Puis-je associer la catégory PHP avec l'article 1 ?
// * Puis-je associer la catégory PHP avec l'article 2 ?
// * Puis-je associer la catégory JS avec l'article 1 ?
// * Puis-je associer la catégory JS avec l'article 2 ?


// * Puis-je associer l'auteur1 avec l'article 2 ?
// * Puis-je associer l'auteur2 avec l'article 2 ?
```


user et article

