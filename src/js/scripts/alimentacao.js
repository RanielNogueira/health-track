$(document).ready(() => {

    $("#pageAlimentacao").addClass("active");

    function add() {

        var alimento = $("#alimento")[0].selectedOptions[0];
        var quantidade = $("#quantidade").val();

        var _alimento = { alimento: alimento.text, quantidade: quantidade, calorias: (parseInt(alimento.value) * quantidade), data: new Date(Date.now()).toLocaleString() }

        var tableInsert = $("#tblAlimentacao > tbody:last-child");

        var row = '<tr>' +
            `<td>${tableInsert[0].childElementCount + 1}</td>` +
            `<td>${_alimento.alimento}</td>` +
            `<td>${_alimento.quantidade}</td>` +
            `<td>${_alimento.calorias}kcal</td>` +
            `<td>${_alimento.data}</td>` +
            `<td><button onclick='pegaMedida(this)' class='btn btn-warning btn-sm btn-xs'><i class='fa fa-edit'></i> Editar</button></td>` +
            `<td><button class='btn btn-danger btn-sm btn-xs'><i class='fa fa-minus-circle'></i> Deletar</button></td></tr>`

        tableInsert.append(row);


    }


    var alimentos = [
        { alimento: "Arroz integral cozido 100g", caloria: 112 },
        { alimento: "Bacon frito 2 cubos (30g)", caloria: 198 },
        { alimento: "Banana 100g", caloria: 122 },
        { alimento: "Bolo de Laranja 1 fatia (50g)", caloria: 173 },
        { alimento: "Feijão carioca 100g", caloria: 77 },
        { alimento: "Maça 100g", caloria: 52 },
        { alimento: "Omelete 100g", caloria: 154 },
        { alimento: "Patinho de boi assado 3 fatias (100g)", caloria: 200 },
        { alimento: "Peito de frango grelhado 100g", caloria: 165 },
        { alimento: "Suco de abacaxi natural 240 ml", caloria: 100 },
        { alimento: "Suco de manga natural 240 ml", caloria: 109 },
        { alimento: "Torrada 100g", caloria: 313 }
    ]


    var inputAlimentos = $("#alimento");


    alimentos.map(function (item) {
        inputAlimentos.append(`<option value="${item.caloria}" >${item.alimento}</option>`)
    })

    $.validator.addMethod('minStrict', function (value, el, param) {
        return value > param;
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "Este campo &eacute; requerido.",
        remote: "Por favor, corrija este campo.",
        email: "Por favor, forne&ccedil;a um endere&ccedil;o eletr&ocirc;nico v&aacute;lido.",
        url: "Por favor, forne&ccedil;a uma URL v&aacute;lida.",
        date: "Por favor, forne&ccedil;a uma data v&aacute;lida.",
        dateISO: "Por favor, forne&ccedil;a uma data v&aacute;lida (ISO).",
        number: "Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lido.",
        digits: "Por favor, forne&ccedil;a somente d&iacute;gitos.",
        creditcard: "Por favor, forne&ccedil;a um cart&atilde;o de cr&eacute;dito v&aacute;lido.",
        equalTo: "Por favor, forne&ccedil;a o mesmo valor novamente.",
        accept: "Por favor, forne&ccedil;a um valor com uma extens&atilde;o v&aacute;lida.",
        maxlength: jQuery.validator.format("Por favor, forne&ccedil;a n&atilde;o mais que {0} caracteres."),
        minlength: jQuery.validator.format("Por favor, forne&ccedil;a ao menos {0} caracteres."),
        rangelength: jQuery.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1} caracteres de comprimento."),
        range: jQuery.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1}."),
        max: jQuery.validator.format("Por favor, forne&ccedil;a um valor menor ou igual a {0}."),
        min: jQuery.validator.format("Por favor, forne&ccedil;a um valor maior ou igual a {0}.")
    });

    $("#formSave").validate({
        errorClass: 'text-danger',
        validClass: 'success',
        errorElement: 'span',
        rules: {
            alimento: {
                required: true
            },
            quantidade: {
                required: true,
                number: true,
            }
        },
        submitHandler: function (form) {
            add();
        }
    })

})