Polymer({
    is: 'test-c',

    properties: {
        tagi: String,
        value2: String,
        value: {
            type: String,
            reflectToAttribute: true,
            notify: true,
            value: 1
        }
    },

    handleClick: function (e, detail) {
        this.fire('kick', { kicked: true });
    },

    regularTap: function (e) {
        alert("Thank you for tapping");
    },
});


