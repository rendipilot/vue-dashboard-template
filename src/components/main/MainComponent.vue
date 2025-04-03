  <template>
      <div class="main-content flex w-9/10 h-full">
        <p>{{ selectedTable ? `Table ${selectedTable.charAt(0).toUpperCase() + selectedTable.slice(1)}` : 'Main Component' }}</p>
      </div>
  </template>

<script setup>
defineProps({
  selectedTable: String
})
</script>