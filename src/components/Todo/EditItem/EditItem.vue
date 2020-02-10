<template>
    <div v-show="isActive" class="edit-item">
        <div class="edit-item__container">
            <h2 class="edit-item__content-title">{{ changedContentTitleItem }}</h2>
            <button @click="before" class="edit-item__button edit-item__button_bgc">
                <svg class="edit-item__icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 506 506" style="enable-background:new 0 0 506 506;" xml:space="preserve"> <path style="fill:#DF5C4E;" d="M193,215.7c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0l150,150l140-140c9.2-9.2,14.4-21.6,14.4-35.2 s-5.2-25.6-14.4-35.2l-106-105.6c-9.2-9.2-21.6-14.4-35.2-14.4s-25.6,5.2-35.2,14.4L20.2,335.7C1,355.3,1,386.9,20.2,406.1 l67.6,67.6h147.6L343,366.1L193,215.7z"/> <path style="fill:#33A5D2;" d="M193,215.7c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0l150,150l140-140c9.2-9.2,14.4-21.6,14.4-35.2 s-5.2-25.6-14.4-35.2l-106-105.6c-9.2-9.2-21.6-14.4-35.2-14.4s-25.6,5.2-35.2,14.4L166.6,189.7l176,176L193,215.7z"/> <path style="fill:#E36D60;" d="M168.2,191.3L11.4,348.5c-6.8,13.2-7.2,29.2-0.8,43.2l179.2-179.2L168.2,191.3z"/> <path style="fill:#73BADD;" d="M189.4,212.5l176-175.6c-6.4-2.8-13.6-4.4-20.8-4.4c-8,0-15.6,2-22.4,5.6l-154,153.2L189.4,212.5z"/> <path d="M236.2,479.7H86.6c-1.2,0-2-0.4-2.8-1.2l-67.6-68c-21.6-21.6-21.6-57.2,0-78.8l2.8,2.8l-2.8-2.8L305.4,42.5 c21.6-21.6,56.8-21.6,78.4,0l106,106c21.6,21.6,21.6,57.2,0,78.8L239,478.5C238.2,479.3,237.4,479.7,236.2,479.7z M88.2,471.7h146.4 l249.6-250c8.8-8.8,14-20.8,14-33.6c0-12.8-4.8-24.8-14-33.6l-106-106c-18.4-18.4-48.8-18.4-67.2,0L21.8,337.7 c-18.4,18.4-18.4,49.2,0,67.6L88.2,471.7z"/> <path d="M365,479.7H89c-2.4,0-4-1.6-4-4s1.6-4,4-4h276c2.4,0,4,1.6,4,4S367.4,479.7,365,479.7z"/> <path d="M345,368.9c-1.2,0-2-0.4-2.8-1.2L191.4,217.3c-1.6-1.6-1.6-4,0-5.6s4-1.6,5.6,0l150.8,150.4c1.6,1.6,1.6,4,0,5.6 C347,368.5,346.2,368.9,345,368.9z"/> <path d="M445,463.7H253c-2.4,0-4-1.6-4-4s1.6-4,4-4h192c2.4,0,4,1.6,4,4S447.4,463.7,445,463.7z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> 
            </button>
            <button @click="after" class="edit-item__button edit-item__button_bgc">
                <svg class="edit-item__icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 506.051 506.051" style="enable-background:new 0 0 506.051 506.051;" xml:space="preserve"> <g> <path style="fill:#EFDC81;" d="M70.826,292.451c4.8-4.8,7.6-11.6,7.6-18c0-6.8-2.8-13.2-7.6-18c-4.8-4.8-11.2-7.6-18-7.6 s-13.2,2.8-18,7.6c-4.8,4.8-7.6,11.2-7.6,18s2.8,13.6,7.6,18c4.8,4.8,11.6,7.6,18,7.6S66.026,297.251,70.826,292.451z"/> <path style="fill:#EFDC81;" d="M100.426,359.651c-4.4-8-13.2-13.2-22.4-13.2c-4.4,0-8.8,1.2-12.4,3.2c-12.4,6.8-16.8,22.8-10,34.8 c9.2,16,20,31.2,32.8,44.8c4.8,5.2,11.6,8,18.8,8c6.4,0,12.8-2.4,17.6-7.2c4.8-4.8,8-11.2,8-18c0.4-6.8-2.4-13.2-7.2-18.4 C116.026,383.651,107.626,372.051,100.426,359.651z"/> </g> <path style="fill:#F0C960;" d="M324.026,435.651c-3.2,0-6,0.4-9.2,1.6c-20,7.6-40.8,11.6-62.4,11.6c-14.8,0-29.6-2-43.6-5.6 c-1.2-0.4-2.4-0.8-3.6-0.8c-2.4-0.8-4.8-0.8-6.8-0.8c-11.6,0-21.6,7.6-24.8,18.8c-4,13.6,4,28,17.6,31.6c1.6,0.4,3.2,0.8,4.4,1.2 c18.4,4.8,37.2,7.2,56.4,7.2c27.6,0,54.8-4.8,80.4-14.8c6.4-2.4,11.6-7.2,14.4-13.6c2.8-6.4,3.2-13.2,0.4-19.6 C344.426,442.451,334.826,435.651,324.026,435.651z"/> <path style="fill:#FFC52F;" d="M318.026,57.651c-0.4-0.8-0.4-2,0.8-2.8l2-1.2c6-3.6,10-9.2,11.2-16c1.6-6.8,0.4-13.6-3.2-19.2 c-3.6-6-9.2-10-16-11.2c-6.8-1.6-13.6-0.4-19.2,3.2l-58,36.8c-6,3.6-10,9.2-11.2,16c-1.6,6.8-0.4,13.6,3.2,19.2l36.8,58 c4.8,7.6,12.8,12,21.6,12c4.8,0,9.6-1.2,13.6-4c6-3.6,10-9.2,11.2-16c1.6-6.8,0.4-13.6-3.2-19.2l-0.4-0.4c-0.4-0.8-0.4-1.6,0-2.4 c0.4-1.2,1.6-1.2,2-1.2c70.4,24.4,118,90.4,118,165.2c0,39.2-12.8,76.4-36.8,107.2c-8.8,11.2-6.8,27.2,4.4,36c4.4,3.6,10,5.6,16,5.6 c8,0,15.2-3.6,20.4-10c31.2-40,48-88,48-139.2c0-77.6-39.2-148.8-104.8-190.8c-1.6,0-1.6-1.2-1.2-2l-51.2-23.6l-1.2,0.8 C320.026,58.851,318.826,58.451,318.026,57.651z"/> <path d="M52.426,306.051c-8.4,0-16.4-3.2-22.4-9.2s-9.2-14-9.2-22.4s3.2-16.4,9.2-22.4c6-6,14-9.2,22.4-9.2s16.4,3.2,22.4,9.2 c6,6,9.2,14,9.2,22.4s-3.2,16.4-9.2,22.4C69.626,302.451,61.226,306.051,52.426,306.051z M52.426,250.851c-6.4,0-12.4,2.4-16.8,6.8 c-4.4,4.4-6.8,10.4-6.8,16.8s2.4,12.4,6.8,16.8s10.4,6.8,16.8,6.8c6.4,0,12.8-2.4,16.8-6.8l0,0c4.4-4.4,6.8-10.4,6.8-16.8 s-2.4-12.4-6.8-16.8C64.826,253.251,58.826,250.851,52.426,250.851z"/> <path d="M106.826,443.651c-8,0-16.4-3.6-22.8-10c-13.2-14-24.4-29.6-34-46c-8.4-15.2-2.8-34.4,12.4-43.2 c15.2-8.4,34.4-2.8,43.2,12.4c7.6,12.4,15.6,23.6,24.8,33.2c12,12.8,11.2,33.2-1.6,44.8 C122.826,440.851,115.226,443.651,106.826,443.651z M77.626,348.851c-4,0-7.6,0.8-11.2,2.8c-11.2,6.4-15.2,20.8-9.2,32 c8.8,16,20,30.8,32.4,44.4c4.8,4.8,11.2,7.6,17.2,7.6s12-2.4,16.4-6.4c9.6-8.8,10-24,0.8-33.6c-9.2-10-18-21.6-25.6-34.8l0,0 C94.026,353.251,86.026,348.851,77.626,348.851z"/> <path d="M252.826,506.051c-19.6,0-39.2-2.4-58-7.2c-1.2-0.4-2.8-0.8-4-1.2c-8.4-2.4-15.2-7.6-19.2-14.8c-4-7.2-5.2-16-2.8-24 c4.4-16.8,22-26.8,38.8-22c0.4,0,0.4,0,0.8,0.4h0.4c0.8,0,1.6,0.4,2,0.4c14,3.6,28,5.2,42,5.2c21.2,0,41.6-3.6,60-10.8 c7.6-3.2,16-2.8,23.6,0.4c8,3.6,14,9.6,17.2,18c3.2,7.6,2.8,16-0.4,23.6c-3.6,8-9.6,14-18,17.2 C308.426,500.851,280.426,506.051,252.826,506.051z M199.226,443.651c-10.4,0-20,6.8-22.8,17.2c-1.6,6-0.8,12.4,2,18 c3.2,5.6,8,9.2,14.4,11.2c1.6,0.4,3.2,0.8,4.8,1.2c17.6,4.8,36.4,6.8,55.6,6.8c26.8,0,53.6-4.8,80-14.4c6-2.4,10.8-6.8,13.2-12.8 c2.4-5.6,2.4-12,0.4-17.6c-2.4-6-6.8-10.8-12.8-13.6c-5.6-2.4-12-2.4-17.6-0.4l0,0c-19.6,7.6-40.8,11.6-63.2,11.6 c-14.4,0-29.6-2-44-5.6c-0.8,0-0.8-0.4-1.2-0.4c-0.8,0-1.6-0.4-2.4-0.4C203.226,443.651,201.226,443.651,199.226,443.651z"/> <path d="M410.826,429.251c-7.2,0-14-2.4-19.6-6.8c-6.8-5.2-11.2-12.8-12-21.2c-1.2-8.4,1.2-16.8,6.4-23.2 c23.2-30,35.6-65.6,35.6-103.6c0-68.8-41.6-130-104.4-156c1.2,4.8,1.2,10,0,14.8c-2,8.4-6.8,15.2-14,19.6 c-5.2,3.2-10.4,5.2-16.8,5.2c-11.2,0-21.2-5.6-27.2-14.8l-36.8-58c-4.4-6.8-6-15.6-4-24c2-8,6.8-15.2,14-19.6l58-36.8 c7.2-4.4,15.6-6,24-4s15.2,6.8,19.6,14c4.4,7.2,6,15.6,4,24s-6.8,15.2-14,19.6l-2,1.2c-2,1.2-4.4,0.4-5.6-1.2 c-1.2-2-0.4-4.4,1.2-5.6l2-1.2c10.8-6.8,14.4-21.6,7.6-32.4c-3.2-5.2-8.4-8.8-14.8-10.4c-6-1.6-12.4-0.4-17.6,2.8l-58,36.8 c-5.6,3.6-9.2,8.4-10.8,14.8c-1.2,6.4-0.4,12.8,3.2,17.6l36.8,58c4.4,6.8,12,10.8,20.4,10.8c4.8,0,8.8-1.2,12.4-3.6 c5.2-3.2,9.2-8.4,10.4-14.8c1.2-6,0.4-11.6-2.4-16.8c-1.6-1.2-2.4-3.2-1.6-4.8c0.8-2,3.2-2.8,4.8-2.4 c71.2,24.4,119.2,91.6,119.2,166.8c0,39.6-12.8,77.2-37.2,108.4c-4,4.8-5.6,11.2-4.8,17.2c0.8,6.4,4,12,8.8,16 c4.4,3.2,9.6,5.2,14.8,5.2c7.6,0,14-3.2,18.8-9.2c31.2-39.6,47.6-87.6,47.6-138c0-76.8-38.8-147.6-103.6-189.2 c-2-1.2-2.4-3.6-1.2-5.6s3.6-2.4,5.6-1.2c67.2,43.2,107.6,116,107.6,195.6c0,52.4-17.2,101.6-49.2,142.8 C429.626,424.851,420.826,429.251,410.826,429.251z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> 
            </button>
            <div class="edit-item__container-add-to-do">
                <input 
                    class="edit-item__input" 
                    type="text" 
                    :value="changedContentTitleItem"
                    @keydown.enter="contentTitleSaveState($event.target.value)"
                >
                <button @click="contentTitleSaveState($event.target, true)" class="edit-item__button edit-item__button-save-title">Save Title</button>
            </div>
            <div class="edit-item__container-add-to-do">
                <label class="edit-item__label" for="">
                    <input 
                        @keydown.enter="addNewToDo" 
                        class="edit-item__input" 
                        type="text" 
                        v-model="addToDo"
                    >
                </label>
                <button @click="addNewToDo" class="edit-item__button edit-item__button-add-to-do">Add To Do</button>
            </div>
            <ul class="todo-item__list"> 
                <li class="todo-item__ele" v-for="(todo, index) in todos" :key="index">
                    <label>
                        <input type="checkbox" v-model="todo.done" @click="checkboxSaveState(todo, index, todo.done)">
                    </label>
                    <input
                        class="edit-item__input"
                        @keydown.enter="editToDoListComplete($event.target.value, index)" 
                        v-if="editToDo === todo.id" 
                        type="text"
                        :value="todo.text"
                    >
                    <del v-else-if="todo.done">{{ todo.text }}</del>
                    <span v-else-if="!todo.done">{{ todo.text }}</span>
                    <button @click="removeToDo(todo.id)" class="todo-item__button-delete">
                        <svg class="todo-item__icon-delete" viewBox="-45 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m271.710938 7.5h-175.144532c-7.945312 0-14.386718 6.441406-14.386718 14.386719v304.949219c0 7.945312 6.441406 14.386718 14.386718 14.386718h228.734375c7.945313 0 14.386719-6.441406 14.386719-14.386718v-251.359376zm0 0" fill="#fafaff"/><path d="m285.359375 21.148438v305.6875c0 7.945312-6.441406 14.386718-14.386719 14.386718h54.328125c7.945313 0 14.386719-6.441406 14.386719-14.386718v-251.359376zm0 0" fill="#e6e6f2"/><path d="m271.710938 68.609375v-61.109375l67.976562 67.976562h-61.109375c-3.792969 0-6.867187-3.074218-6.867187-6.867187zm0 0" fill="#aae1e7"/><path d="m312.210938 504.5h-202.550782c-19.550781 0-35.933594-14.773438-37.949218-34.21875l-34.746094-335.253906h347.9375l-34.746094 335.253906c-2.015625 19.445312-18.398438 34.21875-37.945312 34.21875zm0 0" fill="#3a90c8"/><path d="m330.40625 135.027344-35.691406 344.402344c-1.476563 14.246093-13.480469 25.070312-27.804688 25.070312h45.300782c19.546874 0 35.933593-14.773438 37.945312-34.21875l34.746094-335.253906zm0 0" fill="#2e6c9f"/><path d="m392.734375 178.519531h-363.597656c-11.949219 0-21.636719-9.683593-21.636719-21.632812v-.222657c0-11.949218 9.6875-21.636718 21.636719-21.636718h363.597656c11.949219 0 21.632813 9.6875 21.632813 21.636718v.222657c0 11.949219-9.683594 21.632812-21.632813 21.632812zm0 0" fill="#ffe591"/><path d="m392.734375 135.027344h-33.113281v43.492187h33.113281c11.949219 0 21.632813-9.683593 21.632813-21.632812v-.222657c0-11.949218-9.683594-21.636718-21.632813-21.636718zm0 0" fill="#ffa442"/><g fill="#415f7d"><path d="m130.398438 444.886719c-7.019532 0-12.949219-5.4375-13.449219-12.550781l-13.792969-195.367188c-.523438-7.4375 5.078125-13.890625 12.515625-14.414062 7.453125-.523438 13.890625 5.078124 14.414063 12.515624l13.792968 195.363282c.523438 7.4375-5.078125 13.890625-12.515625 14.417968-.324219.023438-.644531.035157-.964843.035157zm0 0"/><path d="m184.089844 444.886719c-7.308594 0-13.316406-5.835938-13.492188-13.183594l-4.59375-195.367187c-.179687-7.453126 5.722656-13.636719 13.175782-13.8125 7.421874-.214844 13.636718 5.722656 13.8125 13.179687l4.597656 195.367187c.175781 7.453126-5.726563 13.636719-13.179688 13.8125-.105468 0-.214844.003907-.320312.003907zm0 0"/><path d="m237.78125 444.886719c-.109375 0-.214844-.003907-.324219-.003907-7.453125-.175781-13.351562-6.363281-13.179687-13.8125l4.597656-195.367187c.175781-7.347656 6.183594-13.183594 13.488281-13.183594.109375 0 .214844 0 .324219.003907 7.453125.175781 13.351562 6.359374 13.179688 13.8125l-4.597657 195.367187c-.171875 7.34375-6.179687 13.183594-13.488281 13.183594zm0 0"/><path d="m291.46875 444.886719c-.320312 0-.644531-.011719-.964844-.035157-7.4375-.523437-13.039062-6.980468-12.515625-14.417968l13.792969-195.367188c.523438-7.433594 6.960938-13.035156 14.414062-12.511718 7.4375.523437 13.039063 6.976562 12.515626 14.414062l-13.792969 195.367188c-.5 7.113281-6.429688 12.550781-13.449219 12.550781zm0 0"/></g><path d="m200.664062 31.726562h-83.394531c-4.144531 0-7.5 3.355469-7.5 7.5 0 4.140626 3.355469 7.5 7.5 7.5h83.394531c4.144532 0 7.5-3.359374 7.5-7.5 0-4.144531-3.355468-7.5-7.5-7.5zm0 0"/><path d="m200.664062 61.4375h-83.394531c-4.144531 0-7.5 3.359375-7.5 7.5 0 4.144531 3.355469 7.5 7.5 7.5h83.394531c4.144532 0 7.5-3.355469 7.5-7.5 0-4.140625-3.355468-7.5-7.5-7.5zm0 0"/><path d="m130.398438 452.386719c.492187 0 .988281-.019531 1.496093-.054688 5.59375-.394531 10.699219-2.945312 14.378907-7.179687 3.675781-4.238282 5.484374-9.652344 5.085937-15.246094l-13.789063-195.367188c-.816406-11.542968-10.875-20.269531-22.425781-19.46875-5.59375.398438-10.703125 2.945313-14.378906 7.183594-3.675781 4.234375-5.484375 9.648438-5.089844 15.242188l13.792969 195.367187c.769531 10.949219 9.964844 19.523438 20.929688 19.523438zm-18.304688-220.300781c1.046875-1.210938 2.507812-1.9375 4.101562-2.050782.144532-.011718.28125-.015625.421876-.015625 3.121093 0 5.765624 2.421875 5.988281 5.578125l13.792969 195.363282c.113281 1.601562-.402344 3.148437-1.453126 4.355468-1.050781 1.210938-2.511718 1.9375-4.101562 2.050782-3.320312.230468-6.183594-2.285157-6.414062-5.558594l-13.792969-195.367188c-.113281-1.597656.402343-3.144531 1.457031-4.355468zm0 0"/><path d="m184.089844 452.386719c.171875 0 .351562-.003907.5-.007813 5.605468-.132812 10.828125-2.4375 14.699218-6.496094 3.871094-4.0625 5.933594-9.382812 5.800782-14.992187l-4.601563-195.367187c-.132812-5.628907-2.457031-10.871094-6.550781-14.753907-4.074219-3.863281-9.390625-5.894531-14.933594-5.742187-5.609375.128906-10.828125 2.4375-14.699218 6.496094-3.875 4.058593-5.933594 9.382812-5.800782 14.988281l4.597656 195.367187c.265626 11.308594 9.679688 20.507813 20.988282 20.507813zm-8.933594-220.507813c1.105469-1.160156 2.597656-1.820312 4.238281-1.859375h.171875c1.5 0 2.929688.574219 4.042969 1.628907 1.175781 1.117187 1.84375 2.621093 1.882813 4.230468l4.597656 195.367188c.039062 1.601562-.550782 3.121094-1.65625 4.28125-1.105469 1.160156-2.597656 1.820312-4.226563 1.855468l-.117187.003907c-3.230469 0-5.917969-2.628907-5.992188-5.859375l-4.597656-195.367188c-.039062-1.601562.550781-3.125 1.65625-4.28125zm0 0"/><path d="m237.253906 452.378906c.175782.003906.351563.007813.523438.007813 11.308594 0 20.722656-9.199219 20.988281-20.507813l4.597656-195.367187c.132813-5.605469-1.929687-10.929688-5.800781-14.988281-3.871094-4.058594-9.089844-6.367188-14.671875-6.496094-.175781-.003906-.351563-.007813-.527344-.007813-11.304687 0-20.71875 9.199219-20.984375 20.503907l-4.597656 195.367187c-.132812 5.609375 1.925781 10.933594 5.796875 14.992187 3.875 4.054688 9.09375 6.363282 14.675781 6.496094zm-5.476562-21.132812 4.597656-195.367188c.074219-3.230468 2.761719-5.859375 5.988281-5.859375l.148438.003907c1.601562.035156 3.09375.695312 4.199219 1.855468 1.105468 1.15625 1.695312 2.679688 1.65625 4.28125l-4.597657 195.367188c-.074219 3.230468-2.761719 5.855468-5.992187 5.855468h-.144532c-1.601562-.039062-3.09375-.695312-4.199218-1.855468-1.105469-1.160156-1.695313-2.679688-1.65625-4.28125zm0 0"/><path d="m291.46875 452.386719c10.964844 0 20.15625-8.574219 20.933594-19.523438l13.792968-195.367187c.8125-11.550782-7.921874-21.609375-19.472656-22.425782-11.558594-.800781-21.609375 7.925782-22.421875 19.46875l-13.792969 195.367188c-.816406 11.550781 7.917969 21.609375 19.476563 22.429688.5.03125.992187.050781 1.484375.050781zm-6-21.421875 13.792969-195.367188c.222656-3.15625 2.867187-5.578125 5.984375-5.578125.140625 0 .28125.003907.421875.015625 3.300781.234375 5.796875 3.105469 5.5625 6.40625l-13.792969 195.367188c-.21875 3.128906-2.84375 5.578125-5.96875 5.578125-.148438 0-.296875-.007813-.4375-.015625-3.300781-.234375-5.792969-3.109375-5.5625-6.40625zm0 0"/><path d="m392.734375 127.527344h-363.597656c-16.066407 0-29.136719 13.070312-29.136719 29.136718v.222657c0 16.0625 13.070312 29.136719 29.136719 29.136719h363.597656c16.0625 0 29.132813-13.070313 29.132813-29.136719v-.222657c0-16.066406-13.070313-29.136718-29.132813-29.136718zm14.132813 29.359375c0 7.792969-6.339844 14.136719-14.132813 14.136719h-363.597656c-7.796875 0-14.136719-6.34375-14.136719-14.136719v-.222657c0-7.796874 6.339844-14.136718 14.136719-14.136718h363.597656c7.792969 0 14.132813 6.339844 14.132813 14.136718zm0 0"/><path d="m378.0625 201.058594c-4.128906-.425782-7.808594 2.566406-8.234375 6.6875l-27.128906 261.761718c-1.625 15.671876-14.734375 27.492188-30.492188 27.492188h-202.546875c-15.757812 0-28.863281-11.820312-30.488281-27.492188l-27.132813-261.761718c-.425781-4.121094-4.117187-7.125-8.230468-6.6875-4.121094.425781-7.113282 4.113281-6.6875 8.230468l27.128906 261.765626c2.417969 23.34375 21.941406 40.945312 45.410156 40.945312h202.546875c23.46875 0 42.988281-17.601562 45.410157-40.945312l27.128906-261.761719c.429687-4.121094-2.566406-7.808594-6.683594-8.234375zm0 0"/><path d="m82.179688 112.507812c4.144531 0 7.5-3.359374 7.5-7.5v-83.121093c0-3.796875 3.089843-6.886719 6.886718-6.886719h167.644532v53.609375c0 7.921875 6.441406 14.367187 14.363281 14.367187h53.613281v22.019532c0 4.144531 3.355469 7.5 7.5 7.5 4.140625 0 7.5-3.355469 7.5-7.5v-29.519532c0-1.988281-.792969-3.894531-2.199219-5.304687l-67.972656-67.976563c-1.410156-1.40625-3.316406-2.195312-5.304687-2.195312h-175.144532c-12.066406 0-21.886718 9.816406-21.886718 21.886719v83.121093c0 4.140626 3.359374 7.5 7.5 7.5zm197.03125-86.902343 42.367187 42.371093h-42.367187zm0 0"/></svg>
                    </button>
                    <button @click="editToDoListComplete($event.target, index, true)" class="edit-item__button todo-item__button-edit-complete" v-if="editToDo === todo.id">
                        <svg class="todo-item__icon-complete" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="filled_outline" data-name="filled outline"><path d="m432 447.993h-351.834a16 16 0 0 1 -16-16v-352a16 16 0 0 1 16-16h271.834l8 16h16l8-16h32l32 32v336a16 16 0 0 1 -16 16z" fill="#4298d1"/><rect fill="#eaeae8" height="216" rx="16" width="256" x="127.999" y="231.993"/><path d="m87.999 407.993h16v16h-16z" fill="#217aac"/><path d="m408 407.993h16v16h-16z" fill="#217aac"/><path d="m128 63.992h208a0 0 0 0 1 0 0v104a16 16 0 0 1 -16 16h-176a16 16 0 0 1 -16-16v-104a0 0 0 0 1 0 0z" fill="#3e8cc7"/><path d="m320 183.993h-128a16 16 0 0 1 -16-16v-112h160v112a16 16 0 0 1 -16 16z" fill="#ebebeb"/><path d="m256 87.992h48v64h-48z" fill="#3880b5"/><path d="m256 95.992h40v56h-40z" fill="#3e8cc7"/><path d="m167.999 287.993h176v16h-176z" fill="#fcd795"/><path d="m167.999 335.993h176v16h-176z" fill="#fcd795"/><path d="m167.999 383.993h176v16h-176z" fill="#fcd795"/><g fill="#217aac"><path d="m360 103.992h16v16h-16z"/><path d="m360 135.992h16v32h-16z"/><path d="m87.999 87.992h16v16h-16z"/></g><path d="m80.155 456h351.845a24.027 24.027 0 0 0 24-24v-336a8 8 0 0 0 -2.344-5.656l-32-32a7.994 7.994 0 0 0 -5.656-2.344h-32a8 8 0 0 0 -7.156 4.422l-5.79 11.578h-6.109l-5.789-11.578a8 8 0 0 0 -7.156-4.422h-8a8 8 0 0 0 -8-8h-160a8 8 0 0 0 -8 8h-87.845a24.027 24.027 0 0 0 -24 24v352a24.027 24.027 0 0 0 24 24zm63.845-16a8.008 8.008 0 0 1 -8-8v-184a8.007 8.007 0 0 1 8-8h224a8.007 8.007 0 0 1 8 8v184a8.008 8.008 0 0 1 -8 8zm184-376v104a8.007 8.007 0 0 1 -8 8h-128a8.007 8.007 0 0 1 -8-8v-104zm-160 8v96a23.727 23.727 0 0 0 1.475 8h-25.475a8.007 8.007 0 0 1 -8-8v-96zm-95.845 8a8.008 8.008 0 0 1 8-8h39.845v96a24.026 24.026 0 0 0 24 24h176a24.026 24.026 0 0 0 24-24v-96h3.054l5.789 11.578a8 8 0 0 0 7.157 4.422h16a8 8 0 0 0 7.156-4.422l5.789-11.578h23.742l27.313 27.309v332.691a8.008 8.008 0 0 1 -8 8h-41.474a23.731 23.731 0 0 0 1.474-8v-184a24.027 24.027 0 0 0 -24-24h-224a24.027 24.027 0 0 0 -24 24v184a23.707 23.707 0 0 0 1.475 8h-41.32a8.008 8.008 0 0 1 -8-8z"/><path d="m87.999 407.997h16v16h-16z"/><path d="m87.999 87.996h16v16h-16z"/><path d="m408 407.997h16v16h-16z"/><path d="m256 160h48a8 8 0 0 0 8-8v-64a8 8 0 0 0 -8-8h-48a8 8 0 0 0 -8 8v64a8 8 0 0 0 8 8zm8-64h32v48h-32z"/><path d="m167.999 287.997h176v16h-176z"/><path d="m167.999 335.997h176v16h-176z"/><path d="m167.999 383.997h176v16h-176z"/><path d="m360 103.996h16v16h-16z"/><path d="m360 135.996h16v32h-16z"/></g></svg>
                    </button>
                    <button v-else class="todo-item__button-edit" @click="editToDoList(todo.id)">
                        <svg class="todo-item__icon-edit" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 501.6 501.6" style="enable-background:new 0 0 501.6 501.6;" xml:space="preserve"><path style="fill:#DF5C4E;" d="M154.408,260.8c6,6,9.6,14.4,9.6,23.2c0,4.8-1.2,9.2-2.8,13.6c12-5.6,27.2-3.6,37.2,6.4c6,6,9.6,14.4,9.6,23.2c0,4.8-1.2,9.6-3.2,14c12-5.6,26.8-3.6,36.8,6.4c8.8,8.8,11.6,21.2,8.4,32.4l244.8-245.6L367.208,6.8l-245.2,245.6c3.2-0.8,6-1.2,9.2-1.2C140.008,251.2,148.408,254.4,154.408,260.8z"/><path style="fill:#E36D60;" d="M411.608,51.2l-244,244c10.8-2.8,22.4,0,30.8,8.4c6,6,9.6,14.4,9.6,23.2c0,2-0.4,3.6-0.4,5.2l242.8-242.4L411.608,51.2z"/> <path style="fill:#DF5C4E;" d="M56.408,456c-0.4,0-0.4,0-0.8,0c-0.8,0-1.6-0.4-1.6-1.2c-0.4-0.8,0-2,0.8-2.4l43.2-19.6l-43.2-42.8 l-46.4,104l103.6-46.4l-11.2-11.2L56.408,456z"/> <g> <path style="fill:#CCCCCC;" d="M111.208,263.2L111.208,263.2L111.208,263.2C111.608,263.2,111.208,263.2,111.208,263.2z"/> <path style="fill:#CCCCCC;" d="M111.208,263.2L111.208,263.2L111.208,263.2L111.208,263.2L111.208,263.2L111.208,263.2z"/> <path style="fill:#CCCCCC;" d="M152.408,303.6L152.408,303.6C152.008,303.6,152.008,303.6,152.408,303.6 C152.008,303.6,152.008,304,152.408,303.6L152.408,303.6C152.008,304,152.008,303.6,152.408,303.6z"/> <path style="fill:#CCCCCC;" d="M152.408,303.6l0.4-0.4C152.408,303.2,152.408,303.6,152.408,303.6L152.408,303.6z"/> <path style="fill:#CCCCCC;" d="M152.008,304L152.008,304L152.008,304L152.008,304L152.008,304z"/> </g> <path style="fill:#F0B551;" d="M238.408,350c-11.2-11.2-29.2-11.2-40.4-0.4l0,0l0,0c-0.8,0.8-2,0.8-2.8,0s-0.8-2,0-2.8l0,0l0,0l0,0 l0,0c5.6-5.6,8.4-12.8,8.4-20.4s-3.2-14.8-8.4-20.4c-10.8-11.2-28.8-11.2-40-0.4l-0.4,0.4l0,0l0,0l0,0c-0.4,0.4-0.8,0.4-1.2,0.4 s-0.8,0-1.2-0.4c-0.8-0.8-0.8-1.6-0.4-2.4v-0.4l0,0l0,0l0,0l0.4-0.4c4.8-5.2,7.6-12,7.6-19.2c0-7.6-2.8-14.8-8.4-20.4 c-5.6-5.6-12.8-8.4-20.4-8.4c-7.2,0-14.4,2.8-19.6,8c0,0,0,0-0.4,0.4v0.4l0,0L56.408,386l59.6,59.6l122.4-54.8h0.4l0.4-0.8 C249.608,378.8,249.608,361.2,238.408,350z"/> <path d="M240.008,396c-1.2,0-2-0.4-2.8-1.2c-1.6-1.6-1.6-4,0-5.6l254.4-255.2L367.208,9.6l-254,254.8c-1.6,1.6-4,1.6-5.6,0 s-1.6-4,0-5.6l256.8-257.6c0.8-0.8,1.6-1.2,2.8-1.2l0,0c1.2,0,2,0.4,2.8,1.2l130,130c1.6,1.6,1.6,4,0,5.6l-257.2,258 C242.008,395.6,241.208,396,240.008,396z"/> <path d="M4.408,501.6c-1.2,0-2-0.4-2.8-1.2c-1.2-1.2-1.6-2.8-0.8-4.4l105.6-235.6c0.8-2,3.2-2.8,5.2-2s2.8,3.2,2,5.2l-101.2,226 l226-101.2c2-0.8,4.4,0,5.2,2s0,4.4-2,5.2L6.008,501.2C5.608,501.6,4.808,501.6,4.408,501.6z"/> <path d="M196.808,352.8c-1.2,0-2-0.4-2.8-1.2c-1.6-1.6-1.6-4,0-5.6c10.4-10.4,10.4-27.6,0-38s-27.6-10.4-38,0c-1.6,1.6-4,1.6-5.6,0 s-1.6-4,0-5.6c13.6-13.6,35.6-13.6,49.2,0c13.6,13.6,13.6,35.6,0,49.2C198.808,352.4,198.008,352.8,196.808,352.8z"/> <path d="M153.208,309.6c-1.2,0-2-0.4-2.8-1.2c-1.6-1.6-1.6-4,0-5.6c10.4-10.4,10.4-27.6,0-38s-27.6-10.4-38,0c-1.6,1.6-4,1.6-5.6,0 s-1.6-4,0-5.6c13.6-13.6,35.6-13.6,49.2,0c13.6,13.6,13.6,35.6,0,49.2C155.208,309.2,154.408,309.6,153.208,309.6z"/> <path d="M240.408,396c-1.2,0-2-0.4-2.8-1.2c-1.6-1.6-1.6-4,0-5.6c10.4-10.4,10.4-26.8-0.4-37.6c-10.4-10.4-27.6-10.4-38,0 c-1.6,1.6-4,1.6-5.6,0s-1.6-4,0-5.6c13.6-13.6,35.6-13.6,49.2,0c13.6,13.6,13.6,35.6,0.4,48.8 C242.408,395.6,241.608,396,240.408,396z"/> <path d="M184.008,278.4c-1.2,0-2-0.4-2.8-1.2c-1.6-1.6-1.6-4,0-5.6l226-226.4c1.6-1.6,4-1.6,5.6,0s1.6,4,0,5.6l-226,226.4 C186.008,278,185.208,278.4,184.008,278.4z"/> <path d="M227.608,322c-1.2,0-2-0.4-2.8-1.2c-1.6-1.6-1.6-4,0-5.6l226-226.8c1.6-1.6,4-1.6,5.6,0s1.6,4,0,5.6l-226,226.8 C229.608,321.6,228.808,322,227.608,322z"/> <path d="M115.208,451.6c-1.2,0-2-0.4-2.8-1.2l-60.8-60.4c-1.6-1.6-1.6-4,0-5.6s4-1.6,5.6,0l60.8,60.4c1.6,1.6,1.6,4,0,5.6 C117.208,451.2,116.408,451.6,115.208,451.6z"/> <path d="M55.608,458.4c-1.6,0-2.8-0.8-3.6-2.4c-0.8-2,0-4.4,2-5.2l45.6-20.8c2-0.8,4.4,0,5.2,2s0,4.4-2,5.2l-45.6,20.8 C56.808,458.4,56.008,458.4,55.608,458.4z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                    </button>
                </li>
            </ul>
            <button @click="closePopUp" class="edit-item__button-close">x</button>
            <button @click="saveChange" class="edit-item__button edit-item__button-save-change">Save</button>
            <button @click="deleteItem" class="edit-item__button edit-item__button-delete-item">Delete todo</button>
        </div>
    </div>
