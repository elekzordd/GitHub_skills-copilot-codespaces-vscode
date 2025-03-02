function skillMembers() {
    var members = document.getElementsByClassName("member");
    for (var i = 0; i < members.length; i++) {
        var member = members[i];
        member.style.backgroundColor = "blue";
    }
}