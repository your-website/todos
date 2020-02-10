<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

  export default {
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>