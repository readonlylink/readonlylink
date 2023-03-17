<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import AboutSlogan from './AboutSlogan.vue'

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">关于 | 只读</title>
      <title v-else>About | Readonly</title>
    </Head>

    <AboutSlogan />

    <div class="flex items-baseline space-x-4">
      <div class="font-logo text-2xl font-semibold text-stone-800">
        <Lang>
          <template #zh> 关于 </template>
          <template #en> About </template>
        </Lang>
      </div>
    </div>

    <main class="space-y-3 py-4">
      <Lang>
        <template #zh>
          <div class="inline-flex flex-wrap items-baseline text-stone-900">
            <div class="pr-1 font-logo font-semibold text-stone-900">
              只读链接
            </div>
            <div>是一个文档渲染工具，</div>
            <div>文字创作者的社区。</div>
          </div>
        </template>
        <template #en>
          <div class="inline-flex flex-wrap items-baseline text-stone-900">
            <div class="pr-1 font-logo font-semibold text-stone-900">
              Readonly.Link
            </div>
            <div class="pr-1">is a document rendering tool,</div>
            <div>and a community for authors.</div>
          </div>
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
            <ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500" />
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
            <ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500" />
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
        <template #zh> 另外，我还想天马行空地扩展 Markdown。 </template>
        <template #en>
          I also want to extend Markdown in interesting ways.
        </template>
      </Lang>

      <Lang>
        <template #zh>
          在设计一个解决方案为自己所用的同时，我也有能力把它作成一个网络服务，让大家都有机会用上。
        </template>
        <template #en>
          When designing a solution for myself, I can also build it as a web
          service to reuse with others.
        </template>
      </Lang>

      <Lang>
        <template #zh> 何乐而不为呢？ </template>
        <template #en> I am glad to just do that! </template>
      </Lang>

      <Lang>
        <template #zh>
          <h2 class="py-1 font-sans text-2xl font-bold">反馈</h2>
        </template>
        <template #en>
          <h2 class="py-1 font-sans text-2xl font-bold">Feedback</h2>
        </template>
      </Lang>

      <Lang>
        <template #zh>
          我们用 GitHub 的
          <a
            href="https://github.com/readonlylink/feedback/issues"
            class="inline-flex items-center underline"
            target="_blank"
          >
            Issues
            <ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500" />
          </a>
          来响应大家发现的问题，用
          <a
            href="https://github.com/readonlylink/feedback/discussions"
            class="inline-flex items-center underline"
            target="_blank"
          >
            讨论区
            <ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500" />
          </a>
          来倾听反馈。
        </template>
        <template #en>
          We use GitHub
          <a
            href="https://github.com/readonlylink/feedback/issues"
            class="inline-flex items-center underline"
            target="_blank"
          >
            Issues
            <ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500" />
          </a>
          to respond to bug reports, and
          <a
            href="https://github.com/readonlylink/feedback/discussions"
            class="inline-flex items-center underline"
            target="_blank"
          >
            Discussions
            <ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500" />
          </a>
          to listen to general feedback.
        </template>
      </Lang>

      <Lang>
        <template #zh>
          <h2 class="py-1 font-sans text-2xl font-bold">技术</h2>
        </template>
        <template #en>
          <h2 class="py-1 font-sans text-2xl font-bold">Powered by</h2>
        </template>
      </Lang>

      <Lang>
        <template #zh>
          只读链接使用
          <a
            href="https://github.com/xieyuheng/postmark"
            class="inline-flex items-center underline"
            target="_blank"
          >
            Postmark
            <ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500" />
          </a>
          来定制 Markdown 解析器。
        </template>
        <template #en>
          Readonly.Link uses
          <a
            href="https://github.com/xieyuheng/postmark"
            class="inline-flex items-center underline"
            target="_blank"
          >
            Postmark
            <ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500" />
          </a>
          to customize Markdown parser.
        </template>
      </Lang>
    </main>
  </PageLayout>
</template>
