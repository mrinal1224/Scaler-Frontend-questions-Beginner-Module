let container = document.getElementById("container");

data.forEach((val) => {
  let coloredRatingStar = parseInt(val.rating.rate);
  let notColoredRatingStar = 5 - coloredRatingStar;

  let allStarDiv = document.createElement("div");
  allStarDiv.setAttribute("class", "all__star");

  for (let i = 0; i < coloredRatingStar; i++) {
    allStarDiv.innerHTML += `<span class="star__filled">&#9733;</span>`;
  }

  for (let i = 0; i < notColoredRatingStar; i++) {
    allStarDiv.innerHTML += `<span class="star__notfilled">&#9734;</span>`;
  }

  container.innerHTML += `<div class="card">
        <div class="details">
            <span class="product__name">${val.title}</span>
            <br>
            <span class="product__category">${val.category}</span>
            <div class="all__star">
              ${allStarDiv.innerHTML}
            </div>
            <div class="rating__count">Rating Count : <span>${val.rating.count}</span></div>
        </div>
        <div class="btn">
            <button class="btn__buy">Buy Now</button>
        </div>
    </div>`;
});
