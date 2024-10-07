import React from "react"

const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site coding<em>My Portfolio</em>
        </h2>
        <div className="site__wrap">
          <article className="site__item s1">
            <span className="num">1.</span>
            <div className="text">
              <div>make</div>
              <div>site compliant width</div>
              <div>webstandard</div>
            </div>
            <h3 className="tite">웹 표준을 준수한 사이트 제작</h3>
            <div className="btn">
              <a href="https://github.com/kekesky5147/websiteproject">code</a>
            </div>
            <div className="info">
              <span>site coding</span>
              <span>production period : two days</span>
              <span>use stack : html5/css3, CSS variable, Vite</span>
            </div>
          </article>
          <acrticle className="site__item s2">
            <span className="num">2.</span>
            <div className="text">
              <div>Make</div>
              <div>Cryptoplace app</div>
              <div>react.js</div>
            </div>
            <h3 className="title"> Make website from React</h3>
            <div className="btn">
              <a href="https://github.com/kekesky5147/cryptoplace">code</a>
            </div>
            <div className="info">
              <span>site coding</span>
              <span>production period : 2 weeks</span>
              <span>use stack : React, CSS Variable</span>
            </div>
          </acrticle>
          <article className="site__item s3">
            <span className="num">3.</span>
            <div className="text">
              <div>Make</div>
              <div>Weather app with</div>
              <div>React.js</div>
            </div>
            <h3 className="title">Make website from React</h3>
            <div className="btn">
              <a href="https://github.com/kekesky5147/weather-app">code</a>
            </div>
            <div className="info">
              <span>site coding</span>
              <span>production period : 2weeks</span>
              <span>use stack : React, CSS Variable, vite</span>
            </div>
          </article>
          <acrticle className="site__item s4">
            <span className="num">4.</span>
            <div className="text">
              <div>Make</div>
              <div>Todo list app</div>
              <div>React.js</div>
            </div>
            <h3>Make website from React</h3>
            <div className="btn">
              <a href="https://github.com/kekesky5147/todo-app">code</a>
            </div>
            <div className="info">
              <span>site coding</span>
              <span>production period : 1week</span>
              <span>use stack : React.js, CSS Varible</span>
            </div>
          </acrticle>
        </div>
      </div>
    </section>
  )
}

export default Site
