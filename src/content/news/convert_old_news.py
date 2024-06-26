"""This is a script to convert news from the old website
to news on the... new website (2024+ version). The header format
is notably different, but we can use the filename to infer
the date and tag information."""

import os
import re


def convert_file_format(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()

    # Check if it's old news
    if not content.startswith("title:"):
        return

    # Extract the title using regex
    title_match = re.search(r"title:\s*(.*)", content)
    title = title_match.group(1) if title_match else "Unknown Title"

    # Extract the date from the filename (format: YYYY-MM-DD)
    date = os.path.basename(file_path)[:10]

    # Determine tags based on the filename
    if "C4DM_Seminar" in file_path or "C4DM_seminar" in file_path:
        tags = '["seminars", "events"]'
    elif "C4DM_at_" in file_path:
        tags = '["conferences"]'
    else:
        tags = "[]"

    # Find and remove the img tag, extract the src if present
    img_match = re.search(r'<img src="([^"]+)"', content)
    if img_match:
        image_path = img_match.group(1)
        # Use only the basename of the image path
        image_basename = os.path.basename(image_path)
        # Remove the img tag from the content
        content = re.sub(r'<img src="[^"]+"[^>]*>', "", content, flags=re.DOTALL)
    else:
        image_basename = "placeholder.png"

    # Create the new header
    new_header = f"""---
title: "{title}"
author: "Admin"
date: "{date}"
image: "{image_basename}"
tags: {tags}
---
    """

    # Replace the old header using regex
    new_content = re.sub(r"^.*?---", new_header, content, flags=re.DOTALL)

    # Write the new content back to the file
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(new_content)


def main():
    news_dir = "src/content/news/"
    for filename in os.listdir(news_dir):
        if filename.endswith(".md"):
            convert_file_format(os.path.join(news_dir, filename))


if __name__ == "__main__":
    main()
