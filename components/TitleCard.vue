<template>
    <div class="w-full bg-theme-gray-700 rounded-xl font-jost">
       <div class="px-5 h-[60px] flex items-center border-b border-theme-gray-500">
           <h2 class="text-lg font-medium">{{ title }}</h2>
       </div>
       <div class="p-5">
           <div></div>
         <div class="w-full overflow-auto">
           <slot name="body"/>
         </div>
       </div>
    </div>
</template>
<script>
export default{
   props:{
       title:{
           type: String,
           default:"",
       },
   },
};
</script>