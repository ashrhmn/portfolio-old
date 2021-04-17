<template>
  <div>
    <div class="">
      <div
        class="pt-20 pl-10 text-3xl font-bold md:text-6xl text-left underline"
      >
        Portfolio
      </div>
      <div
        class="text-left pl-10 text-gray-500 md:text-right text-md md:text-2xl md:pr-10 pb-5"
      >
        My Projects
      </div>

      <div v-for="data in projectData" :key="data.title" class="project">
        <project :pData="data"/>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "../components/Portfolio/Project.vue";

export default {
  components: {
    Project,
  },
  data: function () {
    return {
      projectData: [{
        minTitle: "Built with Java",
        title: "A program to manage your Mill2",
        intro:
          "2Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system",
        assets: [
          {
            image: "https://i.imgur.com/p1TbIlb.png",
            desc: "21All the customers in your Mill/Company",
          },
          {
            image: "https://i.imgur.com/d0A98Qn.png",
            desc: "21All the 32423s in your Mill/Company",
          },
          {
            image: "https://i.imgur.com/KB4G47D.png",
            desc: "21All the custom436346our Mill/Company",
          },
          {
            image: "https://i.imgur.com/nOKBDWT.png",
            desc: "21All t345345mers in your Mill/Company",
          },
          {
            image: "https://i.imgur.com/qcMdZho.png",
            desc: "21All the customers in45645ill/Company",
          },
          {
            image: "https://i.imgur.com/nGnRbst.png",
            desc: "21All th34534ers in your Mill/Company",
          },
          {
            image: "https://i.imgur.com/xm1rqXL.png",
            desc: "21All the customers i456457Mill/Company",
          },
        ],
        contents:[]
      },{
        minTitle: "Built with Vue",
        title: "A web app to manage your Mill",
        intro:
          "2Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system",
        assets: [
          {
            image: "https://i.imgur.com/fHwSJm4.png",
            desc: "21All the customers in your Mill/Company",
          },
          {
            image: "https://i.imgur.com/ze1KzFy.png",
            desc: "21All the 32423s in your Mill/Company",
          },
          {
            image: "https://i.imgur.com/mP3rQ6J.png",
            desc: "21All the custom436346our Mill/Company",
          },
          {
            image: "https://i.imgur.com/rdLAnWd.png",
            desc: "21All t345345mers in your Mill/Company",
          },
          {
            image: "https://i.imgur.com/4jzL4RS.png",
            desc: "21All the customers in45645ill/Company",
          },
        ],
        contents:[
          "Some additional Informantion",
          "Some additional Informantion2",
        ]
      },
      {
        minTitle: "Built with Java2",
        title: "A program to manage your Company",
        intro:
          "Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system",
        assets: [
          {
            image: "https://i.imgur.com/xm1rqXL.png",
            desc: "331All the customers in your Mill/Company",
          },
          {
            image: "https://i.imgur.com/nGnRbst.png",
            desc: "332All the customers in your Mill/Company",
          },
        ],
        contents:[]
      }
      ]
    };
  },
};
</script>