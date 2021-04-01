import pandas as pd


class Dataset:

    def __init__(self):
        self.characters = pd.read_csv(
            'server/data/characters.csv', delimiter='\t'
        )
