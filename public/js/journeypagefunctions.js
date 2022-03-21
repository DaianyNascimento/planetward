
let creditsElem = document.querySelector("#credits"); 
let credits = 100;
let packingList = {
    spacesuitQuantity: 0,
    oxygenQuantity: 0,
    foodQuantity: 0,
}

document.addEventListener(
  "DOMContentLoaded",
  (event) => {
    console.log(event);
    const spacesuit = document.querySelector("#item-spacesuit");
    const oxygen = document.querySelector("#item-oxygen");
    const food = document.querySelector("#item-food");
    const startJourneyBtn = document.querySelector("#startJourneyBtn");
    const nrOfSpacesuit = document.querySelector("#nrOfSpacesuit");

    spacesuit.addEventListener("click", () => {
      packingList.spacesuitQuantity += 1;
    //   nrOfSpacesuit.innerText = packingList.spacesuitQuantity


    console.log(packingList);
      if(credits >= 30){
      credits -= 30;
      creditsElem.innerText = credits;
      } else if(credits < 30){
          alert("You do not have enough credits for this.")
      }
    });

    oxygen.addEventListener("click", () => {
        packingList.oxygenQuantity += 1;
      console.log(packingList);
      if(credits >= 20){
        credits -= 20;
        creditsElem.innerText = credits;
        } else if(credits < 20){
            alert("You do not have enough credits for this.")
        }
    });

    food.addEventListener("click", () => {
        packingList.foodQuantity += 1;
        console.log(packingList);
        if(credits >= 10){
            credits -= 10;
            creditsElem.innerText = credits;
            } else if(credits < 10){
                
                alert("You do not have enough credits for this.")
            }
      });

      startJourneyBtn.addEventListener("click", async () => {
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


