const listimg = document.querySelector('.sline-list');
const imgs = document.getElementsByTagName('img');
const bntLeft=document.querySelector('.bnt-left');
const bntRight=document.querySelector('.bnt-right');

let i = 0;
var xulythaydoianhsile = () =>{
    
    console.log(imgs.length);
    if(i == imgs.length - 55){
        i = 0;
        let width = imgs[1].offsetWidth;
        listimg.style.transform = `translateX(${width * -1 * i}px)`;
    }else{
        i++;
        let width = imgs[1].offsetWidth;
        listimg.style.transform = `translateX(${width * -1 * i}px)`;
        
    }
}
setInterval(xulythaydoianhsile, 5000);
bntRight.addEventListener('click',()=>{
    xulythaydoianhsile();
});
bntLeft.addEventListener('click',()=>{
    
    if(i == 0){
        i = imgs.length - 20;
        let width = imgs[1].offsetWidth;
        listimg.style.transform = `translateX(${width * -1 * i}px)`;
    }else{
        i--;
        let width = imgs[1].offsetWidth;
        listimg.style.transform = `translateX(${width * -1 * i}px)`;
        
    }
});
const slinelist = document.querySelector(".cac_list");
let n=0;
setInterval(()=>{

        slinelist.style.transform = `translateX(${133 * -1 * n}px)`;
        n++;
    if(n == 5){
        n = 0;
        let width = imgs[22].offsetWidth;
        slinelist.style.transform = `translateX(${width * -1 * n}px)`;
    }
},5000);
var exit_quangcao = document.querySelector(".exit");
exit_quangcao.addEventListener("click",()=>{
    document.querySelector(".quangcao").style.display="none";
})
var input_find_header_wedsite = document.querySelector(".find-input");
console.log(input_find_header_wedsite.value)

let theloai = document.getElementsByClassName("list")[1];
let select1 = document.querySelector(".select_theloai");

theloai.addEventListener("mouseover",()=>{
    select1.style.display="block";
    
})
theloai.addEventListener("mouseout",()=>{
    select1.style.display="none";
    
})
select1.addEventListener("mouseover",()=>{
    select1.style.display="block";
    
})
select1.addEventListener("mouseout",()=>{
    select1.style.display="none";
    
})


