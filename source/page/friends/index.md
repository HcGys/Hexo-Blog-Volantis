---
layout: friends     # 必须
seo_title: 友链   # 可选，这是友链页的标题
comments: false
updated: 2022/09/10 11:50
sidebar: []
---

{% p center logo gray, 暂停友链互换。 %}

<style>
.friend-header {
    display: none;
}
</style>

<script>
  function pjax_macy() {
    const nodeList = document.querySelectorAll('.friend-content');
    if(nodeList.length === 0) return;
    nodeList.forEach((element,i) => {
      let container = 'friend-content-' + i;
      load_macy(() => {
        let macy = Macy({
          container: '#' + container.toString(),
          margin: {
            x: 10,
            y: 55
          },
          columns: 6,
          breakAt: {
            1000: {
              columns: 5
            },
            800: {
              columns: 4
            },
            600: {
              columns: 3
            }
          }
        })
        setTimeout(() => {
          macy.reInit();
          if (typeof ScrollReveal === 'function') ScrollReveal().clean('#comments');
          document.getElementById(container).style.opacity = 1;
        }, 500)
      })
    });
  }
  function load_macy(done = null) {
    if(typeof Macy === "undefined") {
      volantis.js("/js/macy.js").then(() => {
        if(done) done();
      })
    } else {
      if(done) done();
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    pjax_macy();
  })
  volantis.pjax.push(pjax_macy);
</script>  

<!-- more -->
