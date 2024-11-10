# Dogs Glossary of Images

This project utilizes the [Dogs API](https://dog.ceo/) to fetch data on various dog breeds, images, and breed-related information. The application provides endpoints for retrieving dog breeds, searching breeds by characteristics, and displaying random images of dogs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
  - [GET /breeds](#get-breeds)
  - [GET /breeds/:id](#get-breedsid)
  - [GET /images/random](#get-imagesrandom)
  - [GET /search/breed](#get-searchbreed)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/codelikeagirl29/dogs-api.git
   cd dogs-api
   ```

2. Style your project in any way you want to

3. Go check out the [docs](https://dog.ceo/)

### Usage
This API project is designed to provide information on different dog breeds. You can retrieve a list of all dog breeds, fetch random dog images, and get images for specific breeds.

## Endpoints

### GET /breeds/list

Fetches a list of all dog breeds.

- URL: ``/breeds/list``
- Method: ``GET``
- Response:
  - ``200 OK`` - Returns an array of all dog breeds.

```json
{
  "message": ["affenpinscher", "akita", "beagle", "dalmatian"],
  "status": "success"
}
```

### GET /breeds/image/random

Fetches a random dog image.

- URL: ``/breeds/image/random``
- Method: ``GET``
- Response:
  - ``200 OK`` - Returns a random dog image URL.

```json
{
  "message": "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
  "status": "success"
}
```

### GET /breeds/images

Fetches all images for a specific breed.

- URL: ``/breeds/:breed/images``
- Method: ``GET``
- Parameters:
  - ``breed``: The name of the breed
- Response:
  - ``200 OK`` - Returns an array of image URLs for the specified breed.

```json
{
  "message": [
    "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
    "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
  ],
  "status": "success"
}
```

---

### Screenshot

![image](https://res.cloudinary.com/dhw9dl4gm/image/upload/v1731202635/Dog-Glossary-11-09-2024_07_12_PM_fywoe0.png)