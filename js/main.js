
// Convinent functions to select elements from the document.
var $ = document.querySelector.bind(document);

const { createApp } = Vue;

const app = createApp({

    // ------------------------------------------------------------------------
    // Data
    // ------------------------------------------------------------------------

    data() {
        return {
            board_members: BOARD_MEMBERS,
        };
    },

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    methods: {
    },


    mounted : function() {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 30) {
            $(".header").classList.add("stick");
            } else {
            $(".header").classList.remove("stick");
            }
        });
    },

});

app.mount('#app');
