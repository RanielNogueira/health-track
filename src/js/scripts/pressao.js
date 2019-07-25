$(document).ready(() => {

    $("#pagePressao").addClass("active");

    verificaPressao = async(sistolica,distolica) => {

        if(sistolica < 120 && distolica < 80){
            return { valor : "Normal", classe : "badge badge-success" };
        }
        else if(((sistolica >= 120 &&  sistolica <= 129) ? true : false) == true && distolica < 80){
            return { valor : "Elevada", classe : "badge badge-warning" };
        }
        else if(sistolica > 129 || distolica > 80){
                if(sistolica < 140 && distolica < 90)
                    return { valor : "Hipertensão Estágio 1", classe : "badge badge-warning-level-1" };
                if(sistolica < 180 && distolica < 120)
                    return { valor : "Hipertensão Estágio 2", classe : "badge badge-warning-level-2" };
                if(sistolica >= 180 || distolica > 120)
                    return { valor : "Crise hipertensiva", classe : "badge badge-danger" };
        }

    }

    add = async () => {

        var sistolica = $("#sistolica").val();
        var distolica = $("#distolica").val();

        this.verificaPressao(sistolica,distolica).then(function(response){
        var pressao = { sistolica : sistolica , distolica: distolica,resultado : response , data: new Date(Date.now()).toLocaleString()}

        var tableInsert = $("#tblPressao > tbody:last-child");

        console.log(pressao)

        var row = '<tr>'+
            `<td>${tableInsert[0].childElementCount+1}</td>`+
            `<td>${pressao.sistolica}</td>`+
            `<td>${pressao.distolica}</td>`+
            `<td class='text-center'><label class="badge ${pressao.resultado.classe}">${pressao.resultado.valor}</label></td>`+
            `<td>${pressao.data}</td>`+
            `<td><button onclick='pegaMedida(this)' class='btn btn-warning btn-sm btn-xs'><i class='fa fa-edit'></i> Editar</button></td>`+
            `<td><button class='btn btn-danger btn-sm btn-xs'><i class='fa fa-minus-circle'></i> Deletar</button></td></tr>`
      
      tableInsert.append(row);
    })
           
    }

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
            sistolica: {
                required: true,
                number: true,
                min:1
            },
            distolica: {
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