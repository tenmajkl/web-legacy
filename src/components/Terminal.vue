<template>
    <div class="h-screen p-2 overflow-auto text-xl w-half bg-primary text-secondary font-source-code-pro">
        <div v-for="(command, index) in commands" v-bind:key="index">
            <promt v-bind:command_text="command[0]" v-bind:start=command[2]>
                <component v-bind:is="command[1]"></component>
            </promt>
        </div>   
    </div>
</template>

<script>

import Promt from "./Promt.vue"
import Fetch from "./Commands/Fetch.vue"
import Projects from './Commands/Projects.vue'

export default {
    components: {
        Promt,
        Fetch,
        Projects
    },
    data() {
        return {
            commands: [
                [
                    "fetch Majkel",
                    Fetch,
                    1000
                ]
            ]
        }
    }
}
</script>

