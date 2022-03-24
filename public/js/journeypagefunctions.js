
let creditsElem = document.querySelector("#credits");
let spacesuitQuantityElem = document.querySelector("#spacesuitQuantity");
let oxygenQuantityElem = document.querySelector("#oxygenQuantity");
let foodQuantityElem = document.querySelector("#foodQuantity");
let fuelQuantityElem = document.querySelector("#fuelQuantity");
let solarpanelQuantityElem = document.querySelector("#solarpanelQuantity");
let sproutQuantityElem = document.querySelector("#sproutQuantity");
let waterbottleQuantityElem = document.querySelector("#waterbottleQuantity");

let packingList = {
  credits: 100,
  spacesuitQuantity: 0,
  oxygenQuantity: 0,
  foodQuantity: 0,
  fuelQuantity: 0,
  solarpanelQuantity: 0,
  sproutQuantity: 0,
  waterbottleQuantity: 0
}

function updateValues(itemQuantity, itemQuantityElement) {
  const oldValue = packingList[itemQuantity];
  packingList[itemQuantity] = Number(itemQuantityElement.value);
  const update = (100 - (spacesuitQuantityElem.value * 10) - (oxygenQuantityElem.value * 10) - (foodQuantityElem.value * 5) - (fuelQuantityElem.value * 10) - (solarpanelQuantityElem.value * 20) - (sproutQuantityElem.value * 5) - (waterbottleQuantityElem.value * 2));
  if (update >= 0) {
    packingList.credits = update;
    creditsElem.innerText = packingList.credits;
  } else {
    alert("You do not have enough credits for this.")
    itemQuantityElement.value = oldValue;
  }
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
      spacesuitQuantityElem.value = Number(spacesuitQuantityElem.value) + 1;
      updateValues("spacesuitQuantity", spacesuitQuantityElem);
    });

    spacesuitQuantityElem.addEventListener("change", () => {
      updateValues("spacesuitQuantity", spacesuitQuantityElem);
    });

    oxygen.addEventListener("click", () => {
      oxygenQuantityElem.value = Number(oxygenQuantityElem.value) + 1;
      updateValues("oxygenQuantity", oxygenQuantityElem);
    });

    oxygenQuantityElem.addEventListener("change", () => {
      updateValues("oxygenQuantity", oxygenQuantityElem);
    });

    food.addEventListener("click", () => {
      foodQuantityElem.value = Number(foodQuantityElem.value) + 1;
      updateValues("foodQuantity", foodQuantityElem);
    });

    foodQuantityElem.addEventListener("change", () => {
      updateValues("foodQuantity", foodQuantityElem);
    });

    fuel.addEventListener("click", () => {
      fuelQuantityElem.value = Number(fuelQuantityElem.value) + 1;
      updateValues("fuelQuantity", fuelQuantityElem);
    });

    fuelQuantityElem.addEventListener("change", () => {
      updateValues("fuelQuantity", fuelQuantityElem);
    });

    solarpanel.addEventListener("click", () => {
      solarpanelQuantityElem.value = Number(solarpanelQuantityElem.value) + 1;
      updateValues("solarpanelQuantity", solarpanelQuantityElem);
    });

    solarpanelQuantityElem.addEventListener("change", () => {
      updateValues("solarpanelQuantity", solarpanelQuantityElem);
    });

    sprout.addEventListener("click", () => {
      sproutQuantityElem.value = Number(sproutQuantityElem.value) + 1;
      updateValues("sproutQuantity", sproutQuantityElem);
    });

    sproutQuantityElem.addEventListener("change", () => {
      updateValues("sproutQuantity", sproutQuantityElem);
    });

    waterbottle.addEventListener("click", () => {
      waterbottleQuantityElem.value = Number(waterbottleQuantityElem.value) + 1;
      updateValues("waterbottleQuantity", waterbottleQuantityElem);
    });

    waterbottleQuantityElem.addEventListener("change", () => {
      updateValues("waterbottleQuantity", waterbottleQuantityElem);
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
        redirect: 'manual', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(packingList) // body data type must match "Content-Type" header
      });
    })

  },
  false
);


