# Internshala Automation

Internshala Automation is a tool designed to automate tasks on the Internshala platform, helping users apply for internships efficiently. It streamlines the application process, reducing manual effort and increasing productivity.

## Features
- ✅ **Automated Internship Applications**: Apply to multiple internships with minimal manual intervention.
- ✅ **Time-Saving**: Reduces the effort needed to find and apply for relevant internships.
- ✅ **Error Handling**: Ensures smooth execution with built-in validations.

## Prerequisites
Ensure you have the following installed on your system:
- **Google Chrome** (latest version)
- **Chromedriver** (compatible with your Chrome version)
- **Node.js** (latest stable version)

## Installation

### 1. Clone the Repository
```sh
git clone https://github.com/saravanan7-dev/Internshala-Automation.git
cd Internshala-Automation
```

### 2. Install Dependencies
```sh
yarn install  # or npm install
```

### 3. Configure Credentials
Create a `.env` file in the project root and add your credentials:
```sh
INTERNSHALA_EMAIL=your_email@example.com
INTERNSHALA_PWD=your_password
```
Alternatively, you can store your credentials in the `config` folder.

## Usage
1. Run the application:
   ```sh
   node index.js
   ```
2. The automation will log in to Internshala and start applying based on the predefined filters.

## Technologies Used
- **JavaScript/Node.js** (for automation)
- **Selenium WebDriver** (for web automation)
- **dotenv** (for managing credentials securely)

## Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests.

### Steps to Contribute:
1. **Fork** the repository.
2. Create a **new branch**:
   ```sh
   git checkout -b feature-branch
   ```
3. Make your changes and commit:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```sh
   git push origin feature-branch
   ```
5. Create a **Pull Request** from your branch to `main`.

## License
This project is licensed under the **MIT License**.

## Disclaimer
This project is intended for educational purposes only. Use it responsibly and ensure compliance with Internshala's terms of service.

## Contact
For questions or suggestions, reach out via [GitHub Issues](https://github.com/saravanan7-dev/Internshala-Automation/issues).
