<template>
    <div>
        <TextForm @updateTexts="updateTexts"/>
        <Texts ref="loadedTexts"/>
    </div>
</template>

<script>
import Texts from './Texts'
import TextForm from './TextForm'

export default {
    components: { Texts, TextForm },
    methods:{
        updateTexts(){
            this.$refs.loadedTexts.updateTexts();
        }
    }
}
</script>
