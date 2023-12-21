function share(){
    var shareData={
        title:document.title,
        text:'hello',
        url:document.location.href

    }
if(navigator.canShare(shareData)){
    navigator.share(shareData);

}
}
let scroll=document.getElementById('scroll');
window.onscroll=function(){
    if(scrolly >=0)
    {
        scroll.style.display='block';

    }

else{
    scroll.style.display='none';
}
scroll.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}
}