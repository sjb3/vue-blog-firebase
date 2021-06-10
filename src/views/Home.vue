/* eslint-disable vue/valid-v-for */
<template>
  <div class="home">
    <BlogPost v-if='!user' :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogsPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more recent blogs</h3>
        <div class="blog-cards">
          <BlogCard :post='post' v-for='(post, index) in sampleBlogCards' :key='index' />
        </div>
      </div>
    </div>
    <div v-if='!user' class="updates">
      <div class="container">
        <h2>Register for your free account, meaning free updates!</h2>
        <router-link class='router-button' to='#'>
          Register for Fireblogs!
          <Arrow class='arrow arrow-light' />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue';
import BlogCard from '@/components/BlogCard.vue';
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow
  },
  data() {
    return {
      welcomeScreen: {
        title: 'Welcome',
        blogPost: 'ince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentia',
        welcomeScreen: true,
        photos: 'coding'
      },
      sampleBlogsPost: [
        {
          title: 'sample',
          blogHTML: 'Edward Joseph Snowden (born June 21, 1983) is a former computer intelligence consultant who leaked highly classified information from the National Security Agency (NSA) in 2013 when he was an employee and subcontractor for the Central Intelligence Agency (CIA).',
          blogCoverPhoto: 'ed_snowden'
        },
        {
          title: 'sample',
          blogHTML: 'Abigail Suzanne Martin is an American journalist,[2][3] TV presenter and activist. She helped found the citizen journalism website Media Roots and serves on the board of directors for the Media Freedom Foundation which manages Project Censored.[4][5]',
          blogCoverPhoto: 'abby_martin'
        },
        {
          title: 'sample',
          blogHTML: 'Julian Paul Assange (/əˈsɑːnʒ/;[3] born 3 July 1971) is an Australian editor, publisher, and activist who founded WikiLeaks in 2006. WikiLeaks came to international attention in 2010 when it published a series of leaks provided by U.S. Army intelligence analyst Chelsea Manning.',
          blogCoverPhoto: 'julian_assange'
        },
      ],
    }
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    },
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style lang='scss' scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;

      @media(min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;

      @media(min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }

    }
  }
}
</style>