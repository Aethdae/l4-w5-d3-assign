import os

def get_origins():
    defaultRet = ["http://localhost:*", "http://127.0.0.1:*"]

    print("Adding origins..")

    with open("origins.txt", "r") as file:
        if file.readline() == "":
            print("EOF reached, loading defaults.")
            return defaultRet

    retList = []
        
    with open("origins.txt", "r") as file:
        for line in file.readlines():
            if line.endswith("\n"):
                line = line.replace("\n", "")

            retList.append(line)
            
        print(f"Origins added: {retList.__str__()}")
        return retList
    
    print("Error reading from file, loading defaults.")
    return defaultRet