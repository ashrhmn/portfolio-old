<template>
  <div class="mx-auto container-main">
    <div
      id="slide"
      @scroll="changeNavigator()"
      class="grid grid-flow-col overflow-x-scroll"
    >
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
            navigator: index != selectedIndex,
            navigatorActive: index == selectedIndex,
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
    changeNavigator() {
      this.selectedIndex = parseInt(
        document.getElementById("slide").scrollLeft / 430
      );
      //   console.log(parseInt(document.getElementById("slide").scrollLeft / 430));
    },
    scrollTo(index) {
    //   this.selectedIndex = index;
      var container = document.getElementById("slide");
      var maxScrollLeft = container.scrollWidth - container.clientWidth;
      var slide = setInterval(function () {
        // console.log("start");
        // console.log("In condition : ", 440 * index - container.scrollLeft);
        if (440 * index - container.scrollLeft > 5) {
          // go right
          //   console.log("rmax : ", maxScrollLeft);

          var go = container.scrollLeft;
          go += 5;
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
          go -= 5;
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
      }, 1);
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
  /* background: aquamarine; */
  padding: 10px;
  margin: 10px;
  border-radius: 10rem;
  /* border: 2px;
  border-color: red; */
  color: aliceblue;
  outline: none !important;
  @apply border-4 border-purple-400
}

.navigatorActive {
  /* width: 10px; */
  /* background: rgb(33, 69, 57); */
  padding: 10px;
  margin: 10px;
  border-radius: 10rem;
  color: aliceblue;
  outline: none !important;
  @apply border-4 border-purple-400 bg-purple-500
}

.mainItem {
  width: 400px;
  height: 200px;
  @apply m-4 p-4 shadow-lg bg-purple-100;
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