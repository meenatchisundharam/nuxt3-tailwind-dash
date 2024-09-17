<script setup lang="ts">

</script>

<template>
    <div>
      <div class="text-2xl font-bold mb-5">Button</div>
     <div>
        <TitleCard title="basics">
            <template #body>
                <div class="flex flex-wrap gap-3">
                <button>Default</button>
                <button class="green">Green</button>
                <button class="blue">Blue</button>
                <button class="orange">Orange</button>
                <button class="red">Red</button>
                <button class="black">Black</button>
                <button class="gray">Gray</button>
                </div>
            </template>
        </TitleCard>

        <TitleCard title="Outline" class="mt-5">
  <template #body>
    <div class="flex flex-wrap gap-3">
      <button class="outlined">Default</button> 
      <button class="outlined green">Green</button>
      <button class="outlined blue">Blue</button>
      <button class="outlined orange">Orange</button>
      <button class="outlined red">Red</button>
      <button class="outlined black">Black</button>
      <button class="outlined gray">Gray</button>
    </div>
  </template>
</TitleCard>

<TitleCard title="Icon" class="mt-5">
  <template #body>
    <div class="flex flex-wrap gap-3">
      <button class="outlined"><i class="fa-solid fa-house"></i> Default</button>
      <button class="outlined green"><i class="fa-solid fa-house"></i> Green</button>
      <button class="outlined blue"><i class="fa-solid fa-house"></i> Blue</button>
      <button class="outlined orange"><i class="fa-solid fa-house"></i> Orange</button>
      <button class="outlined red"><i class="fa-solid fa-house"></i> Red</button>
      <button class="outlined black"><i class="fa-solid fa-house"></i> Black</button>
      <button class="outlined gray"><i class="fa-solid fa-house"></i> Gray</button>
    </div>
  </template>
</TitleCard>

<TitleCard title="Size" class="mt-5">
  <template #body>
    <div class="flex flex-wrap gap-3">
      <button class="small">Small</button>
      <button class="">Small</button>
      <button class="large">Large</button>
    </div>
  </template>
</TitleCard>
        
     </div>
    </div>
  </template>