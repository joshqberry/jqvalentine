// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .





        function CustomAlert(){
            this.render = function(dialog){
                var winW = window.innerWidth;
                var winH = window.innerHeight;
                var dialogoverlay = document.getElementById('dialogoverlay');
                var dialogbox = document.getElementById('dialogbox');
                dialogoverlay.style.display = "block";
                dialogoverlay.style.height = winH+"px";
                dialogbox.style.left = (winW/2) - (550 * .5)+"px";
                dialogbox.style.top = "100px";
                dialogbox.style.display = "block";
                document.getElementById('dialogboxhead').innerHTML = "Error";
                document.getElementById('dialogboxbody').innerHTML = dialog;
                document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok(); return false">OK</button>';



        }
          this.ok = function(){
            document.getElementById('dialogbox').style.display = "none";
            document.getElementById('dialogoverlay').style.display = "none";
          }
        }
        var Alert = new CustomAlert();


        function CustomAlert2(){
            this.render = function(dialog2){
                var winW = window.innerWidth;
                var winH = window.innerHeight;
                var dialog2overlay = document.getElementById('dialog2overlay');
                var dialog2box = document.getElementById('dialog2box');
                dialog2overlay.style.display = "block";
                dialog2overlay.style.height = winH+"px";
                dialog2box.style.left = (winW/2) - (550 * .5)+"px";
                dialog2box.style.top = "100px";
                dialog2box.style.display = "block";
                document.getElementById('dialog2boxhead').innerHTML = "Thank you";
                document.getElementById('dialog2boxbody').innerHTML = dialog2;
                document.getElementById('dialog2boxfoot').innerHTML = '<button onclick="Alert2.ok(); return false">OK</button>';

        }
          this.ok = function(){
            document.getElementById('dialog2box').style.display = "none";
            document.getElementById('dialog2overlay').style.display = "none";
            window.location.href = "valentine";
          }
        }
        var Alert2 = new CustomAlert2();


        function LovesMeLovesMeNot() {
                if (document.getElementById('r4').checked) {
                Alert.render('Your feelings are not valid.'); return false;
              } else {Alert2.render('Your feelings have been validated.'); return false;
              }
              }
