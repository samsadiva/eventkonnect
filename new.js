// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('button, a').forEach(element => {
        element.addEventListener('click', (e) => {
            console.log(`Clicked on element: ${e.target.tagName}, ID: ${e.target.id}`);
            // Additional tracking logic here
        });
    });
});
