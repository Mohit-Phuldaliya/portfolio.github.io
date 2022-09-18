// ==========================================
//  Creating a portofolio tabbed component
// ==========================================


const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_image_elem = document.querySelectorAll(".img-overlay");


p_btns.addEventListener("click", (e) => { //passed call back function with help of arrow function
    const p_btn_clicked = e.target; // with help of e.target we will get that buuton which is clicked in parent p-btns as target
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum; // getting number or data-btn-num = "?"
    //btnNum written in html as btn-num but in JS we wrote it in camel case
    console.log(btn_num)

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`) //targeting all images having same number'

    p_image_elem.forEach((curElem) => curElem.classList.add("p-image-not-active")) //hidding all images by adding hidden class

    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active")) //unhide by removing class of those images whose button is clicked
});


//--------------- scroll to tpo button --------------------

// const footerElem = document.querySelector(".section-footer");
// const  scrollElement = document.createElement("div");
// scrollElement.classList.add("scrollTop-style")

// scrollElement.innerHTML = `<img
// class="scoll-top" src="/images/up-arrows.png" alt="">`;

// footerElem.after("scrollElement");
const heroSection = document.querySelector(".section-hero");
const scrollElement = document.querySelector(".scrollTop-style");
const scrollTop = () =>{
    heroSection.scrollIntoView({behavior:"smooth"});
};
scrollElement.addEventListener("click", scrollTop);


// animate number

const couterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

couterNum.forEach((curElem) => {



    const updateNumber = () =>{
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber/speed);
        // console.log(incrementNumber);

        if(initialNum < targetNumber){
            curElem.innerText = `${initialNum + incrementNumber}+`
            setTimeout(updateNumber, 10);
        }
    };


    
    updateNumber();
});