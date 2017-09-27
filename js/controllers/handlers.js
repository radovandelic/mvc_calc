window.onload = function () {
    handler.init();
};

var handler = {

    add: function () {
        var n1 = Number(document.getElementById("number1").value);
        var n2 = Number(document.getElementById("number2").value);
        if (isNaN(n1 + n2)) {
            alert("Error. Enter numbers pls.");
        } else {
            controller.add(n1, n2);
        }
    },
    init: function () {
        controller.setView(browserView)
        var addButton = document.getElementById("addButton");
        addButton.setAttribute("onclick", "handler.add()");
    }
};

var terminalHandler = {
    init: function () {
        controller.setView(terminalView)
        // access commandline args
    }
};

