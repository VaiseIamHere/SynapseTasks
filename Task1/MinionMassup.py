from itertools import combinations

NO_OF_ARTIST = 10

Kevin = {"Halsey", "Taylor Swift", "Mitski", "Joji", "Shawn Mendes", "Sabrina Carpenter","Nicky Minaj", "Conan Gray", 
         "One Direction","Justin Bieber"}
Stuart = {"Kendrick Lamar", "Steve Lacy", "Tyler the Creator", "Joji", "TheWeeknd", "Coldplay", "Kanye West", "Travis Scott", 
          "Frank Ocean", "Brent Faiyaz"}
Bob = {"Conan Gray", "Joji", "Dove Cameron", "Mitski", "Arctic Monkeys", "Steve Lacy", "Kendrick Lamar", "Isabel LaRosa", 
       "Shawn Mendes", "Coldplay", "Lauv"}
Edith = {"Metallica", "Billie Eilish" "TheWeeknd" "Mitski", "NF", "Conan Gray", "Kendrick Lamar", "Nicky Minaj", "Kanye West", "Coldplay"}

def compatible_pairs(L):
    temp_pairs = list(combinations(L,2))
    pairs = []
    for i in temp_pairs:
        a,b = i
        p = len(a & b)/NO_OF_ARTIST * 100
        if p >= 30:
            pairs.append((a,b,p))
    pairs.sort(reverse=True,key= lambda a: a[2])
    return pairs

def print_pairs(L):
    print("Possible pairs are ranked as follows:")
    k = 1
    for i in L:
        if i[0] is Kevin:
            print(f"{k}. (Kevin",end=', ')
            k += 1
        elif i[0] == Stuart:
            print(f"{k}. (Stuart",end=', ')
            k += 1
        elif i[0] == Bob:
            print(f"{k}. (Bob",end=", ")
            k += 1
        else:
            print(f"{k}. (Edith",end=", ")
            k += 1

        if i[1] == Kevin:
            print("Kevin)")
        elif i[1] == Stuart:
            print("Stuart)")
        elif i[1] == Bob:
            print("Bob)")
        else:
            print("Edith)")

DJs = [Kevin, Stuart, Edith, Bob]
DJ_pairs = compatible_pairs(DJs)
print_pairs(DJ_pairs)

"""
<------------------- Output ------------------->

Possible pairs are ranked as follows:
1. (Kevin, Bob)
2. (Stuart, Bob)
3. (Stuart, Edith)
4. (Edith, Bob)
"""
