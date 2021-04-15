<template>
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
</template>