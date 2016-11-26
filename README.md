It's a chrome extension which downloads the current playing song on youtube in Google Chrome via voice command "Download". 
You also have the Menu option where you can turn off the Mic and Download using button click.

There is a server side file written in Python which uses Flask framework and an opensource library for downloading youtbe songs called youtube-dl. So You need to install Python, Flask and youtube-dl on the system.

On Ubuntu:
Download Python: http://askubuntu.com/questions/101591/how-do-i-install-python-2-7-2-on-ubuntu
Download Flask : sudo pip install Flask
Download youtube-dl : sudo pip install youtube-dl

To run the test.py file Use following command on terminal,
$ export FLASK_APP=test.py
$ flask run

