var tab__tat_ca_san_pham = document.querySelector(".tab__tat_ca_san_pham")
var tab__giay_da_nam = document.querySelector(".tab__giay_da_nam")
var tab__vi_da_nam = document.querySelector(".tab__vi_da_nam")
var tab__That_lung_nam = document.querySelector(".tab__That_lung_nam")
var tab__Tui_xach_da_nam = document.querySelector(".tab__Tui_xach_da_nam")
var tab__Gang_tay_da = document.querySelector(".tab__Gang_tay_da")
var tab__Day_da_đong_ho = document.querySelector(".tab__Day_da_đong_ho")
var tab__Phu_kien_do_da = document.querySelector(".tab__Phu_kien_do_da")

var header__list_leftli1 = document.querySelector(".header__list--leftli1")
var header__list_leftli2 = document.querySelector(".header__list--leftli2")
var header__list_leftli3 = document.querySelector(".header__list--leftli3")
var header__list_leftli4 = document.querySelector(".header__list--leftli4")
var header__list_leftli5 = document.querySelector(".header__list--leftli5")
var header__list_leftli6 = document.querySelector(".header__list--leftli6")
var header__list_leftli7 = document.querySelector(".header__list--leftli7")
var header__list_leftli8 = document.querySelector(".header__list--leftli8")
// add display:block
function addblock(element) {
    element.style.display = "block";
    tab__Phu_kien_do_da.style.display = "none";
    console.log("đã hien")s
}
function removeblock(element) {
    element.style.display = "none";
    tab__Phu_kien_do_da.style.display = "block";
}
// sự kiện
var arraytab = [tab__tat_ca_san_pham, tab__giay_da_nam, tab__vi_da_nam, tab__That_lung_nam, tab__Tui_xach_da_nam, tab__Gang_tay_da, tab__Day_da_đong_ho, tab__Phu_kien_do_da]
var arraylist = [header__list_leftli1, header__list_leftli2, header__list_leftli3, header__list_leftli4, header__list_leftli5, header__list_leftli6, header__list_leftli7, header__list_leftli8]

// vong lap
for (let i = 0; i < arraylist.length; i++) {
    arraylist[i].addEventListener("mouseenter", () => addblock(arraytab[i]))
    arraylist[i].addEventListener("mouseleave", () => removeblock(arraytab[i]))
}