<template>
    <div class="h-screen w-full fixed font-jost text-app-white-500 top-0 left-0 backdrop-blur-sm flex items-center justify-center">
        <div class="p-5 max-h-[90%] w-[90%] lg:w-[50%] bg-theme-gray-700 shadow-[0_0_15px_2px_#000000] rounded-2xl">
            <div class="h-16 w-full border-b border-theme-gray-500 flex justify-between items-center">
                <div class="text-xl font-medium text-app-white-700">
                    {{title}}
                </div>
                <div>
                    <div 
                    @click="$emit('close')"
                    class="h-10 w-10  rounded-full bg-theme-gray-500 flex items-center justify-center hover:bg-theme-purple-950 hover:text-white transition-[0.3s]">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
            <div class="h-[calc(100%-128px) w-full] py-5">
                <slot name="body" />
            </div>
            <div class="h-16 w-full border-t border-theme-gray-500 flex justify-between items-center gap-5">
               <slot name="footer" />
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props: {
        title: {
            type:String,
            default: "",
        },
    },
};
</script>