const pack = JSON.stringify(Object.fromEntries(Array.from(document.getElementsByClassName("item-card")).map(n => [n.dataset.reference, -100000])));
console.log(pack)

fetch(`https://www.bigideasmath.com/MRL/rest/student-assignments/update-checked-answers?assignmentId=${location.href.split("Id=")[1]}&checkAnswerCounts=${pack}`)
 .then(res => {
    if (res.ok) {
      alert("Done! Save, exit, and re open this asignment.")
    }
 })
