<template>
    <section id="chatting" class="row">
        <div class="col-12 profile-chat-box">
            <h4>Admin</h4>
        </div>
        <div class="col-12 list-chat-box">
            <div class="row wrapper-lcb">
                <div
                    v-for="(chat, i) in ChatData" :key="i"
                    :class="
                        chat.mainChat.adminId !== '' ? 'col-12 user-chat left-user' :
                        'col-12 user-chat right-user'
                    "
                    :id="`chatId-${ chat.mainChat.id }`"
                >  
                    <!-- Replay Chat -->
                    <div
                        
                        v-for="(replay, j) in chat.parentChat"
                        :key="j"
                        :id="`replayedId-${ replay.id }`"
                        :class="replay.adminId != '' ? 'wb-replay right' : 'wb-replay left'"
                    >
                        <div class="wb-chat-box">
                            <div class="wb-image" v-if="replay.adminId !== ''">
                                <div class="image" style="background-image: url('https://www.kompasdata.id/Content/img/icons/cs.jpg')"></div>
                            </div>
                            <div class="wb-text">
                                <div class="wp-wb-text">
                                    <div class="title">
                                        <h6>{{ replay.title }}</h6>
                                    </div>
                                    <div class="message">
                                        <p>{{ replay.text }}</p>
                                        <p>{{ replay.insertDate.substring(0, 10) }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="wb-image" v-if="replay.adminId === ''">
                                <div class="image" style="background-image: url('https://www.kompasdata.id/Content/img/icons/man.png')"></div>
                            </div>
                        </div>
                    </div>
                    <!-- Real Chat -->
                    <div class="wb-chat-box">
                        <div class="wb-image" v-if="chat.mainChat.adminId !== ''">
                            <div class="image" style="background-image: url('https://www.kompasdata.id/Content/img/icons/cs.jpg')"></div>
                        </div>
                        <div class="wb-text">
                            <div class="wp-wb-text">
                                <div class="title">
                                    <h5>{{ chat.mainChat.title }}</h5>
                                </div>
                                <div class="message">
                                    <span>{{ chat.mainChat.text }}</span>
                                </div>
                                <div class="date">
                                    <span>{{ chat.mainChat.insertDate.substring(0, 10) }}</span>
                                </div>
                                <!-- <div class="btn-action">
                                    {{ chat }}
                                </div> -->
                            </div>
                        </div>
                        <div class="wb-image" v-if="chat.mainChat.adminId === ''">
                            <div class="image" style="background-image: url('https://www.kompasdata.id/Content/img/icons/man.png')"></div>
                        </div>
                    </div>
                    <div class="wb-icon">
                        <i class="fa-solid fa-reply" v-on:click="addReplayedData(`chatId-${ chat.mainChat.id }`)"></i>
                        <span v-on:click="addReplayedData(chat.mainChat.id)">Reply</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 send-chat-box">
            <div class="wrapper-replay-chat" id="ready-replay">
                <!-- <span>Re From : <span>sadlaskdnalskdn</span></span> -->
            </div>

            <div class="wrapper-scb">
                <button class="form-control mb-2" v-if="this.ReadyReplayData" v-on:click="removeReplayedData">Clear Replay Data</button>
                <input placeholder="title message..." type="text" name="title-chat" id="title-chat" class="form-control mb-2">
                <textarea name="message-chat" id="message-chat" class="form-control mb-2" placeholder="Ketik untuk mengirim pesan..."></textarea>
                <button class="form-control" v-on:click="sendChat">
                    <span>Send Pesan</span>
                    <i id="send-chat" class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: 'Chatting',
        data() {
            return {
                ChatData: [],
                ReadyReplayData: null,
            }
        },
        async mounted() {
            this.getChat()
            this.setRead()
        },
        methods: {
            async getChat() {
                let configChat = {
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/Users/${ this.$store.state.Login.UserData.id }/Messages`,
                    method: 'get',
                    headers: {
                        'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }`
                    }
                }

                await Axios(configChat).then(response => {
                    // this.getReplayChat(response.data)
                    // console.log(this.getReplayChat(response.data))
                    // this.ChatData = response.data
                    this.ChatData = this.getReplayChat(response.data)
                    this.scrollToBottomViewChat()
                    this.$store.commit('setNotification')
                }).catch(err => {
                    console.log(err)
                })
            },

            getReplayChat(paramChats) {
                return paramChats.map((data, i, arrData) => {
                    if ( data.id !== data.parentId ) return { mainChat: arrData[i], parentChat: arrData.filter(x => data.parentId === x.id ) }
                    else return { mainChat: arrData[i], parentChat: [] }
                    /* return { mainChat: arrData[i], parentChat: arrData.filter(x => x.id !== x.parentId && data.id === x.parentId ) // [0].id == data.id ? // arrData.filter(x => x.parentId != x.id) : [] } */
                })
            },

            goToSelectionSection(e) {
                var element = document.getElementById(`chatId-${ e }`);
                var elBox = document.getElementById('box-cd')
                var headerOffset = 100;
                var elementPosition = element.getBoundingClientRect().top;
                var offsetPosition = elementPosition - elBox.pageYOffset + headerOffset;
                elBox.scrollTo({ top: offsetPosition, behavior: "smooth" })
            },

            goToChatBox() {
                var element = document.getElementById(`ready-replay`)
                var elBox = document.getElementById('box-cd')
                var headerOffset = 100;
                var elementPosition = element.getBoundingClientRect().top
                var offsetPosition = elementPosition - elBox.pageYOffset + headerOffset
                elBox.scrollTo({ top: offsetPosition, behavior: "smooth" })
            },

            addReplayedData(params) {
                let replayedData = document.querySelector("#ready-replay")
                replayedData.innerHTML = ''
                let chatData = this.ChatData.filter(x => x.mainChat.id === Number(params))[0]
                replayedData.innerHTML = `<span>Balas Untuk : ${ chatData.mainChat.title }</span>`
                this.ReadyReplayData = chatData
                this.goToChatBox()
            },

            scrollToBottomViewChat() {
                var objDiv = document.querySelector("#chatting .list-chat-box")
                setTimeout(() => objDiv.scrollTop = objDiv.scrollHeight, 50)
            },

            removeReplayedData() {
                let replayedData = document.querySelector("#ready-replay")
                replayedData.innerHTML = ''
                this.ReadyReplayData = null
            },

            async sendChat() {
                let titleChat = document.querySelector('#title-chat')
                let messageChat = document.querySelector("#message-chat")
                let configSendChat
                if ( !this.ReadyReplayData ) {
                    configSendChat = {
                        url: `${ this.$store.state.Headers.BaseUrlApi }/api/Messages`,
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }`,
                            'Content-Type': 'application/json'
                        },
                        data: JSON.stringify({
                            "userId": this.$store.state.Login.UserData.id,
                            "adminId": "",
                            "parentID": 0,
                            "title": document.querySelector("#title-chat").value,
                            "message": document.querySelector("#message-chat").value
                        })
                    }
                } else {
                    configSendChat = {
                        url: `${ this.$store.state.Headers.BaseUrlApi }/api/Messages`,
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }`,
                            'Content-Type': 'application/json'
                        },
                        data: JSON.stringify({
                            "userId": this.$store.state.Login.UserData.id,
                            "adminId": "",
                            "parentID": this.ReadyReplayData.mainChat.id,
                            "title": document.querySelector("#title-chat").value,
                            "message": document.querySelector("#message-chat").value
                        })
                    }
                }

                if ( titleChat.value === '' || messageChat.value === '' ) {
                    alert('ups, title atau text pesan tidak boleh kosong...')
                } else {
                    await Axios(configSendChat).then(response => {
                        if ( response ) {
                            titleChat.value = ''
                            messageChat.value = ''
                            this.removeReplayedData()
                            this.getChat()
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                }
                
            },

            async setRead() {
                let configNotification = {
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/Messages?readstatus=0&useronly=true`,
                    headers: { 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                }
                try {
                    let notification = await Axios(configNotification)
                    let filterNotification = notification.data.filter(x => x.user.id === this.$store.state.Login.UserData.id && x.adminId !== '')
                    console.log(filterNotification)
                    filterNotification.map(async x => {
                        let configRead = {
                            url: `${ this.$store.state.Headers.BaseUrlApi }/api/Messages/${ x.id }/setRead`,
                            headers: { 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                        }

                        await Axios(configRead)
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>

<style>

</style>
