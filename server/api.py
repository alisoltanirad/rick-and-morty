import json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
import pandas as pd

from server.data import Dataset

bp = Blueprint('api', __name__, url_prefix='/')


@bp.route('/', methods=['GET'])
def characters_all():
    dataframe = get_all_characters()
    characters = []
    for index, row in dataframe.iterrows():
        character = {
            'name': row['name'],
            'status': row['status'],
            'species': row['species'],
            'gender': row['gender'],
            'episode': row['episode']
        }
        characters.append(character)
    return json.dumps({'characters': characters})


@bp.route('/character/<int:id>', methods=['GET'])
def character_by_id(id: int):
    record = get_character_by_id(id)
    try:
        character = {
            'name': record['name'],
            'status': record['status'],
            'species': record['species'],
            'gender': record['gender'],
            'episode': record['episode']
        }
    except:
        character = ['']
    return json.dumps(character)


def get_all_characters():
    return Dataset().characters


def get_character_by_id(char_id: int):
    characters = get_all_characters()
    try:
        character = characters.loc[characters['id'] == char_id].iloc[0, :]
    except:
        character = None
    return character
