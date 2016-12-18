import React from 'react';

const PortfolioContent = {
  dota2: {
    title: 'Indonesian DotA 2 Tournaments List',
    img: 'assets/img/dota2.png',
    text() {
      return (
        <div>
          <a href="https://imballinst.github.io/d2l">Indonesian Dota 2 Tournament List</a> is my static page built using AngularJS and Bootstrap. 
          I frequently compete in a lot of Indonesian tournaments and sometimes SEA tournaments, so I decided to develop this page to make me easier to sort out things, getting the most beneficial tournaments for my team.

          <b>Development date</b>: July 2015<br />
          <b>Used technologies</b>:
            <ol>
              <li>Heroku (Python, server)</li>
              <li>HTML5 and CSS3</li>
              <li>Twitter Bootstrap</li>
              <li>AngularJS 1</li>
            </ol>
        </div>
      );
    }
  },
  go2015: {
    title: 'Ganesha Open 2015',
    img: 'assets/img/go2015.jpg',
    text() {
      return (
        <div>
          <p><a href="https://ganeshaopen15.appspot.com/">Ganesha Open 2015</a> is an National Indoor Archery Tournament which is held every two years. 
          Organized by <a href="https://www.facebook.com/Pasopati.ITB.Archery">Pasopati Archery Unit</a>, this event is currently the biggest national indoor archery tournament in Indonesia.</p>

          <b>Development date</b>: January - August 2015<br />
          <b>Used technologies</b>:
            <ol>
              <li>Google App Engine (Python, server)</li>
              <li>HTML5 and CSS3</li>
              <li>Twitter Bootstrap</li>
              <li>Google Datastore</li>
            </ol>
        </div>
      );
    }
  },
  rtd: {
    title: 'RIP THE DREAM DotA2 Team',
    img: 'assets/img/rtd.png',
    text() {
      return (
        <div>
          <p><a href="https://imballinst.github.io/rtdota2">RIP THE DREAM</a> was my DotA 2 team. We competed in most tournaments in Indonesia. 
          I developed this page to promote my team and to increase my front-end skills especially in screen compatibility.</p>

          <b>Development date</b>: April 2016<br />
          <b>Used technologies</b>:
            <ol>
              <li>HTML5 and CSS3</li>
              <li>Twitter Bootstrap</li>
              <li>Javascript</li>
            </ol>
        </div>
      );
    }
  },
  jsTimezone: {
    title: 'Javascript Timezone',
    img: 'assets/img/javascript-timezone.jpg',
    text() {
      return (
        <div>
          <p><a href="https://imballinst.github.io/javascript-timezone">Javascript Timezone</a> is a page to trace all time zones on the Earth.</p>

          <b>Development date</b>: April 2016<br />
          <b>Used technologies</b>:
            <ol>
              <li>HTML5 and CSS3</li>
              <li>Twitter Bootstrap</li>
              <li>Javascript</li>
            </ol>
        </div>
      );
    }
  }
};

export default PortfolioContent;