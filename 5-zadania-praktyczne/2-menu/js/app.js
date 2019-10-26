document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const links = nav.querySelectorAll('.nav-link');

    for (let a of links) {
        a.addEventListener('click', function(e) {
            e.preventDefault();

            //robię pętle po wszystkich li i usuwam im klasę
            const li = nav.children;
            //lub
            //const li = this.parentElement.parentElement.children;

            for (const el of li) {
               el.classList.remove('nav-el-active');
            }

            this.parentElement.classList.add('nav-el-active');
        });
    }
});