import csv
import os
import glob
import fileinput
import string
import re

class product(object):
    name = None
    type = None
    description = None
    skin_type = None
    frequency = None


folder = "/Users/Nicole/Documents/FemmeHack/RawData/"
output = "/Users/Nicole/Documents/FemmeHack/Info/"

def extract_info(name):
    input_path = "/Users/Nicole/Documents/FemmeHack/RawData/" + name
    new_name = name.replace("-", " ")
    text_path = "/Users/Nicole/Documents/FemmeHack/Info/" + "Processed " + new_name
    output_file = open(text_path, "w")
    with open(input_path) as f:
        value = []
        seen = False
        for line in f:
            if "Read More" in line:
                seen = True
                output_file.write(new_name + "\n")
                continue
            if seen:
                if line != '\n':
                    output_file.write(line)
            if "Dimensions" in line and seen:
                seen = False
                value = line.split('=')
                break

        if value is not "":
            print value
        else:
            print "Nothing found"


#extract_info("Mario Skin Care")
#extract_info("de Mamiel Botaniques Cleansers")


for filename in os.listdir(folder):
     extract_info(filename)