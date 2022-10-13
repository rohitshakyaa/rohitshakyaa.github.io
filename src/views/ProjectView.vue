<template>
  <section class="max-w-5xl mx-auto mt-14 mb-16 custom-md:mx-10">
    <h1 class="text-4xl font-bold">Projects</h1>
    <div class="space-y-24 mt-20">
      <article
        class="flex flex-col-reverse md:flex-row"
        v-for="project in projects"
        :key="project.title"
      >
        <div class="w-full md:w-1/2 pr-8">
          <h1 class="hidden md:block text-2xl font-semibold">
            {{ project.title }}
          </h1>
          <p class="font-light mt-6">
            {{ project.description }}
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <h1 class="text-2xl font-semibold md:hidden mb-2">
            {{ project.title }}
          </h1>
          <div
            class="relative rounded-xl border border-gray-300 overflow-hidden picture"
          >
            <a
              :href="project.link"
              target="_blank"
              class="overlay bg-opacity-50 bg-black opacity-0 z-10 w-full h-full absolute top-0 left-0 cursor-pointer flex items-center justify-center text-white font-bold text-lg"
            >
              Click to open this site
            </a>
            <img :src="project.img_src" alt="" class="w-full" />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Blog",
          description: `This is the blog site which is built using laravel. In this blog
            site, user has the ability to create, delete, edit, like and comment
            posts. This site also has the authentication feature. Users can
            follow each others. You can check more by visiting the site clicking
            the picture.`,
          img_src: require("@/assets/laravel-blog.png"),
          link: "http://laravel-blog-complete.herokuapp.com",
        },
        {
          title: "Ecommerce Site",
          description: `This is the single page ecommerce site built with vue. 
            It has the feature of filtering products, adding and removing from carts 
            and payment page. This site only contains front end. Products are fetched 
            from the public api using axios.`,
          img_src: require("@/assets/hamro-bazar.png"),
          link: "https://hamrobazar.netlify.app/",
        },
        {
          title: "Site Templates",
          description: `This page contains templates for different type of sites. 
            The templates are built with reference to w3schools using html, css and js. 
            This was made to practice html css and js.`,
          img_src: require("@/assets/w3schools-template.png"),
          link: "https://rohitshakyaa.github.io/w3schools-templates/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.picture:hover .overlay {
  opacity: 1;
}

.picture:hover img {
  transform: scale(1.2);
}

.picture .overlay,
.picture img {
  transition: all 0.3s ease;
}
</style>
