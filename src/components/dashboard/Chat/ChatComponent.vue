<template>
    <div>  
        <div class="wb-replay">
            test
        </div>
        <div class="wb-chat-box">
            <div class="wb-image" v-if="ChatData ? ChatData.adminId !== '' : ''">
                <div class="image" style="background-image: url('https://www.kompasdata.id/Content/img/icons/cs.jpg')"></div>
            </div>
            <!-- <div class="wb-text">
                <div class="wp-wb-text">
                    <div class="title">
                        <h5>{{ ChatData.title }}</h5>
                    </div>
                    <div class="message">
                        <span>{{ ChatData.text }}</span>
                    </div>
                    <div class="date">
                        <span>{{ ChatData.insertDate.substring(0, 10) }}</span>
                    </div>
                    <div class="btn-action">
                        {{ ChatData }}
                    </div>
                </div>
            </div> -->
            <div class="wb-image" v-if="ChatData ? ChatData.adminId === '' : ''">
                <div class="image" style="background-image: url('https://www.kompasdata.id/Content/img/icons/man.png')"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Chatting',
        props: ['dataChat'],
        data() {
            return {
                ChatData: null,
            }
        },
        mounted() {
            this.ChatData = this.dataChat
            console.log(this.ChatData)
        },
        method: {
            getReplayChat(paramChats) {
                console.log(paramChats)
            }
        }
    }
</script>

<style>

</style>