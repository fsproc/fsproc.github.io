/* fs media renderer JS functions based on video.js */

async function fsplayVideo(url) {
    var vidsrc = document.getElementById('fsplayer-src');
    var vid = document.getElementById("fsplayer");
    var player = videojs(vid, {
        controlBar: {
            children: [
                'playToggle',
                'volumePanel',
                'currentTimeDisplay',
                'timeDivider',
                'durationDisplay',
                'progressControl',
                'liveDisplay',
                'remainingTimeDisplay',
                'customControlSpacer',
                'playbackRateMenuButton',
                'chaptersButton',
                'descriptionsButton',
                'subtitlesButton',
                'captionsButton',
                'subsCapsButton',
                'audioTrackButton',
                'fullscreenToggle'
            ]
        },
        disablePictureInPicture: true,
        height: "480",
        width: "640",
        preload: "auto",
        //autoplay: 'muted',
    });
    player.src({
        type: 'video/mp4',
        src: url
    });
    player.play();
}

async function fsplayDispose() {
    var vid = document.getElementById("fsplayer");
    videojs(vid).dispose();
}
