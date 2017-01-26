$(document).ready(function(){
    //Read title and edit title
    var h1 = 'h1';
    var title = $(h1).text();
    console.log(title);
    $(h1).text('Travel agency quasar');

    //count how many element are in the selection
    //console.log($('li')) //returns an array
    //console.log($('li').length)

    //Find the 'li' and modify their text
    //$('li').text('Bari');

    //Select 'li' elements that are inside the 'ul#destinations'
    //$('ul li').text('Bari');

    //Select only the 'li' that are direct children of 'ul#destinations'
    //$('ul#destinations > li').text('Bari');

    //Select elements that have class 'promo' and id 'spain'
    //$('.promo, #spain').text('Bari');

    //Pseudo selector [:last, :first, :odd, :even]
    //$('li:odd').text('Bari'); //NB: index starts from 0

    //Select 'li' inside 'ul' without descendent selector
    //instead of $('ul li').text('Bari');
    //$('ul').find('li').text('Bari');
    //var vecchia = ' vecchia'
    //$('li').last().text('Bari' + vecchia);
    //$('li').last().prev().text('Bari');
    //$('li').first().next().text('Bari');

    //Select 'ul' from 'li'
    //$('li').parent().text('Bari');

    //Select children of 'ul'
    //$('ul').children().text('Bari');

    //Insert as last element
    //$('ul#destinations').append('<li>Bergamo basso</li>');
    //$('<li>Bergamo basso</li>').appendTo('ul#destinations');
    //Insert as first element
    //$('ul#destinations').prepend('<li>Bergamo basso ++ </li>'); //prependTo
    //Insert before and after
    //$('ul#destinations').before('<div>List:</div>'); //insertBefore
    //$('ul#destinations').after('<div>End list</div>'); //insertAfter

    //Remove a HTML element
    //$('button').remove();

    //callback on click
    /*
     $('button').on('click', function() {
     $('li').remove()
     });
     */

    //Add a callback on click of button that
    // - add the price to li.vacation
    // - remove button

    $('#destinations button').on('click', function() {

        var $this = $(this); //wrapping
        var price = $this.closest('li[data-price]').data('price');

        $this.after('<div>'+price+'$</div>');
        $this.remove();

    });

    $('#btn-show-promo').on('click', function() {
        $('li.promo').addClass('shown');
    });

    $('#btn-hide-promo').on('click', function() {
        $('li.promo').removeClass('shown');
    })

    $('ul#list-to-hide li').on('click', function() {
        $(this).remove();
    });

    $('#btn-show-all').on('click', function(){
        $('#destinations li').show();
    });

    $('#btn-hide-all').on('click', function(){
        $('#destinations li').hide();
    })

});