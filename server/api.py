import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

from server.data import Dataset

bp = Blueprint('api', __name__, url_prefix='/')


@bp.route('/', methods=['GET'])
def characters():
    return 'Characters Placeholder!'


@bp.route('/character/<int:id>', methods=['GET'])
def character_by_id(id: int):
    return 'Character {id} Placeholder!'.format(id=id)


def get_characters():
    return Dataset().characters


def get_character_by_id(char_id: int):
    characters = get_characters()
    return characters.loc[characters['id'] == char_id]
