# File Manager

A Node.js file manager application that allows users to manage files and folders efficiently. The application provides an intuitive web interface for users to perform the following actions:

## Key Features

1. **Create Folder/Subfolder**: Users can create new folders and subfolders within the file manager system. They should be able to provide the desired folder/subfolder name and click a button to create it. If the folder/subfolder already exists, the application should show an appropriate error message.

2. **Upload File**: Users can upload files to the appropriate folders. They should be able to choose a file from their local machine and specify the destination folder path where the file should be stored. If the specified folder does not exist, the application should display an error message. If no folder path is provided, the file should be uploaded to the root directory.

3. **List Files**: Users can view the list of files within a specified folder. They should enter the folder path and click a button to display the files within that folder. If the specified folder does not exist, the application should show an appropriate error message.

## Project Requirements

1. Using Node.js and Express.js for the server-side implementation.
2. Handeling file uploads using the Multer middleware.

## How to Run Locally

To run the File Manager application on your local environment, follow these steps:

### Prerequisites

- Node.js and npm should be installed on your system. You can download them from the official website: [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository or download the source code.

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. In the root directory open terminal and run this command.

```
node index.js
```

3. Then go to localhost:3000 to see the file manager system.

4. We are not using any db(postgresql/mongodb). In the root directory you can see _uploads_ folder. Everything is stored under that only.
# filemanager
