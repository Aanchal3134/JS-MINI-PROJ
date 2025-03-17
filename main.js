//LEC - 47 
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
]

// <li class > text 
// <span class > text <span/>
// </li>

function generateList() {
    const ul = document.querySelector(".list-group"); 
    //ul
    courses.forEach( (course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        //text node inside li will be each of the courses in the array
        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);


        //inject span inside li
        li.appendChild(span);
        ul.appendChild(li);
    });
};


generateList();