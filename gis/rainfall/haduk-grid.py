#!/usr/bin/env python
# coding: utf-8

import os
import rasterio
import numpy as np
import pandas as pd

path = "data/raw/haduk-grid/1km/rainfall-seas"
raster_files = sorted(
    [f"{path}/{filename}" for filename in os.listdir(path) if filename[-3:] == ".nc"]
)

print(len(raster_files))
raster_files[0:5]

array = []

for raster_file in raster_files:
    print(raster_file)

    with rasterio.open(raster_file) as raster:

        for band_num in range(raster.count):
            band_array = raster.read(band_num + 1, masked=True)

            band_min = np.min(band_array)
            band_max = np.max(band_array)

            array.extend([band_min, band_max])


df = pd.DataFrame(array, columns=["values"])

df.info()
df.head()

print(df.max())

print(df.min())
