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
                        class="wb-replay"
                        v-for="(replay, j) in chat.parentChat"
                        :key="j"
                        :id="`replayedId-${ replay.id }`"
                        v-on:click="goToSelectionSection( replay.id )"
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
                </div>
            </div>
        </div>
        <div class="col-12 send-chat-box">
            <div class="wrapper-replay-chat">
                <span>Re From</span>
            </div>

            <div class="wrapper-scb">
                <textarea name="" id="" class="form-control" placeholder="Ketik untuk mengirim pesan..."></textarea>
                <i id="send-chat" class="fa-solid fa-paper-plane"></i>
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
            }
        },
        async mounted() {
            let configChat = {
                url: `https://dev-be.kompasdata.id/api/Users/${ this.$store.state.Login.UserData.id }/Messages`,
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
                
            }).catch(err => {
                console.log(err)
            })
        },
        methods: {
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
            
                elBox.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            },

            // sendChat
        }
    }
</script>

<style>

</style>
