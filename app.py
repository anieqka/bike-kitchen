from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/community')
def community():
    return render_template('community.html')

@app.route('/bike_kitchens')
def bike_kitchens():
    return render_template('bike_kitchens.html')

@app.route('/how_we_help')
def how_we_help():
    return render_template('how_we_help.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/orphaned_bikes')
def orphaned_bikes():
    return render_template('orphaned_bikes.html')


if __name__ == '__main__':
    app.run(debug=True)