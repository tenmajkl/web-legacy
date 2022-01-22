<template>
    <div class="flex items-center">
        <pre>
        __________
        \        /
         \      /
          \    /
           \/\/
           /\/\
          /    \
         /      \
        /        \
        </pre>
        <div class="flex flex-col m-3">
            <span>Majkel</span>
                  ------
            <span>Regex, TUI, neovim, *nix, php, low level, recursion enjoyer</span>
        </div>
    </div>
</template>

<script>

import Projects from "./Projects.vue"

export default {
    mounted() {
        setTimeout(() => {
            this.$parent.$parent.commands.push([
                "projects Majkel",
                Projects,
                2500
            ])
        }, 1000)
    }
}

</script>
