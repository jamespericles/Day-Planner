const saveBtns = document.querySelectorAll(".saveBtn");

for (let i = 0; i < saveBtns.length; i++) {
  saveBtns[i].addEventListener("click", function (e) {
    // console.log(e.target.id);
    let id = e.target.id;
    console.log(saveBtns[i].parent);
  });
}
