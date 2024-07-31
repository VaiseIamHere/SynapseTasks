gadgets = [
    ("Z",6,True),
    ("Explosive Batarangs", 3, True), 
    ("Batarangs", 5, True), 
    ("Smoke Pellets", 0, False), 
    ("Tear Gas Grenades", 2, True), 
    ("Night Vision Goggles", 1, True),
    ("E",6,True),
    ("Batclaw", 0, False), 
    ("Grapple Gun", 3, True), 
    ("Batsignal", 0, False), 
    ("Utility Belt", 1, True),
    ("A",6,True),
    ("Batmobile Tires", 4, True)
]

def sort_gadgets(L):
    L.sort()
    L.sort(reverse=True,key= lambda a: a[1])

def print_priority(L):
    print("Batman's priority list is here, anything for Batman :)\n")
    for i,j in enumerate(L,1):
        print(f'{i}. {j[0]}')

sort_gadgets(gadgets)
print_priority(gadgets)

"""
<----------------- Output ----------------->

Batman's priority list is here, anything for Batman :)

1. A
2. E
3. Z
4. Batarangs
5. Batmobile Tires
6. Explosive Batarangs
7. Grapple Gun
8. Tear Gas Grenades
9. Night Vision Goggles
10. Utility Belt
11. Batclaw
12. Batsignal
13. Smoke Pellets
"""