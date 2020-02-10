<template>
    <div v-show="isActive" class="todo-item-delete">
        <div class="todo-item-delete__popup">
            <h3 class="todo-item-delete__content-title">Are you sure ?</h3>
            <div class="todo-item-delete__container">
                <button @click="closeEdit" v-if="closePopUp">
                    Yes
                </button>
                <button
                    v-else
                    @click="deleteItemYes" 
                    class="todo-item-delete__button todo-item-delete__button_yes"
                >Yes</button>
                <button 
                    @click="deleteItemNo" 
                    class="todo-item-delete__button todo-item-delete__button_no"
                >No</button>
            </div>
        </div>
    </div>
</template>

<script>
import { eventEmitter } from '../../../main'

  export default {
    components: {
    },
    props: ['contentTitle'],
    data: function() {
        return {
            isActive: false,
            deleteItem: '',
            closePopUp: false
        };
    },
    created() {
        // showing a popup.
        // write the item to be deleted
        eventEmitter.$on('deletedItem', (item) => {
            this.isActive = true;
            this.deleteItem = item;
        }),
        // showing a popup if close edit item
        eventEmitter.$on('closeEdit', () => {
            this.isActive = true;
            this.closePopUp = true;
        })
    },
    methods: {
        // pass in ToDoItem the required item to be deleted.
        // close the popup
        deleteItemYes: function() {
            eventEmitter.$emit('deleteItemYes', this.deleteItem, close);
            this.isActive = false;
            if (close) {
                eventEmitter.$emit('closePopUp');
            }
            
        },
        deleteItemNo: function() {
            // close popup
            this.isActive = false;
            this.closePopUp = false;
        },
        closeEdit: function() {
            // close popup
            this.isActive = false;
            this.closePopUp = false
            eventEmitter.$emit('closePopUp');
        }
    }
  }
</script>

<style lang="scss" scoped>
    .todo-item-delete {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: transparent;
        z-index: 2;
    }

    .todo-item-delete__popup {
        width: 250px;
        height: 120px;
        background-color: #fff;
        border: 1px solid #000;
    }

    .todo-item-delete__container {
        display: flex;
        justify-content: space-around;
    }

    .todo-item-delete__content-title {
        text-align: center;
    }

    .todo-item-delete__button {
        width: 60px;
    }
</style>>
