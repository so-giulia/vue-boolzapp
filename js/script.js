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
                    status: 'sent',
                    current: false
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    current: false
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received',
                    current: false
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
                    status: 'sent',
                    current: false
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    current: false
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    current: false
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
                        status: 'sent',
                        current: false
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: 'Si certo! Va bene per le 20?',
                        status: 'received',
                        current: false
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Ok prenotato!',
                        status: 'sent',
                        current: false
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
                        status: 'sent',
                        current: false
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: 'Perfetto! Facciamo una call di repilogo?',
                        status: 'received',
                        current: false
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Si mi connetto subito',
                        status: 'sent',
                        current: false
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
                        status: 'received',
                        current: false
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: 'Ahahah, non vedo l\'ora!',
                        status: 'sent',
                        current: false
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Ci vediamo stasera al bar :D',
                        status: 'received',
                        current: false
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
                        status: 'sent',
                        current: false
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: '30 e lode!!!!',
                        status: 'received',
                        current: false
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Bravissimaaaaa!',
                        status: 'sent',
                        current: false
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
                        status: 'sent',
                        current: false
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: 'Sisi ieri! Li ho dati a Matteo',
                        status: 'received',
                        current: false
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Ah perfetto, ti segno nella lista, grazie!',
                        status: 'sent',
                        current: false
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

                //temporary
                username.innerHTML = `
                ${item.name}
                <p class="p-2">Ultimo accesso Oggi alle 6:00</p>
                `;

            },
            writeMsg(){
                if(this.newMsg.length > 0){
                    this.contacts[this.counter].messages.push(
                        {
                        date: dayjs().format("DD/MM/YY HH:mm:ss"),
                        text: this.newMsg,
                        status: 'sent',
                        current: false
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
                        date: dayjs().format("DD/MM/YY HH:mm:ss"),
                        text: 'ok',
                        status: 'received',
                        current: false
                        }
                    );
                }, 1000);
            },
            showSentOptions(index){
                if(this.contacts[this.counter].messages[index].current == true){
                    this.contacts[this.counter].messages[index].current = false;
                }else{
                    this.contacts[this.counter].messages[index].current = true;
                }
            },
            showRecOptions(index){
                if(this.contacts[this.counter].messages[index].current == true){
                    this.contacts[this.counter].messages[index].current = false;
                }else{
                    this.contacts[this.counter].messages[index].current = true;
                }
            },
            deleteMsg(index){
                console.log(this.contacts[this.counter].messages);
                this.contacts[this.counter].messages.splice(index, 1);
            }
        },
        computed: {
            filteredContacts(){
                return this.contacts.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
            }
        }
    }
);

