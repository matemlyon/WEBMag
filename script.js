function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Données récupérées du fichier JSON :', data);
      /// ON ECRIT LE CODE ICI !
     let journal= data.journal;
     console.log(journal);
     let nomJournal = journal.nomJournal;
     console.log(nomJournal);
     let phraseAccroche = journal.phraseAccroche;
     console.log(phraseAccroche);
     let texteAppelAction= journal.texteAppelAction;
     console.log(texteAppelAction);
     let articlePrincipal= journal.articlePrincipal;
     console.log(articlePrincipal);
     let titre= articlePrincipal.titre;
     console.log(titre);
     let description= articlePrincipal.description;
     console.log(description);
     let date= articlePrincipal.date;
     console.log(date);
     let theme= articlePrincipal.theme;
     console.log(theme);
     let image= articlePrincipal.image;
     console.log(image);
     let articlePrincipalContainer= document.getElementById('article-principal');
      afficherArticle(articlePrincipal, articlePrincipalContainer);
      let themesContainer = document.getElementById('themes-section');
      afficherTheme(journal.themes, themesContainer);
      let articlesContainer = document.querySelector('.articles-containers');
      journal.articles.forEach((article) => {
        afficherArticle(article, articlesContainer);
      });
      let auteursContainer = document.querySelector('.auteurs-container');
      journal.auteurs.forEach((auteur) => {
        afficherAuteur(auteur, auteursContainer);
      });
    })
      /// FIN DU CODE
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
  }
getData();
///ON écrit les fonctions ici
function afficherArticlePrincipal(articlePrincipal, container) {
  let titre = articlePrincipal.titre;
  let date = articlePrincipal.date;
  let theme = articlePrincipal.theme;
  let image = articlePrincipal.image;
  let description = articlePrincipal.description;
  let element = `
     <div class="main-article">
     <img src="${image}" alt="${titre}">
      <div>
      <h1>${titre}</h1>
      <h2>${theme} / ${date}</h2>
      <p>${description}</p>
      <button class="article-button">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ton-adresse@email.com" target="_blank" rel="noopener noreferrer">Lire l'article</a>
      </button>
    </div>`;
    
  container.innerHTML = element;
}
function afficherTheme(themes, container){
  themes.forEach((theme) => {
   let nom = theme.nom;
   let description = theme.description;
   let element = `
   <div class="theme">
     <h3>${nom}</h3>
     <p>${description}</p>
   </div>`;
  container.insertAdjacentHTML('beforeend', element);
  });
  }
function afficherArticle(article, container){
 let titre = article.titre;
 let date = article.date;
 let theme= article.theme;
 let image = article.image;
 let description = article.description;

 let element = `
  <div class="article-principal">
  <img src="${image}" alt="${titre}">
  <div class="text-container">
        <h1>${titre}</h1>
        <h2>${theme} / ${date}</h2>
       <p>${article.description}</p>
        <button class="article-button">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ton-adresse@email.com" target="_blank" rel="noopener noreferrer">Lire l'article</a>
        </button>
       </div>
    </div>`;
    container.insertAdjacentHTML('beforeend', element);
}
function afficherAuteur(auteur, container){
 let prenom = auteur.prenom;
 let typeExperience = auteur.typeExperience;
 let presentation = auteur.presentation;
 let image = auteur.image;
let element = `
    <div class="auteur">
      <div class="author">
        <img src="${image}" alt="Auteur ${prenom}">
        <div>
          <h4>${prenom}</h4>
          <p>${typeExperience}</p>
          <p>${presentation}</p>
        </div>
      </div>
    </div>`;
    container.insertAdjacentHTML('beforeend', element);
  }