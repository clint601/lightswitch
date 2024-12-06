
document.querySelector('.btn-off').addEventListener('click', 
    function() {
            document.querySelector('.btn-off').style.background = 'red'
            document.querySelector('.btn-on').style.background = 'green'
            document.querySelector('.lightbulb img').src = 'image/lightoff.jpg'
    
    })
    
    document.querySelector('.btn-on').addEventListener('click', 
        function() {
                document.querySelector('.btn-on').style.background = '#00ff00'
                document.querySelector('.btn-on').style.background = 'green'
                document.querySelector('.lightbulb img').src = 'image/lighton.jpg'
        
        })


