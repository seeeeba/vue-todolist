

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

        }
    }
)