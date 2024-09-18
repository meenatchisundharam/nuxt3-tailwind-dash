<template>
    <div>
      <div class="text-2xl font-bold mb-5">Charts</div>
      <div>
        <TitleCard title="Chart Js">
          <template #body>
            <div class="flex flex-col">
              <canvas ref="myPieChart"></canvas>
            </div>
          </template>
        </TitleCard>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref, onUnmounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  const myPieChart = ref<HTMLCanvasElement | null>(null);
  const chartJs = ref<Chart | null>(null);
  
  const createPieChart = () => {
    if (!myPieChart.value) return;
  
    const ctx = myPieChart.value.getContext('2d');
  
    chartJs.value = new Chart(ctx!, {
      type: 'pie',
      data: {
        labels: ['Transactions', 'Income', 'Expenses'],
        datasets: [{
          label: 'Financial Overview',
          data: [300, 500, 200],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.raw}`
            }
          }
        }
      }
    });
  };
  
  onMounted(() => {
    createPieChart();
    window.addEventListener('resize', handleResize);
  });
  
  const handleResize = () => {
    if (chartJs.value) {
      chartJs.value.resize();
    }
  };
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
  </script>
  
  <style scoped>
  canvas {
    width: 100% !important;
    height: auto !important;
  }
  </style>
  