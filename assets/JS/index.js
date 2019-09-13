let n05 = document.getElementById('05');
let content05 = document.getElementById('content05');
let liAgenda05 = document.getElementById('liAgenda05');

n05.addEventListener('click', (event) => {
    content05.classList.toggle('hidden');
    liAgenda05.classList.toggle('margin0');
    AOS.refresh()
});

let n12 = document.getElementById('12');
let content12 = document.getElementById('content12');
let liAgenda12 = document.getElementById('liAgenda12');


n12.addEventListener('click', (event) => {
    content12.classList.toggle('hidden');
    liAgenda12.classList.toggle('margin0');
    AOS.refresh()
});

let n13 = document.getElementById('13');
let content13 = document.getElementById('content13');
let liAgenda13 = document.getElementById('liAgenda13');


n13.addEventListener('click', (event) => {
    content13.classList.toggle('hidden');
    liAgenda13.classList.toggle('margin0');
    AOS.refresh()
});

let n17 = document.getElementById('17');
let content17 = document.getElementById('content17');
let liAgenda17 = document.getElementById('liAgenda17');


n17.addEventListener('click', (event) => {
    content17.classList.toggle('hidden');
    liAgenda17.classList.toggle('margin0');
    AOS.refresh()
});

let n19 = document.getElementById('19');
let content19 = document.getElementById('content19')
let liAgenda19 = document.getElementById('liAgenda19');


n19.addEventListener('click', (event) => {
    content19.classList.toggle('hidden');
    liAgenda19.classList.toggle('margin0');
    AOS.refresh()
});

let n20 = document.getElementById('20');
let content20 = document.getElementById('content20');
let liAgenda20 = document.getElementById('liAgenda20');


n20.addEventListener('click', (event) => {
    content20.classList.toggle('hidden');
    liAgenda20.classList.toggle('margin0');
    AOS.refresh()
});

let n26 = document.getElementById('26');
let content26 = document.getElementById('content26');
let liAgenda26 = document.getElementById('liAgenda26');


n26.addEventListener('click', (event) => {
    content26.classList.toggle('hidden');
    liAgenda26.classList.toggle('margin0');
    AOS.refresh()
});

let n27 = document.getElementById('27');
let content27 = document.getElementById('content27');
let liAgenda27 = document.getElementById('liAgenda27');


n27.addEventListener('click', (event) => {
    content27.classList.toggle('hidden');
    liAgenda27.classList.toggle('margin0');
    AOS.refresh()
});

let n31 = document.getElementById('31');
let content31 = document.getElementById('content31');
let liAgenda31 = document.getElementById('liAgenda31');


n31.addEventListener('click', (event) => {
    content31.classList.toggle('hidden');
    liAgenda31.classList.toggle('margin0');
    AOS.refresh()
});



//Section VideoGames

const links = document.getElementsByClassName('nav-link');

for (const element of links) {
    element.addEventListener('click', event => {
        for (const element of links) {
            element.classList.remove('active')
            element.setAttribute("aria-selected", "false")
        }
        event.target.classList.add('active')
        event.target.setAttribute("aria-selected", "true")
    })
}
  // Captures click events of all <a> elements with href starting with #
  let elems = document.querySelectorAll('a[href^="#"]')
  elems.forEach(element => {
      element.addEventListener('click', function(event) {
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.scrollTo(window.scrollX, window.scrollY - 46);
  });
  });


