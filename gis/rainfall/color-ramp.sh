#!/bin/bash

for i in ./tiff/*.tiff
do

    str=$i
    substr="band1"
 
    prefix=${str%%$substr*}
    index=${#prefix}

    INPUT=$i
    SUBSTRING=$(echo $INPUT| cut -d'/' -f 3)
    FILENAME=$(echo $SUBSTRING| cut -d'.' -f 1)

 
        if [[ index -eq ${#str} ]];
        then
            gdaldem color-relief $i color-ramp-summer.txt ./summer-rainfall/$FILENAME-coloured.tiff

        else
            gdaldem color-relief $i color-ramp-winter.txt ./winter-rainfall/$FILENAME-coloured.tiff
        fi

done