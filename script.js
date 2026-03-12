<script>
function addSkill() {
    let skill = document.getElementById("skillInput").value;

    if(skill === ""){
        alert("Please enter a skill");
        return;
    }

    let list = document.getElementById("skillList");

    let item = document.createElement("li");
    item.textContent = skill;

    list.appendChild(item);

    document.getElementById("skillInput").value = "";
}
</script>
