#!/bin/bash

#gdal_translate -of GTiff -b 1 rainfall_hadukgrid_uk_5km_seas_202101-202112.nc 2021-1.tiff


for i in *.nc
do
    echo "$i"

    gdal_translate -of GTiff -b 1 $i $i-1.tiff
    gdal_translate -of GTiff -b 3 $i $i-3.tiff
done
