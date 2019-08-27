
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        let audio = document.getElementById("audio");
        audio.loop = true;
        audio.load();
        var duracao = 180;
        var min_inic = Math.floor(duracao / 60);
        var seg_inic = Math.floor(duracao % 60);
        $('#tempo').innerText = min_inic + ":" + seg_inic;

        function $(item){
            return document.querySelector(item);
        }

        function limpar(){
            var min_inic = Math.floor(duracao / 60);
            var seg_inic = Math.floor(duracao % 60);
            $('#tempo').innerText = min_inic + ":" + seg_inic;
            let eu = document.getElementById("botao");
            if(!audio.paused){audio.pause();}
            eu.classList.remove("pause");
            eu.classList.add("play");
            audio.currentTime = 0;
        }


        $('#btn_menu').addEventListener("click", function(){
            $('#menu').style.left = "0%";
        });
        $('#btn_fechar').addEventListener("click", function(){
            $('#menu').style.left = "100%";
        });


        $("#botao").addEventListener("click", function(){
            let eu = document.getElementById("botao");
            if(audio.paused){
                audio.play();
                eu.classList.remove("play");
                eu.classList.add("pause");
            }else{
                audio.pause();
                eu.classList.remove("pause");
                eu.classList.add("play");
            }
        });

        audio.addEventListener("timeupdate", function(){
            let restante = duracao - audio.currentTime;
            let minutos = Math.floor(restante / 60);
            let segundos = Math.floor(restante % 60);
            $('#tempo').innerText = minutos + ":" + segundos;

            if(minutos == 0 && segundos == 0){
                limpar();
            }
        });

        $('#mais_cinco').addEventListener("click", function(){
            duracao = duracao + 300;
        });

        $('#btn_3').addEventListener("click", function(){
            duracao = 180;
            audio.load();
            limpar();
            $('#container-tempo>.atual').classList.remove("atual");
            this.classList.add("atual");
        });
        $('#btn_5').addEventListener("click", function(){
            duracao = 300;
            audio.load();
            limpar();
            $('#container-tempo>.atual').classList.remove("atual");
            this.classList.add("atual");
        });
        $('#btn_10').addEventListener("click", function(){
            duracao = 600;
            audio.load();
            limpar();
            $('#container-tempo>.atual').classList.remove("atual");
            this.classList.add("atual");
        });

        $('#btn_chuva').addEventListener("click", function(){
            audio.src = window.location + "/audio/chuva.mp3"
            audio.load();
            limpar();
            $('#container-som>.atual').classList.remove("atual");
            this.classList.add("atual");
        });

        $('#btn_praia').addEventListener("click", function(){
            audio.src = window.location + "/audio/praia.mp3"
            audio.load();
            limpar();
            $('#container-som>.atual').classList.remove("atual");
            this.classList.add("atual");
        });

        $('#btn_fogueira').addEventListener("click", function(){
            audio.src = window.location + "/audio/fogueira.mp3"
            audio.load();
            limpar();
            $('#container-som>.atual').classList.remove("atual");
            this.classList.add("atual");
        });

        $('#btn_vol-1').addEventListener("click",function(){
            audio.volume = 0.2;
            $('#container-volume>.atual').classList.remove("atual");
            this.classList.add("atual");
        });
        $('#btn_vol-2').addEventListener("click",function(){
            audio.volume = 0.4;
            $('#container-volume>.atual').classList.remove("atual");
            this.classList.add("atual");
        });
        $('#btn_vol-3').addEventListener("click",function(){
            audio.volume = 0.6;
            $('#container-volume>.atual').classList.remove("atual");
            this.classList.add("atual");
        });
        $('#btn_vol-4').addEventListener("click",function(){
            audio.volume = 0.8;
            $('#container-volume>.atual').classList.remove("atual");
            this.classList.add("atual");
        });
        $('#btn_vol-5').addEventListener("click",function(){
            audio.volume = 1.0;
            $('#container-volume>.atual').classList.remove("atual");
            this.classList.add("atual");
        });
    }
};







