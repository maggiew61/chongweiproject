let banner = [
  { story: "如何瞭解蝴蝶蘭花苗產品的出口競爭和進口需求市場情報?", url: "powerbi_1.html" },
  { story: "如何瞭解蝴蝶蘭切花產品的出口競爭和進口需求市場情報?", url: "powerbi_2.html" },
  { story: "如何瞭解家禽產品的出口競爭和進口需求市場情報?", url: "powerbi_3.html" },
  { story: "如何瞭解家禽產品的出口競爭和進口需求市場情報?", url: "powerbi_4.html" },
  { story: "如何瞭解家禽產品的出口競爭和進口需求市場情報?", url: "powerbi_5.html" }
];
// banner.forEach(function(e){
//   console.log(e,e.story)  //e is the value
// })

let str =''

banner.forEach(function(e){
  str+="<div id="+'text'+" class="+'carousel-item'+" ><a href=" +e.url   +"  >"+e.story+"</a></div>"
  // str+="<div>"+e.story+"</div>"
  console.log(e.story)
  document.getElementById('carousel_text').innerHTML=str
  })

function addCass(){
	let b=document.getElementById('text')
	b.className +=" active"
}
addCass()
