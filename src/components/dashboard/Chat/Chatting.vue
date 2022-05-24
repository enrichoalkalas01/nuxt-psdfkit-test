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
                        chat.adminId !== '' ? 'col-12 user-chat left-user' :
                        'col-12 user-chat right-user'
                    "
                >
                    <div class="wb-image" v-if="chat.adminId !== ''">
                        <div class="image" style="background-image: url('https://www.kompasdata.id/Content/img/icons/cs.jpg')"></div>
                    </div>
                    <div class="wb-text">
                        <div class="wp-wb-text">
                            <!-- <div
                                v-for="(replay, j) in ChatData" :key="j"
                                class="replayed-message"
                            >
                                <span v-if="chat.parentId !== chat.id && j === ">
                                    Replay From: {{ replay.id === chat.parentId ? replay : '' }} 
                                </span>
                            </div> -->
                            <div class="title">
                                <h5>{{ chat.title }}</h5>
                            </div>
                            <div class="message">
                                <span>{{ chat.text }}</span>
                            </div>
                            <div class="date">
                                <span>{{ chat.insertDate.substring(0, 10) }}</span>
                            </div>
                            <!-- <div class="btn-action">
                                {{ chat }}
                            </div> -->
                        </div>
                    </div>
                    <div class="wb-image" v-if="chat.adminId === ''">
                        <div class="image" style="background-image: url('https://www.kompasdata.id/Content/img/icons/man.png')"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 send-chat-box">
            <div class="wrapper-scb">
                <textarea name="" id="" class="form-control" placeholder="Ketik untuk mengirim pesan..."></textarea>
                <i class="fa-solid fa-paper-plane"></i>
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
                this.ChatData = response.data
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style>

</style>