// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const app = new Vue(
    {
        el :'#root',
        data: {
            newTodo: '',
            todoArray: [
                {
                    testo: 'Fare la spesa',
                    done: true,
                },
                {
                    testo: 'Fare gli esercizi di Boolean',
                    done: false,
                },
                {
                    testo: 'Aprire un ticket',
                    done: false,
                },
                {
                    testo: 'Finire entro le 19 per andare a correre',
                    done: false,
                }
            ],
        },
        methods:{
            removeLi : function (index){
                this.todoArray.splice(index, 1);
            },
            addTodo : function (){
                if(this.newTodo !== ''){
                    this.todoArray.push(
                        {
                            testo: this.newTodo,
                            done: false
                        }
                    )
                };
            }
        }
    }
)