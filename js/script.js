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
