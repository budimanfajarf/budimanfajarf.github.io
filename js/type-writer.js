var TxtType = function(el, period, toRotate, link) {  
    this.el = el;
    this.period = parseInt(period, 10) || 2000;    
    this.toRotate = toRotate;
    this.link = link;    
    this.loopNum = 0;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    this.el.href = this.link[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var period = elements[i].getAttribute('data-period');        
        var toRotate = elements[i].getAttribute('data-type');
        var link = elements[i].getAttribute('data-link');
        if (toRotate) {
          new TxtType(elements[i], period, JSON.parse(toRotate), JSON.parse(link));
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.12em solid #528bff; padding: 4px 0px 4px 4px;}";
    document.body.appendChild(css);
};