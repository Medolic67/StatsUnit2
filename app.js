(function(){
var P=[["index.html","Home"],["1-sampling.html","Sampling 2.1–2.3"],["2-bias.html","Bias 2.4"],["3-studies.html","Studies 2.5"],["4-experiments.html","Experiments 2.6–2.7"],["5-inference.html","Inference 2.8–2.9"],["templates.html","FRQ Templates"],["homework.html","Homework Key"],["vocab.html","Vocab"],["questions.html","Question Bank"]];
var n=document.getElementById("nav");
if(n){var cur=(location.pathname.split("/").pop()||"index.html");
n.innerHTML=P.map(function(p){return '<a href="'+p[0]+'"'+(p[0]===cur?' class="on"':'')+'>'+p[1]+'</a>';}).join("");}
document.querySelectorAll("[data-expand]").forEach(function(b){
 b.addEventListener("click",function(){
  var ds=document.querySelectorAll("details");
  var any=Array.prototype.some.call(ds,function(d){return !d.open;});
  ds.forEach(function(d){d.open=any;});
  b.textContent=any?"Collapse all answers":"Expand all answers";
 });
});
})();
