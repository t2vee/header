window.onload = function() {
    var headerHtml = `
          <div class="header" id="header">
                <a target="_blank" href="https://t2v.city"><img class="logo" style="height: 20px;margin:3px;" src="https://cdn.t2v.city/content/KQgCslvqJtiMCkBKQmZp/t2v.ch/img/t2v_logo.webp" alt="logo" /></a>
                <a target="_blank" href="https://archive.t2v.city"><img class="logo" style="height: 20px; padding-top: 5px;" src="https://cdn.t2v.city/content/KQgCslvqJtiMCkBKQmZp/t2v.ch/img/mirrorservices.png" alt="logo" /></a>
                <p class="text-align">This site is provided by t2v online services. For support please email (me [at] t2v [dot] ch).</p>
                <div class="right-container">
                    <a onclick="disableBanner()" style="cursor: pointer"><p class="text-align">Turn off this banner!</p></a>
                    <a target="_blank" href="https://t2v.city/legal#privacy-policy"><p class="text-align">Privacy Policy</p></a>
                    <a target="_blank" href="https://t2v.city/legal#terms-of-service"><p class="text-align">Terms of Service</p></a>
                    <a target="_blank" href="https://nodes.t2v.city" style="color: lime;text-decoration: none !important;"><p class="text-align">services are online</p></a>
                </div>    
          </div>
        `;
    document.body.insertAdjacentHTML('beforeend', headerHtml);
    var headerCss = `
          @font-face {
              font-family: Asap;
              src: url('https://cdn.t2v.city/content/KQgCslvqJtiMCkBKQmZp/t2v.city/fonts/Asap-Regular.woff');
          }
          .header {
            font-family: Asap;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: black;
            color: #fff;
            height: 30px;
            max-height: 30px;
            display: flex;
            justify-content: flex-start;
            border-bottom: 1px white solid;
            padding: 0 0 0 17px;
            overflow: hidden;
          }
          .header a {
            color: white;
            text-decoration: underline;
            display: inline-block;
          }
          .header a:hover {
              color: grey;
              text-decoration: none; 
          }
          .text-align {
            margin:7px 0 0 30px;
            white-space: nowrap;
          }
          .right-container {
                  width: 100%;
                  text-align: right;
                  position: relative;
                  right: 40px;
          }
        `;
    var style = document.createElement('style');
    style.innerHTML = headerCss;
    document.head.appendChild(style);
}

function disableBanner() {
    document.getElementById('header').style.display = 'none';
}
