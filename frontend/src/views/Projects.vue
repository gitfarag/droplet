<template>
  <div class="d-flex flex-column h-100 bg-light">
    <!-- Projects Section-->
    <section class="py-5">
      <div class="container px-5 mb-5">
        <div class="text-center mb-5">
          <h1 class="display-5 fw-bolder mb-0">
            <span class="text-gradient d-inline">Projects</span>
          </h1>
        </div>
        <div class="row gx-5 justify-content-center">
          <div
            class="col col-12 mt-3"
            v-for="(project, i) in porjects"
            :key="i"
          >
            <div class="d-flex flex-row mb-4">
              <IconHome size="28" class="text-muted mb-1 d-block me-2" />
              <h5 class="text-muted mb-1 d-block">{{ project.title }}</h5>
            </div>
            <Carousel>
              <Slide v-for="(slide, i) in project.paths" :key="i">
                <img
                  :src="slide"
                  :alt="project.title + `${i}`"
                  srcset=""
                  class="slideImage"
                />
              </Slide>

              <template #addons>
                <Navigation />
                <Pagination />
              </template>
            </Carousel>
            <!-- Call to action section-->
            <!-- <section v-if="project.hasDivider" class="my-5 py-5 bg-gradient-primary-to-secondary text-white">
              <div class="container px-5 my-5">
                <div class="text-center">
                  <h2 class="display-4 fw-bolder mb-4">
                    Let's build something together
                  </h2>
                  <a
                    class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
                    href="contact.html"
                    >Contact me</a
                  >
                </div>
              </div>
            </section> -->
            <!-- Project Card 1-->
            <!-- <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div class="card-body p-0">
                                    <div class="d-flex align-items-center">
                                        <div class="p-5">
                                            <h2 class="fw-bolder">Project Name 1</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                        </div>
                                        <img class="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                                    </div>
                                </div>
                            </div> -->
            <!-- Project Card 2-->
            <!-- <div class="card overflow-hidden shadow rounded-4 border-0">
                                <div class="card-body p-0">
                                    <div class="d-flex align-items-center">
                                        <div class="p-5">
                                            <h2 class="fw-bolder">Project Name 2</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                        </div>
                                        <img class="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                                    </div>
                                </div>
                            </div> -->
          </div>
        </div>
        <section class="my-5 py-5 bg-gradient-primary-to-secondary text-white">
              <div class="container px-5 my-5">
                <div class="text-center">
                  <h2 class="display-4 fw-bolder mb-4">
                    And More ....
                  </h2>
                  <RouterLink to="/contact">
                    <a
                    class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
                    >Contact me</a
                  >
                  </RouterLink>
                </div>
              </div>
            </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { porjects } from "../config/projects";
import { IconHome } from "@tabler/icons-vue";
import { RouterLink } from "vue-router";
</script>

<style>
.carousel__item {
  min-height: 200px;
  max-height: 400px;
  width: 100%;
  background-color: green;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slideImage {
  max-height: 600px;
  width: auto;
}
</style>
