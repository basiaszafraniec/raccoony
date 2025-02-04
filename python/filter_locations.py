import xml.etree.ElementTree as ET

def filter_kml_by_coordinates(input_file, output_file):
    # Parse the input KML file
    tree = ET.parse(input_file)
    root = tree.getroot()

    # Define the bounding box for Denmark
    min_lat, max_lat = 54.5, 57.8
    min_lng, max_lng = 7.9, 12.8

    # Find all Placemark elements
    placemarks = root.findall(".//Placemark")

    # Filter placemarks by coordinates
    denmark_placemarks = []
    for placemark in placemarks:
        coordinates = placemark.find(".//coordinates")
        if coordinates is not None:
            # Extract longitude and latitude from the coordinates
            lng, lat, *_ = map(float, coordinates.text.strip().split(","))
            if min_lat <= lat <= max_lat and min_lng <= lng <= max_lng:
                denmark_placemarks.append(placemark)

    # Create a new KML structure with only Denmark placemarks
    if denmark_placemarks:
        new_kml = ET.Element("kml")
        document = ET.SubElement(new_kml, "Document")
        for placemark in denmark_placemarks:
            document.append(placemark)

        # Write the filtered KML to the output file
        tree = ET.ElementTree(new_kml)
        tree.write(output_file, encoding="utf-8", xml_declaration=True)

# Run the function
filter_kml_by_coordinates("locations.kml", "denmark_locations.kml")
