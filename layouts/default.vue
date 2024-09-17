<template>
    <div>
        <div class="h-screen w-full bg-theme-gray-950 flex text-app-white-700">
        <div id="navsidebar"class="h-full bg-theme-gray-700 overflow-auto" :class="isMinimized ?'w-[90px]' : 'w-[250px]'">
            <Sidebar :isMinimized="isMinimized"/>
        </div>
        <div id="rightside" class="h-full relative transition-[0.3s]" :class="isMinimized ?'w-[calc(100%-90px)]' : 'w-[calc(100%-250px)]'">
            <div id="navetop" class="h-[70px] w-full bg-theme-gray-700 absolute top-0 left-0 flex items-center justify-between px-4">
                <div
                 @click="isMinimized = !isMinimized"
                 class="cursor-pointer flex justify-center items-center text-app-white-700 rounded-full hover:bg-theme-gray-500">
                 <i v-if="isMinimized" class="fa-solid fa-xmark"></i>
                 <i v-else class="fa-solid fa-bars"></i>
                </div>
                <div class="flex items-center gap-5">
                   <div class="flex items-center gap-5" >
                    <div
                 class="cursor-pointer flex justify-center items-center hover:scale-125 transition-[0.3s] text-app-white-700 rounded-full">
                 <i class="fa-regular fa-envelope"></i>
                </div>

                <div
                 class="cursor-pointer flex justify-center items-center hover:scale-125 transition-[0.3s] text-app-white-700 rounded-full">
                 <i class="fa-solid fa-bell"></i>
                </div>

                <div
                 class="cursor-pointer flex justify-center items-center hover:scale-125 transition-[0.3s] text-app-white-700 rounded-full">
                 <i class="fa-solid fa-gear"></i>
                </div>

                   </div>
               <div class="relative group" >
                 <div class="flex items-center gap-2 cursor-pointer transition-[0.3s] " >
                    <div class="h-10 w-10 bg-theme-gray-500 rounded-full overflow-hidden">
                        <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <span class="text-app-white-700 font-medium" >User</span>
                </div>
                <div class="absolute pt-5 top-full right-0 group-hover:block hidden">
                    <div class="h-fit w-[300px] bg-theme-gray-700 shadow-[0-0-10px-2px-#00000060] p-5 rounded-2xl">
                        <div class="p-3 bg-theme-gray-500 rounded-xl     flex items-center gap-2 cursor-pointer transition-[0.3s] " >
                            <div class="w-10 h-10 bg-theme-gray-500 rounded-full overflow-hidden">
                                <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                            </div>
                            <div class="text-app-white-700" >
                                <h1 class="text-sm font-medium" >User</h1>
                                <p class="text-app-white-500 text-xs" >Designation</p>
                            </div>
                        </div>

                        <div class="grid gap-5 mt-5">
                            <div class="text-app-white-700 flex items-center gap-2 cursor-pointer transition-[0.3s] hover:pl-4">
                                <i class="fa-regular fa-user"></i>
                                <span class=""text-sm font-medium >Profile</span>
                            </div>

                            <div class="text-app-white-700 flex items-center gap-2 cursor-pointer transition-[0.3s] hover:pl-4">
                                <i class="fa-solid fa-users"></i>
                                <span class=""text-sm font-medium >Activity</span>
                            </div>

                            <div class="text-app-white-700 flex items-center gap-2 cursor-pointer transition-[0.3s] hover:pl-4">
                                <i class="fa-solid fa-headset"></i>
                                <span class=""text-sm font-medium >Help</span>
                            </div>

                            <div class="text-app-white-700 flex items-center gap-2 cursor-pointer transition-[0.3s] hover:pl-4">
                                <i class="fa-solid fa-gear"></i>
                                <span class=""text-sm font-medium >Settings</span>
                            </div>
                        </div>

                        <div class="h-14 w-full bg-theme-gray-500 mt-5 text-app-white-700 flex items-center justify-center text-center rounded-md shadow-lg cursor-pointer hover:font-bold transition-[0.3s]">Signout</div>

                    </div>
                </div>
               </div>

                </div>
            </div>
            <div class="h-[calc(100%-70px)] w-full  overflow-auto shadow-2xl mt-[70px] p-8">
                <slot />
            </div>
        </div>
       </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            isMinimized:false,
        };
    },
};
</script>