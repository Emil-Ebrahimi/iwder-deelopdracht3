function checkTheChecks() {
  var checkBox1 = document.getElementById("voorGerecht");
  var checkBox2 = document.getElementById("hoofdGerecht");
  var checkBox3 = document.getElementById("dessert");
  var checkBox4 = document.getElementById("favorieten");

  var voorGerechtSectie = document.getElementById("voorGerechtSectie");
  var hoofdGerechtSectie = document.getElementById("hoofdGerechtSectie");
  var dessertSectie = document.getElementById("dessertSectie");
  var favorietCards = document.getElementsByClassName("card");


  voorGerechtSectie.dataset.voorgerecht = checkBox1.checked;
  hoofdGerechtSectie.dataset.hoofdgerecht = checkBox2.checked;
  dessertSectie.dataset.dessert = checkBox3.checked;
  //loop omdat favorietcards uit meerdere elementen bestaat
  Array.from(favorietCards).forEach((e) => {
    if(e.dataset.isfav == "true") {
  e.dataset.isfav = checkBox4.checked;
  } else if(e.dataset.isfav == "false") {
    e.dataset.isfav = true;
  }
  })


  var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
  var empty = [].filter.call( allCheckboxes, function( el ) {
    return !el.checked
 });
if(allCheckboxes.length == empty.length) {
  voorGerechtSectie.dataset.voorgerecht = true;
  hoofdGerechtSectie.dataset.hoofdgerecht = true;
  dessertSectie.dataset.dessert = true;
  favorietCards.dataset.isfav = true;
}
}

window.onload = () => {


  let hartjes = document.getElementsByClassName('btn');
  Array.from(hartjes).forEach((e) => {
  e.addEventListener("click", (i) => {
    console.log(i);
    parent = i.target.parentElement
    console.log(parent);
    if (parent.dataset.isfav != "true") {
      parent.dataset.isfav = true;
      e.src = "./images/heart.png"
      console.log('was false is true');
    }
    else if (parent.dataset.isfav == "true") {
      console.log("hi");
      e.src = "./images/heartless.png"
      parent.dataset.isfav = false;
    }
  })
})

}


function favorieten() {
  var allFavorieten = document.querySelectorAll('input[type=image]');

}
