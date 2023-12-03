const ratingCard = document.querySelector('.rating-container')
const thankCard = document.querySelector('.thankyou-container')
const submitButton = document.querySelector('.submit-btn')
const rating = document.getElementById('rating')
const ratingNumber = document.querySelectorAll('.btn')

submitButton.addEventListener('click',() => {
    thankCard.classList.remove('hidden')
    ratingCard.style.display = "none"
})

ratingNumber.forEach((rates) => {
    rates.addEventListener('click', () => {
        rating.innerHTML = rates.innerHTML
    })
})











