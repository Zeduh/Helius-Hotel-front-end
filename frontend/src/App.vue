<template>
  <router-view/>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
    box-sizing: border-box;
    margin: 0;
    font-family: "Montserrat", sans-serif;
}

.logo {
    font-family: "Signika Negative", sans-serif;
}

h1 {
    font-size: 2.5rem;
    margin: 2rem 0;
}

main {
    width: 100%;
    overflow: hidden;
}

</style>
