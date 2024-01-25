document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("imprintLink").addEventListener("click",function(){
    document.body.classList.toggle("imprintActive")
    document.body.classList.remove("aboutActive")
    document.body.classList.remove("projectsActive")
  })
  document.getElementById("imprintLinkMobile").addEventListener("click",function(){
    document.body.classList.toggle("imprintActive")
    document.body.classList.remove("aboutActive")
    document.body.classList.remove("projectsActive")
  })
  document.getElementById("aboutLink").addEventListener("click",function(){
    document.body.classList.toggle("aboutActive")
    document.body.classList.remove("imprintActive")
    document.body.classList.remove("projectsActive")
  })
  document.getElementById("projectsLink").addEventListener("click",function(){
    document.body.classList.toggle("projectsActive")
    document.body.classList.remove("imprintActive")
    document.body.classList.remove("aboutActive")
  })
  let l = [].slice.call(document.getElementById("projects").getElementsByTagName("li"))
  document.getElementById("scroller").addEventListener("scroll",function(e){
    let p = e.target.scrollTop/e.target.scrollTopMax
    update(p)
  })
  update(0,false);
  function update(p,_v){
    let _p = Math.round((l.length - 1) * p)
    for(let i in l){
      let _i = i - _p
      let s = Math.pow(1 - (Math.abs(_i) / l.length),2)
      let v = [].slice.call(l[i].getElementsByTagName("video"))
      v = v.length ? v[0] : false
      if(v && !_v){
        if( _i == 0){
          v.play()
        }
        else{
          v.pause()
        }
      }
      l[i].style.transform = "translate(" + ((_i * 50)*s - 50) + "%,"  + ((_i * 50)*s - 50)  + "%) scale(" + 100 * s + "%)"
      l[i].style.zIndex = _i < 0 ? 100 + _i : 100 - _i
    }
  }
  // document.getElementById("projectsLink").addEventListener("click",function(){
  //   document.body.classList.toggle("projectsActive")
  //   document.body.classList.remove("imprintActive")
  //   document.body.classList.remove("aboutActive")
  // })
})
