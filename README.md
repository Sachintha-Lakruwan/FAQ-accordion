# React Accordion with TypeScript and Tailwind

## Example Solution for FAQ Accordion Challenge on Frontend Mentor

### [Link to the Challenge](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz)

![Accordion Example](image.png)

### Description 📝

An accordion is a UI component that allows content to be expanded or collapsed with a click on the headers. This example demonstrates how to implement an FAQ accordion using React, TypeScript, and Tailwind CSS.

#### Key Features of an Accordion:

1. **Expandable Sections**: Only one section is displayed at a time, while others remain hidden.
2. **Toggle Mechanism**: Users can click headers to expand or collapse content.
3. **Space Efficiency**: Saves screen space by collapsing unused sections.
4. **Interactive**: Enhances user experience by making navigation through content easier.

Accordions are widely used in FAQs, menus, and content-heavy websites to improve readability and organization.

### Implementation Details

- **State Management**: The app keeps track of which section is expanded using a state hook. The index of the expanded section is stored as `active`. When no sections are expanded, `active` is set to -1.
  ```typescript
  const [active, setActive] = useState<number>(-1);
  ```
- **Styling**: Tailwind CSS is used for styling. Given the simplicity of this app, Tailwind CSS is a suitable choice. However, for larger projects, module-based CSS might be more appropriate.
- **TypeScript**: TypeScript ensures type safety, making the code more robust and maintainable. While not necessary for such a small app, it's a good practice for self-improvement.
- **Animations**: Framer Motion is used to create the expand animation, enhancing the visual appeal and user experience.

This project is a small step towards many more to come. Stay tuned for more exciting projects! 😎

## Try This App! 👼

### 1. Clone the Project

1. **Install Git**: Download from [git-scm.com](https://git-scm.com/).
2. **Open VS Code**.
3. **Clone Repository**:
   - Go to `View` -> `Command Palette` or press `Ctrl+Shift+P`.
   - Type `Git: Clone` and select `Git: Clone`.
   - Enter the repository URL (`https://github.com/Sachintha-Lakruwan/FAQ-accordion.git`) and click `Clone`.
   - Choose a local directory to save the repository.
   - Open the cloned repository when prompted.

### 2. Install npm Packages

1. **Install Node.js**: Download from [nodejs.org](https://nodejs.org/).
2. **Install npm Packages**:
   ```sh
   npm install
   ```

### 3. Run the Project

1. **Start the Development Server**:
   ```sh
   npm run dev
   ```
2. **Open in Browser**: Navigate to `http://localhost:5173/` (or specified port).
