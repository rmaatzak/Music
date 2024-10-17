const menu = [

    {
        id: 1,
       title: "Blond by Frank Ocean",
       category: "R&B",
       price: 44.88,
       img:"./img/FrankCapa.png",
       desc: `Frank Ocean's album, Blonde, symbolizes duality and ambiguity, reflecting on his personal experiences, identity, and the fluidity of memory.`
   },

   {
       id: 2,
       title: "SOS by SZA",
       category: "R&B",
       price: 53.90,
       img:"./img/sza.png",
       desc: `SOS by SZA, is a sophomore album, showcases her evolution as an artist and explores themes of love, heartbreak, and self-discovery.`
   },

   {
       id: 3,
       title: "Sade Love Deluxe",
       category: "R&B",
       price: 73.90,
       img: "./img/sade.png",
       desc: `Love Deluxe, released in 1992, is Sade's fourth studio album and a hallmark of sophisticated R&B. hematically, it explores love, longing, and emotional intimacy.`
   },

   {
       id: 4,
       title: "Red moon in Venus",
       category: "R&B",
       price: 55.80,
       img: "./img/kali.png",
       desc: `'Red Moon in Venus', released by Kali Uchis in 2023, is a captivating exploration of love, desire, and self-empowerment.`
   },

   {
       id: 5,
       title: "I can't stop loving you by Ray Charles",
       category: "R&B",
       price: 99.90,
       img:"./img/ray.png",
       desc: `'I Can't Stop Loving You,' famously performed by Ray Charles, is a heartfelt ballad that expresses deep, unwavering love despite the pain of separation.`
   },
   {
       id: 7,
       title: "Ninas'Back by Nina Simone",
       category: "R&B",
       price: 88.50,
       img:"./img/nina.png",
       desc: `'Nina's Back,' released in 1985, marks a significant return for Nina Simone. The album features her powerful and sharp lyrical insights, reflecting her experiences and perspectives on love, identity, and social issues.`
   },

   {
       id: 8,
       title: "Ultimate Sinatra by Frank Sinatra",
       category: "Jazz",
       price: 160.90,
       img: "./img/sinatra.png",
       desc: `'Ultimate Sinatra,' released in 2015, is a comprehensive compilation that celebrates Frank Sinatra's illustrious career. The album features a selection of his most iconic tracks, spanning various phases of his musical journey.`
   },

   {
       id: 9,
       title: "The Music Never Stops by Betty Carter",
       category: "Jazz",
       price: 90.50,
       img: "./img/betty.png",
       desc: `The Music Never Stops by Betty Carter is a captivating album that showcases her exceptional vocal talent and improvisational skills.`
   },

   {
       id: 10,
       title: "Blossom Dearie",
       category: "Jazz",
       price: 150.00,
       img:"./img/blo.png",
       desc: `Blossom Dearie is a delightful album by the jazz vocalist and pianist, known for her distinctive voice and charming style.`
   },
   
{
id: 11,
title: "Wildflower by Billie Eilish",
category: "Pop",
price:290.00,
img: "img/billie.png",
desc:`'Wildflower' by Billie Eilish, featured on her 2024 album *Hit Me Hard and Soft*, delves into themes of love, heartbreak. This limited-edition vinyl is perfect for fans who want to experience Eilish's unique sound.`
},

{
    id: 12,
    title: "Espresso by Sabrina Carpenter",
    category: "Pop",
    price:540.00,
    img: "./img/sasa.png",
    desc:"'Espresso' by Sabrina Carpenter is an upbeat, catchy track that reflects themes of ambition and the hustle of modern life."
},

{
    id:13,
    title: "Superache by Conan Gray",
    category: "Pop",
    price:120.00,
    img:"./img/conan.png",
    desc:"Superache' by Conan Gray is an introspective album that dives deep into themes of heartbreak, longing, and the complexities of love. Gray's emotive vocals carry a sense of vulnerability and raw honesty throughout the tracks."
},

{
    id:14,
    title: "Ultraviolence by Lana Del Rey",
    category:"Pop",
    price:250.00,
    img:"./img/lana.png",
    desc:"'Ultraviolence' by Lana Del Rey is a hauntingly atmospheric album that delves into themes of toxic love, heartbreak, and emotional turmoil."
},

{
    id:15,
    title:"Bad by Michael Jackson",
    category:"Pop",
    price:250.00,
    img:"./img/mj.png",
    desc:"'Bad' by Michael Jackson is a high-energy track that showcases his signature blend of pop, rock, and funk. The song features bold lyrics about confidence and self-assertion."
},

{
id:16, 

    title:"GUTS by Olivia Rodrigo",
    category:"Pop",
    price:250.00,
    img:"./img/guts.png",
    desc:"The album 'GUTS' explores themes of young adulthood, emotional turmoil, and self-discovery. The songs blend introspective lyrics with a mix of pop and rock influences, showcasing her growth as an artist."
},
]
const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
 
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
 
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
   
 
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">R$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
   
 
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["All"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
 
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
 
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
     

        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
