//LEC - 47 - //array of objects:
const courses = [
    {
        name: "Complete ReactJS Course",
        price: "2.45",
    },
    {
        name: "Complete Angular Course",
        price: "2.23",
    },
    {
        name: "Complete MERN Course",
        price: "2.78",
    },
    {
        name: "Complete Java Course",
        price: "2.19",
    },
    {
        name: "GOLang Course",
        price: "3.15",
    },
]

// // <li class > text 
// // <span class > text <span/>
// // </li>

// function generateList() {
//     const ul = document.querySelector(".list-group"); 
//     ul.innerHTML = "";
//     courses.forEach( (course) => {
//         const li = document.createElement("li");
//         li.classList.add("list-group-item");
//         //text node inside li will be each of the courses in the array
//         const name = document.createTextNode(course.name);
//         li.appendChild(name);

//         const span = document.createElement("span");
//         span.classList.add("float-right");

//         const price = document.createTextNode("$ " + course.price);
//         span.appendChild(price);


//         //inject span inside li
//         li.appendChild(span);
//         ul.appendChild(li);
//     });
// };


// // generateList();

// window.addEventListener("load", generateList); //we only add reference to func the eventlist runs the func accordingly
// //the two methods both work the same


// //i want to add a functionality so that on pressing the button we can sort based on the prices
// const button = document.querySelector(".sort-btn");
// button.addEventListener("click", () => {
//     courses.sort( (a, b) => a.price-b.price );
//     //to generate new list after sorting -
//     generateList();
// });

//REDONE HERE 

// <ul> 
//     <li> text node
//         <span>text node</span>
//     </li>

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( (course) => {
        const li  = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}

// generateList();
window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price );
    generateList();
});

const button2 = document.querySelector(".btn-primary");
button2.addEventListener("click", () => {
    courses.sort( (a, b) => b.price - a.price );
    generateList();
});

const refreshbtn = document.querySelector(".refresh-btn");
const originalCourses = [...courses]; //spread operator creates shallow copy
refreshbtn.addEventListener("click", () => {
    courses.length = 0;
    originalCourses.forEach( (course) => courses.push({...course}) );
    generateList();
});