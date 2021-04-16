<template>
  <div>
    <div class="bg-gradient-to-br from-green-400 to-cyan-500">
      <div
        class="pt-20 pl-10 text-3xl font-bold md:text-6xl text-left underline"
      >
        Portfolio
      </div>
      <div
        class="text-left pl-10 text-gray-500 md:text-right text-md md:text-2xl md:pr-10 pb-5"
      >
        Get in touch
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
            image: "src/assets/Portfolio/Project/CalendarMillJava/asset1.png",
            desc: "21All the customers in your Mill/Company",
          },
          {
            image: "src/assets/Portfolio/Project/CalendarMillJava/asset2.png",
            desc: "21All the 32423s in your Mill/Company",
          },
          {
            image: "src/assets/Portfolio/Project/CalendarMillJava/asset3.png",
            desc: "21All the custom436346our Mill/Company",
          },
          {
            image: "src/assets/Portfolio/Project/CalendarMillJava/asset4.png",
            desc: "21All t345345mers in your Mill/Company",
          },
          {
            image: "src/assets/Portfolio/Project/CalendarMillJava/asset5.png",
            desc: "21All the customers in45645ill/Company",
          },
          {
            image: "src/assets/Portfolio/Project/CalendarMillJava/asset6.png",
            desc: "21All th34534ers in your Mill/Company",
          },
          {
            image: "src/assets/Portfolio/Project/CalendarMillJava/asset7.png",
            desc: "21All the customers i456457Mill/Company",
          },
        ],
        contents:[]
      },
      {
        minTitle: "Built with Java2",
        title: "A program to manage your Mill",
        intro:
          "Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system",
        assets: [
          {
            image: "src/assets/Portfolio/Project/CalendarMillJava/proj1.png",
            desc: "331All the customers in your Mill/Company",
          },
          {
            image: "src/assets/Portfolio/Project/CalendarMillJava/proj1.png",
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