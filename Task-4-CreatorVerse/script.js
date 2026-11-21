const followBtn = document.getElementById("followBtn");
const messageBtn = document.getElementById("messageBtn");

let isFollowing = false;

followBtn.addEventListener("click", function() {
    isFollowing = !isFollowing;

    if (isFollowing) {
        followBtn.textContent = "✓ Following";
    } else {
        followBtn.textContent = "+ Follow";
    }
});

messageBtn.addEventListener("click", function() {
    alert("Message feature coming soon!");
});
