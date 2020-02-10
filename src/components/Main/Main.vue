<template>
    <main>
        <Todo
          v-for="(contentTitle, index) of contentTitle" 
          :key="index" 
          :contentTitle="contentTitle"
        ></Todo>
        <DeleteItem></DeleteItem>
        <EditItem></EditItem>
    </main>
</template>

<script>
import Todo from '../Todo/Todo'
import DeleteItem from '../Todo/DeleteItem/DeleteItem'
import EditItem from '../Todo/EditItem/EditItem'
  export default {
    components: {
      Todo,
      DeleteItem,
      EditItem
    },
    data: function() {
        return {
          contentTitle: ['Day', 'Week', 'Month', 'Year'],
        };
    },
    
  }
</script>

<style lang="scss" scoped>
    main {
        min-height: 80vh;
        display: flex;
        justify-content: space-around;
        background-color: #fff;

        @media screen and (max-width: 1024px) {
          flex-direction: column;
        }
    }
</style>>
