document.addEventListener('DOMContentLoaded', function() {

    function changeClass(clickedEl) {
        const li = nav.children;
        for (const el of li) {
            el.classList.remove('nav-el-active');
        }
        clickedEl.parentElement.classList.add('nav-el-active');
    }

    function scrollTo(clickedEl) {
        const href = clickedEl.getAttribute('href');
        const targetEl = document.querySelector(href);
        if (targetEl !== null) {
            targetEl.scrollIntoView({behavior: "smooth"});
        }
    }

    const nav = document.querySelector('.nav');
    const links = nav.querySelectorAll('.nav-link');

    for (let a of links) {
        a.addEventListener('click', function(e) {
            e.preventDefault();

            changeClass(this);
            scrollTo(this);
        });
    }
});