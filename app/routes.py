from app import app
from flask import render_template, request, jsonify
import csv


# -------- Visable routes
@app.route('/')
def index():
    return render_template('home.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/gallery_concept')
def gallery1():
    return render_template('gallery_concept.html')

@app.route('/gallery_vector')
def gallery2():
    return render_template('gallery_vector.html')


