customers = [[5,2],[5,4],[10,3],[20,1]]

def average_waiting_time(L):
    current_time = L[0][0]
    wait_time = 0
    for i in L:
        if current_time <= i[0]:
            wait_time += i[1]
            current_time = i[0] + i[1]
        else:
            wait_time += (current_time - i[0] + i[1])
            current_time += i[1]
    return wait_time/len(L)

print("Average waiting time is: ",average_waiting_time(customers))

# Output:
#   Average waiting time is:  3.25