<template>
  <div class="container" :style="{ 'min-height': `${containerHeight}px` }">
    <div v-if="mounted" class="content">
      <h1 class="title">
        <img src="/logo.png" alt="nahokomatsui" width="280" height="73" />
      </h1>
      <p class="description">
        Web developer / kulala Inc.
      </p>
      <div class="sns">
        <a
          class="sns-link twitter"
          href="https://twitter.com/nahokomatsui"
          target="_blank"
        >
          <fa class="sns-icon" :icon="['fab', 'twitter']" area-hidden="true" />
        </a>
        <a
          class="sns-link facebook"
          href="https://www.facebook.com/nahoko.matsui/"
          target="_blank"
        >
          <fa class="sns-icon" :icon="['fab', 'facebook']" area-hidden="true" />
        </a>
        <a
          class="sns-link github"
          href="https://github.com/nahokomatsui"
          target="_blank"
        >
          <fa class="sns-icon" :icon="['fab', 'github']" area-hidden="true" />
        </a>
        <a
          class="sns-link connpass"
          href="https://connpass.com/user/NahokoMatsui/"
          target="_blank"
        >
          <fa class="sns-icon" icon="compass" area-hidden="true" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      mounted: false,
      containerHeight: 0,
    }
  },
  mounted() {
    this.mounted = true
    this.containerHeight = window.innerHeight
  },
})
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  background-color: #fff;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 600px;
  padding: 60px 20px;
}

@media (min-width: 768px) {
  .content {
    min-height: 100vh;
  }
}

.title {
  margin: 0 auto;
}

.description {
  margin: 20px 0;
  font-size: 0.9em;
  letter-spacing: 0.1em;
}

.sns {
  display: inline-flex;
  align-items: center;
  margin-top: 2rem;
}

.sns-link {
  padding: 0.5rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-weight: bold;
  transition: filter 0.2s;
  border-radius: 4px;
}

.sns-link:hover {
  filter: contrast(140%) brightness(80%);
}

.sns-link.facebook {
  color: #3f6f9b;
}

.sns-link.twitter {
  color: #36b0c0;
}

.sns-link.github {
  color: #797176;
}

.sns-link.connpass {
  color: #b97591;
}

.sns-icon {
  font-size: 2rem;
}
</style>
