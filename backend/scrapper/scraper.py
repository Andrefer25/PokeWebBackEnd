from bs4 import BeautifulSoup
import requests
import json
import urllib.request as request
from vardec import *
from functions import *

url = 'https://pokemondb.net/pokedex/all'

page_response = requests.get(url, timeout=5)

page_content = BeautifulSoup(page_response.content, "html.parser")

pokemonData = []

pokemonRows = page_content.find_all("tr")
pokemonDict = {}
i = 1

for row in pokemonRows[1:187]:

    statsHtml = row.find_all("td")[4:]
    statsArray = list(map(lambda data: int(data.text), statsHtml))
    typesHtml = row.find_all("a", attrs={"class":"type-icon"})

    typesArray = list(map(lambda data: TYPES.index(data.text), typesHtml))

    number = i

    pknumber = '{:03d}'.format(i)

    name = row.find("a", attrs={"class": "ent-name"}).text

    megaHtml = row.find("small", attrs={"class": "text-muted"})

    if not megaHtml:
        print(name.lower())
        minipk = miniscraper(name)
        img = imgscraper(pknumber)
        infodex = dexinfo(name.lower())
        tipo1 = definetipos(int(typesArray[0]))
        pokemonDict[name] = {
            "name": name,
            "dexnumber": pknumber,
            "type1": tipo1,
            "dexinfo": infodex[0],
            "height": infodex[1],
            "weight": infodex[2],
            "category": infodex[3],
            "pokeimg": img,
            "pokemini": minipk
        }
        if len(typesArray) > 1:
            tipo2 = definetipos(int(typesArray[1]))
            pokemonDict[name]["type2"] = tipo2
        i += 1
        with open('../pokemons.json', 'w') as outfile:
            json.dump(pokemonDict, outfile)
