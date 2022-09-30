<template>
    <footer class="footer-bg">
      <img src="@/assets/images/footer_bg.png" alt="">
      <div class="footer-content-wrapper">
          <div class="footer-content">
              <div>
                  <div>
                      <h1 class="title">GOT JOKES? GET PAID <br> FOR SUBMITTING!</h1>
                       <div class="submit-joke">
                          <span>SUBMIT JOKE</span>
                          <div class="forward-arrow"><img src="@/assets/images/forward_arrow.png" alt="forward_arrow"></div>
                      </div>
                  </div>
                  <SearchBar />
              </div>
          </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
  name:'footer'
  }
  </script>
  
  <style scoped>
  .footer-bg { position: relative; } 
  .footer-bg > img { width: 100%; display: block; min-height: 200px; }
  .footer-bg .footer-content-wrapper { position: absolute; top:0; left:0; width: 100%; height: 100%;}
  .footer-bg .footer-content-wrapper .footer-content { max-width: 1000px; margin:0 auto; width: 100%; height: 100%; display: flex; align-items: center; justify-content: flex-start; }
  .footer-bg .footer-content-wrapper .footer-content .title { text-align: left; font-size: 16px; color:#fff; font-weight: normal;}
  .footer-bg .footer-content-wrapper .footer-content .submit-joke {cursor: pointer; display: flex; align-items: center; justify-content: flex-start; color:#fff; text-align: left;  color:#d0ba93; font-size: 19px; padding-top: 6px; }
  .footer-bg .footer-content-wrapper .footer-content .submit-joke > span { color:#d0ba93; font-size: 16px;}
  .footer-bg .footer-content-wrapper .footer-content .submit-joke .forward-arrow { max-width: 18px; margin-left: 10px;}
  .footer-bg .footer-content-wrapper .footer-content .submit-joke .forward-arrow > img {width:100%;}
  /* MEDIA QUERIES */
  @media (max-width: 1024px) {
      .footer-bg .footer-content-wrapper .footer-content { margin: 0 16px; }
  }
  @media (max-width: 768px) {
      .footer-bg > img { min-height: 150px; }
      .footer-bg .footer-content-wrapper .footer-content .title { font-size: 14px; }
      .footer-bg .footer-content-wrapper .footer-content .submit-joke > span { font-size: 14px;}
      .footer-bg .footer-content-wrapper .footer-content .submit-joke .forward-arrow { max-width: 16px; margin-left: 10px;}
  }
  </style>