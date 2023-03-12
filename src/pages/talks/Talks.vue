<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import Answer from './Answer.vue'
import Frame from './Frame.vue'
import Question from './Question.vue'
import Socrates from './Socrates.vue'
</script>

<template>
  <!-- prettier-ignore -->
  <PageLayout>
    <Lang>
      <template #zh>
        <Socrates>
          <Frame>
            <Question>
              你想，
              当初 Linus 设计 git 的构架的时候，
              他没有先考虑要选用哪个数据库，
              对不对？
              他就用文件系统作为数据库。
            </Question>

            <Answer>
              没错。
              但是复杂的项目还是需要真正的数据库的。
            </Answer>
          </Frame>

          <Frame>
            <Question>
              git 不算是复杂的项目吗？
              有没有一种可能，
              git 就是因为有了基于文件系统的良好构架，
              才让人感到如此清晰的？
            </Question>

            <Answer>
              确实。
              我刚才随便打开了一个 .git/ 文件夹看了看，
              配置文件，
              指针文件，
              对象文件，
              hook 文件，
              等等……
              都是用文件来实现的。
            </Answer>
          </Frame>

          <Frame>
            <Question>
              嘿嘿。
              我觉得 Linus 是对的，
              文件系统本身就超级好用的数据库！
            </Question>

            <Answer>
              你想怎么做？
            </Answer>
          </Frame>

          <Frame>
            <Question>
              我直接以文件夹为 table，
              文件夹里的文件为 row。
            </Question>

            <Answer>
              细说。
            </Answer>
          </Frame>

          <Frame>
            <Question>
              TODO
            </Question>

            <Answer>
              TODO
            </Answer>
          </Frame>
        </Socrates>
      </template>

      <template #en>
        <Socrates>
          <Frame>
            <Question>
              TODO
            </Question>

            <Answer>
              TODO
            </Answer>
          </Frame>
        </Socrates>
      </template>
    </Lang>
  </PageLayout>
</template>
