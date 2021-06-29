const app = new Vue(
    {
        el: '#app',
        data:{
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
                    name: 'Chiara',
                    avatar: '_6',
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
                    name: 'Sara',
                    avatar: '_7',
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
                }
            ]
        },
        methods: {
            getChat(indice){

                const chat = document.getElementById("chat-body");
                const msg = this.contacts[indice].messages;

                chat.innerHTML = '';

                for(let i=0; i<msg.length; i++){

                    //aggiungo classi per allineamenti in base allo status del messaggio
                    let msgAlignment = document.querySelectorAll(".message-row");

                    if(msg[i].status == 'sent'){
                        msgAlignment = 'justify-start';
                    }else{
                        msgAlignment = 'justify-end';
                    }

                    //stampo le conversazioni
                    chat.innerHTML += `
                    <div class="message-row row ${msgAlignment}">
                            <div class="message ${msg[i].status}">
                            ${msg[i].text}
                                <div class="date">
                                    ${msg[i].date}
                                </div>
                            </div>    
                    </div>
                    `
                }    
                
            }
        }
    }
);

