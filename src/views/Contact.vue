<template>
  <div>
    <div class="bg-gradient-to-br from-green-400 to-cyan-500">
      <div
        class="pt-20 pl-10 text-3xl font-bold md:text-6xl text-left underline"
      >
        Contact
      </div>
      <div
        class="text-left pl-10 text-gray-500 md:text-right text-md md:text-2xl md:pr-10 pb-5"
      >
        Get in touch
      </div>

      <div class="md:flex justify-evenly">
        <div>
          <div v-for="item in contactData" :key="item.title">
            <contact-item :item="item" />
          </div>
        </div>
        <div class="p-4 flex-grow">
          <h1 class="p-2 text-2xl md:text-3xl">How can I help you?</h1>
          <div>
            <form>
              <div class="flex justify-evenly md:space-x-4">
                <div class="">
                  <div class="flex-col space-y-3">
                    <div>
                      <input
                        class="md:px-8 lg:px-20 py-2 md:py-3 rounded-lg text-lg"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <input
                        class="md:px-8 lg:px-20 py-2 md:py-3 rounded-lg text-lg"
                        type="text"
                        placeholder="Email Address"
                      />
                    </div>
                    <div>
                      <input
                        class="md:px-8 lg:px-20 py-2 md:py-3 rounded-lg text-lg"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                </div>
                <div class="">
                  <input
                    class="py-14 md:py-20 lg:px-20 md:px-8 align-text-top rounded-lg"
                    type="text"
                    placeholder="Message"
                  />
                </div>
              </div>
              <div class="p-2">
                <button
                  class="border-2 border-indigo-800 bg-blue-600 text-white hover:bg-blue-800 text-2xl rounded-lg p-2"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactItem from "../components/ContactItem.vue";
import locationMarker from "../assets/svg/contact/locationMarker.vue";
import mail from "../assets/svg/contact/mail.vue";
import phone from "../assets/svg/contact/phone.vue";
import { markRaw } from "@vue/reactivity";

const words = [
  "Web Developer",
  "Web Designer",
  "Java App Developer",
  "UI/UX Designer",
];

// const ic = markRaw(locationMarker)

export default {
  components: {
    ContactItem,
    locationMarker,
    mail,
    phone,
  },
  data: function () {
    return {
      contactData: [
        {
          icon: markRaw(phone),
          title: "Phone",
          data: "415-832-2000",
          subData:
            "Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.",
        },
        {
          icon: markRaw(locationMarker),
          title: "Location",
          data: "San Francisco",
          subData:
            "Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.",
        },
        {
          icon: markRaw(mail),
          title: "Email",
          data: "hello@example.com",
          subData:
            "Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.",
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
    setInterval(this.updateWord, 4000);
  },
};
</script>