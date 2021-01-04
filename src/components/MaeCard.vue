<template>
  <div class="mae-card p-4 text-secondary">
    <div>
      <div class="row">
        <div class="col-lg-3 d-flex align-items-center justify-content-center">
          <img
            :src="imageLeftSrc"
            class="rounded-circle d-none d-lg-block"
            width="120"
            height="120"
          />
        </div>
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <div>
            <h1 class="mae-text-green">
              {{ title }}
            </h1>
            <h3 class="text-secondary">{{ subtitle }}</h3>
            <div class="mt-4">
              <div
                class="d-inline-block icon-link"
                v-for="link in linkList"
                :key="link.icon"
              >
                <a :href="link.url" target="_blank" rel="noopener norefferer">
                  <i :class="link.icon + ' mr-4 fa-2x'"></i>{{link.url}}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 d-flex align-items-center justify-content-center">
          <img
            :src="imageRightSrc"
            class="rounded-circle d-none d-lg-block"
            width="120"
            height="120"
          />
        </div>
      </div>
    </div>
    <div :class="cardSectionClass">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h5 style="text-align:justify">
            {{ aboutMe }}
          </h5>
        </div>
      </div>
    </div>
    <div :class="cardSectionClass">
      <h5>
        <a
          class="text-secondary mae-link"
          href="https://maemresen.github.io/curriculum-vitae/cv_mehmet_arif_emre_sen.pdf"
          target="_blank"
          rel="noopener norefferer"
        >
          <i class="fas fa-file"></i>
          <span class="mx-3">Check My Cv here...</span>
          <i class="fas fa-file"></i>
        </a>
      </h5>
    </div>
    <div :class="cardSectionClass">
      <h5>
        We have a software community named as YazilimVIP. Feel free to visit our
        website by the following link
      </h5>
      <h5>
        <a
          class="text-secondary mae-link"
          href="https://maemresen.github.io/curriculum-vitae/cv_mehmet_arif_emre_sen.pdf"
          target="_blank"
          rel="noopener norefferer"
        >
          <i class="fas fa-glass-cheers"></i>
          <span class="mx-3">Check My Cv here...</span>
          <i class="fas fa-glass-cheers"></i>
        </a>
      </h5>
    </div>
    <div :class="cardSectionClass">
      <h5>
        <div>
          Also, I am a Linux User.
        </div>
        <div class="my-4">
          <i class="fab fa-linux fa-4x"></i>
        </div>
        <div>
          <a
            class="text-secondary mae-link"
            href="https://manjaro.org/downloads/official/xfce/"
            target="_blank"
            rel="noopener norefferer"
          >
            <i class="fas fa-thumbs-up"></i>
            <span class="mx-3">Preffered Distro: Manjaro XFCE</span>

            <i class="fas fa-thumbs-up"></i>
          </a>
        </div>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaeCard",
  props: {},
  data: () => {
    return {
      title: "Mehmet Arif Emre Şen",
      subtitle: "(a.k.a maemresen)",
      aboutMe: `
        I am an entrepreneur who wants to learn new technologies and
        use them to make things easier. My life goal is having my own
        job and creating a software community that everyone can get
        benefit from. I have deep interest to Object Oriented
        Paradigm.
      `,
      imageLeftSrc:
        "https://avatars2.githubusercontent.com/u/17517090?s=460&u=a0e442b6913f827d2e51e00abe143b2dbc375f33&v=4",
      imageRightSrc: "/assets/img/profile_pic.jpg",
      cardSectionClass: "border-top border-success mt-4 pt-4",
      linkList: [
        { link: "https://gitlab.com/emresen", icon: "fab fa-gitlab" },
        { link: "https://github.com/maemresen", icon: "fab fa-github" },
        { link: "https://medium.com/@maemresen", icon: "fab fa-medium" },
        {
          link: "https://www.linkedin.com/in/maemresen/",
          icon: "fab fa-linkedin",
        },
        {
          link: "mailto:maemresen@yazilim.vip",
          icon: "fas fa-envelope",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mae-card {
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
}

.mae-link {
  text-decoration: underline;
}

.mae-text-green {
  color: green;
}
</style>
