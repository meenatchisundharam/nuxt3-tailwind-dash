<template>
    <div>
        <div class="h-screen w-full bg-theme-gray-950 flex">
        <div id="navsidebar"class="h-full w-[250px] bg-theme-gray-700">
            <Sidebar />
        </div>
        <div id="rightside" class="h-full w-[calc(100%-250px)] bg-red-500 relative">
            <div id="navetop" class="h-[70px] w-full bg-blue-500 absolute top-0 left-0"></div>
            <div class="h-[calc(100%-70px)] w-full bg-green-500 overflow-auto mt-[70px] p-8">
                <slot />
            </div>
        </div>
       </div>
    </div>
</template>