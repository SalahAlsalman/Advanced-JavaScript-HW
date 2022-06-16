fetch("https://breakingbadapi.com/api/characters")
    .then(response => response.json())
    .then(data => {

        for (charachter of data) {
            let grid = document.querySelector(".row");
            let tag = `<div class="card h-100 p-0 text-center " style="width: 18rem;">
  <img src="${charachter.img}"  class="card-img-top" style="object-fit: cover" alt="...">
  <div class="card-body ">
    <h5 class="card-title ">${charachter.name}</h5>
    <p class="card-text">${charachter.occupation}</p>
  </div>
</div>`
            grid.innerHTML += tag
        }
    })