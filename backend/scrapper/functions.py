from bs4 import BeautifulSoup
import requests
import cv2
import numpy as np
import urllib.request

def imgscraper(pknum):
    req = urllib.request.Request('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + pknum + '.png')
    response = urllib.request.urlopen(req)
    rr = response.read()
    ba = bytearray(rr)
    image = np.asarray(ba, dtype="uint8")
    image = cv2.imdecode(image, cv2.IMREAD_UNCHANGED)
    cv2.imwrite("../../PokeWeb/src/assets/img/pokemon/" + pknum + ".png", image)
    print("Saved " + pknum + ".png")
    pkimg = "../../PokeWeb/src/assets/img/pokemon/" + pknum + ".png"
    return pkimg


def miniscraper(pkname):
    if pkname == "Nidoran♀":
        pkname = "nidoran-f"
    if pkname == "Nidoran♂":
        pkname = "nidoran-m"
    if pkname == "Farfetch'd":
        pkname = "farfetchd"
    if pkname == "Mr. Mime":
        pkname = "mr-mime"
    nom = pkname.lower()
    req = urllib.request.Request('https://img.pokemondb.net/sprites/sun-moon/icon/' + nom + '.png', headers={'User-Agent': 'Mozilla/5.0'})
    response = urllib.request.urlopen(req)
    rr = response.read()
    ba = bytearray(rr)
    image = np.asarray(ba, dtype="uint8")
    image = cv2.imdecode(image, cv2.IMREAD_UNCHANGED)
    cv2.imwrite("../../PokeWeb/src/assets/img/mini/" + nom + ".png", image)
    minipk = "../../PokeWeb/src/assets/img/mini/" + nom + ".png"
    print("Saved " + nom + ".png")
    return minipk


def dexinfo(pkname):
    if pkname == "nidoran♀":
        pkname = "nidoran-mujer"
    if pkname == "nidoran♂":
        pkname = "nidoran-hombre"
    if pkname == "farfetch'd":
        pkname = "farfetchd"
    if pkname == "mr. mime":
        pkname = "mr-mime"
    url = 'https://www.pokemon.com/es/pokedex/' + pkname
    page_response = requests.get(url, timeout=5)
    page_content = BeautifulSoup(page_response.content, "html.parser")
    info = page_content.find("p", attrs={"class": "version-x"}).text
    atdex = page_content.find_all("span", attrs={"class": "attribute-value"})
    atdexArray = list(map(lambda data: data.text, atdex))
    altura = atdexArray[0]
    peso = atdexArray[1]
    categoria = atdexArray[3]
    return info, altura, peso, categoria

def definetipos(tipo):
    if tipo == 0:
        return "Normal"
    if tipo == 1:
        return "Lucha"
    if tipo == 2:
        return "Volador"
    if tipo == 3:
        return "Veneno"
    if tipo == 4:
        return "Tierra"
    if tipo == 5:
        return "Roca"
    if tipo == 6:
        return "Bicho"
    if tipo == 7:
        return "Fantasma"
    if tipo == 8:
        return "Acero"
    if tipo == 9:
        return "Fuego"
    if tipo == 10:
        return "Agua"
    if tipo == 11:
        return "Planta"
    if tipo == 12:
        return "Eléctrico"
    if tipo == 13:
        return "Psíquico"
    if tipo == 14:
        return "Hielo"
    if tipo == 15:
        return "Dragon"
    if tipo == 16:
        return "Siniestro"
    if tipo == 17:
        return "Hada"
