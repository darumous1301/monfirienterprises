let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
}) 

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;


    document.querySelectorAll('.read-more-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            console.log('Read More Clicked');
            const overlay = event.target.closest('.item').querySelector('.overlay');
            overlay.style.display = 'flex'; 
            body.classList.add('overlay-active');
        });
    });


    document.querySelectorAll('.close-overlay-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            console.log('Close Overlay Clicked');
            const overlay = event.target.closest('.overlay');
            overlay.style.display = 'none'; 
            body.classList.remove('overlay-active');
        });
    });
});