<template>
    <div>
        <span class="text-green">
            ~
        </span>
        <span class="text-yellow">
            (master)
        </span>
        $

        {{ command }}

        <slot v-if="loaded"></slot>
    </div>
</template>

<script>
export default {
    props: {
        command_text: String,
        start: Number
    },
    data() {
        return {
            command: "",
            loaded: false 
        }
    },
    mounted() {
        setTimeout(() => {
            var pos = 0
            var interval = setInterval(() => {
                this.command += this.command_text[pos]
                pos++
                if (pos != this.command_text.length)
                    return
                setTimeout(() => this.loaded = true, 500)
                clearInterval(interval)
            }, 100)
            var el = this.$parent.$el
            el.scrollTop = el.scrollHeight
        }, this.start)
    }
}
</script>
