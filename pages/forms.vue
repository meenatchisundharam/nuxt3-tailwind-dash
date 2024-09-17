<template>
    <div>
      <div class="text-2xl font-bold mb-5">Forms</div>
     <div>
        <TitleCard title="Forms">
            <template #body>
                <!-- text
password
email
number
date
time
week
month
datetime-local
url
tel
search
color
range
file
checkbox
radio
hidden
submit
reset
button
image
datetime -->   <!-- text Input -->
            <div class="input-group">
              <p>Text Input</p>
              <input type="text"
              class="input"/>
             </div>

             <!-- Password Input -->
             <div class="input-group">
              <p>Password Input</p>
             <div class="relative">
              <input :type="passwordIsVisible ? 'text' : 'password'"
              class="input password"/>
              <div class=" absolute top-1/2 right-3 -translate-y-1/2 text-app-white-500">
                <i v-if="passwordIsVisible" @click="passwordIsVisible = false"class="fa-solid fa-eye-slash"></i>
                <i @click="passwordIsVisible = true"  v-else class="fa-regular fa-eye"></i>
              </div>
             </div>
             </div>
             <!-- Email Input -->
             <div class="input-group">
              <p>Email Input</p>
              <input email="email"
              class="input"/>
             </div>

<!-- Number Input -->
<div class="input-group">
  <p>Number Input</p>
  <input type="number" class="input" />
</div>

<!-- Time Input -->
<div class="input-group">
  <p>Time Input</p>
  <input type="time" class="input" />
</div>

<!-- Date Input -->
<div class="input-group">
  <p>Date Input</p>
  <input type="date" class="input" />
</div>

<!-- Month Input -->
<div class="input-group">
  <p>Month Input</p>
  <input type="month" class="input" />
</div>

<!-- Week Input -->
<div class="input-group">
  <p>Week Input</p>
  <input type="week" class="input" />
</div>

<!-- URL Input -->
<div class="input-group">
  <p>URL Input</p>
  <input type="url" class="input" />
</div>

<!-- Telephone Input -->
<div class="input-group">
  <p>Telephone Input</p>
  <input type="tel" class="input" />
</div>

<!-- Color Input -->
<div class="input-group">
  <p>Color Input</p>
  <input type="color" class="input" />
</div>

<!-- Search Input -->
<div class="input-group">
  <p>Search Input</p>
  <input type="search" class="input" />
</div>

<!-- File Input -->
<div class="input-group">
  <p>File Input</p>
  <input type="file" />
</div>

<!-- Range Input -->
<div class="input-group">
  <p>Range Input</p>
  <input type="range" class="input" />
</div>
<!-- Radio Input -->
<div class="input-group">
  <p>Radio Input</p>
  <input type="radio"name="radio" value="one"  />
  <input type="radio"name="radio" value="one"  />
  <input type="radio"name="radio" value="one"  />
</div>
<!-- check box -->
<div class="input-group">
  <p>checkbox Input</p>
  <input type="checkbox"name="checkbox" value="one"  />
  <input type="checkbox"name="checkbox" value="one"  />
  <input type="checkbox"name="checkbox" value="one"  />
  </div>

            </template>
        </TitleCard>
        
     </div>
    </div>
  </template>

<script>
export default{
  data(){
    return{
      passwordIsVisible:false,
    };
  },
}
</script>