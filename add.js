let fresult = document.getElementById("result");
let addButton = document.getElementById("add"); addButton.addEventListener("click", () => {
    let showName = document.getElementById("movieName").value;
    let mshowName = showName.charAt(0);
    if (mshowName == "1" || mshowName == "1" || mshowName == "2" || mshowName == "3" || mshowName == "4" || mshowName == "5" || mshowName == "6" || mshowName == "7" || mshowName == "8" || mshowName == "9" || mshowName == "0") {
        fresult.innerHTML = "Invaild Tv Show Name"
    }
    else {
        fresult.innerHTML = `${showName} has been added`
    }
});