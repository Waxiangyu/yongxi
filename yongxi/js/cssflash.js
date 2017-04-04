/**
 * Created by Administrator on 2017/3/27.
 */
console.log(0)
window.onscroll=function(){
    var arr_div = document.getElementsByClassName("move");
    console.log(arr_div);
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
    for(var i = 0 ;  i <  arr_div.length ; i ++) {
        if (top >= 1000&&top<1400) {
            arr_div[i].style.opacity = 0.8;
            arr_div[i].style.transform = 'scale(1)'

        } else if (top >= 1400&&top< 1460) {
            arr_div[i].style.opacity = 0.8;
            arr_div[i].style.transform = 'scale(1)'
        }
        else if (top >= 1900&&top<2590) {
            arr_div[i].style.opacity = 0.8;
            arr_div[i].style.transform = 'scale(1)'
        }
        else {
            arr_div[i].style.opacity = 0;
            arr_div[i].style.transform = 'scale(0.2)'

            }
         }
    };

