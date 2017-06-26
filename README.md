# AutoDownloader
It's yet another youtube downloader in a chrome/chromium extension flavour. You can download a current playing youtube song through a drop down menu from the extension or use your voice to say **Download** and it's done.
</br>
Small demo is shown in the following youtube video.
<p align="center">
<a href="https://youtu.be/9F-mzREjV2Y">
<img src="https://img.youtube.com/vi/9F-mzREjV2Y/0.jpg" /> </a>
</p>  


There is a server side file written in Python which uses Flask framework and an opensource library for downloading youtube songs called youtube-dl. Since this program uses youtube-dl you can control if you want to download video or mp3 or high qualties video, you can give all the options made available by youtube-dl.


## Requirements
1. Python2.7 and python package manager - pip
2. Flask - sudo pip install Flask 
3. youtube-dl - sudo pip install youtube-dl

## Usage
1. Install extension in your system as follows:-
* Download the zip from github and extract it or clone the repository.
* Open chrome://extensions in chrome/chromium browser.
* Check on Developer mode.
* Click on Load Unpacked extension and select the extracted folder.
2. Run the server on your system to download song using youtube-dl.
Use the following commands in terminal
* $ `export FLASK_APP=test.py`
* $ `flask run`
</br>What is preferable is to run the program in background on your system startup automatically. I did it using [upstart](https://stackoverflow.com/questions/24518522/run-python-script-at-startup-in-ubuntu).
3. Open a video on youtube. Use your voice command or Download button to download that video.ideo on youtube. Use your voice command or Download button to download that video.
25
</br> 

## Caveats 
* As I told earlier this application works only if a youtube song is being played, that is you can see an audio logo as shown below.<p align="center"><img src="https://github.com/emkay-git/AutoDownloader/blob/master/image2.png"></p>
* Sometimes program fails to download beacuse youtube-dl is not updated. youtube-dl is an active community and puts out update frequently, so if program breaks anytime make sure youtube-dl is updated.</br> Use `sudo pip install --upgrade youtube-dl` in the terminal.
* Make sure you have give access to microphone in the chromium/chrome browser to let download through your voice command. But you can use download button anytime. 


## Suggested Improvement(s)
* test.py file is carelessly written, it works though. It needs to be improved.
* Extension may be used so that for each youtube link we place our cursor on a download option comes up.

## Contribute
Make pull requests, fork it, open issues, suggest new ideas, help make this extension even better.

## License
This project is licensed under [MIT License](https://github.com/emkay-git/AutoDownloader/blob/master/LICENSE).


<!--youtube-dl --extract-audio --audio-format mp3 <video URL> 

-->
