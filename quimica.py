"""--------------------------------------------

**CONVERTIDOR DE GRAMOS A NUMERO DE ATOMOS**
Por:
    Mendoza Martinez Irving
    Tondopo Hernandez Julian Enrique
    Martinez Gonzalez Deysi Nayeli 
    5°"D"

--------------------------------------------"""

import sys

Na = 602214076000000000000000

elementos = {
    "H": 1,
    "He": 4,
    "Li": 7,
    "Be": 9,
    "B": 11,
    "O": 16,
    
    "C": 12

}
atomos = {}
elementos_del_compuesto = []
# Funcion que recibe un string y lo retorna separado en una lista, usando como divisor cuaquier 
# letra mayuscula que se encuentre en el string (incluyendo esa letra en el elemento)
def separar_elementos(compuesto):
    elemento = ""
    i = 0
    lista_de_elementos = []

    for caracter in compuesto:

        if caracter.isupper():
            
            if i == 0:
                elemento = caracter
            else:
                lista_de_elementos.append(elemento)
                elemento = caracter

        else:
            elemento = "".join((elemento,caracter))

        i = i + 1

        if i == len(compuesto):
            lista_de_elementos.append(elemento)

    return lista_de_elementos

# Funcion que recive un compuesto quimico (string) y retorna su masa molecuar (int)
def obtener_masa_molecular(compuesto):
    lista_de_elementos = separar_elementos(compuesto)
    
    masa_molecular_de_elementos = []

    for cadena in lista_de_elementos:

        letras = ""
        numeros = "" 
        
        for caracter in cadena:
            
            if caracter.isalpha():
                letras = letras + caracter

            if caracter.isdigit():
                numeros = numeros + caracter
            
        
        if numeros == "": numeros = "1"
        subindice = int(numeros)
        nombre_de_elemento = letras

        atomos[nombre_de_elemento] = subindice
        elementos_del_compuesto.append(nombre_de_elemento)

        subtotal = elementos[nombre_de_elemento] * subindice
        masa_molecular_de_elementos.append(subtotal)

        
    masa_molecular_de_compuesto = sum(masa_molecular_de_elementos)

    return masa_molecular_de_compuesto


compuesto = input("Compuesto: ")
cantidad = int(input("Cantidad (en gramos): "))

moles = cantidad / obtener_masa_molecular(compuesto)

moleculas = moles * Na
print("Numero de moleculas", moleculas)
print("Numero de atomos: ")
for e in elementos_del_compuesto:
     
    print(e,": ",atomos[e] * moleculas)
