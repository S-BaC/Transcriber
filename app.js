// To show the "Go Up" button based on scroll.
document.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("to-up").style.display = 'block';
    } else {
        document.getElementById("to-up").style.display = 'none';
    }

}

// To show the middle image from the carousel on opening.
document.getElementById('slider-span2').click();