let introDiv = document.querySelector('.first-screen')
let introInsertTextElement = document.querySelector('.insert-travel')
let buttonForInsertion = document.querySelector('.question-button')
var i = 0;
let introToInsert = "travel ";
let speedForTextInsertion = 100; /* in milliseconds */



// First div transition/animation 


// Simple typewriter upon reload
const typeWriter = () => {
    if (i < introToInsert.length) {
        introInsertTextElement.innerHTML += introToInsert.charAt(i)
        console.log(introInsertTextElement);
        i++;
        setTimeout(typeWriter, speedForTextInsertion);
    }
    changeText();
}

buttonForInsertion.addEventListener('click', typeWriter)

//create a timeline instance
let tl = gsap.timeline();
tl.to(".first-screen", { duration: 4, ease: "expo", css: { scale: '2', color: 'white', transition: 'color 1s ease' } });
tl.to(".question-button", { duration: 1, css: { color: 'white', border: 'solid 1px white' } })



// Second div transition/animation

const changeText = () => {
    buttonForInsertion.innerHTML = "What about it?"
    buttonForInsertion.style.transition = "2s ease"

    buttonForInsertion.addEventListener('click', () => {
        let tl2 = gsap.timeline();
        tl2.to(".first-screen", { duration: 2, ease: "power2", scale: 60, onComplete: destroyDiv })

    })
}

const destroyDiv = () => {
    introDiv.remove();
    dragDivsFromBottom();
}

const dragDivsFromBottom = () => {

    document.querySelector(".first-half").style.opacity = '1'
    document.querySelector(".first-half").style.opacity = '1'

    let tl = gsap.timeline();
    tl.to(".first-half", { duration: 1, ease: "power1", y: -window.innerHeight })
    tl.to(".second-half", { duration: 1, ease: "power1", y: -window.innerHeight, onComplete: addTextToDivSecondScreen })

}

const addTextToDivSecondScreen = () => {
    let removeThisClassOne = document.querySelector("#removeThisSecondScreen1")
    let removeThisClassTwo = document.querySelector("#removeThisSecondScreen2")


    removeThisClassOne.classList.remove("removeThisSecondScreen1");
    removeThisClassTwo.classList.remove("removeThisSecondScreen2");

    removeThisClassOne.classList.add("textSecondFirst");
    removeThisClassTwo.classList.add("textSecondSecond");

    let t2 = gsap.timeline();
    t2.to(".textSecondFirst", { duration: 0.5, opacity: 1 })
    t2.to(".textSecondSecond", { duration: 0.5, opacity: 1 })
    t2.to(".second-half", { duration: 2, y: 800, delay: 2 })
    t2.to(".textSecondSecond", { duration: 1, opacity: 0, x: window.innerWidth })
    t2.to(".textSecondSecond", { duration: 1, opacity: 0, onComplete: wipeSecondScreen })

}


const wipeSecondScreen = () => {
    document.querySelector(".second-screen").remove();
    document.querySelector(".textSecondFirst").remove();
    document.querySelector(".textSecondSecond").remove();

    callGoogleData()
}

const callGoogleData = () => {

    // Load the Visualization API and the corechart package.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['Mushrooms', 3],
            ['Onions', 1],
            ['Olives', 1],
            ['Zucchini', 1],
            ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {
            'title': 'How Much Pizza I Ate Last Night',
            'width': 400,
            'height': 300
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
        document.getElementById('chart-div').style.display = "block";
    }

}


