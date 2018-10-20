
from flask import (Flask, request, render_template, redirect, flash, session,jsonify)
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.secret_key = 'ABC'

@app.route('/')
def main_page():
    '''renders main page '''

    return render_template('main.html')




if __name__ == '__main__':
    app.debug = True
    app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
    DebugToolbarExtension(app)
    #connect_to_db(app)
    app.run(port=5000, host="0.0.0.0")