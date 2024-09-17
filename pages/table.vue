<script setup lang="ts">

</script>

<template>
    <div>
      <div class="text-2xl font-bold mb-5">Tables</div>
     <div>
        <TitleCard title="basic tables">
            <template #body>
                <div class="">
                  <table >
          <thead >
            <tr>
              <th >S.no</th>
              <th >Name</th>
              <th >P.no</th>
              <th >Status</th>
              <th >Email</th>
              <th >Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 5" :key="n">
              <td>1</td>
              <td>John Doe</td>
              <td>1234567890</td>
              <td>Active</td>
              <td>johndoe@example.com</td>
              <td>2024-09-15</td>
            </tr>
          </tbody>
        </table>
                </div>
            </template>
        </TitleCard>
        
     </div>
    </div>
  </template>