</template>

<script>
import { eventEmitter } from '../../../main'
  export default {
    components: {
    },
    data: function() {
        return {
            isActive: false,
            editItem: '',
            editContentTitle: '',
            changedContentTitleItem: '',
            addToDo: '',
            todos: [],
            changeTodos: [],
            itemToDelete: '',
            editToDo: ''
        };
    },
    created() {
        // showing a popup.
        // write the content-title to be edited
        eventEmitter.$on('editItem', (item, todos, itemToDelete) => {
            this.isActive = true;
            this.editItem = item;
            this.editContentTitle = Array.from(item.children).find((item) => {
                return item.classList.value ===  'todo-item__content-title';
            })
            this.changedContentTitleItem = this.editContentTitle.textContent;
            this.todos = Object.assign([], todos);
            this.changeTodos = todos;
            this.itemToDelete = itemToDelete;
            localStorage.setItem(`todositem`, this.editContentTitle.textContent);
            this.saveBefore();
            this.saveAfter();
            const parsed = JSON.stringify(this.todos);
            localStorage.setItem(`todoscreated`, parsed);
        }),
        eventEmitter.$on('closePopUp',  () => {
            this.escape();
            this.isActive = false;
        })
    },
    methods: {
        closePopUp: function() {
            // eventEmitter in DeleteItem
            eventEmitter.$emit('closeEdit');
        },
        checkboxSaveState: function(todo, index, done) {
            this.todos[index].done = !done
            this.saveAfter();
            this.todos[index].done = done
            this.saveBefore();

        },
        contentTitleSaveState: function(value, button) {
            this.saveAfter();
            if (button) {
                if (value.parentNode.querySelector('.edit-item__input').value === '') {
                    return;
                } else
                this.changedContentTitleItem = value.parentNode.querySelector('.edit-item__input').value;
                this.saveBefore();
            } else if (value === '') {
                return;
            } else
            this.changedContentTitleItem = value;
            this.saveBefore();
        },
        escape: function() {
            // pass initial data when editing is canceled
            if (localStorage.getItem(`todoscreated`)) {
                try {
                    let todoscreated = JSON.parse(localStorage.getItem(`todoscreated`));
                    this.todos = todoscreated;
                    this.changeTodos.splice(0)
                    this.todos.forEach((item) => this.changeTodos.push({text: item.text, done: item.done, id: item.id}))
                } catch(e) {
                    localStorage.removeItem(`todoscreated`);
                }
            }
        },
        saveChange: function() {
            // save all data for item
            this.editContentTitle.textContent = this.changedContentTitleItem;
            this.changeTodos.splice(0)
            this.todos.forEach((item) => this.changeTodos.push({text: item.text, done: item.done, id: item.id}))
            this.isActive = false;
            this.saveToDo();
            this.saveAfter();
        },
        addNewToDo: function() {
            if (this.addToDo === '') {
                return
            }
            this.saveBefore();
            this.todos.push({text: this.addToDo, done: false, id: Date.now()});
            this.addToDo = '';
            this.saveAfter();
            
        },
        removeToDo: function(id) {
            this.saveBefore();
            this.todos.forEach((todo, index) => {
                if (todo.id === id) {
                    this.todos.splice(index, 1)
                }
            });
            this.saveAfter();
        },
        deleteItem: function() {
            // eventEmitter in DeleteItem. Show popup
            eventEmitter.$emit('deletedItem', this.itemToDelete, true);
        },
        editToDoList: function(id) {
            this.editToDo = id;
        },
        editToDoListComplete: function(value, index, button) {
            this.saveBefore();
            if (button) {
                const valueButton = value.closest('.edit-item__button').parentNode.querySelector('.edit-item__input').value;
                if (valueButton === '') {
                    return;
                } else
                this.todos[index].text = valueButton;
                this.saveAfter();
                this.editToDo = '';
            } else if (value === '') {
                return;
            } else
            this.todos[index].text = value;
            this.saveAfter();
            this.editToDo = '';
        },
        saveBefore: function() {
            // save data
            const parsed = JSON.stringify(this.todos);
            localStorage.setItem(`todosbefore`, parsed);
            const parsedTitle = JSON.stringify(this.changedContentTitleItem);
            localStorage.setItem(`todosbeforetitle`, parsedTitle);
        },
        saveAfter: function() {
            // save data
            const parsed = JSON.stringify(this.todos);
            localStorage.setItem(`todosafter`, parsed);
            const parsedTitle = JSON.stringify(this.changedContentTitleItem);
            localStorage.setItem(`todosaftertitle`, parsedTitle);
        },
        before: function() {
            // to get data
            if (localStorage.getItem(`todosbefore`)) {
                try {
                    let before = JSON.parse(localStorage.getItem(`todosbefore`));
                    this.todos = before;
                    let afterTitle = JSON.parse(localStorage.getItem(`todosaftertitle`));
                    this.changedContentTitleItem = afterTitle;
                } catch(e) {
                    localStorage.removeItem(`todosbefore`);
                }
            }
        },
        after: function() {
            // to get data
            if (localStorage.getItem(`todosafter`)) {
                try {
                    let after = JSON.parse(localStorage.getItem(`todosafter`));
                    this.todos = after;
                    let beforeTitle = JSON.parse(localStorage.getItem(`todosbeforetitle`));
                    this.changedContentTitleItem = beforeTitle;
                } catch(e) {
                    localStorage.removeItem(`todosafter`);
                }
            }
        },
        saveToDo() {
            // get todo from the local storage
            const title = this.editItem.closest('.todo-item').closest('.todo-list').querySelector('.todo-list__content-title').textContent;
            const parsed = JSON.stringify(this.todos);
            let todolist = JSON.parse(localStorage.getItem(`todo${title}`));
            const final = todolist.filter((item) => item != this.editContentTitle.textContent);
            final.push(this.changedContentTitleItem)
            const contentTitle = localStorage.getItem(`todositem`);
            // delete card if new name
            if (this.changedContentTitleItem != contentTitle) {
                final.forEach(function(item, index) {
                    if (item === contentTitle) {
                        final.splice(index, 1);
                        return;
                    }
                })
            }
            // save car local storage
            const parsedTitle = JSON.stringify(final);
            localStorage.setItem(`todos${this.changedContentTitleItem}`, parsed);
            localStorage.setItem(`todo${title}`, parsedTitle);
        }
    }
  }
