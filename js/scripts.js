$(document).ready(function(){
    var owl = $('.owl-carousel-quotes').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items: 1
            },
            567:{
                items: 1
            },
            768:{
                items: 1
            },

            1200:{
                items: 3
            }
        }
    });

    function updateCounter(event) {
        var element = event.target;
        var items = event.item.count;
        var item = event.item.index + 1;

        // Корректировка для зацикленной карусели
        if(item > items) {
            item = item - items;
        }

        $('.mobile-nav .current').text(item);
        $('.mobile-nav .total').text(items);
    }

    owl.on('changed.owl.carousel', updateCounter);

    // Инициализация счетчика
    updateCounter({
        target: $('.owl-carousel-quotes'),
        item: {
            count: $('.owl-carousel-quotes .col-lg-45').length,
            index: 0
        }
    });

    // Если используете кастомные кнопки
    $('.custom-next').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('.custom-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
});