function changeImageView1(p1) {
    let imgTag = document.querySelector("#imgid1");
  
    if (p1 == 1) {
      imgTag.setAttribute("src", "1.jpg");
    } else if (p1 == 2) {
      imgTag.setAttribute("src", "2.jpg");
    } else if (p1 == 3) {
      imgTag.setAttribute("src", "3.jpg");
    }else if (p1 == 4) {
        imgTag.setAttribute("src", "4.jpg");
  }else if (p1 == 5) {
    imgTag.setAttribute("src", "5.jpg");
  }
}
  function changeImageView2(p1) {
    let imgTag = document.querySelector("#imgid2");
  
    if (p1 == 6) {
      imgTag.setAttribute("src", "6.jpg");
    } else if (p1 == 7) {
      imgTag.setAttribute("src", "7.jpg");
    } else if (p1 == 8) {
      imgTag.setAttribute("src", "8.jpg");
    }else if (p1 == 9) {
        imgTag.setAttribute("src", "9.jpg");
  }else if (p1 == 10) {
    imgTag.setAttribute("src", "10.jpg");
  }
}

function increment() {
    let h1CounterTag = document.querySelector("#counter");
    let existingValue = h1CounterTag.innerHTML;
    let newValue = parseInt(existingValue) + 1;
    h1CounterTag.innerHTML = newValue;
  }