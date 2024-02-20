function anchorFn(selector, target) {

    selector = document.querySelectorAll(selector)
    target = document.querySelector(target)

    selector.forEach(el => {
        el.addEventListener('click', () => {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "center"
            })
        })
    })
}

anchorFn('.more-link', '.tabsec')