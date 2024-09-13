const loadSideBar = (isMenu) => {
    var sideMenu = document.getElementById("side-button");
    var sideBar = document.getElementById("side-bar");
    if (isMenu) {
        if (sideBar.style.display == "none"){
            sideBar.style.display = "flex";
            sideMenu.innerHTML = '<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span>' 
        } else {
            sideBar.style.display = "none";
            sideMenu.innerHTML = '<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg></span>';
        }
    } else {
        sideBar.style.display = "none";
        sideMenu.innerHTML = '<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg></span>';
    }
};

$(document).ready(function() {
    $("#contact-form").submit((e) => {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,6}$/;

        if (name == "" || name == null || name.length < 4) {
            alert("Please Provide a valid name with atleast 4 characters");
        } else if (email == "" || email == null || !re.test(String(email).toLowerCase())) {
            alert("Please provide a valid email");
        } else if (message == "" || message == null || message.length <10) {
            alert("Please Provide a valid message. Include atleat 10 characters");
        } else {
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbwHopK8dXMuZ2rMjLO-qBwCq-FZCFc6ov_FLKNXnRPZ2rFSJ-rQ1loCbHAVBLxjhmqi/exec",
                method: "post",
                data: $("#contact-form").serialize(),
                success: function(response) {
                    alert("Sucessfully submitted form.");
                    window.location.reload();
                },
                error: function(err) {
                    alert("Something wen wrong");
                }
            });
        }
    });
});
