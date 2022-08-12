<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis version="3.16.16-Hannover" styleCategories="AllStyleCategories" maxScale="0" hasScaleBasedVisibilityFlag="0" minScale="1e+08">
  <flags>
    <Identifiable>1</Identifiable>
    <Removable>1</Removable>
    <Searchable>1</Searchable>
  </flags>
  <temporal fetchMode="0" enabled="0" mode="0">
    <fixedRange>
      <start></start>
      <end></end>
    </fixedRange>
  </temporal>
  <customproperties>
    <property value="false" key="WMSBackgroundLayer"/>
    <property value="false" key="WMSPublishDataSourceUrl"/>
    <property value="0" key="embeddedWidgets/count"/>
    <property value="Value" key="identify/format"/>
  </customproperties>
  <pipe>
    <provider>
      <resampling zoomedInResamplingMethod="cubic" maxOversampling="2" enabled="false" zoomedOutResamplingMethod="cubic"/>
    </provider>
    <rasterrenderer type="singlebandpseudocolor" opacity="1" nodataColor="" classificationMin="0" band="1" alphaBand="-1" classificationMax="2000">
      <rasterTransparency/>
      <minMaxOrigin>
        <limits>None</limits>
        <extent>WholeRaster</extent>
        <statAccuracy>Estimated</statAccuracy>
        <cumulativeCutLower>0.02</cumulativeCutLower>
        <cumulativeCutUpper>0.98</cumulativeCutUpper>
        <stdDevFactor>2</stdDevFactor>
      </minMaxOrigin>
      <rastershader>
        <colorrampshader labelPrecision="4" minimumValue="0" maximumValue="2000" clip="0" classificationMode="1" colorRampType="INTERPOLATED">
          <colorramp type="gradient" name="[source]">
            <prop v="231,247,255,255" k="color1"/>
            <prop v="0,78,124,255" k="color2"/>
            <prop v="0" k="discrete"/>
            <prop v="gradient" k="rampType"/>
            <prop v="0.2;201,238,255,255:0.4;144,220,255,255:0.6;63,171,235,255:0.8;1,123,187,255" k="stops"/>
          </colorramp>
          <item value="0" label="0.0000" alpha="255" color="#e7f7ff"/>
          <item value="400" label="400.0000" alpha="255" color="#c9eeff"/>
          <item value="800" label="800.0000" alpha="255" color="#90dcff"/>
          <item value="1200" label="1200.0000" alpha="255" color="#3fabeb"/>
          <item value="1600" label="1600.0000" alpha="255" color="#017bbb"/>
          <item value="2000" label="2000.0000" alpha="255" color="#004e7c"/>
        </colorrampshader>
      </rastershader>
    </rasterrenderer>
    <brightnesscontrast contrast="0" gamma="1" brightness="0"/>
    <huesaturation colorizeRed="255" colorizeStrength="100" grayscaleMode="0" colorizeOn="0" colorizeGreen="128" colorizeBlue="128" saturation="0"/>
    <rasterresampler zoomedInResampler="cubic" maxOversampling="2" zoomedOutResampler="cubic"/>
    <resamplingStage>resamplingFilter</resamplingStage>
  </pipe>
  <blendMode>0</blendMode>
</qgis>
