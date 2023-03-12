<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
</script>

<template>
    <div class="flex h-full flex-col items-center justify-center">
      <div class="flex flex-col space-y-2 px-3">
        <div class="text-6xl font-bold">FiDB</div>
        <Lang>
          <template #zh> 如果用文件系统当数据库会怎样？ </template>
          <template #en> What if we use file system as database? </template>
        </Lang>

        <div>
          <Hyperlink class="underline decoration-2" href="/talks">
            <Lang>
              <template #zh> 我不知道。来试试看！ </template>
              <template #en> I don't know. Let's find out! </template>
            </Lang>
          </Hyperlink>
        </div>

        <div class="py-16"></div>
      </div>
    </div>
</template>
