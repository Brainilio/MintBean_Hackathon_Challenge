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
        tl2.to(".first-screen", { duration: 2, ease: "power2", scale: 50, onComplete: destroyDiv })

    })
}

const destroyDiv = () => {
    introDiv.remove();
    dragDivsFromBottom();
}

const dragDivsFromBottom = () => {
    let tl = gsap.timeline();
    tl.to(".first-half", { duration: 1.5, ease: "power1", y: -window.innerHeight })
    tl.to(".second-half", { duration: 1.5, ease: "power1", y: -window.innerHeight, onComplete: addTextToDivSecondScreen })

}

const addTextToDivSecondScreen = () => {
    let removeThisClassOne = document.querySelector("#removeThisSecondScreen1")
    let removeThisClassTwo = document.querySelector("#removeThisSecondScreen2")


    removeThisClassOne.classList.remove("removeThisSecondScreen1");
    removeThisClassTwo.classList.remove("removeThisSecondScreen2");

    removeThisClassOne.classList.add("textSecondFirst");
    removeThisClassTwo.classList.add("textSecondSecond");
}



