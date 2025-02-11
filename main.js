function openHamburger(){
    let burger = document.getElementById("nav-check").checked
    if(burger){
        document.getElementById("navCard").style.cssText = "display: flex; animation: slide-in-top 1s ease-out 0s 1 normal forwards;"
        document.getElementById("nav-check").disabled = true
        setTimeout(() => {
            document.getElementById("nav-check").disabled = false
        }, 1500);
    }else{
        document.getElementById("navCard").style.cssText = "animation: slide-out-bottom 1s ease-out 0s 1 normal forwards;"
        setTimeout(() => {
            document.getElementById("navCard").style.display = "none"
        }, 800);
    }
}

function removeCard(){
    document.getElementById("navCard").style.cssText = "animation: slide-out-bottom 0.3s ease-out 0s 1 normal forwards;"
    // setTimeout(() => {
        document.getElementById("navCard").style.display = "none"
    // }, 500);
    document.getElementById("nav-check").checked = false
}


function viewOnly(){
    const elements = document.querySelectorAll(
        '.about-title, .about-p, .skills-title-div, .card, .work-exp-title, .project-title, .Find-me-div p, .contact-div p, .copyright-div p, .hr-design'
    );

    for(let element of elements){
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in-bottom-animation');
            }
        });
    });
    observer.observe(element);
    }
}

viewOnly()
