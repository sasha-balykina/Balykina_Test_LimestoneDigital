$(function(){

    jQuery(function(f) {
        var element = f('#appearanceScroll');
        f(window).scroll(function() {
            element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);           
        });
    });

	var btns = document.querySelectorAll('.previewBtn');
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function(event) {
            var activeBtn = document.querySelector('.previewBtn.active');
            activeBtn.classList.remove('active');
            
            var activeContent = document.querySelector('.content.active');
            activeContent.classList.remove('active');
            this.classList.add('active');

            var contentId = this.id + 'View';
            var content = document.getElementById(contentId);
            content.classList.add('active');
        });
    }
    
});