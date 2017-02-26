import re

from bs4 import BeautifulSoup
import urllib
import urllib2

# Remove the original html formating of data


def striphtml(data):
    p = re.compile(r'<.*?>')
    return p.sub('', data)


# shortURL contains everything in front of .html

def scrape_general(shortURL, type, productName):
    page = urllib.urlopen(shortURL).read()
    text_path = "/Users/Nicole/Documents/FemmeHack/RawData/" + type + " " + productName + ".txt"
    text_file = open(text_path, "w")
    soup = BeautifulSoup(page, "html.parser")
    content = soup.div.get_text().encode('utf-8').strip()
    text_file.write(content)
    print "Scarping finished " + type + " " + productName + ".txt"


links = "/Users/Nicole/Documents/FemmeHack/link.txt"
with open(links) as f:
    for line in f:
        if line != '\n':
            # find product name from link
            start1 = line.find("shop/") + 5
            end1 = line.find("?")
            # find product type
            start2 = line.find("category=") + 9
            end2 = line.find("&color")
            name = line.__getslice__(start1,end1)
            type = line.__getslice__(start2, end2)
            scrape_general(line, name, type)