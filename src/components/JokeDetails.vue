<template>
  <div>
    <div class="details-wrapper">
        <button class="back-cta-wrapper">
            <div><img src="@/assets/images/left_arrow.png" alt="left_arrow"></div>
        </button>

        <div class="panel-divide">
          <div class="min-sub">
             <div class="card-details">
                <div class="card-details-header">
                  <div class="category-tag">&#8226; SOCIAL JOKES</div>
                  <div class="trending-tag">&#8226; TRENDING</div>
                </div>
                <div class="card-details-title">
                    <h1 class="title">The Granny Joke</h1>
                    <div class="number-tag">_________________&nbsp;NO &nbsp;#1</div>
                </div>
                <p class="card-details-jokelog">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quam odit harum accusantium <br> <br> ducimus similique ipsum voluptatum vitae iusto dolores molestiae ipsa inventore quos natus, <br><br> minus perspiciatis enim vero nesciunt nulla perferendis nostrum quisquam dolor.
                </p>
              </div>

              <div class="interaction-navigation">
                <div class="feelings-wrapper">
                  <div class="likes-cta-wrapper">
                    <div class="like-cta">
                     <img src="@/assets/images/thumbs_up.png" alt="thumbs_up">
                    </div>
                    <span class="likes-count">{{328}}</span>
                  </div>
                  <div class="dislikes-cta-wrapper">
                    <div class="dislike-cta">
                     <img src="@/assets/images/thumbs_down.png" alt="thumbs_down">
                    </div>
                    <span class="dislikes-count">{{128}}</span>
                  </div>
                </div>

                <div class="navigation-controls">
                  <div class="nav-cta">
                    <div><img src="@/assets/images/left_arrow.png" alt="left_arrow"></div>&nbsp;&nbsp;
                    <span>PREV. JOKE</span>
                  </div>&nbsp;
                  <div class="nav-cta">
                    <span>NEXT JOKE</span>&nbsp;&nbsp;
                    <div><img src="@/assets/images/right_arrow.png" alt="right_arrow"></div>
                  </div>
                </div>

              </div>
          </div>
         
          <div class="top-10">
            <h1 class="title">TOP 100 JOKES THIS WEEK</h1>
            <a href="#">Smoking Joke</a><br>
            <a href="#">My Boss Joke</a><br>
            <a href="#">Dirty Millionaire Joke</a><br>
            <a href="#">The annoying neighbour</a><br>
            <a href="#">Knock knock</a><br>
            <a href="#">Why Tyson lisps</a><br>
            <a href="#">The drunk police officer</a><br>
            <a href="#">My hip dad (Dad joke)</a><br>
            <a href="#">What not to say in elevator</a><br>
            <a href="#">Hight School Jokes</a><br>
          </div>
        </div>
    </div>
  </div>
</template>

<script >
export default {
name:'JokeDetails'
}
</script>

