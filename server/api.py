from data import Dataset


def get_characters():
    return Dataset().characters


def get_character_by_id(char_id: int):
    characters = get_characters()
    return characters.loc[characters['id'] == char_id]
