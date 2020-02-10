<template>
    <div class="todo-list">
        <h2 class="todo-list__content-title">{{ contentTitle }}</h2>
        <div class="todo-list__add-item">
            <input 
                @keydown.enter="addToDoItem" 
                v-model="title" class="todo-list__input" 
                placeholder="Todo"
            >
            <button @click="addToDoItem" class="todo-list__button-create">+</button>
        </div>
        <ToDoItem
            class="todo-list__item"
            v-for="(item, index) of pass" 
            :key="index" 
            :pass="item"
            :todo="todo"
        ></ToDoItem>
    </div>
</template>

<script>
import ToDoItem from './ToDoItem/ToDoItem'
  export default {
    components: {
      ToDoItem
    },
    props: ['contentTitle'],
    data: function() {
        return {
            title: '',
            pass: [],
            todo: [
                {text: 'todo 1', done: false, id: Date.now()},
                {text: 'todo 2', done: true, id: Date.now() + 1}
            ]
        };
    },
    mounted() {
        // draw a page
        if (localStorage.getItem(`todo${this.contentTitle}`)) {
            try {
                this.pass = JSON.parse(localStorage.getItem(`todo${this.contentTitle}`));
            } catch(e) {
                localStorage.removeItem(`todo${this.contentTitle}`);
            }
        }
    },
    methods: {
        addToDoItem: function(event) {
            // check if there is already an item with the same name. add item
            const place = event.target.closest('.todo-list').querySelector('.todo-list__content-title').textContent;
            const asd = event.target.closest('.todo-list').querySelectorAll('.todo-item__content-title');
            if (this.title.length === 0) {
                return
            } 
            if (asd.length === 0) {
                this.pass.push(this.title);
                this.saveToDo(place, this.title);
                this.title = '';

            } else {
                asd.forEach(element => {
                    if (element.textContent === this.title) {
                        alert('Todo is already there')
                        return;
                    } else
                    this.pass.push(this.title);
                    this.saveToDo(place, this.title);
                    this.title = '';
                });
            } 
        },
        saveToDo(place) {
            // save item in local storage
            const parsed = JSON.stringify(this.pass);
            localStorage.setItem(`todo${place}`, parsed);
        }
    }
  }
</script>

<style lang="scss" scoped>
    .todo-list {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 200px;
        padding: 10px;
        background-color: rgb(243, 215, 215);

        @media screen and (max-width: 1024px) {
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    }

    .todo-list__add-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        @media screen and (max-width: 1024px) {
            width: 200px;
        }
    }

    .todo-list__item {
        @media screen and (max-width: 1024px) {
            width: 200px;
        }
    }

    .todo-list__button-create {
        box-sizing: border-box;
        cursor: pointer;
        outline: none;

        color: rgb(0, 0, 0);
        border: 1px solid rgb(255, 145, 0);
        background-color: rgb(255, 255, 255);
    }

    .todo-list__input {
        max-width: 160px;
        margin: 0;

        border: 1px solid rgb(255, 145, 0);
        background-color: rgb(255, 255, 255);
        outline: none;

        font-size: 14px;
        font-weight: normal;
        color:rgb(0, 0, 0)
    }
</style>>
