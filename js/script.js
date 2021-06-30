const app = new Vue(
    {
        el: '#app',
        data:{
            counter: 0,
            newMsg: '',
            search:'',
            activeUl: 0,
            contacts:[
                {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages:[
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                    }
                ]
                },

                {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages:[
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ]
                },

                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages:[
                        {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao! Allora andiamo a cena stasera?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: 'Si certo! Va bene per le 20?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Ok prenotato!',
                        status: 'sent'
                        }
                    ]
                },

                {
                    name: 'Luigi',
                    avatar: '_4',
                    visible: true,
                    messages:[
                        {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao! Ho visto la mail, tutto ok',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: 'Perfetto! Facciamo una call di repilogo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Si mi connetto subito',
                        status: 'sent'
                        }
                    ]
                },

                {
                    name: 'Andrea',
                    avatar: '_5',
                    visible: true,
                    messages:[
                        {
                        date: '20/03/2020 16:30:00',
                        text: 'Ho visto un video bellissimo che ti faccio vedere stasera',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: 'Ahahah, non vedo l\'ora!',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Ci vediamo stasera al bar :D',
                        status: 'received'
                        }
                    ]
                },

                {
                    name: 'Chiara',
                    avatar: '_6',
                    visible: true,
                    messages:[
                        {
                        date: '20/03/2020 16:30:00',
                        text: 'Com\'è andato l\'esame?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: '30 e lode!!!!',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Bravissimaaaaa!',
                        status: 'sent'
                        }
                    ]
                },

                {
                    name: 'Sara',
                    avatar: '_7',
                    visible: true,
                    messages:[
                        {
                        date: '20/03/2020 16:30:00',
                        text: 'Tu hai messo i soldi per il regalo?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: 'Sisi ieri! Li ho dati a Matteo',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Ah perfetto, ti segno nella lista, grazie!',
                        status: 'sent'
                        }
                    ]
                }
            ]
        },
        methods: {
            getChat(item, index){
                const username = document.getElementById("username-container");
                
                this.activeUl = index;
                this.counter = index;

                username.innerHTML = `
                ${item.name}
                <p class="p-2">Ultimo accesso alle</p>
                `;

            },
            writeMsg(){
                if(this.newMsg.length > 0){
                    this.contacts[this.counter].messages.push(
                        {
                        date: '10/01/2020 15:30:55',
                        text: this.newMsg,
                        status: 'sent'
                        }
                    );
                    this.newMsg = '';
                    this.getReply();     
                }         
            },
            getReply(){
                setTimeout(() =>{
                    this.contacts[this.counter].messages.push(
                        {
                        date: '10/01/2020 15:30:55',
                        text: 'ok',
                        status: 'received'
                        }
                    );
                }, 1000);
            },
        },
        computed: {
            filteredContacts(){
                return this.contacts.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
            }
        }
    }
);

