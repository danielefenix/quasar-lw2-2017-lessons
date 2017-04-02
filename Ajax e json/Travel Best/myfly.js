$(document).ready(function () {
    // Voli per Miami
    $('#flightmia').on('click', function () {
        var root = 'https://jsonplaceholder.typicode.com';
        var config = {
            method: 'GET'
            , url: root + '/users'
            , success: function (users) {
                var source = $("#volomiami").html();
                var template = Handlebars.compile(source);
                var context = users;
                var html = template(context);
                $('#user-list').append(html);
            }
            , error: function (err) {
                alert('Impossible to load users')
            }
        }
        $.ajax(config)
    });
    // Voli per Los Angeles
    $('#flightlax').on('click', function () {
        var root = 'https://jsonplaceholder.typicode.com';
        var config = {
            method: 'GET'
            , url: root + '/users'
            , success: function (users) {
                var source = $("#vololax").html();
                var template = Handlebars.compile(source);
                var context = users;
                var html = template(context);
                $('#user-list').append(html);
            }
            , error: function (err) {
                alert('Impossible to load users')
            }
        }
        $.ajax(config)
    });
    // voli per le Maldive
    $('#flightmal').on('click', function () {
        var root = 'https://jsonplaceholder.typicode.com';
        var config = {
            method: 'GET'
            , url: root + '/users'
            , success: function (users) {
                var source = $("#volomal").html();
                var template = Handlebars.compile(source);
                var context = users;
                var html = template(context);
                $('#user-list').append(html);
            }
            , error: function (err) {
                alert('Impossible to load users')
            }
        }
        $.ajax(config)
    });
    // voli per i Caraibi
    $('#flightnas').on('click', function () {
        var root = 'https://jsonplaceholder.typicode.com';
        var config = {
            method: 'GET'
            , url: root + '/users'
            , success: function (users) {
                var source = $("#volonas").html();
                var template = Handlebars.compile(source);
                var context = users;
                var html = template(context);
                $('#user-list').append(html);
            }
            , error: function (err) {
                alert('Impossible to load users')
            }
        }
        $.ajax(config)
    });
});