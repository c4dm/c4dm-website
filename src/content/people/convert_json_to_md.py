"""Script to convert old format JSON format for people
to new markdown format, including mapping tags."""

import json
import os


def map_role(old_role):
    """Map old role tags to new ones."""
    role_mapping = {
        "phd": "PhD",
        "acad": "Academic",
        "postdoc": "Postdoc",
        "visitingacad": "Visitor",
        "visitor": "Visitor",
    }
    return role_mapping.get(
        old_role, old_role
    )  # Return the original role if not found in mapping


def convert_json_to_md(json_file, output_dir):
    # Load JSON data
    with open(json_file, "r") as file:
        data = json.load(file)

    # Update role using the mapping
    if "role" in data:
        data["role"] = map_role(data["role"])

    # Prepare Markdown content
    md_content = "---\n"
    for key, value in data.items():
        if isinstance(value, list):
            # Convert list to YAML list format
            list_content = ", ".join([f'"{item}"' for item in value])
            md_content += f"{key}: [{list_content}]\n"
        else:
            md_content += f'{key}: "{value}"\n'
    md_content += 'image: "./defaultprofile.png"\n'
    md_content += "---\n"

    # Define output file name
    base_name = os.path.splitext(os.path.basename(json_file))[0]
    output_file = os.path.join(output_dir, f"{base_name}.md")

    # Write to Markdown file
    with open(output_file, "w") as file:
        file.write(md_content)


def convert_all_jsons_in_dir(input_dir, output_dir):
    # Ensure output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Convert each JSON file in the directory
    for file_name in os.listdir(input_dir):
        if file_name.endswith(".json"):
            json_file_path = os.path.join(input_dir, file_name)
            convert_json_to_md(json_file_path, output_dir)


input_directory = "src/content/people/exmembers"
output_directory = "src/content/people/exmembers"
convert_all_jsons_in_dir(input_directory, output_directory)
