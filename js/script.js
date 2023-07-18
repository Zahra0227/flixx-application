const global ={
    currentpage: window.location.pathname,
};

//highlight active link
function highlightActiveLink(){
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentpage){
            link.classList.add('active');
        }
    });
}

//int app
function init(){
    switch (global.currentpage){
        case '/C:\Users\Lenovo\Desktop\flixx-app\index.html':
            console.log('Home');
            break;
        case '/C:\Users\Lenovo\Desktop\flixx-app\shows.html':
            console.log('Shows');
            break;    
        case '/C:\Users\Lenovo\Desktop\flixx-app\movie-details.html':
            console.log('movei Details');
            break;
        case '/C:\Users\Lenovo\Desktop\flixx-app\tv-details.html':
            console.log('TV Details');
            break;        
    }
    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded' , init);