<template>
  <section
    class="max-w-5xl mx-auto vw-height flex justify-center items-center custom-md:mx-10"
  >
    <div class="grid items-center md:grid-cols-2 gap-7">
      <div
        class="rounded-full max-w-[450px] max-h-[450px] overflow-hidden hidden md:block"
      >
        <img
          src="@/assets/profile.jpg"
          alt="profile picture"
          class="w-full h-full hover:scale-105 transition-all"
        />
      </div>

      <div>
        <h1 class="font-work-sans font-bold text-8xl">Hello</h1>
        <div class="mt-5">
          <h4 class="text-xl font-semibold tracking-wide">A Bit About Me</h4>
          <p class="text-sm mt-3">
            I am seeking opportunities to join a company that can help me in
            enhancing my skills, strengthening my knowledge, and realizing my
            potential. I am willing to explore a wide variety of opportunities
            that can help me gain perspective.
          </p>
        </div>
        <div class="flex space-x-4 mt-8">
          <!-- <router-link
            to="/resume"
            class="w-32 h-32 rounded-full flex items-center justify-center bg-custom-orange border hover:opacity-80 font-semibold"
          >
            Resume
          </router-link> -->
          <!-- <router-link
            to="/projects"
            class="w-32 h-32 rounded-full flex items-center justify-center bg-custom-red border hover:opacity-80 font-semibold"
          >
            Projects
          </router-link> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.vw-height {
  height: calc(100vh - 92px);
}
</style>
