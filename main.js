// initialising the ajax technique
function push(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4&&xhr.status=="200"){
      callback(xhr.responseText);
    }
    }
   xhr.send();
 }
 //calling funcation
 push("data.json",function(text){
   let ind=JSON.parse(text);
   console.log(ind);
   profile(ind.basics);
   skill(ind.skill);
   edu(ind.education);
 } )
 //for getting through td
 var main=document.getElementById('main');
//for getting through class
  //var main=doucument.queryselection('.main')

  //creating a element
  var left=document.createElement("div");
  left.classList.add("left");
  left.setAttribute("id","left");
  //appending to main
  main.appendChild(left);
  function profile(basic){
    var image=document.createElement("img");
    image.src=basic.photo;
    left.appendChild(image);
    var name=document.createElement("h1");
    name.textContent=basic.name;
    left.appendChild(name);
    var email=document.createElement("h2");
    email.textContent=basic.email;
    left.appendChild(email);
    var ph=document.createElement("h4");
    ph.textContent=basic.phone;
    left.appendChild(ph);
  }
  var right=document.createElement("div");
  right.classList.add("right");
  right.textContent="Technical Skills:"
  right.appendChild(document.createElement("HR"));
  main.appendChild(right);
  function skill(techskill){
    var table=document.createElement("table");
 var row="";
for (var i = 0; i <techskill .length; i++) {
  row +="<tr><td>"+techskill[i].name+"</td><td>"+techskill[i].value+"</td></tr>"

}
table.innerHTML=row;
right.appendChild(table);
}
function edu(Education){

  var e1=document.createElement("div");
  e1.classList.add("education");
  e1.textContent="Education Details:";
  e1.appendChild(document.createElement("HR"));
  right.appendChild(e1);
  for(i in Education){
    var e2=document.createElement("h2");
    e2.textContent=Education[i].course;
    var ul=document.createElement("ul");
    for(j in Education[i].college){
var list=document.createElement("li");
list.textContent=Education[i].college[j];
ul.appendChild(list);
e1.appendChild(e2);
e2.appendChild(ul);
}
}
}
