fetch("http://localhost:3000/api/cameras", {
  method: "GET",
})
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    affichage_camera(data);
  });

// let icon = document.querySelector("img");
// icon.setAttribute("src", "http://localhost:3000/images/vcam_1.jpg");

function affichage_camera(data) {
  let article1 = data[0];
  console.log(article1);
  let blockhtml = `<div class="article_produit">
            <div class="article_produit_vignette">
              <img class="article_produit_vignette_img" src="${article1.imageUrl}" alt="caméra" />
            </div>
            <div class="article_produit_details">
              <p class="article_produit_details_name">${article1.name}</p>
              <p class="article_produit_details_prix">${article1.price}€</p>
            </div>
          </div>`;
  let container = document.querySelector(".article_list");

  container.innerHTML += blockhtml;
}
