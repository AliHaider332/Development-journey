import pandas as pd
import numpy as np

# s=pd.Series([77,88,99,100,101])


# index = ["apple", "banana", "grapes", "orange", "strawberry"]
# s.index=index
# print(s)


# print(s.iloc[2:5])
# print(s.loc['grapes':'strawberry'])


# fruit_protein = {
#     "Avocado": 2.0,       # grams of protein
#     "Guava": 2.6,
#     "Blackberries": 2.0,
#     "Oranges": 0.9,
#     "Banana": 1.1,
#     "Apples": 0.3,
#     "Kiwi": 1.1,
#     "Pomegranate": 1.7,
#     "Mango": 0.8,
#     "Cherries": 1.0
# }

# s=pd.Series(fruit_protein,name='DATA')

# s1=s[(s>0.5) & (s<2)]
# print(s1)






data = {
    "Name": ["Alice", "Bob", "Charlie", "David", "Eve", "Alice"],
    "Age": [25, 30, 35, np.nan, 29, 25],
    "Department": ["HR", "IT", "Finance", "IT", "HR", "HR"],
    "Salary": [50000, 60000, 70000, 62000, np.nan, 50000]
}
DATA1=pd.DataFrame(data)

department_info = {
    "Dept": ["HR", "IT", "Finance"],
    "Location": ["New York", "San Francisco", "Chicago"],
    "Manager": ["Laura", "Steve", "Nina"]
}
DATA2=pd.DataFrame(department_info);


DATA1.rename(columns={'Department':'Dept'},inplace=True)
print(pd.merge(DATA1,DATA2, on='Dept'))