<style>
.details-wrapper { max-width:1000px; margin: 50px auto 100px auto; }
.details-wrapper .back-cta-wrapper { cursor: pointer; margin-bottom: 40px; border-top-left-radius: 500px; border-top-right-radius: 200px; border-bottom-right-radius: 932px; border-bottom-left-radius: 73px; padding:10px; background: #000;}
.details-wrapper .back-cta-wrapper > div { max-width: 10px;}
.details-wrapper .back-cta-wrapper > div > img { width: 100%; }

.details-wrapper .panel-divide { display: flex; align-items: flex-start; justify-content: center;}
.details-wrapper .panel-divide .card-details { margin-right: 16px; padding: 20px 16px 35px 16px; border-radius: 3px; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; }
.details-wrapper .panel-divide .card-details .card-details-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;} 
.details-wrapper .panel-divide .card-details .card-details-header .category-tag { background: #57e690; color:#fff; padding: 6px 10px; border-radius: 30px; font-weight: 600 !important; } 
.details-wrapper .panel-divide .card-details .card-details-header .trending-tag { color:#ffbe5b;  font-weight: 600 !important; } 
.details-wrapper .panel-divide .card-details .card-details-title { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 20px;} 
.details-wrapper .panel-divide .card-details .card-details-title .title { color:#cfb995; font-weight: 600 !important; } 
.details-wrapper .panel-divide .card-details .card-details-title .number-tag { color:#cfb995; font-weight: bold !important; } 
.details-wrapper .panel-divide .card-details .card-details-jokelog { font-size: 15px;}

/* likes interaction */
.details-wrapper .panel-divide .interaction-navigation { display: flex; align-items: center; justify-content: space-between; margin-right: 16px; margin-top: 12px; }
.details-wrapper .panel-divide .interaction-navigation .feelings-wrapper { margin-left: 7px; max-width: 100px; width:100%; display: flex; align-items: center; justify-content: space-between;}
.details-wrapper .panel-divide .interaction-navigation .feelings-wrapper .likes-cta-wrapper { text-align: center;}
.details-wrapper .panel-divide .interaction-navigation .feelings-wrapper .likes-cta-wrapper .like-cta {cursor: pointer; background: #57e690;; margin-bottom: 7px; border-radius: 999999px; max-width: 40px; height: 40px; padding: 10px 10px 5px 10px;}
.details-wrapper .panel-divide .interaction-navigation .feelings-wrapper .likes-cta-wrapper .like-cta:active { transform: scale(0.9);}
.details-wrapper .panel-divide .interaction-navigation .feelings-wrapper .likes-cta-wrapper .like-cta > img { width: 100%;}
.details-wrapper .panel-divide .interaction-navigation .feelings-wrapper .likes-cta-wrapper .likes-count { text-align: center; font-size: 14px; font-weight: 500 !important;}

.details-wrapper .panel-divide .interaction-navigation .feelings-wrapper .dislikes-cta-wrapper { text-align: center;}
.details-wrapper .panel-divide .interaction-navigation .feelings-wrapper .dislikes-cta-wrapper .dislike-cta {cursor: pointer; background: #ff5b5b; margin-bottom: 7px; border-radius: 999999px; max-width: 40px; height: 40px; padding: 10px 10px 5px 10px;}
.details-wrapper .panel-divide .interaction-navigation .feelings-wrapper .dislikes-cta-wrapper .dislike-cta:active { transform: scale(0.9);}
.details-wrapper .panel-divide .interaction-navigation .feelings-wrapper .dislikes-cta-wrapper .dislike-cta > img { width: 100%;}
.details-wrapper .panel-divide .interaction-navigation .feelings-wrapper .dislikes-cta-wrapper .dislikes-count { text-align: center; font-size: 14px; font-weight: 500 !important;}

/* prev - next */
.details-wrapper .panel-divide .interaction-navigation .navigation-controls { margin-bottom: -40px; cursor: pointer; display: flex; align-items: center; justify-content: space-between;}
.details-wrapper .panel-divide .interaction-navigation .navigation-controls .nav-cta { border-radius: 3px; border:1px solid #cfb995; transition: 0.4s; display: flex; align-items: center; justify-content: center; padding: 10px 8px; width: 140px;}
.details-wrapper .panel-divide .interaction-navigation .navigation-controls .nav-cta:hover { opacity: 0.5; transition: 0.4s; }
.details-wrapper .panel-divide .interaction-navigation .navigation-controls .nav-cta > div {max-width: 8px; }
.details-wrapper .panel-divide .interaction-navigation .navigation-controls .nav-cta > div > img { width: 100%; margin-bottom: -1px; }
.details-wrapper .panel-divide .interaction-navigation .navigation-controls .nav-cta > span { white-space: nowrap; color:#cfb995; font-weight: bold !important; }


/* top-10 panel */
.details-wrapper .panel-divide .top-10 { padding:30px 16px 25px 16px; border-radius: 3px; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; max-width: 300px; width: 100%; }
.details-wrapper .panel-divide .top-10 .title { font-size: 16px; padding-bottom: 12px;}
.details-wrapper .panel-divide .top-10 > a { font-size: 15px; color:#303030;  line-height: 30px;}
</style>