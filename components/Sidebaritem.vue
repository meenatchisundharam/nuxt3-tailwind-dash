<template>
    <div>
        <div class="grid gap-4">
            <div v-for="(child, index) in items" :key="index">
            <div
            class="flex items-center justify-between hover:text-theme-purple-950 transition-[0.5s] pl-5 cursor-pointer select-none"
            >
            <div class="flex items-center gap-2">
              <i :class="child.icon"></i>
              <p class="text-sm font-medium">{{ child.name }}</p>
            </div>
            <div></div>
          </div>
          </div>
          </div>
    </div>
</template>
<script>
export default{
    props:{
        items:{
            type: Array,
            Required:true,
        },
    },
};
</script>