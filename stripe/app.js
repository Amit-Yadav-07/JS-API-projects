import subLinks from "./data.js";

let toggle = document.querySelector('.toggle-btn');
let sidebar = document.querySelector('.sidebar');
let close = document.querySelector('.close');
let linksBtn = [...document.querySelectorAll('.link-btn')];
let sidebarLinks = document.querySelector('.sidebar-links');
let submenu = document.querySelector('.submenu');
let hero = document.querySelector('.hero');
let nav = document.querySelector('.nav');


toggle.addEventListener('click', function () {
    sidebar.classList.add('show');
})

close.addEventListener('click', function () {
    sidebar.classList.remove('show');
})


sidebarLinks.innerHTML = subLinks.map(function (item) {

    let { page, links } = item;

    return `
    <div>
        <h3>${page}</h3>
      <div class='sidebar-subLinks'>
       ${links.map(function (item) {
        // console.log(item)
        return `<a href="item.url">
        <i class='${item.icon} '></i> ${item.label}
        </a>`
    }).join('')}
      </div>
    </div>`

}).join('')


// large screen logic


linksBtn.forEach(function (btn) {
    btn.addEventListener('mouseover', function (e) {
        let text = e.currentTarget.textContent;


        let tempBtn = e.currentTarget.getBoundingClientRect();
        let center = (tempBtn.left + tempBtn.right) / 2;
        // console.log(center);
        let bottom = tempBtn.bottom + 10;

        let tempPage = subLinks.find(function ({ page }) {
            return page === text;
        });


        let { page, links } = tempPage;
        // console.log(page, links);
        if (tempPage) {
            submenu.classList.add('submenu-show');
            submenu.style.left = `${center}px`
            submenu.style.top = `${bottom}px`;


            // dynamic class

            let columns = 'col-2';

            if (links.length === 3) {
                columns = "col-3";
            }
            if (links.length > 3) {
                columns = "col-4";

            }


            submenu.innerHTML = `<section class="tooltipText">
               <strong>${page}</strong>
               <div class="submenu-links ${columns}">${links.map((link) => {
                return `<a class="submenu-link" href="${link.url}"><i class="${link.icon} "></i> ${link.label}</a>`
            }).join('')}</div>
                </section>`
        }

    })
})


hero.addEventListener('mouseover', function (e) {
    submenu.classList.remove('submenu-show');
})

nav.addEventListener('mouseover', function (e) {

    if (!e.target.classList.contains("link-btn")) {
        submenu.classList.remove('submenu-show');
    }
})