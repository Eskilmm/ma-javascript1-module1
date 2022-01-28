// Question 1

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
var cat = {complain: function(){
    console.log("Meow!")
}}
console.log(cat);

// Question 2
var heading = document.querySelector ("h3");
heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add('subheading');

//Question 5
var paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => {
    p.style.color= "red"
});

// Question 6

var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = ("<p>New paragraph");
resultsContainer.style.background = ("yellow");

//Question 7
function aiPapi(list){
    for(stuff of list){
    console.log(stuff.name)
}
}
aiPapi(cats)

//Question 8

var catContainer = document.querySelector(".cat-container");
function createCats(cats){
for(katt of cats){
    if(katt.age = undefined){
        katt.age= "Age unknown"
    }
}
    var div = <div>
            <h5>${katt.name}</h5>
            <p>${katt.age}</p>


                </div>;
                catContainer.innerHTML += div;
}

createCats(cats)
// finito