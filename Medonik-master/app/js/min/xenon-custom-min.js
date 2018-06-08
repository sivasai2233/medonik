function setup_sidebar_menu(){if(public_vars.$sidebarMenu.length){var e=public_vars.$sidebarMenu.find("li:has(> ul)"),n=public_vars.$sidebarMenu.hasClass("toggle-others");e.filter(".active").addClass("expanded"),e.each(function(e,t){var a=jQuery(t),i=a.children("a"),r=a.children("ul");i.on("click",function(e){e.preventDefault(),n&&sidebar_menu_close_items_siblings(a),a.hasClass("expanded")||a.hasClass("opened")?sidebar_menu_item_collapse(a,r):sidebar_menu_item_expand(a,r)})})}}function sidebar_menu_item_expand(e,n){if(!(e.data("is-busy")||e.parent(".main-menu").length&&public_vars.$sidebarMenu.hasClass("collapsed"))){e.addClass("expanded").data("is-busy",!0),n.show();var t=n.children(),a=n.outerHeight(),i=jQuery(window).height(),r=e.outerHeight(),s=public_vars.$sidebarMenu.scrollTop(),o=e.position().top+s,u=public_vars.$sidebarMenu.hasClass("fit-in-viewport");t.addClass("is-hidden"),n.height(0),TweenMax.to(n,sm_duration,{css:{height:a},onUpdate:ps_update,onComplete:function(){n.height("")}});var c=e.data("sub_i_1"),l=e.data("sub_i_2");window.clearTimeout(c),c=setTimeout(function(){t.each(function(e,n){var t=jQuery(n);t.addClass("is-shown")});var n=sm_transition_delay*t.length,a=parseFloat(t.eq(0).css("transition-duration")),i=parseFloat(t.last().css("transition-delay"));a&&i&&(n=1e3*(a+i)),window.clearTimeout(l),l=setTimeout(function(){t.removeClass("is-hidden is-shown")},n),e.data("is-busy",!1)},0),e.data("sub_i_1",c),e.data("sub_i_2",l)}}function sidebar_menu_item_collapse(e,n){if(!e.data("is-busy")){var t=n.children();e.removeClass("expanded").data("is-busy",!0),t.addClass("hidden-item"),TweenMax.to(n,sm_duration,{css:{height:0},onUpdate:ps_update,onComplete:function(){e.data("is-busy",!1).removeClass("opened"),n.attr("style","").hide(),t.removeClass("hidden-item"),e.find("li.expanded ul").attr("style","").hide().parent().removeClass("expanded"),ps_update(!0)}})}}function sidebar_menu_close_items_siblings(e){e.siblings().not(e).filter(".expanded, .opened").each(function(e,n){var t=jQuery(n),a=t.children("ul");sidebar_menu_item_collapse(t,a)})}function setup_horizontal_menu(){if(public_vars.$horizontalNavbar=public_vars.$body.find(".navbar.horizontal-menu"),public_vars.$horizontalMenu=public_vars.$horizontalNavbar.find(".navbar-nav"),public_vars.$horizontalMenu.length){var e=public_vars.$horizontalMenu.find("li:has(> ul)"),n=public_vars.$horizontalNavbar.hasClass("click-to-expand");n&&$(".main-content, .sidebar-menu").on("click",function(n){e.removeClass("hover")}),e.each(function(t,a){var i=jQuery(a),r=i.children("a"),s=i.children("ul"),o=i.parent().is(".navbar-nav");i.addClass("has-sub"),r.on("click",function(e){isxs()&&(e.preventDefault(),0||sidebar_menu_close_items_siblings(i),i.hasClass("expanded")||i.hasClass("opened")?sidebar_menu_item_collapse(i,s):sidebar_menu_item_expand(i,s))}),n?r.on("click",function(n){if(n.preventDefault(),!isxs())if(o)e.filter(function(e,n){return jQuery(n).parent().is(".navbar-nav")}).not(i).removeClass("hover"),i.toggleClass("hover");else{var t;0==i.hasClass("expanded")?(i.addClass("expanded"),s.addClass("is-visible"),t=s.outerHeight(),s.height(0),TweenLite.to(s,.15,{css:{height:t},ease:Sine.easeInOut,onComplete:function(){s.attr("style","")}}),i.siblings().find("> ul.is-visible").not(s).each(function(e,n){var a=jQuery(n);t=a.outerHeight(),a.removeClass("is-visible").height(t),a.parent().removeClass("expanded"),TweenLite.to(a,.15,{css:{height:0},onComplete:function(){a.attr("style","")}})})):(t=s.outerHeight(),i.removeClass("expanded"),s.removeClass("is-visible").height(t),TweenLite.to(s,.15,{css:{height:0},onComplete:function(){s.attr("style","")}}))}}):i.hoverIntent({over:function(){isxs()||(o?i.addClass("hover"):(s.addClass("is-visible"),sub_height=s.outerHeight(),s.height(0),TweenLite.to(s,.25,{css:{height:sub_height},ease:Sine.easeInOut,onComplete:function(){s.attr("style","")}})))},out:function(){isxs()||(o?i.removeClass("hover"):(sub_height=s.outerHeight(),i.removeClass("expanded"),s.removeClass("is-visible").height(sub_height),TweenLite.to(s,.25,{css:{height:0},onComplete:function(){s.attr("style","")}})))},timeout:200,interval:o?10:100})})}}function ps_update(e){if(!isxs()&&jQuery.isFunction(jQuery.fn.perfectScrollbar)){if(public_vars.$sidebarMenu.hasClass("collapsed"))return;public_vars.$sidebarMenu.find(".sidebar-menu-inner").perfectScrollbar("update"),e&&(ps_destroy(),ps_init())}}function ps_init(){if(!isxs()&&jQuery.isFunction(jQuery.fn.perfectScrollbar)){if(public_vars.$sidebarMenu.hasClass("collapsed")||!public_vars.$sidebarMenu.hasClass("fixed"))return;public_vars.$sidebarMenu.find(".sidebar-menu-inner").perfectScrollbar({wheelSpeed:1,wheelPropagation:public_vars.wheelPropagation})}}function ps_destroy(){jQuery.isFunction(jQuery.fn.perfectScrollbar)&&public_vars.$sidebarMenu.find(".sidebar-menu-inner").perfectScrollbar("destroy")}function cbr_replace(){var e=jQuery('input[type="checkbox"].cbr, input[type="radio"].cbr').filter(":not(.cbr-done)"),n='<div class="cbr-replaced"><div class="cbr-input"></div><div class="cbr-state"><span></span></div></div>';e.each(function(e,t){var a=jQuery(t),i=a.is(":radio"),r=a.is(":checkbox"),s=a.is(":disabled"),o=["primary","secondary","success","danger","warning","info","purple","blue","red","gray","pink","yellow","orange","turquoise"];if(i||r){a.after(n),a.addClass("cbr-done");var u=a.next();u.find(".cbr-input").append(a),i&&u.addClass("cbr-radio"),s&&u.addClass("cbr-disabled"),a.is(":checked")&&u.addClass("cbr-checked"),jQuery.each(o,function(e,n){var t="cbr-"+n;a.hasClass(t)&&(u.addClass(t),a.removeClass(t))}),u.on("click",function(e){i&&a.prop("checked")||u.parent().is("label")||0==jQuery(e.target).is(a)&&(a.prop("checked",!a.is(":checked")),a.trigger("change"))}),a.on("change",function(e){u.removeClass("cbr-checked"),a.is(":checked")&&u.addClass("cbr-checked"),cbr_recheck()})}})}function cbr_recheck(){var e=jQuery("input.cbr-done");e.each(function(e,n){var t=jQuery(n),a=t.is(":radio"),i=t.is(":checkbox"),r=t.is(":disabled"),s=t.closest(".cbr-replaced");r&&s.addClass("cbr-disabled"),a&&!t.prop("checked")&&s.hasClass("cbr-checked")&&s.removeClass("cbr-checked")})}function attrDefault(e,n,t){return"undefined"!=typeof e.data(n)?e.data(n):t}function date(e,n){var t=this,a,i,r=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"],s=/\\?(.?)/gi,o=function(e,n){return i[e]?i[e]():n},u=function(e,n){for(e=String(e);e.length<n;)e="0"+e;return e};return i={d:function(){return u(i.j(),2)},D:function(){return i.l().slice(0,3)},j:function(){return a.getDate()},l:function(){return r[i.w()]+"day"},N:function(){return i.w()||7},S:function(){var e=i.j(),n=e%10;return 3>=n&&1==parseInt(e%100/10,10)&&(n=0),["st","nd","rd"][n-1]||"th"},w:function(){return a.getDay()},z:function(){var e=new Date(i.Y(),i.n()-1,i.j()),n=new Date(i.Y(),0,1);return Math.round((e-n)/864e5)},W:function(){var e=new Date(i.Y(),i.n()-1,i.j()-i.N()+3),n=new Date(e.getFullYear(),0,4);return u(1+Math.round((e-n)/864e5/7),2)},F:function(){return r[6+i.n()]},m:function(){return u(i.n(),2)},M:function(){return i.F().slice(0,3)},n:function(){return a.getMonth()+1},t:function(){return new Date(i.Y(),i.n(),0).getDate()},L:function(){var e=i.Y();return e%4===0&e%100!==0|e%400===0},o:function(){var e=i.n(),n=i.W(),t=i.Y();return t+(12===e&&9>n?1:1===e&&n>9?-1:0)},Y:function(){return a.getFullYear()},y:function(){return i.Y().toString().slice(-2)},a:function(){return a.getHours()>11?"pm":"am"},A:function(){return i.a().toUpperCase()},B:function(){var e=3600*a.getUTCHours(),n=60*a.getUTCMinutes(),t=a.getUTCSeconds();return u(Math.floor((e+n+t+3600)/86.4)%1e3,3)},g:function(){return i.G()%12||12},G:function(){return a.getHours()},h:function(){return u(i.g(),2)},H:function(){return u(i.G(),2)},i:function(){return u(a.getMinutes(),2)},s:function(){return u(a.getSeconds(),2)},u:function(){return u(1e3*a.getMilliseconds(),6)},e:function(){throw"Not supported (see source code of date() for timezone on how to add support)"},I:function(){var e=new Date(i.Y(),0),n=Date.UTC(i.Y(),0),t=new Date(i.Y(),6),a=Date.UTC(i.Y(),6);return e-n!==t-a?1:0},O:function(){var e=a.getTimezoneOffset(),n=Math.abs(e);return(e>0?"-":"+")+u(100*Math.floor(n/60)+n%60,4)},P:function(){var e=i.O();return e.substr(0,3)+":"+e.substr(3,2)},T:function(){return"UTC"},Z:function(){return 60*-a.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(s,o)},r:function(){return"D, d M Y H:i:s O".replace(s,o)},U:function(){return a/1e3|0}},this.date=function(e,n){return t=this,a=void 0===n?new Date:new Date(n instanceof Date?n:1e3*n),e.replace(s,o)},this.date(e,n)}var public_vars=public_vars||{};!function($,e,n){"use strict";$(document).ready(function(){$("body").on("click",'a[rel="go-top"]',function(n){n.preventDefault();var t={pos:$(e).scrollTop()};TweenLite.to(t,.3,{pos:0,ease:Power4.easeOut,onUpdate:function(){$(e).scrollTop(t.pos)}})}),$("body").on("click",'.panel a[data-toggle="remove"]',function(e){e.preventDefault();var n=$(this).closest(".panel"),t=n.parent();n.remove(),0==t.children().length&&t.remove()}),$("body").on("click",'.panel a[data-toggle="reload"]',function(e){e.preventDefault();var n=$(this).closest(".panel");n.append('<div class="panel-disabled"><div class="loader-1"></div></div>');var t=n.find(".panel-disabled");setTimeout(function(){t.fadeOut("fast",function(){t.remove()})},500+1500*Math.random())}),$("body").on("click",'.panel a[data-toggle="panel"]',function(e){e.preventDefault();var n=$(this).closest(".panel");n.toggleClass("collapsed")}),$("[data-loading-text]").each(function(e,n){var t=$(n);t.on("click",function(e){t.button("loading"),setTimeout(function(){t.button("reset")},1800)})})})}(jQuery,window);var sm_duration=.2,sm_transition_delay=150;