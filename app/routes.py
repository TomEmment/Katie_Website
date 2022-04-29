from app import app
from flask import render_template, request, jsonify
import csv


# -------- Visable routes
@app.route('/')
def index():
    return "You Shouldnt be here"

@app.route('/home')
def home():
    return render_template('home.html')




