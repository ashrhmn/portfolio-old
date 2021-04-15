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
        <instant-message/>
      </div>
    </div>
  </div>
</template>

<script>
import ContactItem from "../components/Contact/ContactItem.vue";
import InstantMessage from "../components/Contact/InstantMessage.vue";
import locationMarker from "../assets/svg/contact/locationMarker.vue";
import mail from "../assets/svg/contact/mail.vue";
import phone from "../assets/svg/contact/phone.vue";
import { markRaw } from "@vue/reactivity";

export default {
  components: {
    ContactItem,
    InstantMessage,
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

};
</script>