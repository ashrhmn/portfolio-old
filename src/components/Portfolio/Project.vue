<template>
  <div class="m-5 pt-10">
    <div class="text-left text-2xl">{{ pData.minTitle }}</div>
    <div class="text-left text-4xl">{{ pData.title }}</div>
    <div class="text-left text-lg">{{ pData.intro }}</div>

    <div class="mx-auto flex-container flex-col">
      <img
        class="pt-10 assetImage mx-auto"
        :src="pData.assets[selectedIndex].image"
      />
      <div class="text-lg">{{ pData.assets[selectedIndex].desc }}</div>
    </div>

    <div class="flex mx-auto" :style="{width:((pData.assets.length)*20)+'px'}">
      <div
        v-for="(asset, index) in pData.assets"
        :key="asset.desc"
        class="mx-auto"
      >
        <button
          @click="selectedIndex = index"
          :class="{ 'btn-flex-active': isActive(index) }"
          class="btn-flex custom-control"
        ></button>
      </div>
    </div>

    <div v-for="content in pData.contents" :key="content">
      <div class="text-left text-lg">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pData"],
  methods: {
    isActive(index) {
      return index == this.selectedIndex;
    },
    changeImage() {
      if (this.pData.assets.length - 1 == this.selectedIndex) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex++;
      }
    },
  },

  mounted: function () {
    this.changeImage();
    setInterval(this.changeImage, 7000);
  },
  data: () => {
    return {
      selectedIndex: 0,
    };
  },
};
</script>

<style>
.im {
  min-width: 20rem;
}

.btn-flex {
  width: 10px;
  height: 10px;
  background-color: hsl(240, 52%, 44%);
  border-radius: 1rem;
}

.btn-flex-active {
  width: 10px;
  height: 10px;
  background-color: hsl(28, 85%, 53%);
  border-radius: 1rem;
}
.custom-control:focus {
  outline: none !important;
}
.assetImage {
  max-height: 250px;
}
.assetImage-container {
  height: 17rem;
}
.flex-container {
  height: 300px;
}


@media screen and (min-width: 768px) {
  .im {
    min-width: 30rem;
  }

  .assetImage {
    max-height: 600px;
  }

  .assetImage-container {
    height: 50rem;
  }

  .flex-container {
    height: 700px;
  }
}
</style>