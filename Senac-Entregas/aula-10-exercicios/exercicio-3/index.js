let ListaDeTarefas = []
let tarefaUm = prompt('cite uma tarefa que você realizar no seu dia:')
let tarefaDois = prompt('cite outra tarefa:')
let tarefaTrês = prompt('cite outra tarefa:')

ListaDeTarefas[1]=tarefaUm
ListaDeTarefas[2]=tarefaDois
ListaDeTarefas[3]=tarefaTrês

console.log('tarefas',ListaDeTarefas)

let Indices = prompt('qual tarefa você ja reaçizoi,1,2 ou 3?')
let ListaDeTarefas.splice(indices,1)

console.log('tarefas que não foram realizadas',remocão)








