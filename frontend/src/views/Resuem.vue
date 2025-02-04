<template>
  <div class="d-flex flex-column h-100 bg-light">
    <!-- Page Content-->
    <div class="container px-5 my-5">
      <div class="text-center mb-5">
        <h1 class="display-5 fw-bolder mb-0">
          <span class="text-gradient d-inline">Resume</span>
        </h1>
      </div>
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-11 col-xl-9 col-xxl-8">
          <!-- Experience Section-->
          <section>
            <div
              class="d-flex flex-wrap align-items-center justify-content-between mb-4"
            >
              <h2 class="d-inline-block text-primary fw-bolder">
                Work Experience
              </h2>
              <!-- Download resume button-->
              <!-- Note: Set the link href target to a PDF file within your project-->
              <div
                class="d-inline-block btn btn-primary pointer"
                @click="downloadFile"
              >
                <div class="d-inline-block bi bi-download me-2"></div>
                Download Resume
              </div>
            </div>
            <!-- Experience Card 1-->
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-primary fw-bolder mb-2">
                        2024 - Present
                      </div>
                      <div class="small fw-bolder">SW Development TL</div>
                      <div class="small text-muted">TryCar</div>
                      <div class="small text-muted">Cairo, EG</div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laudantium, voluptatem quis repellendus eaque sit
                      animi illo ipsam amet officiis corporis sed aliquam non
                      voluptate corrupti excepturi maxime porro fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Experience Card 2-->
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-primary fw-bolder mb-2">2023 - 2024</div>
                      <div class="small fw-bolder">
                        Senior Frontend Engineer
                      </div>
                      <div class="small text-muted">TryCar</div>
                      <div class="small text-muted">Cairo, EG</div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laudantium, voluptatem quis repellendus eaque sit
                      animi illo ipsam amet officiis corporis sed aliquam non
                      voluptate corrupti excepturi maxime porro fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-primary fw-bolder mb-2">2022 - 2022</div>
                      <div class="small fw-bolder">Full Stack Engineer</div>
                      <div class="small text-muted">
                        Point Blank Communications
                      </div>
                      <div class="small text-muted">Cairo, EG</div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laudantium, voluptatem quis repellendus eaque sit
                      animi illo ipsam amet officiis corporis sed aliquam non
                      voluptate corrupti excepturi maxime porro fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Experience Card 2-->
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-primary fw-bolder mb-2">2020 - 2022</div>
                      <div class="small fw-bolder">Full Stack Engineer</div>
                      <div class="small text-muted">Upwork | Mostaql</div>
                      <div class="small text-muted">Freelance</div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laudantium, voluptatem quis repellendus eaque sit
                      animi illo ipsam amet officiis corporis sed aliquam non
                      voluptate corrupti excepturi maxime porro fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Skills Section-->
          <section>
            <!-- Skillset Card-->
            <div class="card shadow border-0 rounded-4 mb-0">
              <div class="card-body p-5">
                <!-- Professional skills list-->
                <div class="mb-5">
                  <div class="d-flex align-items-center mb-4">
                    <div
                      class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
                    >
                      <i class="bi bi-tools"></i>
                    </div>
                    <h3 class="fw-bolder mb-0">
                      <span class="text-gradient d-inline"
                        >Professional Skills</span
                      >
                    </h3>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 mb-4">
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Vue.js
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Pinia
                      </div>
                    </div>
                    <div class="col">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Vuex
                      </div>
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 mb-4">
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Vuetify
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      React.js
                      </div>
                    </div>
                    <div class="col">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                        Docker
                      </div>
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 mb-4">
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Javascript
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Typescript
                      </div>
                    </div>
                    <div class="col">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      TDD
                      </div>
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 mb-4">
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Express.js
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Nest.js
                      </div>
                    </div>
                    <div class="col">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Mysql
                      </div>
                      
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 mb-4">
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      MongoDB
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Jasmine
                      </div>
                    </div>
                    <div class="col">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Agile
                      </div>
                      
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 mb-4">
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Git
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      Github
                      </div>
                    </div>
                    <div class="col">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                      CircleCi
                      </div>
                      
                    </div>
                  </div>
                </div>
                <!-- Languages list-->
                <!-- <div class="mb-0">
                  <div class="d-flex align-items-center mb-4">
                    <div
                      class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
                    >
                      <i class="bi bi-code-slash"></i>
                    </div>
                    <h3 class="fw-bolder mb-0">
                      <span class="text-gradient d-inline">Languages</span>
                    </h3>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 mb-4">
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                        HTML
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                        CSS
                      </div>
                    </div>
                    <div class="col">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                        JavaScript
                      </div>
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                        TypeScript
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                        Node.js
                      </div>
                    </div>
                    <div class="col">
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                        YAML
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </section>
          <div class="pb-5"></div>
          <!-- Education Section-->
          <section>
            <h2 class="text-secondary fw-bolder mb-4">Education</h2>
            <!-- Education Card 1-->
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-secondary fw-bolder mb-2">
                        2022
                      </div>
                      <div class="mb-2">
                        <div class="small fw-bolder">Udacity</div>
                        <div class="small text-muted">Online</div>
                      </div>
                      <div class="fst-italic">
                        <div class="small text-muted">Nanodegree's</div>
                        <div class="small text-muted">Advanced Web Development track</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laudantium, voluptatem quis repellendus eaque sit
                      animi illo ipsam amet officiis corporis sed aliquam non
                      voluptate corrupti excepturi maxime porro fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Education Card 2-->
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-secondary fw-bolder mb-2">
                        2022
                      </div>
                      <div class="mb-2">
                        <div class="small fw-bolder">Udacity</div>
                        <div class="small text-muted">Online</div>
                      </div>
                      <div class="fst-italic">
                        <div class="small text-muted">Nanodegree</div>
                        <div class="small text-muted">Professional web development track</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laudantium, voluptatem quis repellendus eaque sit
                      animi illo ipsam amet officiis corporis sed aliquam non
                      voluptate corrupti excepturi maxime porro fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Divider-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const downloadFile = () => {
  // Define the filename of the file to be downloaded
  const fileName = "AhmedFarag-CV.pdf";
  console.log("hello");
  // Construct the URL to the file in the public directory
  const filePath = "/" + fileName;

  // Create an anchor element
  const link = document.createElement("a");
  link.href = filePath;
  link.setAttribute("download", fileName);

  // Simulate a click on the anchor element to trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up after the download
  document.body.removeChild(link);
};
</script>

<style lang="scss" scoped></style>
