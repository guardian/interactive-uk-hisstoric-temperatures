
for i in ./summer-rainfall/*.tiff
do

    INPUT=$i
    SUBSTRING=$(echo $INPUT| cut -d'/' -f 3)
    FILENAME=$(echo $SUBSTRING| cut -d'.' -f 1)

    gdal_translate $i ../../assets/summer-rainfall-img/$FILENAME.png -outsize 450 725

done

for i in ./winter-rainfall/*.tiff
do
    INPUT=$i
    SUBSTRING=$(echo $INPUT| cut -d'/' -f 3)
    FILENAME=$(echo $SUBSTRING| cut -d'.' -f 1)

    gdal_translate $i ../../assets/winter-rainfall-img/$FILENAME.png -outsize 450 725

done