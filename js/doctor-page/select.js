const select = function () {
    let selectHeader = document.querySelector('.search__header');
    let selectItems = document.querySelectorAll('.search__item');

    selectHeader.addEventListener('click', () => {
        selectHeader.parentElement.classList.toggle('is-active');
    })

    selectItems.forEach(item => {
        item.addEventListener('click', () => {
            let text = item.innerHTML;
            let searchList = item.closest('.search__list');
            let currentText = searchList.querySelector('.search__current-value');
            currentText.innerHTML = text;
            searchList.classList.remove('is-active');
        })
    })
};

select();