</script>

<style lang="scss" scoped>
    .edit-item {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: rgba(128, 128, 128, 0.938);
    }

    .edit-item__container {
        position: relative;
        max-width: 600px;
        width: calc(80% - 100px);
        height: calc(80% - 100px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #fff;
        padding: 50px;
    }

    .edit-item__container-add-to-do {
        display: flex;
        
        @media screen and (max-width: 470px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    .edit-item__content-title {
        align-self: center;
    }

    .edit-item__button {
        cursor: pointer;
        background-color: rgb(255, 123, 0);
        border: 1px solid #000;
        outline: none;
    }

    .edit-item__button_bgc {
        background-color: transparent;
        margin-bottom: 10px;
    }

    .edit-item__button-save-change {
        margin-bottom: 10px;
    }

    .edit-item__button-save-title {
        margin-left: 10px;
        height: 20px;
        @media screen and (max-width: 470px) {
            margin: 0;
        }
    }

    .edit-item__button-add-to-do {
        margin-left: 10px;
        height: 20px;
        @media screen and (max-width: 470px) {
            margin: 0;
        }
    }

    .edit-item__icon {
        width: 20px;
        height: 20px;
    }

    .edit-item__label {
        display: block;
    }

    .edit-item__input {
        margin-bottom: 10px;
    }

    .edit-item__button-close {
        position: absolute;
        top: -5px;
        right: -5px;
        width: 40px;
        height: 40px;

        cursor: pointer;
        border: none;
        outline: none;

        background-color: transparent;

        font-size: 30px;
    }

    .todo-item__ele {
        display: flex;
    }

    .todo-item__icon-complete {
        width: 20px;
        height: 20px;
    }

    .todo-item__button-edit-complete {
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }
</style>