request_spending = {
    "Mahek": {
        "balance": 3000.00,
        "transactions": [
            {"amount": -9000.00, "category": "Creatives"},
            {"amount": 7000.00, "category": "Sponsor"},
            {"amount": -2000.00, "category": "Prize-Money"}
        ]
    },
    "Arham": {
        "balance": 5000.00,
        "transactions": [
            {"amount": 8000.00, "category": "Stalls"},
            {"amount": 7500.00, "category": "Seminars"}
        ]
    },
    "Unnati": {
        "balance": 3500.00,
        "transactions": [
            {"amount": -5000.00, "category": "Attraction"},
            {"amount": 2500.00, "category": "Promo"},
            {"amount": -900.00, "category": "Lighting"},
            {"amount": -3000.00, "category": "Games"}
        ]
    },
    "Gaurang": {
        "balance": 2000.00,
        "transactions": [
            {"amount": 1500.00, "category": "Website"},
            {"amount": -1000.00, "category": "C2C"},
            {"amount": -500.00, "category": "Posters"}
        ]
    }
}

def total_spending(L,acc_id,category):
    spend = 0
    is_there = False
    for i in L[acc_id]["transactions"]:
        if i["category"] == category:
            is_there = True
            spend += i["amount"]
    if is_there:
        if spend > 0:
            return spend,False
        else:
            return -spend,True
    return  None,None
    
def account_balance(L, acc_id):
    return L[acc_id]["balance"]

def money_owed(L, acc_id):
    owed = L[acc_id]["balance"]
    for i in L[acc_id]["transactions"]:
        owed -= i["amount"]
    return owed

def run():
    sample = ["Unnati", "Arham", "Gaurang", "Mahek"]
    while True:
        i = input("Look Record for: ")
        if i not in sample:
            print("Enter Valid Account !!!\n")
            continue
        print(f"Record for {i}:")
        while True:
            cat = input(f"Enter category for {i}: ")
            amount,spend = total_spending(request_spending, i, cat)
            if amount == None:
                print("Enter Valid Category !!!\n")
            else:
                break
        if spend:
            print("\tTotal spending = ",amount)
        else:
            print("\tEarned = ",amount)
        print("\tAcc Bal = ",account_balance(request_spending,i))
        print("\tMoney Owed = ",money_owed(request_spending,i),'\n')
        option = input('1 for Continue\nAnything for Exit\n')
        if option == "1":
            continue
        else:
            break

run()

"""
<--------------- Output --------------->

Look Record for: Gaurang
Record for Gaurang:
Enter category for Gaurang: Website
        Earned =  1500.0
        Acc Bal =  2000.0
        Money Owed =  2000.0 

1 for Continue
Anything for Exit
1
Look Record for: Unnat
Enter Valid Account !!!

Look Record for: Unnati
Record for Unnati:
Enter category for Unnati: At
Enter Valid Category !!!

Enter category for Unnati: Attraction
        Total spending =  5000.0
        Acc Bal =  3500.0
        Money Owed =  9900.0 

1 for Continue
Anything for Exit
a

"""