// ISTANZIARE VUE:
var app = new Vue (
    {
        el: '#root',
        data: {
            newToDo: '',
            todos: [
                {
                    text: 'Esempio: fare la spesa',
                    done: false
                },
                {
                    text: 'Esempio: prenotare visita medica',
                    done: false
                },
                {
                    text: 'Esempio: pagare le bollette',
                    done: false
                }
            ]
        },
        methods: {
            removeToDo: function(toDoIndex) {
                // usiamo lo splice
                // elemento in base alla posizione dell'indice, 
                // quanti elementi togliere da quella posizione
                this.todos.splice(toDoIndex, 1)
            },
            addToDo: function() {
                let objToDo = {
                    text: this.newToDo,
                    done: false,
                }
                if(!this.newToDo == '') {
                    this.todos.push(objToDo);
                    // Svuotare l'input dopo aver pushato il nuovo todo
                    this.newToDo = ''
                }
            },
            done: function(element) {
                if (element.done == true) {
                    element.done = false
                } else {
                    element.done = true
                }
            }
            
        }
    }
)