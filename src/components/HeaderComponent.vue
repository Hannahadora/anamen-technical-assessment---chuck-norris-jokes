<template>
  <div>
    <header>
      <div class="nav-wrapper">
        <div class="spacing">&nbsp;</div>
        <div class="hamburger">
          <img
            @click="openSidebar"
            src="../assets/images/list.png"
            alt="list-menu"
          />
        </div>
        <div class="nav-links">
          <a href="#"><h1 class="nav-link desktop-nav">SO FUNKITONIER'S</h1></a>
          <a href="#"><h1 class="nav-link desktop-nav">SONGDERANGBOTE</h1></a>
          <div class="dropdown">
            <div class="first-mast">
              <div class="img-holder">
                <img src="../assets/images/user_icon.png" alt="user.png" />
              </div>
              <h1 class="nav-link">
                <span class="desktop-nav">MEIN BEIRICH</span>
                &nbsp;&nbsp;&nbsp;<span class="caret-down"
                  ><img src="../assets/images/caret_down.png"
                /></span>
              </h1>
            </div>
            <div class="tooltip-dropdown">
              <div class="triangle"></div>
              <div class="single-result">
                <h2 class="title">My Published jokes</h2>
              </div>
              <div class="single-result">
                <h2 class="title">My Saved jokes</h2>
              </div>
              <div class="single-result">
                <h2 class="title">Account Information</h2>
              </div>
              <div class="single-result">
                <h2 class="title">Publish new joke</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div v-if="showSidebar" class="sidebar-gen-wrapper">
      <div :class="{ opensidebar: showSidebar === true }" class="sidebar">
        <div @click="closeSidebar" class="close-sidebar-cta">
          <img src="../assets/images/x.png" alt="close-menu" />
        </div>
        <div class="navlinks-mob">
          <a href="#"><h1>SO FUNKITONIER'S</h1></a>
          <a href="#"><h1>SONGDERANGBOTE</h1></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue-demi";
const showSidebar = ref(false);

const openSidebar = () => {
  showSidebar.value = true;
};
const closeSidebar = () => {
  showSidebar.value = false;
};
</script>

<style>
header { background: #303033;}
.nav-wrapper { max-width: 1000px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;}
.nav-links {display: flex;  }
.nav-links > a  { all:unset;  cursor: pointer;}
.nav-link { font-size: 19px; color:#fff;  padding: 18px 0; margin-right: 60px; font-weight: normal !important;}
.dropdown { position: relative; }
.dropdown .first-mast { background: #cfb995; display: flex; align-items: center; justify-content: center;padding-left: 40px; cursor: default; }
.dropdown .first-mast:hover ~ .tooltip-dropdown { display: block; }
.dropdown .img-holder { max-width: 20px; margin-right: 13px;}
.dropdown .img-holder > img { width: 100%; }
.dropdown > h1 { margin-left: 40px;}
.tooltip-dropdown {display: none; position: absolute; bottom: -206px; z-index: 1; border-radius: 5px; border:1px solid #fff; background: #fff; margin-top: 20px; padding:2px 12px 20px 12px;  width: 100%; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;}
.single-result { display: flex; align-content: center; transition: 0.4s; border-bottom: 1px solid #dadada; padding-bottom: 12px; margin-top: 10px;}
.single-result:hover { transform: scaleX(0.95); transition: 0.4s; cursor: pointer; }
.single-result .title { font-size: 16px; color:#303030; font-weight: normal !important;  }
title:hover { color:#cfb995 !important; }
.caret-down > img { width: 20px;}
.triangle { display: inline-block; vertical-align: middle; position: absolute; top:-8px; right: 7px; border-bottom: solid 10px #fff; border-left: solid 10px transparent; border-right: solid 10px transparent;}
.sidebar-gen-wrapper { width: 100%; position: fixed; top:0; left:0; background: #00000070; height: 100vh; z-index: 9; height: 100%;}
.sidebar { background: #303033; width: 0px; border-top-right-radius: 5px; transition: 0.4s; border-bottom-right-radius: 5px; position: fixed; left:0; top:0; min-height: 100vh; height: 100%; z-index: 999999;}
.opensidebar { width: 300px; transition: 0.4s;}
.sidebar .navlinks-mob { padding: 50px 16px 0 16px; }
.sidebar .navlinks-mob > a { text-decoration: none; }
.sidebar .navlinks-mob > a > h1 { font-size: 16px; line-height:40px; font-weight:normal !important; color: #fff; }
.close-sidebar-cta { max-width: 25px; margin:16px 0 0 16px; }
.close-sidebar-cta > img { width: 100%; }
.hamburger { max-width: 30px; display: none; margin-bottom: -6px;}
.hamburger > img { width: 100%; }
/* MEDIA QUERIES */
@media (max-width: 1024px) {
  .nav-link { font-size: 16px; padding: 18px 0; margin-right: 40px; }
  .nav-wrapper { margin: 0 16px;}
}
@media (max-width: 767px) {
  .desktop-nav { display: none; }
  .spacing { display: none;}
  .hamburger { display: block; } 
.dropdown .first-mast { background: #cfb995; display: flex; align-items: center; justify-content: center;padding-left: 10px; cursor: default; }
.dropdown .first-mast:hover ~ .tooltip-dropdown { display: none; }
.dropdown .img-holder { max-width: 16px; margin-right:10px;}
.dropdown .img-holder > img { width: 100%; }
.caret-down > img { width: 16px; }
.nav-link {  margin-right: 15px; }
}
</style>
