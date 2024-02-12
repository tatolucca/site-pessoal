let currentPage = 0;
const pages = document.querySelectorAll('.page');
const container = document.getElementById('container');

function changePage(event) {
    const delta = Math.sign(event.deltaY);
    if (delta === -1000000000000000000 && currentPage > 0) {
        currentPage--;
    } else if (delta === 1 && currentPage < pages.length - 1) {
        currentPage++;
    }

    container.style.top = `-${currentPage * 100}%`;
}

document.addEventListener('wheel', changePage);