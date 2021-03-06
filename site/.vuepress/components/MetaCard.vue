<template>
  <div class="padding">
    <div class="card-container">
      <div class="image-container" @click="openLink()">
        <slot></slot>
      </div>
      <div class="card-content">
        <div class="last-updated" v-if="lastUpdated">{{lastUpdated}}</div>
        <div class="title" @click="openLink()">
          <img src="/images/icon-svg.svg" v-if="!frontmatter.cover" />
          <span>{{frontmatter.title || page.title}}</span>
        </div>
        <div class="description" v-if="frontmatter.description">
          {{desc}}
          <router-link :to="{ path: this.link}">...</router-link>
        </div>
        <!-- <div class="tags">
          <Tag v-for="tag of frontmatter.tags" :name="tag" :key="tag"></Tag>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "./Tag.vue";
export default {
  props: ["link"],
  data: () => {
    return {
      page: {},
      frontmatter: {}
    };
  },
  mounted: function() {
    this.page = this.$site.pages.find(page => {
      return page.path.includes(this.link);
    });
    this.frontmatter = this.page.frontmatter;
  },
  computed: {
    desc() {
      let str = this.frontmatter.description || "";
      const len = 240;
      if (str.length >= len) {
        // str = str.substring(0, 140).concat("....");
        str = str.substring(0, len);
      }
      return str;
    },
    lastUpdated() {
      if (this.page && this.page.lastUpdated) {
        return (
          this.lastUpdatedText +
          ":  " +
          new Date(this.page.lastUpdated).toLocaleString()
        );
      }
    },
    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === "string") {
        return this.$site.themeConfig.lastUpdated;
      }
      return "Last Updated";
    }
  },
  methods: {
    openLink: function() {
      this.$router.push({ path: `${this.link}` });
    }
  },
  components: {
    Tag
  }
};
</script>

<style lang="scss" scoped>
div.padding {
  padding: 10px 10px;
  display: inline-block;
  flex-basis: 33%;
  max-width: 33%;
  min-width: 32%;
  box-sizing: border-box;
}

@media (max-width: 1200px) {
  div.padding {
    flex-basis: 50%;
    max-width: 50%;
  }
}

@media (max-width: 959px) {
  div.padding {
    flex-basis: 100%;
    max-width: 100%;
    padding: 10px 10px;
  }
}

.card-container {
  background-color: var(--code-background);
  display: block;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0px 0.175em 0.5em rgba(2, 8, 20, 0.1),
    0px 0.085em 0.175em rgba(2, 8, 20, 0.08);
  transition: all 250ms;

  .image-container {
    img,
    video {
      cursor: pointer;
    }
  }

  .card-content {
    padding: 10px 20px;
    .last-updated {
      font-family: var(--heading-font-family);
      font-size: 12px;
    }

    .title {
      font-family: var(--heading-font-family);
      font-size: 23px;
      padding-bottom: 20px;
      padding-top: 10px;
      color: var(--text-color--dark);
      display: flex;
      cursor: pointer;
      span {
        display: inline-block;
        vertical-align: middle;
      }

      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        display: inline-block;
        border: solid 1px var(--text-color--dark);
        border-radius: 200px;
        padding: 4px 4px 4px 5px;
        vertical-align: middle;
      }
    }

    .description {
      font-size: 14px;
      font-weight: 500;
      padding-bottom: 20px;
    }

    .tag-container {
      font-size: 14px;
      margin: 5px 5px;
      padding: 6px 10px 6px 10px;
    }
  }
}
.card-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.35em 1.175em rgba(2, 8, 20, 0.1),
    0 0.175em 0.5em rgba(2, 8, 20, 0.08);
}

@media only screen and (max-width: 600px) {
  .card-container {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
