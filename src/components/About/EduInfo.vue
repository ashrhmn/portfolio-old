<template>
  <div class="mx-auto container-main">
    <div id="slide" class="grid grid-flow-col overflow-x-scroll">
      <div v-for="data in infoData" :key="data.Institute">
        <div class="mainItem">
          <div class="text-left">{{ data.icon }}</div>
          <div class="text-left text-2xl">
            {{ data.Institute }}
          </div>
          <div class="text-left text-xl">
            {{ data.subject }}
          </div>
          <div class="text-left">{{ data.timePeriod }}</div>
        </div>
      </div>
    </div>
    <!-- navigator -->

    <div class="flex justify-center">
      <div v-for="(data, index) in infoData" :key="data.Institute">
        <button
          :class="{
            'navigator': index != selectedIndex,
            'navigatorActive': index == selectedIndex,
            'md:hidden': index == 3,
          }"
          @click="scrollTo(index)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["infoData"],
  data: function () {
    return {
      selectedIndex: 0,
    };
  },
  methods: {
    scrollTo(index) {
      this.selectedIndex = index;
      var container = document.getElementById("slide");
      var maxScrollLeft = container.scrollWidth - container.clientWidth;
      var slide = setInterval(function () {
        // console.log("start");
        // console.log("In condition : ", 440 * index - container.scrollLeft);
        if (440 * index - container.scrollLeft > 10) {
          // go right
        //   console.log("rmax : ", maxScrollLeft);

          var go = container.scrollLeft;
          go += 10;
        //   console.log("Going to", go);
        //   console.log("Current : ", container.scrollLeft);
          container.scrollLeft = go;
          if (go >= maxScrollLeft) {
            // console.log("clear1");
            window.clearInterval(slide);
          }
        } else if (440 * index - container.scrollLeft < 0) {
          // go left
        //   console.log("lmax : ", maxScrollLeft);

          var go = container.scrollLeft;
          go -= 10;
        //   console.log("Going to", go);
        //   console.log("Current : ", container.scrollLeft);
          container.scrollLeft = go;
          if (go <= 0) {
            // console.log("clear2");
            window.clearInterval(slide);
          }
        } else {
        //   console.log("clear3");
          window.clearInterval(slide);
        }
        // console.log("end");
      }, 5);
    },
    // position() {
    //   this.positionS = document.getElementById("slide").scrollLeft;
    // },
  },
};
</script>


<style lang="postcss" scoped>

.navigator {
  /* width: 10px; */
  background: aquamarine;
  padding: 10px;
  margin: 10px;
  border-radius: 10rem;
  border: 2px;
  border-color: red;
  color: aliceblue;
  outline: none !important;

}

.navigatorActive {
  /* width: 10px; */
  background: rgb(33, 69, 57);
  padding: 10px;
  margin: 10px;
  border-radius: 10rem;
  color: aliceblue;
  outline: none !important;

}

.mainItem {
  width: 400px;
  height: 200px;
  @apply bg-green-400 m-4 p-4;
}
.container-main {
  width: 860px;
}

/* webview */
@media (max-width: 768px) {
  .container-main {
    width: 420px;
  }
}
</style>