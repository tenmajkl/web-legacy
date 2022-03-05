<template>
   <div class="flex flex-col">
        <span>Projects</span>
        <span>========</span>
        <span>- Lemon - Dead simple php framework</span>
        <span>- Wal - Lisp inspired language for doing stuff</span>
        <span>- MineHub web - Web app for MineHub project</span>
        <span>- Quarks - Stack oriented esoteric language written in rust</span>
   </div>
</template>

<script>

export default {
    mounted() {
        setTimeout(() => 
            this.$parent.$parent.commands.push([
                " ",
                null,
                0
            ])
        , 500)
    }
}

</script>
