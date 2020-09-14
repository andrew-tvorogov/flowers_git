"use strict";

let cards = [];
let out = document.querySelector("#out");
out.innerHTML = '';

function reqListener() {
    cards = JSON.parse(this.responseText);
    cards.forEach(function (el) {
        //out.innerHTML += `<p class="item-str" data-id="${el.id}">` + el.name + ' ' + el.price + 'rub</p><br>';
        //console.log(el);
        if (el.type === "img") {
            out.innerHTML += `
                <div class="col p-2">
                    <div class="item-card px-0 py-0" style=
                    "background-image: url(${el.path});
                    color: ${el.desc_color};
                    background-color: ${el.bg_color}">
                        <!--div class="card-image-wrapper">
                            <img class="card-image" alt="" src="${el.path}">
                        </div-->
                        <div class="card-overlay">
                            <div class="card-name">${el.description}</div>
                            <div class="card-like" data-like="${el.like}">
                                <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            out.innerHTML += `
            <div class="col p-2" style="">
            <div class="item-card"  style=
                "color: ${el.desc_color};
                display: flex;
                background-color: ${el.bg_color}">
                <div style="align-self: center">
              ${el.text}
              </div>
            </div>
        </div>
            `;
        }
    });
    let likes = document.querySelectorAll(".card-like");
    likes.forEach(function (like) {
        let likeOn = false; // базовое состояние like
        like.addEventListener("click", function () {
            if (likeOn === false) {
                like.innerHTML = '<i class="fa fa-heart" aria-hidden="true"></i>';
                likeOn = true;
            } else {
                like.innerHTML = '<i class="fa fa-heart-o" aria-hidden="true"></i>';
                likeOn = false;
            }
        })
    });


}

let oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("GET", "img.json", true);
oReq.send();

