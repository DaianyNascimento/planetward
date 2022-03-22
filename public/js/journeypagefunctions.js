
let creditsElem = document.querySelector("#credits");
let spacesuitQuantityElem = document.querySelector("#spacesuitQuantity");
let oxygenQuantityElem = document.querySelector("#oxygenQuantity");
let foodQuantityElem = document.querySelector("#foodQuantity");
let fuelQuantityElem = document.querySelector("#fuelQuantity");
let solarpanelQuantityElem = document.querySelector("#solarpanelQuantity");
let sproutQuantityElem = document.querySelector("#sproutQuantity");
let waterbottleQuantityElem = document.querySelector("#waterbottleQuantity");

let credits = 100;
let packingList = {
  spacesuitQuantity: 0,
  oxygenQuantity: 0,
  foodQuantity: 0,
  fuelQuantity: 0,
  solarpanelQuantity: 0,
  sproutQuantity: 0,
  waterbottleQuantity: 0
}

document.addEventListener(
  "DOMContentLoaded",
  (event) => {
    console.log(event);
    const spacesuit = document.querySelector("#item-spacesuit");
    const oxygen = document.querySelector("#item-oxygen");
    const food = document.querySelector("#item-food");
    const fuel = document.querySelector("#item-fuel-station");
    const solarpanel = document.querySelector("#item-solar-panel");
    const sprout = document.querySelector("#item-sprout");
    const waterbottle = document.querySelector("#item-water-bottle");
    const launchBtn = document.querySelector("#launchBtn");
    // const nrOfSpacesuit = document.querySelector("#nrOfSpacesuit");

    /* DEFAULT items cost:
    spacesuit: 10 credits,
    oxygen: 10 credits,
    food: 5 credits,
    fuel: 10 credits,
    solarpanel: 20 credits,
    sprout: 5 credits,
    waterbottle: 2 credits,
    */


    spacesuit.addEventListener("click", () => {
      if (credits >= 10) {
        credits -= 10;
        creditsElem.innerText = credits;
        packingList.spacesuitQuantity += 1;
        spacesuitQuantityElem.innerText = packingList.spacesuitQuantity;
        console.log(packingList);
      } else {
        alert("You do not have enough credits for this.")
      }
    });

    oxygen.addEventListener("click", () => {
      if (credits >= 10) {
        credits -= 10;
        creditsElem.innerText = credits;
        packingList.oxygenQuantity += 1;
        oxygenQuantityElem.innerText = packingList.oxygenQuantity;
        console.log(packingList);
      } else {
        alert("You do not have enough credits for this.")
      }
    });

    food.addEventListener("click", () => {
      if (credits >= 5) {
        credits -= 5;
        creditsElem.innerText = credits;
        packingList.foodQuantity += 1;
        foodQuantityElem.innerText = packingList.foodQuantity;
        console.log(packingList);
      } else {
        alert("You do not have enough credits for this.")
      }
    });

    fuel.addEventListener("click", () => {
      if (credits >= 10) {
        credits -= 10;
        creditsElem.innerText = credits;
        packingList.fuelQuantity += 1;
        fuelQuantityElem.innerText = packingList.fuelQuantity;
        console.log(packingList);
      } else {
        alert("You do not have enough credits for this.")
      }
    });

    solarpanel.addEventListener("click", () => {
      if (credits >= 20) {
        credits -= 20;
        creditsElem.innerText = credits;
        packingList.solarpanelQuantity += 1;
        solarpanelQuantityElem.innerText = packingList.solarpanelQuantity;
        console.log(packingList);
      } else {
        alert("You do not have enough credits for this.")
      }
    });

    sprout.addEventListener("click", () => {
      if (credits >= 5) {
        credits -= 5;
        creditsElem.innerText = credits;
        packingList.sproutQuantity += 1;
        sproutQuantityElem.innerText = packingList.sproutQuantity;
        console.log(packingList);
      } else {
        alert("You do not have enough credits for this.")
      }
    });

    waterbottle.addEventListener("click", () => {
      if (credits >= 2) {
        credits -= 2;
        creditsElem.innerText = credits;
        packingList.waterbottleQuantity += 1;
        waterbottleQuantityElem.innerText = packingList.waterbottleQuantity;
        console.log(packingList);
      } else {
        alert("You do not have enough credits for this.")
      }
    });

    launchBtn.addEventListener("click", async () => {
      const response = await fetch("/launch", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(packingList) // body data type must match "Content-Type" header
      });
    })

  },
  false
);


