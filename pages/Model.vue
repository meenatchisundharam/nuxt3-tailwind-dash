<template>
    <div>
        <button @click="modelIsopen = true">Show Model</button>
        <Model v-if="modelIsopen" @close="modelIsopen = false" title="Test">
            <template #body>this is a model
            </template>
            <template #footer>
                    <button class="w-full red">Cancel</button>
                    <button class="w-full">Save</button>
                </template>
            </Model>
    </div>
</template>

<script>
export default{
    data(){
        return{
            modelIsopen:false,
        }
    }
}
</script>