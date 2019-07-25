$(document).ready(() =>{
    
    $("#pageExercicio").addClass("active");

    function add(){

        var exercicio = $("#exercicio")[0].selectedOptions[0];
        var duracao = $("#minutos").val();

        var _exercicio = { exercicio : exercicio.text,duracao : duracao , data: new Date(Date.now()).toLocaleString()}

        var tableInsert = $("#tblAlimentacao > tbody:last-child");

        var row = '<tr>'+
            `<td>${tableInsert[0].childElementCount+1}</td>`+
            `<td>${_exercicio.exercicio}</td>`+
            `<td>${_exercicio.duracao}min</td>`+
            `<td>${_exercicio.data}</td>`+
            `<td><button onclick='pegaMedida(this)' class='btn btn-warning btn-sm btn-xs'><i class='fa fa-edit'></i> Editar</button></td>`+
            `<td><button class='btn btn-danger btn-sm btn-xs'><i class='fa fa-minus-circle'></i> Deletar</button></td></tr>`
      
      tableInsert.append(row);

           
    }


    var exercicios = [
       "Caminhada esteira elétrica",
       "Caminhada de rua leve",
       "Caminhada de rua intensa",
       "Ciclismo",
       "Corrida moderada",
       "Corrida intensa",
       "Sessão de pilates",
       "Sessão de crossfit"
    ]


    var inputExercicios = $("#exercicio");


    exercicios.map(function(item){
        inputExercicios.append(`<option value="${item}" >${item}</option>`)
    })



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
            exercicio: {
                required: true
            },
            minutos: {
                required: true,
                number: true,
                min:1
            }
        },
        submitHandler: function (form) {
            add();
        }
    })


})