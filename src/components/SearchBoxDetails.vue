<template>
  <div>
   <div class="search-tooltip">
     <div class="search-box">
      <input
        type="text"
        name=""
        id=""
        placeholder="search any word"
      />
      <span>
        <img
        src="@/assets/images/scope_black.png"
          alt="search_icn"
        />
      </span>
    </div>
    <div class="tooltip-dropdown">
        <div class="triangle"></div>
       <div class="single-result">
        <div><img src="@/assets/images/flash_icon.png" alt="flash"></div>
        <h2 class="title">Social Jokes: The Crazy Teacher</h2>
       </div>
       <div class="single-result">
        <div><img src="@/assets/images/flash_icon.png" alt="flash"></div>
        <h2 class="title">Social Jokes: The Crazy Teacher</h2>
       </div>
       <div class="single-result">
        <div><img src="@/assets/images/flash_icon.png" alt="flash"></div>
        <h2 class="title">Social Jokes: The Crazy Teacher</h2>
       </div>
       <div class="single-result">
        <div><img src="@/assets/images/flash_icon.png" alt="flash"></div>
        <h2 class="title">Social Jokes: The Crazy Teacher</h2>
       </div>
    </div>
   </div>

  </div>
</template>

<script>
export default {
  name: "SearchBoxDetails",
};
</script>

<style scoped>
.search-box {width: 400px; background: #fff; color:#000; border:1px solid #fff; border-radius: 4px; padding:10px 12px; margin-top: 60px; display: flex; align-content: center; justify-content: space-between; }
.search-box > input { all:unset; color: #000;  font-family: 'Montserrat', sans-serif; font-weight: normal; width: 100%;}
.search-box > input::placeholder { all:unset; color: #000; opacity: 0.8;  font-family: 'Montserrat', sans-serif; font-weight: normal;}
.search-box > span {max-width: 20px;}
.search-box > span > img { margin-right: 12px; margin-left: 10px; width: 100%; }

/* .search-tooltip {;} */

.tooltip-dropdown { position: relative; border:1px solid #fff; background: #fff; margin-top: 20px; padding:2px 12px 20px 12px;  width: 100%; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;}
.single-result { display: flex; align-content: center; transition: 0.4s; border-bottom: 1px solid #dadada; padding-bottom: 12px; margin-top: 10px;}
.single-result:hover { transform: scaleX(0.95); transition: 0.4s; cursor: pointer; }
.single-result > div { max-width: 10px; margin-right: 10px; }
.single-result > div > img { width: 100%; margin-bottom: -5px;}
.single-result .title { font-size: 16px; color:#303030; font-weight: normal !important;  }

.triangle { display: inline-block; vertical-align: middle; position: absolute; top:-8px; left: 7px; border-bottom: solid 10px #fff; border-left: solid 10px transparent; border-right: solid 10px transparent;}

</style>