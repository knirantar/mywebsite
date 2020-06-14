class Professor():
    def __init__(self,profId,profName,subjectsDict):
        self.profId = profId
        self.profName = profName
        self.subjectsDict = subjectsDict

class University():
    def getTotalExperience(self,profList,profId):
        result = 0
        for item in profList:
            profId = int(profId)
            if item.profId == profId:
                for exp in item.subjectsDict.values():
                    reult = result+exp
        return result

    def selectSeniorProfessorBySubject(self,profList,subjectName):
        result= -9
        found = False
        obj=None
        for item in profList:
            if item.subjectsDict[subjectName.upper()]>= result:
                result = item.subjectsDict[subjectName.upper()]
                found = True
                obj = item
        if found == False:
            return 'None'
        else:
            return str(obj.profId)+" "+ obj.profName+" "+str(obj.subjectsDict)
if __name__ =="__main__":
    T = int(input().strip())
    profObjects = []
    while T>0:
        profId = int(input())
        profName = input().strip()
        numSubjects = int(input().strip())
        subjectsDict = {}

        while numSubjects > 0:
            subjectName = input().strip()
            exp = int(input().strip())
            subjectsDict[subjectName.upper()] = exp
            numSubjects = numSubjects - 1

        obj = Professor(profId,profName,subjectsDict)
        profObjects.append(obj)
        T = T-1
    profSearch = input().strip()
    subjectSearch = input().strip()
    obj = University()
    print(obj.getTotalExperience(profObjects,profSearch))
    print(obj.selectSeniorProfessorBySubject(profObjects,subjectSearch))
