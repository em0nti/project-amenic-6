const refs = {

    cardSetRef: document.querySelector('.card-set'),
}

export default function clearPage() {
    refs.cardSetRef.innerHTML = '';
}