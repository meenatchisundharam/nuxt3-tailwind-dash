<template>
  <div class="text-app-white-700 font-jost">
    <div class="h-[60px] w-full bg-theme-gray-500 flex justify-center items-center text-center flex-shrink-0">
      <h1 class="text-white text-xl">LOGO</h1>
    </div>
    <div class="overflow-y-auto flex-grow ">
      <!-- Iterate through menuItems -->
      <div v-for="(item, index) in menuItems" :key="index">
        <NuxtLink v-if="item.route" :to="item.route">
          <div
            class="flex items-center justify-between hover:text-theme-purple-950 transition-[0.5s] py-3 cursor-pointer select-none"
          >
            <div class="flex items-center w-full gap-2"
            :class="{
              'justify-center':isMinimized,
            }"
            >
              <i :class="item.icon"></i>
              <p v-if="!isMinimized" class="text-sm font-medium">{{ item.name }}</p>
            </div>
          </div>
        </NuxtLink>

        <div v-else class="py-3">
          <div
            class="flex items-center justify-between hover:text-theme-purple-950 transition-[0.5s] cursor-pointer select-none"
            @click="item.isOpen = !item.isOpen"
          >
            <div class="flex items-center gap-2 w-full"
            :class="{
              'justify-center':isMinimized,
            }"
            >
              <i :class="item.icon"></i>
              <p v-if="!isMinimized"  class="text-sm font-medium">{{ item.name }}</p>
            </div>
            <div v-if="item.items && item.items.length">
              <i v-if="!isMinimized" 
                class="fa-solid fa-caret-down transition-[0.5s] p-3"
                :class="item.isOpen ? 'rotate-180' : ''"
              ></i>
            </div>
          </div>

          <!-- Render subcategories if item.isOpen -->
          <div v-if="item.isOpen">
            <div
              v-for="(subItem, subIndex) in item.items"
              :key="subIndex"
              class=""
            >
              <div
                class="flex items-center justify-between hover:text-theme-purple-950 transition-[0.5s] py-3 cursor-pointer select-none"
                @click="subItem.isOpen = !subItem.isOpen"
              >
                <div class="flex items-center gap-2 w-full"
                :class="{
              'justify-center':isMinimized,
            }"
                >
                  <i :class="subItem.icon"></i>
                  <p v-if="!isMinimized"  class="text-sm font-medium">{{ subItem.name }}</p>
                </div>
                <div v-if="subItem.items && subItem.items.length">
                  <i v-if="!isMinimized" 
                    class="fa-solid fa-caret-down transition-[0.5s] p-3"
                    :class="subItem.isOpen ? 'rotate-180' : ''"
                  ></i>
                </div>
              </div>

              <!-- Render sub-subcategories if subItem.isOpen -->
              <div v-if="subItem.isOpen" class="">
                <div
                  v-for="(subSubItem, subSubIndex) in subItem.items"
                  :key="subSubIndex"
                  class="py-3"
                >
                  <div class="flex items-center gap-2 w-full"
                  :class="{
              'justify-center':isMinimized,
            }"
                  >
                    <i :class="subSubItem.icon"></i>
                    <p v-if="!isMinimized"  class="text-sm font-medium">{{ subSubItem.name }}</p>
                  </div>
                </div>
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
    props:{
      isMinimized:{
        type:Boolean,
        default:false
      },
    },
    data() {
  return {
    menuItems: [
      {
        name: "Dashboard",
        icon: "fa-solid fa-cubes-stacked",
        route: "/",
      },
      /*{
        name: "Features",
        icon: "fa-solid fa-sliders",
        isOpen: false,
        items: [
          {
            name: "Feature 1",
            icon: "fa-solid fa-sliders",
            isOpen: false, // Add isOpen for toggling subcategories
            items: [
              {
                name: "Sub Feature 1",
                icon: "fa-solid fa-sliders",
              },
              {
                name: "Sub Feature 2",
                icon: "fa-solid fa-sliders",
              },
            ],
          },
          {
            name: "Feature 2",
            icon: "fa-solid fa-sliders",
            isOpen: false, // Add isOpen for toggling subcategories
          },
        ],
      },*/
      {
        name: "Table",
        icon: "fa-solid fa-table-cells-large",
        route: "/table",
      },
      {
        name: "Forms",
        icon: "fa-solid fa-table-cells-large",
        route: "/forms",
      },
      {
        name: "Button",
        icon: "fa-solid fa-table-cells-large",
        route: "/Button",
      },
      {
        name: "model",
        icon: "fa-solid fa-table-cells-large",
        route: "/Model",
      },
    ],
  };
}
  };
  </script>
  