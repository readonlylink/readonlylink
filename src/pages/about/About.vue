<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">关于 | 只读</title>
      <title v-else>About | Readonly</title>
    </Head>

    <div class="flex items-baseline space-x-4">
      <div class="text-2xl font-bold">
        <Lang>
          <template #zh> 关于 </template>
          <template #en> About </template>
        </Lang>
      </div>
    </div>

    <main class="space-y-3 py-4">
      <Lang
        class="inline-flex flex-wrap items-baseline bg-white text-black dark:bg-black dark:text-white"
      >
        <template #zh>
          <div class="pr-1 font-bold">只读链接</div>
          <div>是一个文档渲染工具，</div>
          <div>文字创作者的社区。</div>
        </template>
        <template #en>
          <div class="pr-1 font-bold">Readonly.Link</div>
          <div class="pr-1">is a document rendering tool,</div>
          <div>and a community for authors.</div>
        </template>
      </Lang>

      <Lang>
        <template #zh>
          项目在 2021 年末由
          <a
            href="https://xieyuheng.com"
            class="inline-flex items-center underline"
            target="_blank"
          >
            谢宇恒
            <ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500 dark:text-stone-400"
            />
          </a>
          发起。
        </template>
        <template #en>
          The project was founded by
          <a
            href="https://xieyuheng.com"
            class="inline-flex items-center underline"
            target="_blank"
          >
            Xie Yuheng
            <ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500 dark:text-stone-400"
            />
          </a>
          at the end of 2021.
        </template>
      </Lang>

      <Lang>
        <template #zh>
          有时候，我只想把我写的文章分享给朋友，不想有任何纷扰。
        </template>
        <template #en>
          Sometimes, I just want to share my articles to my friends, without any
          distractions.
        </template>
      </Lang>

      <Lang>
        <template #zh>
          在设计自己用的解决方案时，也能作一个网络服务让大家都能用。
        </template>
        <template #en>
          When designing a solution for myself, I can also build it as a web
          service for others.
        </template>
      </Lang>

      <Lang>
        <template #zh> 何乐而不为呢？ </template>
        <template #en> I am glad to do so. </template>
      </Lang>

      <div class="flex items-baseline space-x-4">
        <div class="text-2xl font-bold">
          <Lang>
            <template #zh> 开源 </template>
            <template #en> Open source </template>
          </Lang>
        </div>
      </div>

      <Lang>
        <template #zh>
          <a
            href="https://github.com/readonlylink/readonlylink"
            class="inline-flex items-center underline"
            target="_blank"
            >源代码<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500 dark:text-stone-400" /></a
          >。
        </template>
        <template #en>
          <a
            href="https://github.com/readonlylink/readonlylink"
            class="inline-flex items-center underline"
            target="_blank"
          >
            Source code
            <ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500 dark:text-stone-400" /></a
          >.
        </template>
      </Lang>

      <div class="flex items-baseline space-x-4">
        <div class="text-2xl font-bold">
          <Lang>
            <template #zh> 口号 </template>
            <template #en> Slogan </template>
          </Lang>
        </div>
      </div>

      <Lang>
        <template #zh> 我们的口号是： </template>
        <template #en> Our slogan is: </template>
      </Lang>

      <Lang class="font-bold text-stone-500 dark:text-stone-400">
        <template #zh>
          <div>
            分享<span class="text-black dark:text-white">只读</span>链接，<br
              class="sm:hidden"
            /><span class="text-black dark:text-white">只</span>为享受阅<span
              class="text-black"
              >读</span
            >。
          </div>
        </template>
        <template #en>
          <div>
            <span class="text-black dark:text-white">Readonly</span> links,
            <br class="sm:hidden" />
            for your <span class="text-black dark:text-white">read only</span>.
          </div>
        </template>
      </Lang>

      <Lang>
        <template #zh> 耶！ </template>
        <template #en> Yeah! </template>
      </Lang>
    </main>
  </PageLayout>
</template>
