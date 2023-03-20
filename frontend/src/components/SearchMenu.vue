!<template>
  <nav class="accomodations-nav">
    <ul class="accomodations-nav--ul">
      <li v-for="list in acomodNames" :key="list"><a>{{list}}</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SearchMenu",
  props: {
    acomodNames: {
        type: [Object,Array]
    }
  }
};
</script>

<style lang="scss" scoped>
        .accomodations-nav{
            display: flex;
            margin-top: 70px;
            & ul{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-flow: row wrap;
                list-style: none;
                background-color: #fff;
                border: 1px solid #134429;
                border-radius: 50px;
                padding: 18px;
                flex-wrap: nowrap;

                & li {
                    border-right: 1px solid #ccc;
                    padding-right: 15px;
                    margin-right: 10px;
                    cursor: pointer;

                    & a {
                        font-size: 17px;
                        font-weight: bold;
                        color: #000;
                        text-decoration: none;

                        &:hover {
                            transition: all ease .1s;
                            color: #248f54;
                        }
                    }
                }

                & li:nth-child(3) {
                    margin-right: -18px;
                    border-right: none;
                }
            }
        }
</style>