// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

const app = new Vue(
    {
        el :'#root',
        data: {
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
            }
        }
    }
)