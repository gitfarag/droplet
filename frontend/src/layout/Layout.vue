<template>
  <div class="d-flex flex-column">
    <main class="flex-shrink-0">
        <Nav></Nav>
    </main>
    <RouterView />
    <footer class="bg-white py-4 mt-auto">
      <div class="container px-5">
        <div
          class="row align-items-center justify-content-between flex-column flex-sm-row"
        >
          <div class="col-auto">
            <div class="small m-0">Copyright &copy; Ahmed Farag | 2020</div>
          </div>
          <!-- <div class="col-auto">
            <a class="small" href="#!">Privacy</a>
            <span class="mx-1">&middot;</span>
            <a class="small" href="#!">Terms</a>
            <span class="mx-1">&middot;</span>
            <a class="small" href="#!">Contact</a>
          </div> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Nav from "./../components/Nav.vue";
</script>

<style lang="scss" scoped></style>
