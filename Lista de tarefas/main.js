$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
    })

    $('#adiciona-tarefa').click(function(){
        const inputTarefa = document.querySelector('#tarefa-txt');
        if (inputTarefa.value == ''){
            inputTarefa.focus();
            alert('Digite uma tarefa!');
        } else {
            let addTarefa = `<li id="tarefaLi">${inputTarefa.value}</li>`
            $('#lista').prepend(addTarefa);
            $('#tarefa-txt').val('');

            $('#tarefaLi').click(function(event){
                if ($(this).hasClass("checked")) {
                    $(this).removeClass("checked");
                } else {
                    $(this).addClass("checked");
                }
            })
        }
    })
})