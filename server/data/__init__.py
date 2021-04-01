import pandas as pd


class Dataset:

    def __init__(self):
        self.characters = pd.read_csv('data/characters.csv', delimiter='\t')
