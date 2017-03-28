$(document).ready function(){
            $('.flightmiami').on('click', function ()) {
            
                var cercavolo = {
                            
             method: 'GET',
                            
             url: 'http : //partners.api.skyscanner.net/apiservices/referral/v1.0/IT/EUR/IT-IT/FCO/MIA/2017-07-12/2017-07-19?apiKey=ma676054764539603089446747454676',
                    
            beforeSend: function() {
                
                success : function (html) {
                $('thumb').append(html)
                $('thumb').find('.flightmiami').slideDown();
            }                                    
            }      
    $.ajax(cercavolo)
                    
                }}};