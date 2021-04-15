<template>
  <div>
    <div class="bg-gradient-to-br from-green-400 to-cyan-500">
      <div class="pt-40 max-w-5xl mx-auto">
        <div class="mx-auto md:flex flex-col md:flex-row">
          <div class="p-2 flex-none mx-auto h-80 w-80">
            <img class="rounded-full" src="../assets/usr.jpg" />
          </div>
          <div>
            <div class="flex-grow pl-10 pr-10">
              <p class="md:text-left text-2xl md:text-4xl font-semibold animate-pulse">
                {{ word }}
              </p>
              <br />
              <h1 class="text-4xl md:text-6xl md:text-left font-bold">
                <span class="text-green-900">Ashik</span>
                Rahman
              </h1>
              <br />
              <p class="md:text-left text-md md:text-xl">
                Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
                convallis, risus non condimentum gravida, odio mauris
                ullamcorper felis, ut venenatis purus ex eu mi. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu.
              </p>
              <br />
              <div
                class="p-5 md:flex md:flex-row w-full space-y-2 md:space-y-0"
              >
                <button
                  class="p-2 border-blue-600 border-2 md:text-2xl md:flex-grow text-white bg-purple-500 py-2 rounded-full hover:bg-purple-700"
                >
                  Download CV</button
                >&nbsp;&nbsp;&nbsp;
                <button
                  class="p-2 border-blue-600 border-2 md:text-2xl md:flex-grow text-white bg-purple-500 py-2 rounded-full hover:bg-purple-700"
                  @click="$router.push('Contact')"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 2xl:w-8/12 mx-auto">
        <div
          class="underline font-bold text-2xl text-center md:text-4xl md:text-left"
        >
          What I do
        </div>
        <div class="p-4 grid grid-flow-row md:grid-cols-2">
          <div v-for="data in whatIdoData" :key="data.title">
            <what-idos class="mx-auto md:w-11/12" :whatIdos="data"></what-idos>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import whatIdos from "../components/About/WhatIdos.vue";
const words = [
  "Web Developer",
  "Web Designer",
  "Java App Developer",
  "UI/UX Designer",
];

export default {
  components: {
    whatIdos,
  },
  data: function () {
    return {
      word: "",
      whatIdoData: [
        {
          icon: "/svg/whatIdo/copywrite.svg",
          title: "Copywrite",
          description:
            "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
        },
        {
          icon: "/svg/whatIdo/ecommerce.svg",
          title: "Ecommerce",
          description:
            "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
        },
        {
          icon: "/svg/whatIdo/webdesign.svg",
          title: "Web Design",
          description:
            "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
        },
        {
          icon: "/svg/whatIdo/marketing.svg",
          title: "Marketing",
          description:
            "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
        },
      ],
    };
  },

  methods: {
    updateWord: function () {
      this.word = words[Math.floor(Math.random() * words.length)];
    },
  },

  mounted: function () {
    this.updateWord();
    setInterval(this.updateWord, 1500);
  },
};
</script>