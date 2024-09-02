<template>
    <div class="text-app-white-700 font-jost">
      <div class="h-[70px] w-full bg-theme-gray-500 flex justify-center items-center text-center">
        <h1 class="text-white text-xl">LOGO</h1>
      </div>
      <div>
        <!-- Iterate through menuItems -->
        <div v-for="(item, index) in menuItems" :key="index">
          <NuxtLink v-if="item.route" :to="item.route">
            <div
              class="flex items-center justify-between hover:text-theme-purple-950 transition-[0.5s] py-3 cursor-pointer select-none"
            >
              <div class="flex items-center gap-2">
                <i :class="item.icon"></i>
                <p class="text-sm font-medium">{{ item.name }}</p>
              </div>
            </div>
          </NuxtLink>
  
          <div v-else class="py-3" >
            <div
            class="flex items-center justify-between hover:text-theme-purple-950 transition-[0.5s] cursor-pointer select-none"
            @click="item.isOpen = !item.isOpen"
            >
            <div class="flex items-center gap-2">
              <i :class="item.icon"></i>
              <p class="text-sm font-medium">{{ item.name }}</p>
            </div>
            <div>
              <i
                class="fa-solid fa-caret-down transition-[0.5s] p-3"
                :class="item.isOpen ? 'rotate-180' : ''"
              ></i>
            </div>
          </div>

          <div v-if="item.isOpen" class="grid gap-4">
            <div v-for="(child, index) in item.items" :key="index">
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
 
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          {
            name: "Dashboard",
            icon: "fa-solid fa-cubes-stacked",
            route: "/",
          },
          {
            name: "Features",
            icon: "fa-solid fa-sliders",
            isOpen: false,
            items: [
              {
                name: "Feature 1",
                icon: "fa-solid fa-sliders",
              },
              {
                name: "Feature 2",
                icon: "fa-solid fa-sliders",
              },
              {
                name: "Feature 2",
                icon: "fa-solid fa-sliders",
              },
            ],
          },
          {
            name: "Dashboard",
            icon: "fa-solid fa-cubes-stacked",
            route: "/",
          },
        ],
      };
    },
  };
  </script>
  