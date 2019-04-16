import { Component } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
//import { AppleMusic } from "node_modules/cordova-plugin-applemusic;

declare var MusicKit: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private media: Media,
    private streamingMedia: StreamingMedia,
    private nativeAudio: NativeAudio,
    private iab: InAppBrowser
  ) { 
  }

  logForm() {
    console.log("logform")
    return true;
  }
  auth(){

        let music = MusicKit.configure({
          developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1RNUI0TFJVTVAifQ.eyJpYXQiOjE1NTQ3OTk5NjMsImV4cCI6MTU3MDM1MTk2MywiaXNzIjoiWUs0MlU4ODVCRCJ9.KsYGe2jheTi2tJQAS92FAQIbnfnpNdd0vbjoc4sCF7N3jLzdGRc_GF3a2HDyLTyo0Uez2DLqj-_9BmERHcRB_w',
          app: {
            name: 'My Cool Web App',
            build: '1978.4.1'
          }
        });
        //let ref = this.iab.create("https://idmsa.apple.com/IDMSWebAuth/auth?oauth_token=OATTKNbe56937c-a8db-4eeb-86f7-fb6ead482ad9401d39af3a0858f45ce4638331ba0a85994c5aa08709cab57f0e35462095fed1eec38eaf472ab4db0c84124d2c6f0fd18022760b05a226021365fc915947bb7e8d69b2651feca8744176b38e6b40593a585a47");

        //let form = document.getElementById("music-form");
        //if (form.hasOwnProperty('target')) form['target'] = ref;


        music.authorize().then(function(toke) {
            console.log("yes authorize", toke)
        });

  

    document.getElementById('play').addEventListener('click', () => {
      let url = 'https://itunes.apple.com/us/playlist/pl.d133de76fb4f4ccf98846231899874c0';
      music.setQueue({ url: url }).then(function (queue) {
        console.log(" song", queue.items[0])
          console.log("URL song",queue.items[0].attributes.url)
          // let mediaList = MusicKit.PlayList();
          // mediaList.push(queue.items[0])
          // debugger;

          // let myPlayer = MusicKit.Player();
          // myPlayer.playlist = mediaList;
          // myPlayer.play();
      });
      //  var url = "https://aod-ssl.itunes.apple.com/itunes-assets/Music118/v4/2c/ed/54/2ced548f-50f5-7a10-4eb4-9b2514ed625b/mzaf_A203709340.rmhq.aac.wa.mp4"
      // let url = "http://www.vogelstimmen.info/Vogelstimmen_GRATIS/Raubseeschwalbe_Sterna_caspia_R_AMPLE-E0646.mp3"
      // let options: StreamingAudioOptions = {
      //   successCallback: () => { console.log('Audio played') },
      //   errorCallback: (e) => { console.log('Error streaming',e) },
      //   initFullscreen: false
      // };
      // this.streamingMedia.playAudio(url, options);
      console.log("1music", music)
      music.play();
      debugger;
      console.log("music", music)
    })

    document.getElementById('add').addEventListener('click', () => {
      
      music.setQueue({
        "song": 203709340
      });
    console.log("add", music)
    })

  }
}
