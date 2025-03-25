const data = [
    {
      "id": "1",
      "title": "Ingatlan iroda",
      "photo_url": "ingatlan.png",
      "repo-link": "https://github.com/oliver838/ingataln-iroda",
      "topics": [
        "fetch API",
        "Set adatszerkezet",
        "Array.from()",
        "radió gombok használata",
        "checkboxok használata",
        "select használata"
      ],
      "site-link": "https://oliver838.github.io/ingataln-iroda/"
    },
    {
      "id": "2",
      "title": "Növények",
      "photo_url": "novenyek.png",
      "repo-link": "https://github.com/oliver838/novenyek",
      "topics": [
        "fetch API",
        "Set adatszerkezet",
        "Array.from()",
        "radió gombok használata",
        "checkboxok használata",
        "select használata"
      ],
      "site-link": "https://oliver838.github.io/novenyek/"
    },
    {
      "id": "3",
      "title": "Autókölcsönzés",
      "photo_url": "autokolcsonzes.png",
      "repo-link": "https://github.com/oliver838/autokolcsonzes",
      "topics": [
        "fetch API",
        "Set adatszerkezet",
        "Array.from()",
        "radió gombok használata",
        "checkboxok használata",
        "select használata"
      ],
      "site-link": "https://oliver838.github.io/autokolcsonzes/"
    },
    {
      "id": "4",
      "title": "Popover",
      "photo_url": "popover.png",
      "repo-link": "https://github.com/oliver838/pop",
      "topics": [
        "fetch API",
        "Set adatszerkezet",
        "Array.from()",
        "radió gombok használata",
        "checkboxok használata",
        "select használata"
      ],
      "site-link": "https://oliver838.github.io/pop/"
    },
    {
      "id": "5",
      "title": "Unsplash",
      "photo_url": "unsplash.png",
      "repo-link": "https://github.com/oliver838/unsplash",
      "topics": [
        "fetch API",
        "Set adatszerkezet",
        "Array.from()",
        "radió gombok használata",
        "checkboxok használata",
        "select használata"
      ],
      "site-link": "https://oliverunsplashup.netlify.app/"
    }
]

function munkaim(){
    data.forEach(element => {
        let ul = ""
        element.topics.forEach(item => {
          ul+= `<li>${item}</li>`
        });
        console.log(element.photo_url);
        
        document.getElementById("work").innerHTML+=`
        	<div class="munkaim">
              <div class="bal">
                <img src="${element.photo_url}" alt="">
              </div>
              <div class="jobb">
                <h1>${element.title}</h1>
                <a href="${element["site-link"]}">Site link</a>
                <a href="${element["repo-link"]}">Repo link</a>
                <h3>Topics</h3>
                <ul>
                  ${ul}
                </ul>
              </div>
            </div>
      `
    });


}
munkaim();