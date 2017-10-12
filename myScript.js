
    let banner=[
      { story: "如何瞭解蝴蝶蘭花苗產品的出口競爭和進口需求市場情報?", url: "powerbi_1.html" },
      { story: "如何瞭解蝴蝶蘭切花產品的出口競爭和進口需求市場情報?", url: "powerbi_2.html" },
      { story: "如何瞭解家禽產品的出口競爭和進口需求市場情報?", url: "powerbi_3.html" },
      { story: "如何瞭解家禽產品的出口競爭和進口需求市場情報?", url: "powerbi_4.html" },
      { story: "如何瞭解家禽產品的出口競爭和進口需求市場情報?", url: "powerbi_5.html" }
    ];

    // console.log(array[0].url)

    // function myFunction(item, index) {
    //     a.innerHTML = a.innerHTML + "index[" + index + "]: " + item + "<br>";
    // }
    // banner.forEach(function(e) {
    //   let a=document.getElementById('demo');
    //   a.textContent=e;
    //   console.log(e)
    // })

    function myFunction(e){
      let a=document.getElementById('demo');
      // let b=JSON.stringify(e)
      a.textContent = a.textContent+e.story+e.url;
      console.log(e)
    }
    // banner.forEach(function(e) {console.log(e)})
    // banner.forEach(myfunction(e) {console.log(e)})
