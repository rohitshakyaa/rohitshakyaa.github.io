<template>
  <header class="flex justify-between items-center px-10 py-8">
    <div class="flex space-x-2 items-center">
      <div
        class="bg-custom-orange rounded-full min-h-[24px] min-w-[24px]"
      ></div>
      <router-link to="/">
        <span class="font-semibold text-xl">Rohit Shakya</span>
        <span class="ml-3 xs:ml-0 font-light xs:block">Web Developer</span>
      </router-link>
    </div>
    <nav>
      <ul class="flex space-x-4 font-lato items-center">
        <!-- <li class="px-4 border-r">
          <router-link to="/resume">Resume</router-link>
        </li> -->
        <li><router-link to="/projects">Projects</router-link></li>
      </ul>
    </nav>
  </header>
  <router-view />

  <footer
    class="mx-10 border-t border-[#c7c7c7] pt-10 sm:pt-14 pb-10 sm:pb-16 flex justify-between items-center flex-col sm:flex-row space-y-4 sm:space-y-0"
  >
    <div class="text-center sm:text-left">
      <p class="font-bold">Phone</p>
      <p>+977 9808862305</p>
    </div>
    <div class="text-center sm:text-left">
      <p class="font-bold">Email</p>
      <p>shakyarohit2022@gmail.com</p>
    </div>
    <div class="text-center sm:text-left pt-10 sm:pt-0">
      <p class="text-sm">&#169; 2022 By Rohit Shakya</p>
    </div>
  </footer>
</template>

<style></style>
