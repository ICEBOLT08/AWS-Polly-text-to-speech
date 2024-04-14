# Text-to-Speech with AWS Polly and React.js

This project demonstrates how to implement text-to-speech functionality using AWS Polly service with a React.js application.

## Features

- Convert text to speech using AWS Polly
- Play the generated speech
- Simple and intuitive user interface

## Prerequisites

Before running this project, ensure you have the following installed on your machine:

- Node.js
- npm or yarn
- AWS account with access to Polly service

## Getting Started

Follow these steps to run the application:

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/text-to-speech-aws-polly.git
    ```

2. Navigate to the project directory:

    ```bash
    cd text-to-speech-aws-polly
    ```

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Configuration

1. Set up your AWS credentials:

    Create a `.env` file in the root directory of the project and add your AWS credentials:

    ```env
    REACT_APP_AWS_ACCESS_KEY_ID=your_access_key_id
    REACT_APP_AWS_SECRET_ACCESS_KEY=your_secret_access_key
    REACT_APP_AWS_REGION=your_aws_region
    ```

2. Replace `your_access_key_id`, `your_secret_access_key`, and `your_aws_region` with your actual AWS credentials and region.

### Running the App

1. Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

1. Enter the text you want to convert to speech in the input field.
2. Select the voice and language options.
3. Click the "Convert to Speech" button to generate the speech.
4. Click the "Play" button to listen to the generated speech.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


