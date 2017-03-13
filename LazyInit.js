;(function(window, undefined) {
    window.LazyInit = function() {
        var settings = {
            ele:'J_lazyload',
            viewWait: 50,
            placeholder:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2QTA4RkM3QUYxQTIxMUU1OEI5OEExNjBDNUM5RkFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2QTA4RkM3QkYxQTIxMUU1OEI5OEExNjBDNUM5RkFCMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZBMDhGQzc4RjFBMjExRTU4Qjk4QTE2MEM1QzlGQUIwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZBMDhGQzc5RjFBMjExRTU4Qjk4QTE2MEM1QzlGQUIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ec5c0wAAAA9JREFUeNpi+PLlC0CAAQAFvALddHJsygAAAABJRU5ErkJggg=='
        };
        var callback = function(ele) {
            var url = ele.getAttribute("data-original");
            ele.src = url;
            ele.classList.remove(settings.ele);
            ele.classList.add("img-show");
        }
        var lazyNodes = document.querySelectorAll("." + settings.ele);
        var lazyLists = [].slice.apply(lazyNodes);
        lazyLists.forEach(function(ele) {
            ele.src = settings.placeholder;
        });
        var windowH = window.innerHeight || document.documentElement.clientHeight;
        var module = (function() {
            var interval = setInterval(function() {
                if(lazyLists.length == 0) {
                    clearInterval(interval);
                }
                lazyLists.forEach(function(ele) {
                    var bound = ele.getBoundingClientRect();
                    if(bound.top < windowH - settings.viewWait) {
                        lazyLists.splice(lazyLists.indexOf(ele), 1);
                        callback(ele);
                    }
                });
            }, 100);
        })();
        return module;
    };
})(window);