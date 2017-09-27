var controller = {
    view: {},
    add: function (number1, number2) {
        model.result = logic.add(number1, number2);
        this.view.display(model.result);
    },
    setView: function (view) {
        this.view = view;
    }// set view object to arg passed in
};