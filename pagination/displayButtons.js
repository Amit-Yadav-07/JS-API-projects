function displayButtons(container, pages, activeIndex) {
    let buttons = pages.map(function (_, pageIndex) {

        return `<button class="btn ${activeIndex === pageIndex ? 'active-btn' : 'null'}" data-index='${pageIndex}'>${pageIndex + 1}</button>`
    })

    buttons.push('<button class="btn next-btn">next</button>')
    buttons.unshift('<button class="btn prev-btn">prev</button>')
    container.innerHTML = buttons.join('')
}


export default displayButtons;

